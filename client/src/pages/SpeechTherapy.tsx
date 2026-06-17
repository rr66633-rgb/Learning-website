import { Link } from "wouter";
import { ArrowLeft, Search, Target, UserCheck, Handshake } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const IMG = "/manus-storage/IMG_4418_2d702f2a.jpeg";

const services = [
  { icon: Search, title: "التقييم الشامل", desc: "تقييم دقيق لمهارات النطق واللغة لتحديد احتياجات كل طفل ووضع خطة تدخل مخصصة." },
  { icon: Target, title: "التدخل العلاجي", desc: "جلسات علاجية مبنية على أحدث الأدلة العلمية لمعالجة اضطرابات النطق والطلاقة واللغة." },
  { icon: UserCheck, title: "الدعم الفردي", desc: "جلسات فردية مع أخصائيين مؤهلين متخصصين في تطور التواصل في مرحلة الطفولة المبكرة." },
  { icon: Handshake, title: "التعاون مع الأسرة", desc: "تقارير دورية وإرشادات منزلية لضمان استمرارية الدعم بين الجلسات العلاجية والحياة اليومية." },
];

export default function SpeechTherapy() {
  return (
    <div>
      <SEOHead
        title="علاج النطق واللغة للأطفال | مركز شجرة التعلم الظهران"
        description="برنامج علاج نطق ولغة متخصص للأطفال في الظهران. تقييم شامل وجلسات علاجية فردية مع أخصائيين مؤهلين لمعالجة اضطرابات النطق والطلاقة واللغة."
        path="/speech-therapy"
        keywords="علاج نطق أطفال الظهران, أخصائي نطق, علاج لغة أطفال, تأخر نطق, speech therapy Dhahran"
      />
      {/* Hero */}
      <section className="relative py-20 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">علاج النطق واللغة</h1>
          <p className="text-lg text-white/70 max-w-2xl">خدمات متخصصة لدعم تطور التواصل واللغة لدى طفلك.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">دعم متخصص لتطور طفلك اللغوي</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4 text-lg">
                يقدم مركز شجرة التعلم خدمات علاج النطق واللغة من خلال أخصائيين مؤهلين يعملون بشكل فردي مع كل طفل لتقييم احتياجاته ووضع خطة علاجية مخصصة.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4 text-lg">
                نعمل بالتنسيق مع المعلمات والأسرة لضمان دعم شامل ومتكامل يساعد الطفل على التقدم في مهارات التواصل والنطق.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed text-lg">
                سواء كان طفلك يحتاج دعماً في النطق أو فهم اللغة أو التعبير أو التواصل الاجتماعي، فريقنا هنا لمساعدته.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMG} alt="جلسة علاج نطق في مركز شجرة التعلم" className="w-full h-full img-crop" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">منهجيتنا</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[var(--sky)]/20 flex items-center justify-center mb-5">
                  <svc.icon className="w-7 h-7 text-[var(--navy)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{svc.title}</h3>
                <p className="text-[var(--navy)]/70 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-10 text-center">خدماتنا تشمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "تأخر النطق واللغة",
              "صعوبات النطق والإخراج الصوتي",
              "اضطرابات الطلاقة (التأتأة)",
              "صعوبات البلع والتغذية",
              "تطوير المفردات والجمل",
              "دعم التواصل الاجتماعي",
            ].map((service) => (
              <div key={service} className="bg-[var(--sand)] rounded-xl p-6">
                <p className="font-bold text-[var(--navy)]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--green-primary)]">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">هل تحتاج استشارة لطفلك؟</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">تواصل معنا لحجز جلسة تقييم مع أخصائي النطق واللغة.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--green-primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--sand)] transition-colors active:scale-[0.97]">
            احجز جلسة تقييم <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
