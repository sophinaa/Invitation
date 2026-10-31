// The paper scroll that comes out of the envelope. The bottom roller is
// sticky, so it sits at the bottom of the screen and the paper "unrolls"
// above it as you scroll, until it comes to rest at the end of the sheet.
export default function Scroll({ children }) {
  return (
    <section className="stage">
      <div className="scroll">
        <div className="scroll__roll scroll__roll--top" aria-hidden="true"></div>
        <div className="scroll__paper">
          {children}
        </div>
        <div className="scroll__roll scroll__roll--bottom" aria-hidden="true"></div>
      </div>
    </section>
  );
}
