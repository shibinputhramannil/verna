import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Cpu,
  ExternalLink,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Plus,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  { label: "Expertise", href: "#expertise" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

const services = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy & Transformation",
    text: "Turn ambition into a practical roadmap that aligns leadership, technology, and the operating model.",
    tags: ["Operating model", "Growth strategy", "Portfolio design"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Digital Operations",
    text: "Remove friction from critical workflows with focused process redesign and automation that compounds.",
    tags: ["Process design", "Automation", "Performance"],
  },
  {
    number: "03",
    icon: Cpu,
    title: "Technology Delivery",
    text: "Move from decisions to shipped outcomes with senior product, engineering, and delivery leadership.",
    tags: ["Product delivery", "Architecture", "Team enablement"],
  },
];

const steps = [
  {
    number: "01",
    title: "Assess",
    text: "We build a shared fact base: where value is created, where it leaks, and what is blocking progress.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "We prioritize the few moves that matter, then make the trade-offs explicit for the people who own them.",
  },
  {
    number: "03",
    title: "Implement",
    text: "We work beside your team to make change real — from decision forums to shipped product and new habits.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We instrument the system, transfer capability, and keep improving after the engagement is complete.",
  },
];

const cases = [
  {
    client: "Global logistics group",
    label: "OPERATING MODEL / 2024",
    title: "From fragmented planning to one connected network",
    problem: "Five regional teams were planning capacity in different systems, slowing decisions and hiding risk.",
    outcome: "22% faster planning cycles",
    detail: "A shared operating cadence, data model, and decision cockpit made the network visible end to end.",
    tone: "case-sand",
  },
  {
    client: "Series C software company",
    label: "PRODUCT / 2024",
    title: "A product portfolio built for the next stage",
    problem: "A fast-growing team had a long roadmap but no common view of customer value or delivery economics.",
    outcome: "3x release confidence",
    detail: "We reset portfolio governance and embedded a lightweight product operating system across four squads.",
    tone: "case-blue",
  },
  {
    client: "National financial institution",
    label: "AUTOMATION / 2023",
    title: "Turning manual controls into a growth engine",
    problem: "Critical compliance workflows depended on spreadsheets, handoffs, and expensive rework.",
    outcome: "40% less manual effort",
    detail: "A pragmatic automation roadmap delivered measurable savings without compromising control or trust.",
    tone: "case-ink",
  },
];

const team = [
  {
    initials: "MC",
    name: "Maya Chen",
    role: "Managing Partner",
    bio: "Former COO and transformation lead. Helps executive teams make the complex feel actionable.",
    accent: "#e5583f",
  },
  {
    initials: "JR",
    name: "Jonas Reed",
    role: "Partner, Technology",
    bio: "Product and platform operator. Turns strategy into systems that teams can ship and sustain.",
    accent: "#233c59",
  },
  {
    initials: "SK",
    name: "Sara Khalil",
    role: "Principal, Operations",
    bio: "Process architect and change practitioner. Finds the leverage inside the day-to-day.",
    accent: "#b99b70",
  },
];

const models = [
  {
    name: "Focused project",
    duration: "4–12 weeks",
    text: "For a defined decision, transformation sprint, or delivery challenge with a clear finish line.",
    best: "Best for a specific outcome",
  },
  {
    name: "Embedded partnership",
    duration: "3–9 months",
    text: "For complex change that needs senior capacity alongside your team from plan through execution.",
    best: "Best for momentum at scale",
  },
  {
    name: "Executive advisory",
    duration: "Ongoing",
    text: "For leaders who want an experienced, independent perspective in the room when it matters.",
    best: "Best for high-stakes decisions",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const sections = ["home", "expertise", "approach", "results", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span className="pulse-dot" aria-hidden="true" />
          <span>Northstar is accepting a limited number of Q4 transformation engagements.</span>
          <a href="#contact">Start a conversation <ArrowUpRight size={13} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Northstar Consulting home">
            <span className="brand-mark"><span /><span /><span /></span>
            <span className="brand-name">NORTHSTAR</span>
            <span className="brand-sub">CONSULTING</span>
          </a>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} className={activeSection === item.href.slice(1) ? "active" : ""} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal reveal-delay-1">
              <div className="eyebrow"><span className="eyebrow-line" /> Independent consulting for consequential work</div>
              <h1>Make the <em>next</em> move<br />with confidence.</h1>
              <p className="hero-lede">Northstar helps ambitious organizations turn strategic uncertainty into measurable progress — with the clarity to decide and the capability to deliver.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Book a consultation <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#results">See our work <ArrowRight size={16} /></a>
              </div>
              <div className="hero-note"><ShieldCheck size={15} /> Senior-led, hands-on, built for the real world</div>
            </div>
            <div className="hero-visual reveal reveal-delay-2" aria-label="Northstar network visualization">
              <div className="visual-caption"><span>FIG. 01 / NORTHSTAR METHOD</span><span>01—04</span></div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="visual-core"><span className="core-label">NORTH<br />STAR</span><div className="core-cross" /></div>
              <div className="node node-a"><span>STRATEGY</span></div>
              <div className="node node-b"><span>DELIVERY</span></div>
              <div className="node node-c"><span>CAPABILITY</span></div>
              <div className="node node-d"><span>IMPACT</span></div>
              <div className="visual-axis axis-x" /><div className="visual-axis axis-y" />
              <div className="visual-footer"><span>CLARITY</span><ArrowRight size={13} /><span>CAPABILITY</span><ArrowRight size={13} /><span>RESULTS</span></div>
            </div>
          </div>
          <div className="container hero-bottomline">
            <div className="scroll-cue"><span className="scroll-line" /> Scroll to explore</div>
            <div className="hero-meta"><span>NYC / LDN / REMOTE</span><span>EST. 2016</span><span>© 2024 NORTHSTAR</span></div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span className="trust-label">Trusted by teams at</span>
            <div className="client-logos"><span>arc<span className="logo-accent">/</span>line</span><span>HARBOR<span className="logo-light">&amp; CO</span></span><span>north<span className="logo-accent">+</span>field</span><span>MERIDIAN</span><span className="logo-serif">Morrow</span></div>
          </div>
        </section>

        <section id="expertise" className="section section-light expertise-section">
          <div className="container">
            <div className="section-heading split-heading reveal">
              <div><p className="section-kicker">01 / What we do</p><h2>Clarity for the<br /><em>hard parts.</em></h2></div>
              <p className="section-intro">We work where the stakes are high, the path is unclear, and progress cannot wait. Our teams bring strategy and execution together from day one.</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return <article className="service-card reveal" style={{ animationDelay: `${index * 80}ms` }} key={service.number}>
                  <div className="card-topline"><span>{service.number}</span><Icon size={22} strokeWidth={1.5} /></div>
                  <h3>{service.title}</h3><p>{service.text}</p>
                  <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="card-arrow" href="#contact" aria-label={`Explore ${service.title}`}><ArrowUpRight size={17} /></a>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="section section-ink approach-section">
          <div className="container">
            <div className="section-heading split-heading light-heading reveal">
              <div><p className="section-kicker">02 / How we work</p><h2>A method made for<br /><em>momentum.</em></h2></div>
              <p className="section-intro">No black boxes. No hand-off decks. We build the answer with the people who will carry it forward — and stay close enough to make it stick.</p>
            </div>
            <div className="method-grid">
              {steps.map((step, index) => <article className="method-step reveal" style={{ animationDelay: `${index * 70}ms` }} key={step.number}>
                <div className="method-number">{step.number}</div><div className="method-connector" />
                <h3>{step.title}</h3><p>{step.text}</p>
              </article>)}
            </div>
            <div className="approach-foot"><span><Sparkles size={15} /> Senior attention from first question to last mile</span><a href="#contact">Our approach in action <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section id="results" className="section section-light results-section">
          <div className="container">
            <div className="section-heading split-heading reveal"><div><p className="section-kicker">03 / Selected results</p><h2>Work that moves<br /><em>the numbers.</em></h2></div><p className="section-intro">Illustrative client stories below. Replace these placeholders with approved case studies, outcomes, and client names before publishing.</p></div>
            <div className="cases-grid">
              {cases.map((item, index) => <article className={`case-card ${item.tone} reveal`} style={{ animationDelay: `${index * 80}ms` }} key={item.client}>
                <div className="case-top"><span>{item.label}</span><ArrowUpRight size={18} /></div>
                <div className="case-number">0{index + 1}</div>
                <p className="case-client">{item.client}</p><h3>{item.title}</h3>
                <div className="case-detail"><span>THE CHALLENGE</span><p>{item.problem}</p></div>
                <div className="case-outcome"><span>OUTCOME</span><strong>{item.outcome}</strong><p>{item.detail}</p></div>
              </article>)}
            </div>
            <div className="results-note"><span className="note-mark">+</span><p>Placeholder content is clearly marked for easy replacement with approved client work.</p><a className="text-link" href="#contact">Discuss your challenge <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="section differentiator-section">
          <div className="container differentiator-grid">
            <div className="difference-statement reveal"><p className="section-kicker">04 / Why Northstar</p><h2>Experience is only useful when it changes <em>what happens next.</em></h2><a className="button button-light" href="#about">Meet the team <ArrowUpRight size={16} /></a></div>
            <div className="difference-list">
              {[{ icon: Target, title: "Senior by design", text: "The people in the room are the people doing the work. No layers between insight and action." }, { icon: Network, title: "One connected view", text: "We connect the strategic, operational, and technical so the answer survives contact with reality." }, { icon: BarChart3, title: "Outcomes over theatre", text: "We measure progress in decisions made, products shipped, and capability left behind." }].map((item, index) => { const Icon = item.icon; return <div className="difference-item reveal" style={{ animationDelay: `${index * 70}ms` }} key={item.title}><Icon size={23} strokeWidth={1.5} /><div><h3>{item.title}</h3><p>{item.text}</p></div></div>; })}
            </div>
          </div>
        </section>

        <section id="about" className="section section-light about-section">
          <div className="container">
            <div className="section-heading split-heading reveal"><div><p className="section-kicker">05 / The people</p><h2>Small enough to<br /><em>care deeply.</em></h2></div><p className="section-intro">A senior team with operator instincts, consulting discipline, and the humility to start with your context. Team bios below are placeholders for your final profiles.</p></div>
            <div className="team-grid">
              {team.map((person, index) => <article className="person-card reveal" style={{ animationDelay: `${index * 70}ms` }} key={person.name}><div className="avatar-placeholder" style={{ "--avatar-accent": person.accent } as CSSProperties}><span>{person.initials}</span><div className="avatar-grid" /></div><p className="person-role">{person.role}</p><h3>{person.name}</h3><p>{person.bio}</p><a href="#contact" className="person-link">View profile <ArrowUpRight size={14} /></a></article>)}
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-grid">
            <div className="quote-label"><Quote size={28} strokeWidth={1.3} /><span>Client perspective<br />PLACEHOLDER QUOTE</span></div>
            <blockquote>“Northstar brought the rare combination of strategic altitude and sleeves-rolled-up delivery. We left with a plan our teams actually believed in — and a way to make it happen.”</blockquote>
            <div className="quote-attribution"><span className="attribution-line" /><div><strong>Client name</strong><span>Role, Company</span></div><span className="quote-index">01 / 03</span></div>
          </div>
        </section>

        <section className="section section-light engagement-section">
          <div className="container">
            <div className="section-heading reveal"><p className="section-kicker">06 / Ways to work together</p><h2>Choose the shape<br /><em>that fits.</em></h2></div>
            <div className="models-grid">
              {models.map((model, index) => <article className={`model-card ${index === 1 ? "is-featured" : ""} reveal`} style={{ animationDelay: `${index * 70}ms` }} key={model.name}>{index === 1 && <span className="featured-label">MOST COMMON</span>}<div className="model-index">0{index + 1}</div><h3>{model.name}</h3><span className="model-duration"><Clock3 size={14} /> {model.duration}</span><p>{model.text}</p><div className="model-best"><Check size={15} /> {model.best}</div><a href="#contact" className="model-link">Explore model <ArrowUpRight size={16} /></a></article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy reveal"><p className="section-kicker light-kicker">07 / Start here</p><h2>Let&apos;s find the<br /><em>next right move.</em></h2><p>Tell us what is changing, what is stuck, or what you are trying to make possible. We will come back with a useful first conversation — not a pitch.</p><div className="contact-details"><a href="mailto:hello@northstar.consulting"><Mail size={16} /> hello@northstar.consulting</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ExternalLink size={12} /></a><span><MapPin size={16} /> New York · London · Remote</span></div></div>
            <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
              {submitted ? <div className="form-success"><div className="success-icon"><Check size={22} /></div><p className="section-kicker light-kicker">Message received</p><h3>We&apos;ll be in touch shortly.</h3><p>Thanks for reaching out. This demo form is ready to connect to your preferred inbox or CRM.</p><button className="button button-outline-light" type="button" onClick={() => setSubmitted(false)}>Send another message</button></div> : <><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label></div><label>What can we help with?<select name="topic" defaultValue=""><option value="" disabled>Select a focus area</option><option>Strategy &amp; transformation</option><option>Digital operations</option><option>Technology delivery</option><option>Executive advisory</option></select></label><label>Tell us a little more<textarea name="message" required placeholder="A sentence or two is plenty." rows={4} /></label><button className="button button-primary form-submit" type="submit">Start the conversation <ArrowUpRight size={17} /></button><p className="form-disclaimer">By submitting, you agree to be contacted about your inquiry. No sales sequence, ever.</p></>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span /><span /><span /></span><span className="brand-name">NORTHSTAR</span></a><div className="footer-links"><a href="#expertise">Expertise</a><a href="#approach">Approach</a><a href="#results">Results</a><a href="#contact">Contact</a></div><a className="back-top" href="#home">Back to top <ArrowDownRight size={15} /></a></div><div className="container footer-bottom"><span>© 2024 Northstar Consulting. Placeholder site content.</span><span>Privacy <span className="footer-divider">/</span> Terms</span><span>Built for consequential work.</span></div></footer>
    </div>
  );
}
