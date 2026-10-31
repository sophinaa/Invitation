// Scroll-driven: the flap, seal and letter are positioned by useCinema.
export default function Envelope() {
  return (
    <div className="envelope" aria-hidden="true">
      <span className="envelope__back"></span>
      <span className="envelope__letter"></span>
      <span className="envelope__pocket"></span>
      <span className="envelope__flap-shadow"></span>
      <span className="envelope__flap">
        <span className="flap__face flap__face--out"></span>
        <span className="flap__face flap__face--in"></span>
      </span>
      <span className="seal">
        <svg viewBox="0 0 40 40" fill="none" strokeWidth="1.1" strokeLinecap="round">
          {["emboss-dark", "emboss-light"].map((tone) => (
            <g key={tone} className={tone}>
              <path d="M20 33C19 25 20 16 23 7" />
              <path d="M20.4 27c-3-1-5-3-5.6-6 3 .4 5 2.4 5.6 6zM20.2 22c-2.6-1.4-4-3.6-4.2-6.4 2.8.8 4.2 3 4.2 6.4zM20.8 24c2.8-1.2 4.6-3.4 5-6.2-2.8.6-4.6 2.8-5 6.2zM21.6 17.6c2.4-1.4 3.8-3.6 4-6.2-2.6.8-4 3-4 6.2zM22.6 11.4c-1.8-1.2-2.6-3-2.6-5 2 .8 2.8 2.6 2.6 5z" />
            </g>
          ))}
        </svg>
      </span>
    </div>
  );
}
