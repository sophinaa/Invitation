import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";

export default function Locket() {
  return (
    <section className="sheet-section">
      <Reveal className="locket">
        <svg className="chain" viewBox="0 0 220 80" aria-hidden="true">
          <path d="M20 78 C30 20 80 4 110 4 C140 4 190 20 200 78" fill="none" stroke="#c9a24a" strokeWidth="2" strokeDasharray="3 2"/>
        </svg>
        <div className="locket__half">
          <Photo src="/assets/photo-1.jpg" />
        </div>
        <div className="locket__hinge"></div>
        <div className="locket__half">
          <Photo src="/assets/photo-2.jpg" />
        </div>
      </Reveal>
      <Reveal className="monogram" aria-label="A and A">
        <span className="m1">A</span>
        <span className="m-amp">&amp;</span>
        <span className="m2">A</span>
      </Reveal>
    </section>
  );
}
