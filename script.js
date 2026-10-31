// ---- Edit the event details here ----
const EVENT = {
  // Countdown target (local time). Placeholder until the date is confirmed.
  date: new Date("2027-01-08T19:00:00"),
  location: "To be announced",
  time: "To be announced",
  contact: "To be announced",
};

document.getElementById("location").textContent = EVENT.location;
document.getElementById("time").textContent = EVENT.time;
document.getElementById("contact").textContent = EVENT.contact;

// ---- Envelope ----
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
  if (document.body.classList.contains("opened")) return;
  document.body.classList.add("opened");
  setTimeout(() => {
    document.body.classList.remove("sealed");
    document.querySelector("#mail").nextElementSibling.scrollIntoView({ behavior: "smooth" });
  }, 1500);
});

// ---- Reveal on scroll ----
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---- Countdown ----
const units = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]'),
};
const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const diff = Math.max(0, EVENT.date - Date.now());
  const s = Math.floor(diff / 1000);
  units.days.textContent = pad(Math.floor(s / 86400));
  units.hours.textContent = pad(Math.floor((s % 86400) / 3600));
  units.minutes.textContent = pad(Math.floor((s % 3600) / 60));
  units.seconds.textContent = pad(s % 60);
}
tick();
setInterval(tick, 1000);
