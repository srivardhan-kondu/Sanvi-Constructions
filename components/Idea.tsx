import Image from "next/image";
import ArrowRight from "./ArrowRight";
import Reveal from "./Reveal";
import { IMG, STAGES } from "@/lib/data";

export default function Idea() {
  return (
    <section id="idea" className="idea">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-row">
            <Reveal as="span" line className="rule from-right" />
            <span className="eyebrow">01 · The Idea</span>
            <Reveal as="span" line className="rule from-left" />
          </div>
          <h2>Every structure begins with an idea</h2>
        </Reveal>

        <div className="idea-grid">
          <Reveal>
            <p className="body-copy">
              Before a wall is poured or a line is drawn, we sit down with the family — how they want to live, what
              they can spend, and which rooms they will actually use. That conversation is the real foundation.
              Everything after it is craft: a considered balance of art and engineering, made to sit well on its site
              and to age gracefully.
            </p>
            <p className="body-copy">
              We build across Andhra Pradesh and Telangana — villas, residences and gated communities — and take a
              project from that first sketch through to a set of keys.
            </p>
            <a href="#work" className="linklift">
              See our work
              <ArrowRight color="#8A5E1F" />
            </a>
          </Reveal>
          <Reveal delay={120} className="imgwrap arch-frame">
            <Image src={IMG.idea} alt="A Shanvi residence" fill sizes="(max-width: 900px) 100vw, 460px" className="cover kb" />
          </Reveal>
        </div>

        <div className="stages">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 80} className="stage">
              <div className="num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
