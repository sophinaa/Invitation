// Built from a photo of a real envelope, cut into its parts so it can open:
// the body, the letter, the front pocket in front of it, and a two-sided
// flap. Scroll-driven: useCinema positions the flap, seal and letter.
export default function Envelope() {
  return (
    <div className="envelope" aria-hidden="true">
      <img className="envelope__body" src="/assets/envelope-body.webp" alt="" />
      <span className="envelope__letter"></span>
      <img className="envelope__pocket" src="/assets/envelope-pocket.webp" alt="" />
      <img className="envelope__flap-shadow" src="/assets/envelope-flap-out.webp" alt="" />
      <span className="envelope__flap">
        <img className="flap__face flap__face--out" src="/assets/envelope-flap-out.webp" alt="" />
        <img className="flap__face flap__face--in" src="/assets/envelope-flap-in.webp" alt="" />
      </span>
      <img className="seal" src="/assets/seal.png" alt="" />
    </div>
  );
}
