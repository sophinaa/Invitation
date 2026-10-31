import { forwardRef } from "react";
import Reveal from "./Reveal.jsx";

const Announcement = forwardRef(function Announcement(props, ref) {
  return (
    <section className="panel panel--lilies" ref={ref}>
      <Reveal className="lace-card announce">
        <p className="bismillah" lang="ar" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        <p className="eyebrow">Announcing the Nikkah of</p>
        <h2 className="names">
          <span>Capt. Muhammad Abdullah Hameed</span>
          <span className="amp">&amp;</span>
          <span>Alizea Maqsud Ahmed</span>
        </h2>
        <p className="eyebrow date">Something of January, Twenty Twenty Seven</p>
      </Reveal>
    </section>
  );
});

export default Announcement;
