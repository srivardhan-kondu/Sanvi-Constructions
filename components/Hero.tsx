"use client";

import { useEffect, useRef, useState } from "react";
import { IMG, VIDEO } from "@/lib/data";

/** Blueprint line drawing that sketches itself before the footage takes over. */
const LINES = [
  { d: "M420 560 L420 230 L600 150 L600 560", anim: "1.6s ease .25s" },
  { d: "M640 560 L640 200 L790 250 L790 560", anim: "1.6s ease .6s" },
];
const RULES = [
  { x1: 180, y1: 560, x2: 1020, y2: 560, anim: "1.3s ease 1.2s" },
  { x1: 420, y1: 320, x2: 600, y2: 320, anim: "1s ease 1.5s" },
  { x1: 420, y1: 420, x2: 600, y2: 420, anim: "1s ease 1.65s" },
  { x1: 640, y1: 330, x2: 790, y2: 330, anim: "1s ease 1.8s" },
  { x1: 640, y1: 440, x2: 790, y2: 440, anim: "1s ease 1.95s" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // React doesn't reliably render the `muted` attribute, which some browsers (iOS Safari) require
  // for autoplay — set it on the element directly. Respect reduced-motion by leaving the poster up.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  // Subtle mouse parallax on the background footage.
  useEffect(() => {
    let pending = false;
    const onMove = (e: MouseEvent) => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(${Math.round(x * -20)}px,${Math.round(y * -14)}px,0)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-burn">
        <div ref={bgRef} className="hero-bg">
          <video
            ref={videoRef}
            className="hero-video"
            poster={IMG.heroPoster}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={VIDEO.heroMobile} type="video/mp4" media="(max-width: 768px)" />
            <source src={VIDEO.hero} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="hero-shade" />
      <div className="hero-sweep" />

      <svg className="hero-lines" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#E8B463" strokeWidth="1" strokeDasharray="1400">
          {LINES.map((l) => (
            <path key={l.d} d={l.d} style={{ animation: `scDraw ${l.anim} both` }} />
          ))}
          {RULES.map((r) => (
            <line key={`${r.x1}-${r.y1}`} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} style={{ animation: `scDraw ${r.anim} both` }} />
          ))}
          <rect x="596" y="380" width="48" height="180" style={{ animation: "scDraw 1.4s ease 2.2s both" }} />
        </g>
      </svg>

      <div className="hero-grain" />

      <div className="hero-content">
        <div className="hero-tag">
          <span className="dash" />
          <span className="txt">Site 01 · Tirupati, Andhra Pradesh · Under construction</span>
        </div>
        <h1 className="hero-title">
          <span>Built with intent.</span>
          <span className="accent">Made to last.</span>
        </h1>
        <div className="hero-foot">
          <p>
            A residential construction and development practice across Andhra Pradesh and Telangana. Villas,
            residences and gated communities — build on trust, designed for life.
          </p>
          <div className="hero-actions">
            <button className="sound-btn" onClick={() => setMuted((m) => !m)} aria-pressed={!muted}>
              {muted ? "Sound off" : "Sound on"}
            </button>
            <div className="scroll-cue">
              <span>Scroll</span>
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
