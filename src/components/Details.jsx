import Reveal from "./Reveal.jsx";
import { EVENT } from "../event.js";

export default function Details() {
  return (
    <section className="panel panel--lilies">
      <Reveal className="lace-card lace-card--big details">
        <dl>
          <div><dt>Location:</dt><dd>{EVENT.location}</dd></div>
          <div><dt>Time:</dt><dd>{EVENT.time}</dd></div>
          <div><dt>Contact info:</dt><dd>{EVENT.contact}</dd></div>
        </dl>
      </Reveal>
    </section>
  );
}
