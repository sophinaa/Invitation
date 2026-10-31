import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";

// How long the opening and spill take before the page can scroll.
const SPILL_MS = 2400;

// Keepsakes that tumble out of the envelope. x/y are where each lands,
// measured in envelope widths from its centre; d staggers the spill.
const spill = (x, y, r, d) => ({ "--x": x, "--y": y, "--r": `${r}deg`, "--d": `${d}s` });

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  // The open/sealed styles hang off <body>, so mirror state there.
  useEffect(() => {
    if (!opened) return;
    document.body.classList.add("opened");
    const timer = setTimeout(() => document.body.classList.remove("sealed"), SPILL_MS);
    return () => clearTimeout(timer);
  }, [opened]);

  return (
    <section className="panel" id="mail">
      <div className="lace-frame">
        <Reveal as="h1" className="mail-title">You’ve got mail!</Reveal>
        <button className="envelope" aria-label="Open the invitation" onClick={() => setOpened(true)}>
          <span className="envelope__back"></span>
          <span className="envelope__letter"></span>

          <span className="spill spill--scroll" style={spill(-0.06, -0.6, -3, 0.5)}></span>
          <span className="spill spill--photo" style={spill(0.33, -0.27, 8, 0.62)}>
            <Photo src="/assets/photo-1.jpg" />
          </span>
          <span className="spill spill--card" style={spill(-0.46, 0.1, -6, 0.7)}>
            <small>Save the date</small>
            <em>January</em>
            <small>2027</small>
          </span>
          <span className="spill spill--note" style={spill(0.42, 0.2, 4, 0.82)}>
            <em>A &amp; A</em>
          </span>

          <span className="envelope__pocket"></span>
          <span className="envelope__flap">
            <span className="flap__face flap__face--out"></span>
            <span className="flap__face flap__face--in"></span>
          </span>
          <span className="seal" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none" strokeWidth="1.1" strokeLinecap="round">
              {["emboss-dark", "emboss-light"].map((tone) => (
                <g key={tone} className={tone}>
                  <path d="M20 33C19 25 20 16 23 7" />
                  <path d="M20.4 27c-3-1-5-3-5.6-6 3 .4 5 2.4 5.6 6zM20.2 22c-2.6-1.4-4-3.6-4.2-6.4 2.8.8 4.2 3 4.2 6.4zM20.8 24c2.8-1.2 4.6-3.4 5-6.2-2.8.6-4.6 2.8-5 6.2zM21.6 17.6c2.4-1.4 3.8-3.6 4-6.2-2.6.8-4 3-4 6.2zM22.6 11.4c-1.8-1.2-2.6-3-2.6-5 2 .8 2.8 2.6 2.6 5z" />
                </g>
              ))}
            </svg>
          </span>
        </button>
        <div className="hints">
          <p className="hint hint--tap">tap to open</p>
          <p className="hint hint--scroll">scroll</p>
        </div>
      </div>
    </section>
  );
}
