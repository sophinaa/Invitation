import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";

export default function Envelope({ onOpened }) {
  const [opened, setOpened] = useState(false);

  // The open/sealed styles hang off <body>, so mirror state there.
  useEffect(() => {
    if (!opened) return;
    document.body.classList.add("opened");
    const timer = setTimeout(() => {
      document.body.classList.remove("sealed");
      onOpened?.();
    }, 1500);
    return () => clearTimeout(timer);
  }, [opened]);

  return (
    <section className="panel panel--sage" id="mail">
      <div className="lace-frame">
        <Reveal as="h1" className="mail-title">You’ve got mail!</Reveal>
        <button className="envelope" aria-label="Open the invitation" onClick={() => setOpened(true)}>
          <span className="envelope__back"></span>
          <span className="envelope__letter"></span>
          <span className="envelope__pocket"></span>
          <span className="envelope__flap"></span>
          <span className="seal" aria-hidden="true">
            <svg viewBox="0 0 40 40"><path d="M20 8c2 4 2 8 0 12-2-4-2-8 0-12zm0 12c4-1 8 0 11 3-4 1-8 0-11-3zm0 0c-4-1-8 0-11 3 4 1 8 0 11-3zm0 0v12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </span>
        </button>
        <p className="hint">tap to open</p>
      </div>
    </section>
  );
}
