import Image from "next/image";
import Reveal from "./Reveal";
import { TEAM } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-row">
            <Reveal as="span" line className="rule from-right" />
            <span className="eyebrow">06 · About</span>
            <Reveal as="span" line className="rule from-left" />
          </div>
          <h2>The people behind Shanvi</h2>
        </Reveal>

        <div className="team-grid">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="team-card">
              <div className="team-photo">
                {p.photo ? (
                  <Image src={p.photo} alt={p.name} fill sizes="(max-width: 700px) 100vw, 360px" className="cover" />
                ) : (
                  <span aria-hidden="true">{p.initials}</span>
                )}
              </div>
              <h3>{p.name}</h3>
              <div className="team-role">{p.role}</div>
              <a href={`tel:+91${p.phone}`} className="team-phone">
                +91 {p.phone}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
