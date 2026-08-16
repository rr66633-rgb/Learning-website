import { Link } from "wouter";
import { useState } from "react";
import { GraduationCap, Shield, Heart, BookOpen, Users, Star, ArrowLeft, Quote, ChevronDown } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/DcbArOPJAhdOQizz.jpeg";
const LOGO_FULL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/GkauvtqFBtFbtgzG.png";
const IMG1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/lTetZTcFKraKwhqs.jpeg";
const IMG2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/AtGliPwzZyTrtyIj.jpeg";
const IMG3 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/PEHFYAqHdiNHtvOz.jpeg";
const IMG4 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/VNpYtNAOlMIUuQwj.jpeg";
const IMG5 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/hstFNOFgqgZiSGjt.jpeg";
const IMG6 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/CuZzopOGSrRKxPlR.jpeg";

const whyChooseUs = [
  { icon: GraduationCap, title: "منهج EYFS البريطاني", desc: "نعتمد منهج السنوات المبكرة البريطاني الذي يركز على التعلم باللعب والاستكشاف." },
  { icon: Shield, title: "بيئة آمنة ومراقبة", desc: "كاميرات مراقبة متاحة لأولياء الأمور ونظام دخول إلكتروني آمن." },
  { icon: Heart, title: "كادر تربوي مؤهل", desc: "معلمات متخصصات في الطفولة المبكرة يحرصن على النمو العاطفي والأكاديمي." },
  { icon: BookOpen, title: "تعلم باللعب والاستكشاف", desc: "نهج متوازن ينمّي الإبداع والتفكير النقدي والمهارات الاجتماعية." },
  { icon: Users, title: "شراكة مع الأسرة", desc: "تحديثات يومية عبر تطبيق Illumine بالصور والتقارير والملاحظات." },
  { icon: Star, title: "رعاية ممتدة", desc: "برنامج رعاية ما بعد الدوام حتى الساعة 6:30 مساءً لراحة الأسرة." },
];

const programs = [
  { name: "مرحلة التمهيدي", age: "من عمر سنتين", img: IMG1 },
  { name: "KG1", age: "من عمر 3 سنوات", img: IMG3 },
  { name: "KG2", age: "من عمر 4 سنوات", img: IMG4 },
  { name: "KG3", age: "من عمر 5 سنوات", img: IMG5 },
];

export default function Home() {

  return (
    <div>
      <SEOHead
        title="مركز شجرة التعلم | حضانة وروضة أطفال بالظهران – حي أجيال"
        description="مركز شجرة التعلم – حضانة وروضة أطفال بالظهران. منهج EYFS البريطاني للأطفال من عمر سنتين إلى 6 سنوات. بيئة تعليمية آمنة ومحفزة تنمّي ثقة الطفل ومهاراته."
        path="/"
        keywords="حضانة الظهران, روضة أطفال الظهران, مركز شجرة التعلم, Learning Tree Center, منهج EYFS, تعليم الطفولة المبكرة, KG1 KG2 KG3 الظهران, حي أجيال, علاج نطق أطفال"
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="أطفال مركز شجرة التعلم في نشاط استكشافي" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--navy)]/80 via-[var(--navy)]/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <img src={LOGO_FULL} alt="شعار مركز شجرة التعلم" className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto mb-8 drop-shadow-lg" />
            <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-2">حضانة وروضة أطفال بالظهران – حي أجيال</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              منهج EYFS البريطاني للأطفال من عمر سنتين إلى 6 سنوات
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              بيئة تعليمية آمنة ومحفزة تنمّي ثقة الطفل ومهاراته من خلال التعلم باللعب والاستكشاف.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--green-primary)] text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-[var(--green-light)] transition-colors active:scale-[0.97]">
                احجز جولة تعريفية
                <ArrowLeft className="w-5 h-5" />
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
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">منهج EYFS البريطاني المعتمد</h2>
              <p className="text-white/80 mt-3 max-w-lg">نطبّق منهج السنوات المبكرة البريطاني (Early Years Foundation Stage) الذي يعتمد على التعلم باللعب والاستكشاف ويراعي الفروق الفردية لكل طفل، مع اعتماد NDNA للجودة.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-extrabold text-white">EYFS</div>
                <div className="text-sm text-white/80 mt-1">السنوات المبكرة</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-extrabold text-white">NDNA</div>
                <div className="text-sm text-white/80 mt-1">اعتماد الجودة</div>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">
              آراء أولياء الأمور
            </h2>
            <p className="text-[var(--navy)]/60 max-w-lg mx-auto">
              ثقة العائلات هي أغلى ما نملك — إليكم بعض تجاربهم معنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "سما",
                text: "من أفضل وأحسن المراكز. تنظيم وترتيب وحب وحرص واضح بالأطفال بكل تفصيلة. إبداعاتهم وفعالياتهم وتعاملهم مع الأطفال احترافي.",
                rating: 5,
              },
              {
                name: "رؤى الغامدي",
                text: "مكان رائع جداً، حرص وعناية وحب واهتمام، محضن دافئ وبرامج ممتعة ومفيدة. بنتي من أول أسبوع تعلقت في المكان.",
                rating: 5,
              },
              {
                name: "عبدالإله القرني",
                text: "تجربة لحوالي سنتين معاهم وأوصي بهم دائماً. برنامج متكامل وكادر مهني متمكن ومنشأة مجهزة وبيئة رائعة للأطفال.",
                rating: 5,
              },
              {
                name: "ألين",
                text: "المركز يستحق كل التقدير. واضح جداً التطور اللي يحققه الأطفال يوم بعد يوم، وبيئة المركز تخليهم يحبون التعلم ويستفيدون بطريقة ممتعة.",
                rating: 5,
              },
              {
                name: "بشرى الضفيري",
                text: "الله يعطيكم العافية عالمجهود اللي تبذلونه. حبيت الاهتمام الكبير بالأطفال وتنوع النشاطات والفعاليات والرحلات.",
                rating: 5,
              },
              {
                name: "زهرة",
                text: "من أروع الحضانات من ناحية الاهتمام بالطفل والتعليم. يستاهلون الشكر والتقدير ولو في أكثر من خمس نجوم. طفلك في أمان وعلى أيدي معلمات كفؤ.",
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-[var(--sand)] rounded-2xl p-6 relative hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-[var(--green-primary)]/20 absolute top-4 left-4" />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[var(--sunshine)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[var(--navy)]/80 leading-relaxed mb-4">
                  {review.text}
                </p>
                <p className="text-sm font-bold text-[var(--navy)]">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://maps.app.goo.gl/LearningTreeDhahran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--green-primary)] font-bold hover:gap-3 transition-all"
            >
              عرض جميع التقييمات على خرائط جوجل <ArrowLeft className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Social Media Section */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-4">
            تابعوا يوميات أطفالنا
          </h2>
          <p className="text-[var(--navy)]/70 mb-8 max-w-lg mx-auto text-lg">
            شاركونا لحظات التعلم والإبداع والمرح اليومية عبر منصات التواصل الاجتماعي.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://linktr.ee/Learningtreeksa" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all" aria-label="Instagram">
              <svg className="w-7 h-7 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://linktr.ee/Learningtreeksa" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all" aria-label="Snapchat">
              <svg className="w-7 h-7 text-[#FFFC00]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.959-.289.105-.06.21-.09.315-.09.21 0 .42.09.585.24.225.21.33.495.285.78-.06.39-.39.72-.78.9-.195.09-.42.15-.66.21-.195.045-.42.105-.585.165-.225.09-.405.24-.525.42-.18.27-.18.615-.015.885.255.39.54.75.855 1.08.45.45.975.855 1.56 1.17.375.195.675.315.855.375.165.06.3.12.405.18.315.18.51.465.555.78.06.39-.12.765-.465.975-.51.3-1.29.45-2.34.45-.18 0-.36-.015-.54-.03-.18-.015-.36-.03-.54-.03-.255 0-.51.03-.765.09-.21.06-.42.15-.615.27-.3.195-.525.45-.675.75-.21.42-.39.855-.54 1.29-.075.21-.15.42-.24.615-.27.585-.615.96-1.065 1.11-.21.075-.435.105-.66.105-.3 0-.615-.06-.93-.165-.39-.12-.81-.195-1.245-.195-.435 0-.855.075-1.245.195-.315.105-.63.165-.93.165-.225 0-.45-.03-.66-.105-.45-.15-.795-.525-1.065-1.11-.09-.195-.165-.405-.24-.615-.15-.435-.33-.87-.54-1.29-.15-.3-.375-.555-.675-.75-.195-.12-.405-.21-.615-.27-.255-.06-.51-.09-.765-.09-.18 0-.36.015-.54.03-.18.015-.36.03-.54.03-1.05 0-1.83-.15-2.34-.45-.345-.21-.525-.585-.465-.975.045-.315.24-.6.555-.78.105-.06.24-.12.405-.18.18-.06.48-.18.855-.375.585-.315 1.11-.72 1.56-1.17.315-.33.6-.69.855-1.08.165-.27.165-.615-.015-.885-.12-.18-.3-.33-.525-.42-.165-.06-.39-.12-.585-.165-.24-.06-.465-.12-.66-.21-.39-.18-.72-.51-.78-.9-.045-.285.06-.57.285-.78.165-.15.375-.24.585-.24.105 0 .21.03.315.09.3.165.66.27.959.289.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.653 1.069 11.009.793 12 .793h.206z"/></svg>
            </a>
            <a href="https://linktr.ee/Learningtreeksa" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all" aria-label="TikTok">
              <svg className="w-7 h-7 text-[#000000]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href="https://linktr.ee/Learningtreeksa" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all" aria-label="Twitter">
              <svg className="w-7 h-7 text-[#000000]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
          <a
            href="https://linktr.ee/Learningtreeksa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--green-primary)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--navy)] transition-colors active:scale-[0.97] shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7.953 15.066l-.038.002a.975.975 0 0 1-.935-.7l-.002-.006-1.558-5.153a.976.976 0 0 1 .648-1.222l.002-.001h.014a.976.976 0 0 1 1.217.649l1.092 3.56 2.313-2.313a.976.976 0 0 1 1.38 1.38l-2.312 2.313 3.559 1.092a.976.976 0 0 1-.573 1.866l-5.153-1.558a.953.953 0 0 1-.652-.909zm8.091 0l.038.002a.975.975 0 0 0 .935-.7l.002-.006 1.558-5.153a.976.976 0 0 0-.648-1.222l-.002-.001h-.014a.976.976 0 0 0-1.217.649l-1.092 3.56-2.313-2.313a.976.976 0 0 0-1.38 1.38l2.312 2.313-3.559 1.092a.976.976 0 0 0 .573 1.866l5.153-1.558a.953.953 0 0 0 .652-.909zM12 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 12 0z"/></svg>
            عرض جميع منصات التواصل
          </a>
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

/* FAQ Section Component */
const faqItems = [
  {
    q: "ما هي الأعمار المقبولة في المركز؟",
    a: "نستقبل الأطفال من عمر سنتين حتى 6 سنوات، موزعين على أربع مراحل: التمهيدي (سنتين)، KG1 (3 سنوات)، KG2 (4 سنوات)، KG3 (5 سنوات).",
  },
  {
    q: "ما هو المنهج المتبع؟",
    a: "نعتمد منهج EYFS البريطاني (Early Years Foundation Stage) الذي يركز على التعلم من خلال اللعب والاستكشاف، مع مراعاة الفروق الفردية لكل طفل.",
  },
  {
    q: "ما هي ساعات الدوام؟",
    a: "الدوام الأساسي من الساعة 7:00 صباحاً حتى 1:00 ظهراً. كما نوفر برنامج رعاية ممتدة حتى الساعة 6:30 مساءً.",
  },
  {
    q: "هل يوجد خدمة نقل؟",
    a: "نعم، نوفر خدمة نقل بحافلات مجهزة ومراقبة لتغطية مناطق الظهران والخبر والدمام.",
  },
  {
    q: "كيف أتابع يوميات طفلي؟",
    a: "نستخدم تطبيق Illumine الذي يتيح لأولياء الأمور متابعة يوميات أطفالهم بالصور والتقارير والملاحظات اليومية، بالإضافة إلى كاميرات مراقبة متاحة.",
  },
  {
    q: "هل يمكنني زيارة المركز قبل التسجيل؟",
    a: "بالتأكيد! نرحب بزيارتكم في أي وقت خلال ساعات الدوام. يمكنكم حجز جولة تعريفية عبر صفحة التواصل أو الاتصال المباشر.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[var(--sand)]">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">
            الأسئلة الشائعة
          </h2>
          <p className="text-[var(--navy)]/60 max-w-lg mx-auto">
            إجابات على أكثر الأسئلة التي تصلنا من أولياء الأمور
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-right gap-4"
              >
                <span className="text-base font-bold text-[var(--navy)]">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--green-primary)] shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-[var(--navy)]/70 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
