"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IMG } from "@/lib/data";

const LINKS = [
  { href: "#idea", label: "01 The Idea" },
  { href: "#philosophy", label: "02 Philosophy" },
  { href: "#services", label: "03 Services" },
  { href: "#work", label: "04 Work" },
  { href: "#materials", label: "05 Materials" },
  { href: "#about", label: "06 About" },
];

export default function Header() {
  const [progress, setProgress] = useState(0);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      setSolid(window.scrollY > window.innerHeight * 0.82);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${(progress * 100).toFixed(1)}%` }} />
      </div>

      <header className={`site-header${solid ? " solid" : ""}`}>
        <a href="#top" className="logolink" aria-label="Shanvi Constructions — home">
          <Image className="logo-icon" src={IMG.icon} alt="" width={719} height={730} priority />
          <span className="logo-words">
            <Image className="logo-dark" src={IMG.wordmarkDark} alt="" width={1090} height={192} priority />
            <Image className="logo-light" src={IMG.wordmarkLight} alt="" width={1090} height={192} priority />
          </span>
        </a>
        <nav className="site-nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#enquire" className="enq">
          Enquire
        </a>
      </header>
    </>
  );
}
