"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Transition delay in ms once the element enters the viewport. */
  delay?: number;
  /** Horizontal rule that scales in instead of fading up. */
  line?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Fades/slides an element in the first time it scrolls into view. */
export default function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  line = false,
  className,
  style,
  ...rest
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.14 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [line ? "rv-line" : "rv", shown && "in", className].filter(Boolean).join(" ");
  const merged: CSSProperties = { ...(style as CSSProperties), transitionDelay: `${delay}ms` };

  return createElement(as ?? "div", { ...rest, ref, className: classes, style: merged });
}
