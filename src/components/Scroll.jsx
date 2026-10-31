// A single lace-edged sheet holds the entire invitation in reading order.
export default function Scroll({ children }) {
  return (
    <section className="stage" id="invitation" aria-label="Nikkah invitation">
      <div className="scroll">{children}</div>
    </section>
  );
}
