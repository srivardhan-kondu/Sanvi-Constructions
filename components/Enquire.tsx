import Image from "next/image";
import Reveal from "./Reveal";
import { IMG } from "@/lib/data";

export default function Enquire() {
  return (
    <section id="enquire" className="enquire">
      <div className="enquire-arch" />
      <div className="enquire-glow" />
      <div className="enquire-inner">
        <Reveal className="eyebrow-row">
          <Reveal as="span" line className="rule from-right" />
          <span className="eyebrow">A private viewing</span>
          <Reveal as="span" line className="rule from-left" />
        </Reveal>
        <Reveal as="h2" delay={60}>
          Book a private viewing
        </Reveal>
        <Reveal as="p" delay={110} className="enquire-lede">
          See a completed home, walk an active site, or talk a plan through with the people building it — build on
          trust, designed for life.
        </Reveal>
        <Reveal delay={160} className="enquire-ctas">
          <a href="#top" className="btn btn-gold">
            Request a viewing
          </a>
          <a href="#top" className="btn btn-line dark">
            Download brochure
          </a>
        </Reveal>
        <Reveal delay={210} className="enquire-foot">
          <Image src={IMG.logoLight} alt="Shanvi Constructions" width={1254} height={1254} />
          <div className="cities">Hyderabad · Visakhapatnam · Tirupati</div>
          <div className="rera">RERA registration — to be confirmed</div>
        </Reveal>
      </div>
    </section>
  );
}
