import { useEffect } from "react";
import { Link } from "wouter";
import { GraduationCap, Shield, Heart, BookOpen, Users, Star, ArrowRight } from "lucide-react";

const HERO_IMG = "/manus-storage/IMG_4424_1a952bea.jpeg";
const LOGO_FULL = "/manus-storage/logo-full_496ed816.png";
const IMG1 = "/manus-storage/IMG_4410_32804e7a.jpeg";
const IMG2 = "/manus-storage/IMG_4411_8c1e7d44.jpeg";
const IMG3 = "/manus-storage/IMG_4412_ae9147b3.jpeg";
const IMG4 = "/manus-storage/IMG_4413_6db9bfd0.jpeg";
const IMG5 = "/manus-storage/IMG_4414_4863c1f5.jpeg";
const IMG6 = "/manus-storage/IMG_4415_a8f0c1b3.jpeg";

const whyChooseUs = [
  { icon: GraduationCap, title: "NDNA Accredited", titleAr: "معتمدون من NDNA", desc: "Internationally recognized quality standards for early years education." },
  { icon: Shield, title: "Safe & Secure", titleAr: "بيئة آمنة", desc: "24/7 monitoring cameras with parent access and secure check-in systems." },
  { icon: Heart, title: "Nurturing Environment", titleAr: "بيئة حاضنة", desc: "Qualified teachers dedicated to each child's emotional and academic growth." },
  { icon: BookOpen, title: "Holistic Curriculum", titleAr: "منهج شامل", desc: "Balanced approach covering literacy, numeracy, communication, and social skills." },
  { icon: Users, title: "Parent Partnership", titleAr: "شراكة مع الأهل", desc: "Daily updates via Illumine app with photos, observations, and milestones." },
  { icon: Star, title: "Extended Programs", titleAr: "برامج ممتدة", desc: "Extended care until 6:30 PM, evening club, and homework support." },
];

const programs = [
  { name: "Early Years", nameAr: "السنوات المبكرة", age: "Age 2+", img: IMG1 },
  { name: "Kindergarten", nameAr: "الروضة", age: "Age 3+", img: IMG2 },
  { name: "KG1", nameAr: "تمهيدي ١", age: "Age 4+", img: IMG3 },
  { name: "KG2", nameAr: "تمهيدي ٢", age: "Age 5+", img: IMG4 },
  { name: "KG3", nameAr: "تمهيدي ٣", age: "Age 6+", img: IMG5 },
];

export default function Home() {
  useEffect(() => {
    document.title = "Learning Tree Center | Premium Early Years Education in Dhahran";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Learning Tree Center classroom environment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/80 via-[var(--navy)]/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <img src={LOGO_FULL} alt="Learning Tree Kids Center Logo" className="w-[180px] md:w-[200px] h-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Growing Confident Learners for the Future
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-bold mb-6" style={{ fontFamily: "var(--font-arabic)" }}>
              ننمي جيلاً واثقاً ومستعداً للمستقبل
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              A safe, nurturing and internationally inspired learning environment for children from age 2 to KG3.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--green-primary)] text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-[var(--green-light)] transition-colors active:scale-[0.97]">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-7 py-3.5 rounded-full font-bold text-base hover:bg-white/25 transition-colors">
                Book a Tour
              </Link>
              <a href="https://wa.me/966546653383" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-[#20bd5a] transition-colors active:scale-[0.97]">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Why Families Choose Learning Tree
            </h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>
              لماذا تختار العائلات مركز شجرة التعلم
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--green-primary)]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[var(--green-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-[var(--green-primary)] mb-3" style={{ fontFamily: "var(--font-arabic)" }}>{item.titleAr}</p>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">Our Programs</h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>برامجنا التعليمية</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <Link key={prog.name} href="/programs" className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300">
                <img src={prog.img} alt={prog.name} className="w-full h-full img-crop group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-[var(--sunshine)] text-[var(--navy)] text-xs font-bold px-3 py-1 rounded-full mb-2">{prog.age}</span>
                  <h3 className="text-xl font-bold text-white">{prog.name}</h3>
                  <p className="text-sm text-white/80 font-semibold" style={{ fontFamily: "var(--font-arabic)" }}>{prog.nameAr}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programs" className="inline-flex items-center gap-2 text-[var(--green-primary)] font-bold hover:gap-3 transition-all">
              View All Programs <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-[var(--green-primary)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">NDNA Quality Counts Accredited</h2>
              <p className="text-lg opacity-90" style={{ fontFamily: "var(--font-arabic)" }}>معتمدون من الجمعية الوطنية لحضانات الأطفال</p>
              <p className="text-white/80 mt-3 max-w-lg">Recognized for meeting the highest international standards in early years education, safety, and child development.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-extrabold text-white">NDNA</div>
                <div className="text-sm text-white/80 mt-1">Quality Counts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">Our Learning Environment</h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>بيئتنا التعليمية</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[IMG1, IMG2, IMG3, IMG4, IMG5, IMG6].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-lg transition-shadow">
                <img src={img} alt={`Learning Tree Center environment ${i + 1}`} className="w-full h-full img-crop hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">Ready to Join Our Family?</h2>
          <p className="text-xl text-[var(--green-primary)] font-bold mb-6" style={{ fontFamily: "var(--font-arabic)" }}>هل أنتم مستعدون للانضمام إلى عائلتنا؟</p>
          <p className="text-[var(--navy)]/70 mb-8 max-w-2xl mx-auto">Schedule a visit to experience our nurturing environment firsthand. We'd love to show you how we help every child thrive.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--green-primary)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--navy)] transition-colors active:scale-[0.97]">
              Book a Tour
            </Link>
            <a href="https://wa.me/966546653383" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-colors active:scale-[0.97]">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
