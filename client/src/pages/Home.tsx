import { useEffect } from "react";
import { Link } from "wouter";
import { GraduationCap, Shield, Heart, BookOpen, Users, Star, ArrowLeft } from "lucide-react";

const HERO_IMG = "/manus-storage/IMG_4424_1a952bea.jpeg";
const LOGO_FULL = "/manus-storage/logo-full_496ed816.png";
const IMG1 = "/manus-storage/IMG_4410_32804e7a.jpeg";
const IMG2 = "/manus-storage/IMG_4411_8c1e7d44.jpeg";
const IMG3 = "/manus-storage/IMG_4412_ae9147b3.jpeg";
const IMG4 = "/manus-storage/IMG_4413_6db9bfd0.jpeg";
const IMG5 = "/manus-storage/IMG_4414_4863c1f5.jpeg";
const IMG6 = "/manus-storage/IMG_4415_a8f0c1b3.jpeg";

const whyChooseUs = [
  { icon: GraduationCap, title: "معتمدون دولياً", desc: "حاصلون على اعتماد NDNA للجودة في تعليم الطفولة المبكرة." },
  { icon: Shield, title: "بيئة آمنة", desc: "كاميرات مراقبة على مدار الساعة مع إمكانية وصول أولياء الأمور ونظام تسجيل دخول آمن." },
  { icon: Heart, title: "بيئة حاضنة", desc: "معلمات مؤهلات يحرصن على النمو العاطفي والأكاديمي لكل طفل." },
  { icon: BookOpen, title: "منهج شامل", desc: "نهج متوازن يغطي القراءة والحساب والتواصل والمهارات الاجتماعية." },
  { icon: Users, title: "شراكة مع الأسرة", desc: "تحديثات يومية عبر تطبيق Illumine مع صور وملاحظات وإنجازات الطفل." },
  { icon: Star, title: "برامج ممتدة", desc: "رعاية ممتدة حتى الساعة ٦:٣٠ مساءً ونادي مسائي ودعم الواجبات." },
];

const programs = [
  { name: "الحضانة", age: "من سنتين", img: IMG1 },
  { name: "KG1", age: "٣+", img: IMG3 },
  { name: "KG2", age: "٤+", img: IMG4 },
  { name: "KG3", age: "٥+", img: IMG5 },
];

export default function Home() {
  useEffect(() => {
    document.title = "مركز شجرة التعلم | رعاية وتعليم الطفولة المبكرة في الظهران";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="أطفال مركز شجرة التعلم في نشاط استكشافي" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--navy)]/80 via-[var(--navy)]/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <img src={LOGO_FULL} alt="شعار مركز شجرة التعلم" className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto mb-8 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              ننمي جيلاً واثقاً ومستعداً للمستقبل
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              بيئة تعليمية آمنة ومحفزة للأطفال من عمر سنتين حتى KG3 في الظهران، تجمع بين الرعاية واللعب والتعلم وفق أفضل الممارسات العالمية.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--green-primary)] text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-[var(--green-light)] transition-colors active:scale-[0.97]">
                سجّل الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-7 py-3.5 rounded-full font-bold text-base hover:bg-white/25 transition-colors">
                احجز زيارة
              </Link>
              <a href="https://wa.me/966546653383" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-[#20bd5a] transition-colors active:scale-[0.97]">
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">
              لماذا تختار العائلات مركز شجرة التعلم
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[var(--green-primary)]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[var(--green-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">
              برامجنا التعليمية
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <Link key={prog.name} href="/programs" className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300">
                <img src={prog.img} alt={prog.name} className="w-full h-full img-crop group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-[var(--sunshine)] text-[var(--navy)] text-xs font-bold px-3 py-1 rounded-full mb-2">{prog.age}</span>
                  <h3 className="text-xl font-bold text-white">{prog.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programs" className="inline-flex items-center gap-2 text-[var(--green-primary)] font-bold hover:gap-3 transition-all">
              عرض جميع البرامج <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-[var(--green-primary)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">معتمدون من NDNA</h2>
              <p className="text-white/80 mt-3 max-w-lg">حاصلون على اعتماد الجمعية الوطنية لحضانات الأطفال (NDNA) لتحقيق أعلى المعايير الدولية في تعليم الطفولة المبكرة والسلامة ورعاية الأطفال.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">بيئتنا التعليمية</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[IMG1, IMG2, IMG3, IMG4, IMG5, IMG6].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-lg transition-shadow">
                <img src={img} alt={`بيئة مركز شجرة التعلم ${i + 1}`} className="w-full h-full img-crop hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            هل أنتم مستعدون للانضمام إلى عائلتنا؟
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            نرحب بزيارتكم للتعرف على بيئتنا التعليمية عن قرب. نسعد بمساعدتكم في اختيار البرنامج الأنسب لطفلكم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--green-primary)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--green-light)] transition-colors active:scale-[0.97]">
              احجز زيارة
            </Link>
            <a href="https://wa.me/966546653383" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-colors active:scale-[0.97]">
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
