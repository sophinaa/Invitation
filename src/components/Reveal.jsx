import { useEffect, useRef, useState } from "react";

// Fades its content in the first time it scrolls into view.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} reveal${inView ? " in" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
