import Reveal from "./Reveal.jsx";

export default function Closing() {
  return (
    <section className="sheet-section">
      <Reveal className="cartouche">
        <svg viewBox="0 0 400 260" preserveAspectRatio="none" aria-hidden="true">
          <path className="cartouche__fill" d="M60 24H160C175 24 185 8 200 8S225 24 240 24H340A36 36 0 0 0 376 60V200A36 36 0 0 0 340 236H240C225 236 215 252 200 252S175 236 160 236H60A36 36 0 0 0 24 200V60A36 36 0 0 0 60 24Z"/>
          <path className="cartouche__line" d="M66 36H162C176 36 186 22 200 22S224 36 238 36H334A30 30 0 0 0 364 66V194A30 30 0 0 0 334 224H238C224 224 214 238 200 238S176 224 162 224H66A30 30 0 0 0 36 194V66A30 30 0 0 0 66 36Z"/>
          <g className="cartouche__curls">
            <path d="M14 46c-8-14 6-28 18-20 8 6 2 16-5 12"/>
            <path d="M386 46c8-14-6-28-18-20-8 6-2 16 5 12"/>
            <path d="M14 214c-8 14 6 28 18 20 8-6 2-16-5-12"/>
            <path d="M386 214c8 14-6 28-18 20-8-6-2-16 5-12"/>
          </g>
        </svg>
        <p>We look forward to<br />seeing you.</p>
      </Reveal>
    </section>
  );
}
