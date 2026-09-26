"use client";

import Image from "next/image";
import { useState } from "react";
import ArrowRight from "./ArrowRight";
import Reveal from "./Reveal";
import { PROJECTS, type Phase } from "@/lib/data";

type Filter = "all" | Phase;

const FILTERS: [Filter, string][] = [
  ["all", "All"],
  ["ongoing", "Ongoing"],
  ["completed", "Completed"],
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [sel, setSel] = useState(0);

  const list = PROJECTS.filter((p) => filter === "all" || p.phase === filter);
  const count = Math.max(1, list.length);
  const idx = Math.min(sel, count - 1);
  const proj = list[idx] ?? PROJECTS[0];
  const multi = list.length > 1;

  const step = (dir: 1 | -1) => setSel((idx + dir + list.length) % list.length);

  return (
    <section id="work" className="work">
      <div className="container">
        <Reveal className="work-head">
          <h2>Our Projects</h2>
          <div className="filters" role="tablist">
            {FILTERS.map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={filter === key}
                className={`filtertab${filter === key ? " on" : ""}`}
                onClick={() => {
                  setFilter(key);
                  setSel(0);
                }}
              >
                {label}
                <span className="u" />
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal line className="work-rule" />

        <div className="proj-grid">
          <div className="imgwrap proj-media">
            <Image key={proj.name} src={proj.src} alt={proj.name} fill sizes="(max-width: 900px) 100vw, 60vw" className="cover" />
            <span className="proj-cat">{proj.cat}</span>
            <div className="proj-caption">
              <div className="status">{proj.status}</div>
              <div className="name">{proj.name}</div>
            </div>
          </div>

          <div className="proj-info">
            <div className="proj-city">{proj.city}</div>
            <p className="proj-concept">{proj.concept}</p>
            <div className="proj-rows">
              {proj.rows.map(([k, v]) => (
                <div key={k} className="proj-row">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
            <a href="#enquire" className="linklift">
              Request the project record <ArrowRight color="#E8B463" />
            </a>
          </div>
        </div>

        <div className="proj-nav">
          <span className="proj-count">
            {pad(idx + 1)} / {pad(list.length)}
          </span>
          <div className="proj-track">
            <div style={{ width: `${(((idx + 1) / count) * 100).toFixed(0)}%` }} />
          </div>
          <div className="proj-arrows">
            <button className="arrowbtn" aria-label="Previous project" disabled={!multi} onClick={() => step(-1)}>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                <path d="M20 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
            <button className="arrowbtn" aria-label="Next project" disabled={!multi} onClick={() => step(1)}>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                <path d="M0 5h19M15 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
