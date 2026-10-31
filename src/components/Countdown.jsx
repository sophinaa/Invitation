import { Fragment, useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { EVENT } from "../event.js";

const pad = (n) => String(n).padStart(2, "0");

function timeLeft() {
  const s = Math.floor(Math.max(0, EVENT.date - Date.now()) / 1000);
  return [
    ["Days", Math.floor(s / 86400)],
    ["Hours", Math.floor((s % 86400) / 3600)],
    ["Minutes", Math.floor((s % 3600) / 60)],
    ["Seconds", s % 60],
  ];
}

export default function Countdown() {
  const [units, setUnits] = useState(timeLeft);

  useEffect(() => {
    const id = setInterval(() => setUnits(timeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="panel panel--sage panel--footer">
      <Reveal className="countdown">
        {units.map(([label, value], i) => (
          <Fragment key={label}>
            {i > 0 && <b>:</b>}
            <div><span>{pad(value)}</span><small>{label}</small></div>
          </Fragment>
        ))}
      </Reveal>
      <p className="inshallah" lang="ar" dir="rtl">إن شاء الله</p>
    </section>
  );
}
