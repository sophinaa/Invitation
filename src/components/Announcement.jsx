import Reveal from "./Reveal.jsx";

export default function Announcement() {
  return (
    <section className="sheet-section">
      <Reveal className="announce lace-card">
        <p className="bismillah" lang="ar" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        <p className="eyebrow">Announcing the Nikkah of</p>
        <h2 className="names">
          <span>Capt. Muhammad<br />Abdullah Hameed</span>
          <span className="amp">&amp;</span>
          <span>Alizea Maqsud Ahmed</span>
        </h2>
        <p className="date">January 2027</p>
        <p className="date-note">Exact date to follow</p>
      </Reveal>
    </section>
  );
}
