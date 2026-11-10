import { useEffect } from "react";

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (e0, e1, v) => {
  const x = clamp((v - e0) / (e1 - e0));
  return x * x * (3 - 2 * x);
};
// Fades in between a→b and out between c→d.
const segment = (s, a, b, c, d) => {
  const enter = smoothstep(a, b, s);
  const exit = smoothstep(c, d, s);
  return { enter, exit, active: enter * (1 - exit) };
};

// Drives the pinned stage: reads how far the section has scrolled, eases
// toward it, and writes every layer's position as CSS variables on the
// section. All the choreography lives in the numbers below (scroll px).
export function useCinema(ref) {
  useEffect(() => {
    const section = ref.current;
    const controls = section.querySelector(".cards-controls");
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const set = (name, value) => section.style.setProperty(name, value);

    let target = 0, smooth = 0, initialized = false, raf = 0;
    let mx = 0, my = 0, targetMx = 0, targetMy = 0;

    function update() {
      raf = 0;
      const still = reduceMotion.matches;
      target = clamp(-section.getBoundingClientRect().top, 0, section.offsetHeight - innerHeight);
      smooth = !initialized || still ? target : lerp(smooth, target, 0.14);
      initialized = true;
      if (Math.abs(smooth - target) < 0.08) smooth = target;
      mx = still ? targetMx : lerp(mx, targetMx, 0.12);
      my = still ? targetMy : lerp(my, targetMy, 0.12);
      const px = still ? 0 : mx;
      const py = still ? 0 : my;
      const s = smooth;

      const intro = smoothstep(90, 650, s);
      const open = smoothstep(120, 640, s);
      const letter = smoothstep(420, 900, s);
      const launch = smoothstep(820, 1380, s);
      const sink = Math.pow(smoothstep(700, 1350, s), 1.5);
      const names = segment(s, 1000, 1280, 1580, 1820);
      const locket = segment(s, 1880, 2220, 2620, 2880);
      const cards = Math.pow(smoothstep(2860, 3500, s), 1.55);
      const cardsControls = smoothstep(3300, 3600, s);
      const progress = clamp(s / 2900);
      const blur = launch * (1 - smoothstep(2620, 2880, s));
      const panelY = (seg) => `calc(-50% + ${-seg.exit * 86 + (1 - seg.enter) * 58}px)`;

      set("--sky-x", `${px * -12}px`);
      set("--sky-y", `${py * -6}px`);
      set("--sky-scale", (1.04 + progress * 0.12).toFixed(4));
      set("--blur", `${(blur * 12).toFixed(2)}px`);
      set("--dim", (1 - blur * 0.22).toFixed(4));
      set("--shade", blur.toFixed(4));

      set("--title-y", `${intro * -210}px`);
      set("--title-scale", (1 - intro * 0.08).toFixed(4));
      set("--title-opacity", (1 - intro).toFixed(4));

      set("--flap", `${open * 180}deg`);
      set("--flap-z", open > 0.5 ? "1" : "4");
      set("--flap-shadow", (1 - clamp(open * 3)).toFixed(4));
      set("--seal-opacity", (1 - smoothstep(120, 300, s)).toFixed(4));
      set("--seal-y", `${smoothstep(120, 420, s) * 40}px`);
      set("--letter-y", `${letter * -52}%`);
      set("--env-x", `calc(-50% + ${px * 18}px)`);
      set("--env-y", `${py * 8 - launch * innerHeight * 0.95}px`);
      set("--env-scale", (1 + intro * 0.08 + launch * 0.5).toFixed(4));
      set("--env-opacity", (1 - smoothstep(1150, 1380, s)).toFixed(4));

      set("--water-x", `calc(-50% + ${px * 22}px)`);
      set("--water-y", `${py * 10 + sink * innerHeight * 0.5}px`);
      set("--water-scale", (1 + sink * 0.25).toFixed(4));

      set("--names-opacity", names.active.toFixed(4));
      set("--names-y", panelY(names));
      set("--locket-opacity", locket.active.toFixed(4));
      set("--locket-y", panelY(locket));
      set("--locket-scale", (0.94 + locket.enter * 0.06).toFixed(4));

      set("--cards-x", `${(1 - cards) * 420}vw`);
      set("--cards-visibility", cards > 0.01 ? "visible" : "hidden");
      set("--controls-opacity", cardsControls.toFixed(4));
      set("--closing-opacity", cardsControls.toFixed(4));
      controls?.classList.toggle("is-ready", cardsControls > 0.98);

      if (
        Math.abs(smooth - target) > 0.08 ||
        Math.abs(mx - targetMx) > 0.001 ||
        Math.abs(my - targetMy) > 0.001
      ) tick();
    }

    function tick() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    function onPointer(e) {
      targetMx = e.clientX / innerWidth - 0.5;
      targetMy = e.clientY / innerHeight - 0.5;
      tick();
    }

    addEventListener("scroll", tick, { passive: true });
    addEventListener("resize", tick);
    addEventListener("pointermove", onPointer, { passive: true });
    tick();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", tick);
      removeEventListener("resize", tick);
      removeEventListener("pointermove", onPointer);
    };
  }, [ref]);
}
