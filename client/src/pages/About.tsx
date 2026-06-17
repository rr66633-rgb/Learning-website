import { Target, Eye, Heart, Sparkles, Lightbulb, Users } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const IMG = "/manus-storage/IMG_4416_bb4c7e59.jpeg";
const IMG2 = "/manus-storage/IMG_4417_1d27fc77.jpeg";

export default function About() {
  return (
    <div>
      <SEOHead
        title="من نحن | مركز شجرة التعلم - قصتنا ورؤيتنا"
        description="تأسس مركز شجرة التعلم عام 2024 في الظهران بهدف توفير بيئة تعليمية آمنة ومحفزة للأطفال. نؤمن بأن لكل طفل قدرات فريدة تستحق الاكتشاف والرعاية."
        path="/about"
      />
      {/* Hero */}
      <section className="relative py-20 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">من نحن</h1>
          <p className="text-lg text-white/70 max-w-2xl">تعرّف على قصتنا ورؤيتنا ورسالتنا في تعليم الطفولة المبكرة.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-6">قصتنا</h2>
              <div className="space-y-4 text-[var(--navy)]/80 leading-relaxed text-lg">
                <p>
                  تأسس مركز شجرة التعلم عام ٢٠٢٤ في الظهران بهدف توفير بيئة تعليمية آمنة ومحفزة للأطفال، تجمع بين الرعاية واللعب والتعلم وفق أفضل الممارسات العالمية في الطفولة المبكرة.
                </p>
                <p>
                  نؤمن بأن لكل طفل قدرات فريدة تستحق الاكتشاف والرعاية، لذلك نوفر بيئة ثرية بالتجارب التعليمية التي تنمي الثقة بالنفس والإبداع وحب التعلم.
                </p>
                <p>
                  كما نحرص على بناء شراكة حقيقية مع الأسرة من خلال التواصل المستمر والمتابعة اليومية لضمان أفضل تجربة تعليمية للطفل.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src={IMG} alt="بيئة مركز شجرة التعلم" className="w-full h-full img-crop" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[var(--green-primary)]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[var(--green-primary)]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[var(--navy)] mb-4">رسالتنا</h3>
              <p className="text-[var(--navy)]/70 leading-relaxed text-lg">
                تقديم تجربة تعليمية متكاملة تراعي احتياجات كل طفل وتنمي مهاراته المعرفية والاجتماعية والعاطفية في بيئة آمنة ومحفزة، بالتعاون الوثيق مع الأسرة.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[var(--sky)]/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[var(--sky)]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[var(--navy)] mb-4">رؤيتنا</h3>
              <p className="text-[var(--navy)]/70 leading-relaxed text-lg">
                أن نكون المركز الرائد في تعليم الطفولة المبكرة بالمنطقة الشرقية، ونموذجاً يُحتذى به في تقديم تعليم نوعي يُعدّ أطفالاً واثقين ومبدعين ومستعدين للمستقبل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">قيمنا</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "الأمان", desc: "نوفر بيئة آمنة جسدياً ونفسياً لكل طفل." },
              { icon: Sparkles, title: "الإبداع", desc: "نشجع التفكير الإبداعي والاستكشاف الحر." },
              { icon: Lightbulb, title: "حب الاستطلاع", desc: "ننمي فضول الطفل الطبيعي وشغفه بالمعرفة." },
              { icon: Users, title: "الشراكة", desc: "نبني علاقة تعاونية مع الأسرة لصالح الطفل." },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 rounded-2xl bg-[var(--sand)]">
                <div className="w-12 h-12 rounded-full bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[var(--green-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--navy)]/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-[var(--sand)]">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[21/9]">
            <img src={IMG2} alt="أنشطة مركز شجرة التعلم" className="w-full h-full img-crop" style={{ objectPosition: "center 35%" }} />
          </div>
        </div>
      </section>
    </div>
  );
}
