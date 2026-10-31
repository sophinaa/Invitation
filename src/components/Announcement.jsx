import Reveal from "./Reveal.jsx";

export default function Announcement() {
  return (
    <section className="sheet-section">
      <Reveal className="announce">
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
}
