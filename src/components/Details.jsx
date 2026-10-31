import Reveal from "./Reveal.jsx";
import { EVENT } from "../event.js";

export default function Details() {
  return (
    <section className="sheet-section">
      <Reveal className="details lace-card">
        <dl>
          <div><dt>Location:</dt><dd>{EVENT.location}</dd></div>
          <div><dt>Time:</dt><dd>{EVENT.time}</dd></div>
          <div><dt>Contact info:</dt><dd>{EVENT.contact}</dd></div>
        </dl>
      </Reveal>
    </section>
  );
}
