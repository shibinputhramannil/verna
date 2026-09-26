import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Menu, X, FileText, CheckCircle2, AlertCircle, Mail, MapPin, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Work", href: "/#results" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function TermsAndConditions() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="creoture-mode">
      <div className="grain" aria-hidden="true" />
      
      {/* Header */}
      <header className="reference-header">
        <div className="ref-brand">
          <a href="/">VERNA</a>
          <span className="brand-caption">CONSULTING</span>
        </div>
        <div className="system-status">
          <span className="status-pulse" /> SYSTEMS / OPERATIONAL <span className="status-divider">|</span> LEGAL
        </div>
        <button className="ref-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={menuOpen ? "ref-nav is-open" : "ref-nav"}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-arrow" href="/#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main className="legal-page-main">
        <div className="ref-container legal-container">
          
          {/* Top Breadcrumb / Back Link */}
          <div className="legal-top-bar">
            <a href="/" className="legal-back-link">
              <ArrowLeft size={14} /> Back to Overview
            </a>
            <span className="section-code">/ 02 — LEGAL &amp; TERMS</span>
          </div>

          {/* Hero Header */}
          <div className="legal-header">
            <p className="display-eyebrow">TERMS OF USE &amp; ADVISORY ENGAGEMENT</p>
            <h1 className="legal-title">TERMS &amp; CONDITIONS</h1>
            <div className="legal-meta">
              <span className="legal-badge"><FileText size={12} /> BINDING AGREEMENT</span>
              <span className="legal-date">LAST UPDATED: SEPTEMBER 26, 2026</span>
              <span className="legal-date">EFFECTIVE: SEPTEMBER 2026</span>
            </div>
          </div>

          <div className="legal-divider" />

          {/* Content Body */}
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>1. ACCEPTANCE OF TERMS</h2>
              <p>
                By accessing or using the website of Verna Consulting (&ldquo;Verna&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) available at <a href="https://verna.dpdns.org" className="legal-inline-link">https://verna.dpdns.org</a>, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
              </p>
              <p>
                If you do not agree with any part of these Terms, you must discontinue your use of this website immediately.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. PURPOSE &amp; NATURE OF WEBSITE</h2>
              <p>
                This website is published to provide general information regarding Verna Consulting&apos;s strategic advisory services, technology delivery capabilities, operational architecture, leadership team, and illustrative case studies.
              </p>
              <p>
                The information provided on this website does not constitute formal management consulting, financial, or legal advice.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. NO ADVISORY RELATIONSHIP FORMED</h2>
              <p>
                Browsing this website, reviewing materials, or submitting an inquiry via our contact form does not create a consultant-client, fiduciary, or contractual advisory relationship between you and Verna Consulting.
              </p>
              <p>
                A formal professional consulting relationship is established only upon the mutual execution of a written Engagement Agreement, Statement of Work (SOW), or Master Services Agreement (MSA) signed by authorized representatives of both parties.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. INTELLECTUAL PROPERTY RIGHTS</h2>
              <p>
                All content published on this website—including but not limited to text, frameworks, case study summaries, graphics, logos, brand names, visual styling, icons, and software code—is the exclusive intellectual property of Verna Consulting or its licensors.
              </p>
              <ul className="legal-list">
                <li>You may view, browse, and bookmark pages for your internal organizational evaluation.</li>
                <li>You may not reproduce, redistribute, scrape, republish, modify, or commercially exploit any content from this website without prior written permission from Verna Consulting.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. ACCEPTABLE USE &amp; USER CONDUCT</h2>
              <p>
                When using our website and communication features, you agree not to:
              </p>
              <ul className="legal-list">
                <li>Submit false, fraudulent, or deceptive contact information or impersonate any individual or entity.</li>
                <li>Transmit spam, unsolicited promotional messages, malicious code, viruses, or automated bot scripts.</li>
                <li>Attempt to bypass, disable, or tamper with website security features or infrastructure.</li>
                <li>Use the website in any manner that violates applicable local, state, national, or international laws.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>6. THIRD-PARTY LINKS &amp; INTEGRATIONS</h2>
              <p>
                This website contains links to third-party platforms and services, including Web3Forms (for contact delivery), WhatsApp (for messaging), and Google Maps (for office location).
              </p>
              <p>
                Verna Consulting does not control and is not responsible for the availability, content, privacy policies, or practices of third-party platforms. Accessing external links is done at your own discretion.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. DISCLAIMER OF WARRANTIES &amp; LIMITATION OF LIABILITY</h2>
              <p>
                This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
              </p>
              <p>
                To the fullest extent permitted by applicable law, Verna Consulting, its partners, and developers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or inability to use this website.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. MODIFICATIONS TO TERMS</h2>
              <p>
                We reserve the right to revise or update these Terms and Conditions at any time. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of the website following any changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. GOVERNING LAW &amp; DISPUTE RESOLUTION</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute or proceeding arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in Kozhikode, Kerala, India.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. CONTACT INFORMATION</h2>
              <p>
                For questions or formal inquiries regarding these Terms and Conditions, please contact us at:
              </p>
              <div className="legal-contact-card">
                <div className="legal-contact-item">
                  <Mail size={16} className="purple-text" />
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:farha.najameel69@gmail.com">farha.najameel69@gmail.com</a>
                  </div>
                </div>
                <div className="legal-contact-item">
                  <Phone size={16} className="purple-text" />
                  <div>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+918921691154">+91 89216 91154</a>
                  </div>
                </div>
                <div className="legal-contact-item">
                  <MapPin size={16} className="purple-text" />
                  <div>
                    <strong>Office:</strong>{" "}
                    <span>6th Floor, HiLITE Business Park, A106, Poovangal, Kozhikode, Keralam 673014, India</span>
                  </div>
                </div>
              </div>
            </section>

          </div>

          <div className="legal-divider" />

          {/* Bottom Actions */}
          <div className="legal-bottom-actions">
            <a href="/privacy-policy" className="ref-button">
              VIEW PRIVACY POLICY <ArrowUpRight size={15} />
            </a>
            <a href="/#contact" className="ref-text-link">
              START A CONVERSATION <ArrowUpRight size={14} />
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="ref-footer">
        <div className="ref-container footer-main">
          <div>
            <a className="footer-logo" href="/">VERNA</a>
            <p>Strategy, systems, and growth.</p>
          </div>
          <div className="footer-nav">
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </div>
          <div className="footer-contact">
            <a href="mailto:farha.najameel69@gmail.com">farha.najameel69@gmail.com</a>
            <a href="tel:+918921691154">+91 89216 91154</a>
          </div>
        </div>
        <div className="ref-container footer-bottom">
          <span>© 2026 Verna Consulting. All rights reserved.</span>
          <div className="footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>·</span>
            <a href="/terms-and-conditions" style={{ color: "var(--purple)" }}>Terms &amp; Conditions</a>
          </div>
          <span>KOZHIKODE · KERALA · INDIA</span>
        </div>
      </footer>
    </div>
  );
}
