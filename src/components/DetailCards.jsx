import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { EVENT } from "../event.js";

const TBA = "To be announced";

function detailItems() {
  const daysLeft = Math.max(0, Math.ceil((EVENT.date - Date.now()) / 86400000));
  return [
    { kicker: "Date", title: EVENT.dateText, note: `${EVENT.day} · ${daysLeft} days to go, insha’Allah.` },
    { kicker: "Time", title: EVENT.time, note: `${EVENT.day}, ${EVENT.dateText}` },
    { kicker: "Location", title: EVENT.area, note: EVENT.address },
    {
      kicker: "Contact",
      title: EVENT.contact,
      note: EVENT.contact === TBA ? "We’ll update this once it’s confirmed." : "",
    },
  ];
}

// An endless card row: three copies of the cards, starting in the middle
// copy. After a slide lands in an outer copy it jumps (without animating)
// to the same card in the middle, so it can keep going either way.
export default function DetailCards() {
  const items = detailItems();
  const count = items.length;
  const trackRef = useRef(null);
  const [active, setActive] = useState(count);
  const [step, setStep] = useState(0);
  const [jumping, setJumping] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const gap = parseFloat(getComputedStyle(track).columnGap || "0");
      setStep(track.children[0].offsetWidth + gap);
    };
    measure();
    addEventListener("resize", measure);
    return () => removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!jumping) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setJumping(false));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [jumping]);

  function jumpTo(index) {
    setJumping(true);
    setActive(index);
  }

  function normalize(e) {
    if (e.target !== e.currentTarget) return;
    if (active >= count * 2) jumpTo(active - count);
    else if (active < count) jumpTo(active + count);
  }

  return (
    <>
      <section className="cards" aria-label="Invitation details">
        <div
          ref={trackRef}
          className={`cards-track${jumping ? " is-jumping" : ""}`}
          style={{ "--shift": `${-step * active}px` }}
          onTransitionEnd={normalize}
        >
          {[0, 1, 2].flatMap((set) =>
            items.map((item, i) => {
              const index = set * count + i;
              return (
                <article
                  key={index}
                  className={`detail-card${index === active ? " is-active" : ""}`}
                  aria-hidden={set !== 1}
                  tabIndex={set === 1 ? 0 : -1}
                  role="button"
                  aria-label={`Show ${item.kicker.toLowerCase()}`}
                  onClick={() => setActive(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(index);
                    }
                  }}
                >
                  <span className="detail-kicker">{item.kicker}</span>
                  <h3>{item.title}</h3>
                  {item.note && <p>{item.note}</p>}
                </article>
              );
            })
          )}
        </div>
      </section>
      <div className="cards-controls" aria-label="Detail controls">
        <button className="card-nav" aria-label="Previous detail" onClick={() => setActive((a) => a - 1)}>←</button>
        <button className="card-nav" aria-label="Next detail" onClick={() => setActive((a) => a + 1)}>→</button>
      </div>
    </>
  );
}
