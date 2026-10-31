import { useRef } from "react";
import { useCinema } from "./useCinema.js";
import Envelope from "./components/Envelope.jsx";
import Locket from "./components/Locket.jsx";
import DetailCards from "./components/DetailCards.jsx";

// One pinned stage; scrolling through the tall section plays the layers.
export default function App() {
  const ref = useRef(null);
  useCinema(ref);

  return (
    <main className="site-shell">
      <section className="cinema" ref={ref} aria-label="Nikkah invitation">
        <div className="stage">
          <div className="world">
            <div className="sky"></div>
            <div className="shade"></div>
            <header className="site-header">
              <span className="site-logo">Abdullah &amp; Alizea</span>
              <span className="site-date">January 2027</span>
            </header>
            <h1 className="hero-title">Nikkah</h1>
            <Envelope />
            <div className="locket-panel">
              <Locket />
              <p className="monogram">A &amp; A</p>
            </div>
            <div className="water"></div>
          </div>

          <section className="intro-copy" aria-label="Welcome">
            <p>You’ve got mail. Scroll to open your invitation.</p>
            <div className="hero-tags">
              <span>January 2027</span>
              <span>Exact date to follow</span>
            </div>
          </section>

          <section className="story-panel story-panel--names" aria-label="The couple">
            <p className="bismillah" lang="ar" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
            <p className="eyebrow">Announcing the Nikkah of</p>
            <h2>
              Capt. Muhammad Abdullah Hameed
              <span className="amp">&amp;</span>
              Alizea Maqsud Ahmed
            </h2>
            <dl className="facts">
              <div><dt>January</dt><dd>Exact date to follow</dd></div>
              <div><dt>2027</dt><dd>Insha’Allah</dd></div>
            </dl>
          </section>

          <DetailCards />

          <section className="closing" aria-label="Closing">
            <h2>We look forward to seeing you.</h2>
            <p lang="ar" dir="rtl">إن شاء الله</p>
          </section>
        </div>
      </section>
    </main>
  );
}
