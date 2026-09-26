"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { MATERIALS } from "@/lib/data";

export default function Materials() {
  const [active, setActive] = useState(0);
  const m = MATERIALS[active] ?? MATERIALS[0];

  return (
    <section id="materials" className="materials">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-row">
            <Reveal as="span" line className="rule from-right" />
            <span className="eyebrow">04 · Materials &amp; Craft</span>
            <Reveal as="span" line className="rule from-left" />
          </div>
          <h2>Materials matter</h2>
        </Reveal>

        <div className="mat-grid">
          <Reveal>
            {MATERIALS.map((mat, i) => (
              <button
                key={mat.name}
                className={`matrow${i === active ? " on" : ""}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="name">{mat.name}</span>
                <span className="use">{mat.use}</span>
              </button>
            ))}
          </Reveal>

          <div className="mat-detail">
            <div className="imgwrap mat-frame">
              <Image src={m.src} alt={m.name} fill sizes="(max-width: 900px) 100vw, 55vw" className="cover" />
            </div>
            <h3>{m.name}</h3>
            <p>{m.body}</p>
            <div className="mat-meta">
              <div>
                <div className="k">Application</div>
                <div className="v">{m.use}</div>
              </div>
              <div>
                <div className="k">Source</div>
                <div className="v">{m.source}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
