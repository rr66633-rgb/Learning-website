import { Shield, Camera, UserCheck, HeartPulse, Lock } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const IMG = "/manus-storage/IMG_4421_a4293a94.jpeg";

const safetyFeatures = [
  { icon: Lock, title: "بيئة آمنة", desc: "أنظمة دخول محكمة مع إجراءات تسجيل دخول وخروج رقمية للأشخاص المصرح لهم فقط." },
  { icon: Camera, title: "كاميرات مراقبة لأولياء الأمور", desc: "إمكانية الوصول المباشر للكاميرات لمتابعة أطفالكم في أي وقت خلال اليوم." },
  { icon: UserCheck, title: "كادر مؤهل", desc: "جميع الموظفين مؤهلون ومدربون على سلامة الأطفال ويحملون شهادات متخصصة في الطفولة المبكرة." },
  { icon: HeartPulse, title: "الصحة والنظافة", desc: "بروتوكولات تنظيف صارمة وفحوصات صحية دورية وإجراءات نظافة شاملة في جميع أنحاء المركز." },
  { icon: Shield, title: "حماية الطفل", desc: "سياسات حماية شاملة متوافقة مع أفضل الممارسات الدولية لحماية كل طفل في رعايتنا." },
];

export default function Safety() {
  return (
    <div>
      <SEOHead
        title="الأمان والسلامة | مركز شجرة التعلم - بيئة آمنة لطفلك"
        description="أعلى معايير الأمان والسلامة في مركز شجرة التعلم. كاميرات مراقبة لأولياء الأمور، أنظمة دخول محكمة، وكادر مؤهل ومدرب."
        path="/safety"
      />
      {/* Hero */}
      <section className="relative py-20 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">الأمان والسلامة</h1>
          <p className="text-lg text-white/70 max-w-2xl">سلامة طفلك أولويتنا القصوى في كل تفصيل.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img src={IMG} alt="بيئة آمنة في مركز شجرة التعلم" className="w-full h-full img-crop" />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">سلامة طفلك أولويتنا</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4 text-lg">
                لا شيء أهم من سلامة ورفاهية كل طفل في رعايتنا. طبّقنا إجراءات أمنية شاملة وبروتوكولات تلبي أعلى المعايير الدولية.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed text-lg">
                من أنظمة الدخول الآمنة إلى الكادر المؤهل وإجراءات الصحة الصارمة، كل جانب في مركزنا مصمم لتوفير ملاذ آمن حيث يمكن للأطفال التعلم واللعب والنمو بثقة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">إجراءات السلامة لدينا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-[var(--green-primary)]" />
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
