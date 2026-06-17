import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const LOGO = "/manus-storage/logo_0136220a.jpeg";

const navLinks = [
  { href: "/", label: "Home", labelAr: "الرئيسية" },
  { href: "/about", label: "About Us", labelAr: "من نحن" },
  { href: "/programs", label: "Programs", labelAr: "البرامج" },
  { href: "/speech-therapy", label: "Speech Therapy", labelAr: "علاج النطق" },
  { href: "/extended-care", label: "Extended Care", labelAr: "الرعاية الممتدة" },
  { href: "/parent-experience", label: "Parents", labelAr: "أولياء الأمور" },
  { href: "/safety", label: "Safety", labelAr: "الأمان" },
  { href: "/contact", label: "Contact", labelAr: "تواصل معنا" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src={LOGO} alt="Learning Tree Center" className="h-12 lg:h-14 w-auto rounded-full" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[var(--navy)] leading-tight" style={{ fontFamily: "var(--font-display)" }}>Learning Tree Center</p>
              <p className="text-xs text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>مركز شجرة التعلم</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location === link.href
                    ? "bg-[var(--green-primary)] text-white"
                    : "text-[var(--navy)] hover:bg-[var(--sand)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+966546653383"
              className="hidden md:flex items-center gap-2 bg-[var(--green-primary)] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--navy)] transition-colors active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--sand)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[var(--border)] shadow-lg">
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    location === link.href
                      ? "bg-[var(--green-primary)] text-white"
                      : "text-[var(--navy)] hover:bg-[var(--sand)]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="mr-2 text-xs opacity-70" style={{ fontFamily: "var(--font-arabic)" }}> — {link.labelAr}</span>
                </Link>
              ))}
              <a
                href="tel:+966546653383"
                className="mt-2 flex items-center justify-center gap-2 bg-[var(--green-primary)] text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now — اتصل الآن
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--navy)] text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={LOGO} alt="Learning Tree Center" className="h-12 w-auto rounded-full" />
                <div>
                  <p className="font-bold text-lg">Learning Tree Center</p>
                  <p className="text-sm opacity-80" style={{ fontFamily: "var(--font-arabic)" }}>مركز شجرة التعلم</p>
                </div>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">
                A safe, nurturing and internationally inspired learning environment for children from age 2 to KG3.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Programs</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Early Years (Age 2+)</li>
                <li>Kindergarten</li>
                <li>KG1</li>
                <li>KG2</li>
                <li>KG3</li>
                <li>Speech & Language Therapy</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="opacity-70">Dhahran – Ajaal District<br />Saudi Arabia</li>
                <li>
                  <a href="tel:+966546653383" className="opacity-70 hover:opacity-100 transition-opacity">
                    +966 54 665 3383
                  </a>
                </li>
                <li>
                  <a href="mailto:Support@learningtreeco.com" className="opacity-70 hover:opacity-100 transition-opacity">
                    Support@learningtreeco.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-60">© 2024 Learning Tree Center. All rights reserved.</p>
            <p className="text-sm opacity-60" style={{ fontFamily: "var(--font-arabic)" }}>جميع الحقوق محفوظة © ٢٠٢٤ مركز شجرة التعلم</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/966546653383"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 whatsapp-pulse"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
