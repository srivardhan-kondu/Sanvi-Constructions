import ArrowRight from "./ArrowRight";
import Reveal from "./Reveal";
import { SERVICES, type ServiceKey } from "@/lib/data";

const ICONS: Record<ServiceKey, React.ReactNode> = {
  solar: (
    <>
      <circle cx="34" cy="12" r="5" />
      <path d="M34 2v3M34 19v3M24 12h3M41 12h3M27 5l2 2M39 17l2 2M41 5l-2 2" />
      <path d="M6 44l6-18h24l6 18z" />
      <path d="M9 35h30M20 26l-2 18M28 26l2 18" />
    </>
  ),
  automation: (
    <>
      <path d="M6 24L24 9l18 15" />
      <path d="M11 20v22h26V20" />
      <path d="M17 31a10 10 0 0 1 14 0M20 35a5 5 0 0 1 8 0" />
      <circle cx="24" cy="38.5" r="1" />
    </>
  ),
  interiors: (
    <>
      <path d="M8 30v-6a4 4 0 0 1 8 0v4h16v-4a4 4 0 0 1 8 0v6" />
      <path d="M8 30h32v8H8zM11 38v4M37 38v4" />
      <path d="M24 4v6M19 16l5-6 5 6z" />
    </>
  ),
};

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-row">
            <Reveal as="span" line className="rule from-right" />
            <span className="eyebrow">03 · Services</span>
            <Reveal as="span" line className="rule from-left" />
          </div>
          <h2>Beyond the build</h2>
          <p className="body-copy services-lede">
            Everything a finished home needs, handled by the same team and on the same schedule as the structure.
          </p>
        </Reveal>

        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 90} className="service-card">
              <div className="service-top">
                <svg className="service-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  {ICONS[s.key]}
                </svg>
                <span className="service-num">{s.n}</span>
              </div>
              <h3>{s.name}</h3>
              <p>{s.lede}</p>
              <ul>
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a href="#enquire" className="linklift">
                Enquire <ArrowRight color="#8A5E1F" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
