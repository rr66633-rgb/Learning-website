import { Clock, BookOpen, Palette, BookMarked, Sun, Users } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const IMG = "https://d36hbw14aib5lz.cloudfront.net/310519663757302822/6L2CpNH9bCGNgbsvFwL2vd/IMG_4419_f5cf9230.jpeg";

const features = [
  { icon: Clock, title: "رعاية ممتدة حتى ٦:٣٠ مساءً", desc: "أوقات استلام مرنة تناسب جداول الأسر المشغولة." },
  { icon: Sun, title: "النادي المسائي", desc: "أنشطة ما بعد المدرسة ممتعة للأطفال في بيئة آمنة ومراقبة." },
  { icon: BookMarked, title: "دعم الواجبات", desc: "وقت مخصص وإرشاد لإنجاز الواجبات المدرسية مع مشرفين مؤهلين." },
  { icon: Palette, title: "مشاريع إبداعية", desc: "أنشطة فنية وحرفية تنمي الخيال والمهارات الحركية الدقيقة." },
  { icon: BookOpen, title: "دعم القراءة", desc: "جلسات قراءة موجهة لبناء مهارات القراءة وتعزيز حب الكتب." },
  { icon: Users, title: "أنشطة منظمة", desc: "أنشطة جماعية مناسبة للعمر تعزز العمل الجماعي والتطور الاجتماعي." },
];

export default function ExtendedCare() {
  return (
    <div>
      <SEOHead
        title="الرعاية الممتدة والنادي المسائي | مركز شجرة التعلم"
        description="خدمة الرعاية الممتدة حتى الساعة 6:30 مساءً مع نادي مسائي ودعم الواجبات وأنشطة إبداعية للأطفال في الظهران."
        path="/extended-care"
      />
      {/* Hero */}
      <section className="relative py-20 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">الرعاية الممتدة</h1>
          <p className="text-lg text-white/70 max-w-2xl">برنامج رعاية ما بعد الدوام لتوفير بيئة آمنة ومحفزة لطفلك.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img src={IMG} alt="أنشطة الرعاية الممتدة في مركز شجرة التعلم" className="w-full h-full img-crop" />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">ما بعد اليوم الدراسي</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4 text-lg">
                ندرك أن الأسر الحديثة تحتاج حلول رعاية مرنة. برنامج الرعاية الممتدة يوفر بيئة آمنة وغنية للأطفال بعد ساعات الدوام، مما يمنح الأهل راحة البال بينما يستمر أطفالهم في التعلم والنمو.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed text-lg">
                من متابعة الواجبات إلى المشاريع الإبداعية واللعب المنظم، برنامجنا المسائي يضمن أن كل لحظة هادفة وممتعة لطفلك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">ما نقدمه</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--sunshine)]/30 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-[var(--navy)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-3">{feat.title}</h3>
                <p className="text-[var(--navy)]/70 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
