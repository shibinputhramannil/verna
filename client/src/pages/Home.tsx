import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  ["01", "STRATEGY & TRANSFORMATION", "Make the important decisions visible — and make them stick."],
  ["02", "DIGITAL OPERATIONS", "Faster, clearer systems for the work that keeps the business moving."],
  ["03", "TECHNOLOGY DELIVERY", "From product direction to shipped software, without the theatre."],
  ["04", "OPERATING MODEL", "Align teams, incentives, and rituals around the outcomes that matter."],
  ["05", "EXECUTIVE ADVISORY", "An experienced perspective when the next move carries weight."],
];

const steps = [
  ["01", "SEE THE SYSTEM", "We get close to the facts, the friction, and the people who live with both."],
  ["02", "FIND THE LEVER", "We identify the few moves that can change the trajectory — then make the trade-offs explicit."],
  ["03", "MAKE IT REAL", "We work beside your team until the strategy is visible in decisions, delivery, and behaviour."],
];

const cases = [
  ["OPERATING MODEL", "Global logistics group", "One connected network", "22% faster planning cycles", "/case-operating-model.jpg"],
  ["PRODUCT DELIVERY", "Series C software company", "A portfolio built for the next stage", "3× release confidence", "/case-product-delivery.jpg"],
  ["AUTOMATION", "National financial institution", "Control without the drag", "40% less manual effort", "/case-automation.jpg"],
];

const team = [
  ["FN", "Farha Najameel", "FOUNDER", "Visionary leader. Turns bold ideas into businesses that move."],
  ["SA", "Sangeeth", "DEVELOPER", "Full-stack engineer. Builds scalable systems that deliver results."],
  ["SI", "Sibin", "DEVELOPER", "Creative technologist. Writes clean code that powers great experiences."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    document.querySelectorAll(".scroll-reveal").forEach((el) => reveal.observe(el));
    const spy = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2] });
    document.querySelectorAll("main section[id]").forEach((section) => spy.observe(section));
    return () => { reveal.disconnect(); spy.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return (
    <div className="creoture-mode">
      <div className="grain" aria-hidden="true" />
      <header className="reference-header">
        <div className="ref-brand"><a href="#home">VERNA<span className="brand-pip">●</span></a><span className="brand-caption">CONSULTING</span></div>
        <div className="system-status"><span className="status-pulse" /> SYSTEMS / OPERATIONAL <span className="status-divider">|</span> VER. 2026.Q4</div>
        <button className="ref-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        <nav className={menuOpen ? "ref-nav is-open" : "ref-nav"}>
          {navItems.map((item) => <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "active" : ""} onClick={closeMenu}>{item.label}</a>)}
          <a className="nav-arrow" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section id="home" className="ref-hero ref-section">
          <div className="ref-container hero-ref-grid">
            <div className="hero-micro"><span>INDEPENDENT CONSULTING</span><span>EST. 2016</span></div>
            <div className="hero-side-note">STRATEGY<br />SYSTEMS<br />GROWTH</div>
            <div className="hero-title-wrap scroll-reveal"><p className="display-eyebrow">BUILT FOR CONSEQUENTIA‍L WORK</p><h1>VERNA<span className="purple-text">.</span></h1></div>
            <div className="hero-message scroll-reveal"><p>If your next move<br />feels <span className="purple-text">unclear</span> —<br /><span className="dim-text">that&apos;s the problem.</span></p><div className="hero-rule" /><p className="hero-sub">We make strategy, technology, and operating models connect.</p></div>
            <div className="hero-stats"><span><strong>30+</strong> ENGAGEMENTS</span><span><strong>8</strong> INDUSTRIES</span><span><strong>3</strong> CONTINENTS</span></div>
            <div className="hero-actions"><a className="ref-button" href="#contact">START A CONVERSATION <ArrowUpRight size={15} /></a><a className="ref-text-link" href="#results">VIEW SELECTED WORK <ArrowDown size={14} /></a></div>
            <a className="scroll-prompt" href="#approach"><span className="scroll-circle"><ArrowDown size={14} /></span> SCROLL TO EXPLORE</a>
          </div>
        </section>

        <div className="marquee-band" aria-hidden="true"><div className="marquee-track"><span>CLARITY OVER NOISE</span><i>✦</i><span>DECISIONS THAT MOVE</span><i>✦</i><span>BUILT TO DELIVER</span><i>✦</i><span>CLARITY OVER NOISE</span><i>✦</i><span>DECISIONS THAT MOVE</span><i>✦</i></div></div>

        <section id="approach" className="ref-section approach-ref-section">
          <div className="ref-container">
            <p className="section-code">/ 01 — OUR APPROACH</p>
            <div className="approach-intro scroll-reveal"><h2>WE MAKE<br /><span className="purple-text">THE NEXT MOVE</span><br />VISIBLE.</h2><p>We make it clear, practical, and better.</p></div>
            <div className="approach-layout"><div className="approach-art"><img className="approach-reference-image" src="/verna-consulting.jpg" alt="Laptop displaying strategy analytics dashboard with charts and metrics on a dark desk." loading="lazy" decoding="async" width="842" height="606" /><div className="art-orbit art-orbit-a" /><div className="art-orbit art-orbit-b" /><div className="art-core">N<span>↗</span></div><div className="art-label art-label-a">DECISION</div><div className="art-label art-label-b">SYSTEM</div><div className="art-label art-label-c">MOMENTUM</div></div><div className="approach-copy"><p className="quote-large">You may not notice it.<br /><span>But you&apos;ll feel it.</span></p><p className="muted-copy">The right strategy creates a different kind of energy: less explaining, more deciding. Less motion, more movement.</p><div className="est-line">VERNA — EST. 2016</div></div></div>
          </div>
        </section>

        <section id="expertise" className="ref-section services-ref-section">
          <div className="ref-container"><p className="section-code">/ 02 — EXPERTISE</p><div className="section-title-row scroll-reveal"><h2>SERVICES<span className="purple-text">.</span></h2><p>Five ways we help ambitious teams move from uncertainty to outcomes.</p></div><div className="service-list">{services.map(([number, title, copy]) => <a className="service-row scroll-reveal" href="#contact" key={number}><span className="service-num">{number}</span><h3>{title}</h3><span className="service-copy">{copy}</span><ArrowUpRight className="service-arrow" size={20} /></a>)}</div></div>
        </section>

        <div className="marquee-band marquee-band-purple" aria-hidden="true"><div className="marquee-track marquee-reverse"><span>STRATEGY · TECHNOLOGY · OPERATIONS</span><i>✦</i><span>FROM INSIGHT TO IMPACT</span><i>✦</i><span>STRATEGY · TECHNOLOGY · OPERATIONS</span><i>✦</i><span>FROM INSIGHT TO IMPACT</span><i>✦</i></div></div>

        <section id="results" className="ref-section results-ref-section">
          <div className="ref-container"><p className="section-code">/ 03 — SELECTED WORK</p><div className="section-title-row scroll-reveal"><h2>THE<br /><span className="purple-text">OUTCOME</span><span className="muted-text">.</span></h2><p>Illustrative case studies — replace with approved client work and metrics before launch.</p></div><div className="result-grid">{cases.map(([category, client, title, outcome, image], index) => <article className="result-card scroll-reveal" key={client}><div className="result-visual"><img src={image} alt={`${category} — ${title}`} className="result-visual-img" loading="lazy" decoding="async" /><span className="result-index">0{index + 1}</span><div className="result-lines" /><span className="result-category">{category}</span></div><p className="result-client">{client}</p><h3>{title}</h3><div className="result-footer"><span>OUTCOME</span><strong>{outcome}</strong></div></article>)}</div></div>
        </section>

        <section className="ref-section why-ref-section"><div className="ref-container"><p className="section-code">/ 04 — WHY VERNA</p><div className="why-layout"><h2 className="scroll-reveal">NOT JUST<br /><span className="purple-text">ADVICE.</span><br />THE SYSTEM<br />TO MOVE IT.</h2><div className="why-list">{[["01", "SENIOR BY DESIGN", "The people in the room are the people doing the work."], ["02", "OUTCOMES OVER THEATRE", "We measure progress in decisions made and products shipped."], ["03", "CAPABILITY LEFT BEHIND", "The best engagement makes your team stronger after we go."]].map(([num, title, copy]) => <div className="why-row scroll-reveal" key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div><Check size={16} /></div>)}</div></div></div></section>

        <section id="about" className="ref-section about-ref-section"><div className="ref-container"><p className="section-code">/ 05 — THE PEOPLE</p><div className="section-title-row scroll-reveal"><h2>THE<br /><span className="purple-text">TEAM</span><span className="muted-text">.</span></h2><p>Small enough to care deeply. Experienced enough to know what it takes.</p></div><div className="team-list">{team.map(([initials, name, role, copy], index) => <article className="team-row scroll-reveal" key={name}><div className={`team-avatar team-avatar-${index}`}><span>{initials}</span><div /></div><div><p className="team-role">{role}</p><h3>{name}</h3><p className="team-copy">{copy}</p></div><ArrowUpRight size={20} /></article>)}</div></div></section>

        <section className="testimonial-ref-section"><div className="ref-container testimonial-grid"><span className="quote-mark">“</span><blockquote>Verna brought strategic altitude and sleeves-rolled-up delivery. We left with a plan our teams actually believed in.</blockquote><div><span className="section-code">PLACEHOLDER TESTIMONIAL</span><p>Client name<br /><span>Role, Company</span></p></div></div></section>

        <section className="ref-section engagement-ref-section"><div className="ref-container"><p className="section-code">/ 06 — WAYS TO WORK TOGETHER</p><div className="section-title-row scroll-reveal"><h2>CHOOSE<br /><span className="purple-text">THE SHAPE</span><span className="muted-text">.</span></h2><p>Focused when you need an answer. Embedded when you need momentum.</p></div><div className="engagement-list">{[["FOCUSED PROJECT", "4—12 WEEKS", "A defined decision, transformation sprint, or delivery challenge."], ["EMBEDDED PARTNERSHIP", "3—9 MONTHS", "Senior capacity alongside your team from plan through execution."], ["EXECUTIVE ADVISORY", "ONGOING", "An experienced perspective in the room when it matters."]].map(([name, duration, copy], index) => <div className={`engagement-row ${index === 1 ? "is-highlighted" : ""} scroll-reveal`} key={name}><span>0{index + 1}</span><h3>{name}</h3><em>{duration}</em><p>{copy}</p><ArrowUpRight size={18} /></div>)}</div></div></section>

        <section id="contact" className="ref-section contact-ref-section"><div className="ref-container contact-ref-grid"><div className="contact-heading scroll-reveal"><p className="section-code">/ GET IN TOUCH</p><h2>LET&apos;S BUILD<br /><span className="purple-text">WHAT&apos;S NEXT.</span></h2><p>Tell us what is changing, what is stuck, or what you are trying to make possible.</p><div className="contact-links"><a href="mailto:hello@verna.consulting">hello@verna.consulting <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div><form className="ref-form scroll-reveal" onSubmit={submit}>{submitted ? <div className="form-thanks"><span className="purple-text">✓</span><p className="section-code">MESSAGE RECEIVED</p><h3>We&apos;ll be in touch.</h3><p>This demo form is ready to connect to your inbox or CRM.</p><button type="button" onClick={() => setSubmitted(false)}>SEND ANOTHER <ArrowUpRight size={14} /></button></div> : <><label>YOUR NAME<input name="name" required placeholder="Name" /></label><label>WORK EMAIL<input name="email" type="email" required placeholder="you@company.com" /></label><label>WHAT CAN WE HELP WITH?<select name="topic" defaultValue=""><option value="" disabled>Select a focus area</option><option>Strategy &amp; transformation</option><option>Digital operations</option><option>Technology delivery</option><option>Executive advisory</option></select></label><label>A LITTLE MORE<textarea name="message" required placeholder="A sentence or two is plenty." rows={4} /></label><button className="ref-button form-button" type="submit">SEND MESSAGE <ArrowUpRight size={15} /></button></>}</form></div></section>
      </main>

      <footer className="ref-footer"><div className="ref-container footer-main"><div><a className="footer-logo" href="#home">VERNA<span className="purple-text">●</span></a><p>Strategy, systems, and growth.</p></div><div className="footer-nav">{navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div><div className="footer-contact"><a href="mailto:hello@verna.consulting">hello@verna.consulting</a><a href="tel:+12125550186">+1 212 555 0186</a></div></div><div className="ref-container footer-bottom"><span>© 2026 Verna Consulting. All rights reserved.</span><span>BUILT FOR CONSEQUENTI‍AL WORK.</span><span>NYC · LDN · REMOTE</span></div></footer>
    </div>
  );
}
