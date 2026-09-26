import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Menu, X, Shield, Lock, Eye, FileText, Mail, MapPin, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Work", href: "/#results" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function PrivacyPolicy() {
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
            <span className="section-code">/ 01 — LEGAL &amp; COMPLIANCE</span>
          </div>

          {/* Hero Header */}
          <div className="legal-header">
            <p className="display-eyebrow">DATA PROTECTION &amp; TRANSPARENCY</p>
            <h1 className="legal-title">PRIVACY POLICY</h1>
            <div className="legal-meta">
              <span className="legal-badge"><Shield size={12} /> OFFICIAL POLICY</span>
              <span className="legal-date">LAST UPDATED: SEPTEMBER 26, 2026</span>
              <span className="legal-date">EFFECTIVE: SEPTEMBER 2026</span>
            </div>
          </div>

          <div className="legal-divider" />

          {/* Content Body */}
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>1. INTRODUCTION</h2>
              <p>
                Verna Consulting (&ldquo;Verna&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and personal information of visitors, clients, and partners who interact with our website (<a href="https://verna.dpdns.org" className="legal-inline-link">https://verna.dpdns.org</a>).
              </p>
              <p>
                This Privacy Policy explains what personal information we collect, how it is processed and protected, and your rights regarding your data when you use our website or reach out to our team.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. INFORMATION WE COLLECT</h2>
              <p>
                We only collect personal information that you voluntarily provide when contacting us or inquiring about our consulting services:
              </p>
              <ul className="legal-list">
                <li><strong>Full Name:</strong> To address you accurately in our business correspondence.</li>
                <li><strong>Work Email Address:</strong> To reply to your inquiry, send proposals, or schedule discussions.</li>
                <li><strong>Focus Area / Topic:</strong> The service category selected (Strategy &amp; Transformation, Digital Operations, Technology Delivery, Operating Model, or Executive Advisory).</li>
                <li><strong>Message Content:</strong> Any details, project scopes, or business questions you choose to share in the contact form.</li>
                <li><strong>Direct Communication Records:</strong> Information shared when communicating with us directly via email, telephone, or WhatsApp.</li>
              </ul>
              <p className="legal-note">
                Note: We do not process sensitive personal data, financial payment card numbers, or automated user profiling on this website.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. HOW WE USE YOUR INFORMATION</h2>
              <p>
                The information collected is used exclusively for legitimate business purposes:
              </p>
              <ul className="legal-list">
                <li>To evaluate, respond to, and fulfill your inquiries and consultation requests.</li>
                <li>To prepare project estimates, capabilities presentations, and strategic proposals.</li>
                <li>To coordinate communication between our partners and your organization.</li>
                <li>To maintain business records and comply with applicable legal obligations.</li>
              </ul>
              <p>
                We do not sell, rent, monetize, or trade your personal information to any third parties for advertising or marketing purposes.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. THIRD-PARTY SERVICES &amp; DATA TRANSMISSION</h2>
              <p>
                Our website utilizes select trusted third-party infrastructure to facilitate secure communication and website hosting:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Web3Forms (Form Submission API):</strong> Submissions from our contact form are processed via Web3Forms to securely deliver your message directly to our official corporate mailbox (<a href="mailto:farha.najameel69@gmail.com" className="legal-inline-link">farha.najameel69@gmail.com</a>).
                </li>
                <li>
                  <strong>WhatsApp (Direct Chat Option):</strong> When you click the WhatsApp link, you are redirected to the WhatsApp platform, governed by Meta&apos;s privacy policy.
                </li>
                <li>
                  <strong>Google Maps (Location Reference):</strong> External links to our physical office location at HiLITE Business Park, Kozhikode open in Google Maps.
                </li>
                <li>
                  <strong>Vercel (Hosting &amp; CDN):</strong> Our static web application is hosted on Vercel&apos;s global content delivery network, which processes standard connection requests (IP address and browser User-Agent) to deliver website files securely.
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. DATA RETENTION &amp; SECURITY</h2>
              <p>
                We implement appropriate administrative and technical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of your personal data.
              </p>
              <p>
                We retain client inquiries only for as long as necessary to conduct strategic discussions, execute client engagements, or meet statutory recordkeeping requirements. When data is no longer needed, it is securely deleted.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. YOUR DATA RIGHTS</h2>
              <p>
                Depending on your location and applicable data protection laws (including the Digital Personal Data Protection Act of India and international standards where applicable), you have the right to:
              </p>
              <ul className="legal-list">
                <li>Request confirmation of whether we hold personal information about you.</li>
                <li>Request access to or a copy of the personal information you provided.</li>
                <li>Request correction of inaccurate or outdated details.</li>
                <li>Request deletion of your contact records from our communication systems.</li>
              </ul>
              <p>
                To exercise any of these rights, please email us directly at <a href="mailto:farha.najameel69@gmail.com" className="legal-inline-link">farha.najameel69@gmail.com</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. GOVERNING LAW &amp; JURISDICTION</h2>
              <p>
                This Privacy Policy and any related disputes are governed by and construed in accordance with the laws of the Republic of India, with exclusive jurisdiction in the courts of Kozhikode, Kerala, India.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. CONTACT US REGARDING PRIVACY</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to:
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
            <a href="/terms-and-conditions" className="ref-button">
              VIEW TERMS &amp; CONDITIONS <ArrowUpRight size={15} />
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
            <a href="/privacy-policy" style={{ color: "var(--purple)" }}>Privacy Policy</a>
            <span>·</span>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          </div>
          <span>KOZHIKODE · KERALA · INDIA</span>
        </div>
      </footer>
    </div>
  );
}
