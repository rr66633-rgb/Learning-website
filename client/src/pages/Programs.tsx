import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const IMG1 = "/manus-storage/IMG_4410_32804e7a.jpeg";
const IMG3 = "/manus-storage/IMG_4412_ae9147b3.jpeg";
const IMG4 = "/manus-storage/IMG_4413_6db9bfd0.jpeg";
const IMG5 = "/manus-storage/IMG_4414_4863c1f5.jpeg";

const programs = [
  {
    name: "الحضانة",
    age: "من سنتين",
    img: IMG1,
    desc: "برنامج مصمم خصيصاً للأطفال الصغار يركز على التطور الحسي والحركي والاجتماعي من خلال اللعب الموجه والأنشطة التفاعلية في بيئة آمنة ومحفزة.",
    features: ["تنمية المهارات الحركية الدقيقة والكبرى", "أنشطة حسية واستكشافية", "تعزيز المهارات الاجتماعية والتواصل", "روتين يومي منظم يبني الثقة"],
  },
  {
    name: "KG1",
    age: "٣+",
    img: IMG3,
    desc: "مرحلة انتقالية تبني أساساً قوياً في المهارات الأكاديمية المبكرة مع الحفاظ على متعة التعلم من خلال اللعب والاستكشاف.",
    features: ["تعريف بالحروف العربية والإنجليزية", "مفاهيم رياضية أساسية", "أنشطة فنية وإبداعية", "تنمية مهارات التواصل والاستماع"],
  },
  {
    name: "KG2",
    age: "٤+",
    img: IMG4,
    desc: "برنامج متقدم يعمّق المهارات الأكاديمية ويطور التفكير النقدي والإبداعي لدى الطفل استعداداً للمرحلة التالية.",
    features: ["قراءة وكتابة مبكرة", "مهارات حسابية متقدمة", "مشاريع علمية بسيطة", "تطوير مهارات حل المشكلات"],
  },
  {
    name: "KG3",
    age: "٥+",
    img: IMG5,
    desc: "المرحلة التحضيرية للمدرسة التي تضمن جاهزية الطفل أكاديمياً واجتماعياً وعاطفياً للانتقال بثقة إلى المرحلة الابتدائية.",
    features: ["إتقان القراءة والكتابة", "مهارات رياضية متقدمة", "التفكير العلمي والاستقصائي", "الاستعداد الكامل للمدرسة"],
  },
];

export default function Programs() {
  return (
    <div>
      <SEOHead
        title="البرامج التعليمية | مركز شجرة التعلم - الحضانة وKG1 وKG2 وKG3"
        description="برامج تعليمية متكاملة للأطفال من عمر سنتين حتى KG3 في الظهران. الحضانة وKG1 وKG2 وKG3 مع منهج شامل يركز على التطور الأكاديمي والاجتماعي."
        path="/programs"
        keywords="برامج حضانة الظهران, KG1 KG2 KG3 الظهران, روضة أطفال, منهج تعليمي أطفال, تعليم مبكر"
      />
      {/* Hero */}
      <section className="relative py-20 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">برامجنا التعليمية</h1>
          <p className="text-lg text-white/70 max-w-2xl">برامج متكاملة مصممة لكل مرحلة عمرية لتنمية مهارات طفلك بشكل شامل.</p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {programs.map((prog, i) => (
              <div key={prog.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block bg-[var(--sunshine)] text-[var(--navy)] text-sm font-bold px-4 py-1.5 rounded-full mb-4">العمر: {prog.age}</span>
                  <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-4">{prog.name}</h2>
                  <p className="text-[var(--navy)]/80 leading-relaxed mb-6 text-lg">{prog.desc}</p>
                  <ul className="space-y-3">
                    {prog.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[var(--navy)]/70">
                        <span className="w-2 h-2 rounded-full bg-[var(--green-primary)] mt-2.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img src={prog.img} alt={prog.name} className="w-full h-full img-crop" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--green-primary)]">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">هل تودّ معرفة المزيد عن برامجنا؟</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">نسعد بمساعدتك في اختيار البرنامج الأنسب لطفلك. تواصل معنا أو احجز زيارة.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--green-primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--sand)] transition-colors active:scale-[0.97]">
            تواصل معنا <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
