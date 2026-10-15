"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const email = "Pranavsharmapb19@gmail.com";

const projects = [
  {
    index: "01",
    name: "Everyday, elevated.",
    brand: "DTC · HOME & OBJECTS",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1600&q=85",
    alt: "Sculptural home objects arranged in warm, natural light",
    challenge:
      "Good-looking creative was earning attention, but the paid funnel was leaking intent before checkout.",
    solution:
      "Rebuilt campaign structure around customer intent, then paired weekly creative tests with a cleaner landing-page journey.",
    metrics: [
      ["+68%", "revenue from paid"],
      ["−31%", "cost per acquisition"],
    ],
    className: "project-tall",
  },
  {
    index: "02",
    name: "Make complexity clear.",
    brand: "B2B · SOFTWARE",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    alt: "Analytics charts on a laptop in a bright modern workspace",
    challenge:
      "A crowded category and broad messaging made it difficult for the right prospects to find a reason to act.",
    solution:
      "Mapped high-intent search themes to focused pages and connected campaign reporting to qualified pipeline.",
    metrics: [
      ["2.4×", "qualified demos"],
      ["−42%", "cost per lead"],
    ],
    className: "",
  },
  {
    index: "03",
    name: "A healthier habit.",
    brand: "WELLNESS · CONSUMER",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
    alt: "Quiet wellness studio with warm neutral light",
    challenge:
      "A new offer needed to stand out without leaning on discounting or short-lived acquisition spikes.",
    solution:
      "Built a message system around real customer motivations, then aligned lifecycle email with paid social.",
    metrics: [
      ["+53%", "email-attributed sales"],
      ["3.8×", "blended return"],
    ],
    className: "",
  },
];

const expertise = [
  {
    number: "01",
    title: "Paid media",
    detail: "Meta, Google & campaign systems built to learn before they scale.",
  },
  {
    number: "02",
    title: "Search & content",
    detail: "SEO strategy rooted in intent, useful ideas and compounding demand.",
  },
  {
    number: "03",
    title: "Growth analytics",
    detail: "Measurement that turns channel signals into confident next moves.",
  },
  {
    number: "04",
    title: "Brand architecture",
    detail: "Positioning and messaging that make the value instantly clearer.",
  },
  {
    number: "05",
    title: "Email & CRM",
    detail: "Lifecycle journeys that make more of the attention you already earned.",
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Pranav Sharma, home">
          PS<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <nav
          className={`site-nav${menuOpen ? " site-nav-open" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner page-width">
          <div className="hero-topline">
            <span className="availability"><i /> AVAILABLE FOR SELECT PROJECTS</span>
            <span className="eyebrow">INDEPENDENT DIGITAL MARKETER · INDIA / EVERYWHERE</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="overline">GROWTH, WITH A POINT OF VIEW.</p>
                <h1>
                  Make growth
                  <br />
                  <span>mean more.</span>
                </h1>
                <p className="hero-description">
                  I build digital growth systems where performance meets a
                  stronger story — turning the right attention into lasting
                  momentum.
                </p>
                <div className="hero-cta-row">
                  <a className="button button-light" href="#work">
                    Explore selected work <span aria-hidden="true">↘</span>
                  </a>
                  <span className="hero-note">STRATEGY FIRST. SIGNAL ALWAYS.</span>
                </div>
              </Reveal>
            </div>
            <Reveal className="hero-image-wrap" delay={0.13}>
              <div className="hero-image" role="img" aria-label="Sunlit sculptural interior with a warm, editorial feel" />
              <div className="hero-image-caption">
                <span>THE LONG GAME, WELL PLAYED.</span>
                <span>01 — 03</span>
              </div>
              <div className="hero-stamp" aria-hidden="true">
                <span>GOOD</span>
                <span>GROWTH</span>
                <span>IS A</span>
                <span>CHOICE ↗</span>
              </div>
            </Reveal>
          </div>
          <a className="scroll-cue" href="#impact">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="impact" id="impact" aria-label="Portfolio snapshot">
        <div className="impact-inner page-width">
          <div className="impact-label">
            <span>01 / THE IMPACT</span>
            <span>ILLUSTRATIVE SNAPSHOT*</span>
          </div>
          <div className="impact-metrics">
            <div><strong>$2.8M<span>+</span></strong><small>MEDIA SPEND OPTIMIZED</small></div>
            <div><strong>3.6<span>×</span></strong><small>BLENDED RETURN</small></div>
            <div><strong>−34<span>%</span></strong><small>AVERAGE CAC</small></div>
            <div><strong>18<span>M</span></strong><small>ORGANIC IMPRESSIONS</small></div>
          </div>
          <p className="metrics-note">
            *Sample figures for layout demonstration; replace with verified results before publishing.
          </p>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-width">
          <Reveal className="section-heading">
            <p className="overline">02 / SELECTED CASE STUDIES</p>
            <div className="heading-row">
              <h2>
                Less noise.
                <br />
                <em>More signal.</em>
              </h2>
              <p>
                The strongest growth doesn&apos;t come from doing more. It
                comes from making every move work harder.
              </p>
            </div>
          </Reveal>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal
                key={project.index}
                className={`project ${project.className}`}
                delay={index * 0.08}
              >
                <div className="project-visual">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-index">{project.index} / 03</span>
                  <span className="project-brand">{project.brand}</span>
                </div>
                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="project-strategy">
                    <div>
                      <span className="micro-label">THE CHALLENGE</span>
                      <p>{project.challenge}</p>
                    </div>
                    <div>
                      <span className="micro-label">THE STRATEGY</span>
                      <p>{project.solution}</p>
                    </div>
                  </div>
                  <div className="project-metrics">
                    {project.metrics.map(([value, label]) => (
                      <div key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="case-disclaimer">
            Illustrative, anonymized campaign examples. Results are not a
            guarantee and should be replaced with substantiated client work.
          </p>
        </div>
      </section>

      <section className="expertise-section section-pad" id="expertise">
        <div className="page-width expertise-layout">
          <Reveal className="expertise-intro">
            <p className="overline">03 / THE TOOLKIT</p>
            <h2>
              One clear
              <br />
              <em>direction.</em>
              <br />
              Every lever.
            </h2>
            <p>
              Joined-up thinking across the channels that shape how people
              discover, trust and choose a brand.
            </p>
          </Reveal>
          <div className="expertise-list">
            {expertise.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <article className="expertise-item">
                  <span className="expertise-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span className="expertise-arrow" aria-hidden="true">↗</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section section-pad" id="approach">
        <div className="page-width">
          <Reveal className="approach-heading">
            <p className="overline">04 / HOW I WORK</p>
            <h2>Good partnerships are built on <em>clarity.</em></h2>
          </Reveal>
          <div className="approach-grid">
            <Reveal>
              <span>01</span>
              <h3>Start with the real problem.</h3>
              <p>Shared goals, clean baselines and the context behind the numbers — before a channel plan.</p>
            </Reveal>
            <Reveal delay={0.08}>
              <span>02</span>
              <h3>Make every test teach.</h3>
              <p>Creative and channel experiments designed to surface useful learning, not just activity.</p>
            </Reveal>
            <Reveal delay={0.16}>
              <span>03</span>
              <h3>Build for what lasts.</h3>
              <p>Clear reporting and repeatable systems that keep working after the first win.</p>
            </Reveal>
          </div>
          <p className="social-proof-note">
            Thoughtful collaboration. Transparent reporting. References available on request.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner page-width">
          <Reveal>
            <p className="overline">05 / YOUR NEXT MOVE</p>
            <h2>
              Let&apos;s scale
              <br />
              <em>your brand.</em>
            </h2>
            <p className="contact-description">
              Have a growth challenge worth getting into? I&apos;d like to hear
              what you&apos;re building.
            </p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${email}`}>
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
              <button className="copy-button" type="button" onClick={copyEmail}>
                {copied ? "EMAIL COPIED ✓" : `${email} ⧉`}
              </button>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/pranav-sharma-03824a407" target="_blank" rel="noreferrer">
                LINKEDIN <span aria-hidden="true">↗</span>
              </a>
              <a href={`mailto:${email}`}>EMAIL <span aria-hidden="true">↗</span></a>
            </div>
          </Reveal>
          <div className="contact-mark" aria-hidden="true">P<span>.</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="wordmark" href="#home">PS<span>.</span></a>
          <span>INDEPENDENT BY DESIGN. GROWTH BY INTENTION.</span>
          <span>© {new Date().getFullYear()} PRANAV SHARMA</span>
        </div>
      </footer>
    </main>
  );
}
