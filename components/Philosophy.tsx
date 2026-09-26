"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { IMG, PRINCIPLES } from "@/lib/data";

export default function Philosophy() {
  const [active, setActive] = useState(PRINCIPLES[0].k);
  const current = PRINCIPLES.find((p) => p.k === active) ?? PRINCIPLES[0];

  return (
    <section id="philosophy" className="philosophy">
      <div className="phil-grid">
        <div className="phil-copy">
          <Reveal className="eyebrow-row">
            <Reveal as="span" line className="rule from-left" />
            <span className="eyebrow">02 · Philosophy</span>
          </Reveal>
          <Reveal as="h2">
            Designed around <em>people</em>.
          </Reveal>
          <Reveal as="p" delay={70} className="phil-text" style={{ marginTop: 24 }}>
            The heart of our practice is the well-being of the people who will live in a home, in relation to their
            surroundings. Light, air, and the way a space is actually used come first — the structure, the services and
            the technical detail are all there to serve that.
          </Reveal>
          <Reveal as="p" delay={120} className="phil-text" style={{ marginTop: 18 }}>
            Pick a principle — each one is a decision we make on every project.
          </Reveal>

          <Reveal delay={170} className="chips" role="group" aria-label="Design principles">
            {PRINCIPLES.map((p) => (
              <button
                key={p.k}
                className={`chip${p.k === active ? " on" : ""}`}
                aria-pressed={p.k === active}
                onClick={() => setActive(p.k)}
              >
                {p.name}
              </button>
            ))}
          </Reveal>

          <div className="phil-detail" aria-live="polite">
            <div className="label">
              {current.n} · {current.name}
            </div>
            <p>{current.body}</p>
          </div>

          <Reveal as="a" delay={210} href="#enquire" className="btn btn-line dark">
            Know more about us
          </Reveal>
        </div>

        <div className="imgwrap phil-image">
          <Image src={IMG.philosophy} alt="A Shanvi residence at dusk" fill sizes="(max-width: 900px) 100vw, 50vw" className="cover kb" />
        </div>
      </div>
    </section>
  );
}
