import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const LOGO = "/manus-storage/logo-full_496ed816.png";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/programs", label: "البرامج" },
  { href: "/speech-therapy", label: "علاج النطق" },
  { href: "/extended-care", label: "الرعاية الممتدة" },
  { href: "/parent-experience", label: "أولياء الأمور" },
  { href: "/safety", label: "الأمان" },
  { href: "/contact", label: "تواصل معنا" },
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
            <img src={LOGO} alt="مركز شجرة التعلم" className="h-12 lg:h-14 w-auto" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[var(--navy)] leading-tight">مركز شجرة التعلم</p>
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
              اتصل الآن
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--sand)] transition-colors"
              aria-label="القائمة"
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
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+966546653383"
                className="mt-2 flex items-center justify-center gap-2 bg-[var(--green-primary)] text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
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
                <img src={LOGO} alt="مركز شجرة التعلم" className="h-12 w-auto" />
                <div>
                  <p className="font-bold text-lg">مركز شجرة التعلم</p>
                </div>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">
                حضانة وروضة أطفال بالظهران – حي أجيال. منهج EYFS البريطاني للأطفال من عمر سنتين إلى 6 سنوات.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
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
              <h4 className="font-bold text-lg mb-4">برامجنا</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>مرحلة التمهيدي (من عمر سنتين)</li>
                <li>KG1 (من عمر 3 سنوات)</li>
                <li>KG2 (من عمر 4 سنوات)</li>
                <li>KG3 (من عمر 5 سنوات)</li>
                <li>علاج النطق واللغة</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
              <ul className="space-y-3 text-sm">
                <li className="opacity-70">حي أجيال، شارع عنيزة، الظهران 34513<br />المملكة العربية السعودية</li>
                <li>
                  <a href="tel:+966546653383" className="opacity-70 hover:opacity-100 transition-opacity" dir="ltr">
                    +966 54 665 3383
                  </a>
                </li>
                <li>
                  <a href="mailto:Support@learningtreeco.com" className="opacity-70 hover:opacity-100 transition-opacity" dir="ltr">
                    Support@learningtreeco.com
                  </a>
                </li>
              </ul>
              {/* Social Media / Linktree */}
              <div className="mt-6">
                <a
                  href="https://linktr.ee/Learningtreeksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--green-primary)] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[var(--green-light)] transition-colors active:scale-[0.97]"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7.953 15.066l-.038.002a.975.975 0 0 1-.935-.7l-.002-.006-1.558-5.153a.976.976 0 0 1 .648-1.222l.002-.001h.014a.976.976 0 0 1 1.217.649l1.092 3.56 2.313-2.313a.976.976 0 0 1 1.38 1.38l-2.312 2.313 3.559 1.092a.976.976 0 0 1-.573 1.866l-5.153-1.558a.953.953 0 0 1-.652-.909zm8.091 0l.038.002a.975.975 0 0 0 .935-.7l.002-.006 1.558-5.153a.976.976 0 0 0-.648-1.222l-.002-.001h-.014a.976.976 0 0 0-1.217.649l-1.092 3.56-2.313-2.313a.976.976 0 0 0-1.38 1.38l2.312 2.313-3.559 1.092a.976.976 0 0 0 .573 1.866l5.153-1.558a.953.953 0 0 0 .652-.909zM12 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 12 0z"/></svg>
                  تابعونا على منصات التواصل
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-60">جميع الحقوق محفوظة © ٢٠٢٤ مركز شجرة التعلم</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                سياسة الخصوصية
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/966546653383"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 whatsapp-pulse"
        aria-label="واتساب"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
