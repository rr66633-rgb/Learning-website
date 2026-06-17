import { useEffect } from "react";
import { Search, Target, UserCheck, Handshake } from "lucide-react";

const IMG = "/manus-storage/IMG_4418_2d702f2a.jpeg";

const services = [
  { icon: Search, title: "Assessment", titleAr: "التقييم", desc: "Comprehensive speech and language assessments to identify each child's unique needs and create personalized intervention plans." },
  { icon: Target, title: "Intervention", titleAr: "التدخل العلاجي", desc: "Evidence-based therapy sessions tailored to address articulation, fluency, voice, and language disorders in a supportive environment." },
  { icon: UserCheck, title: "Individual Support", titleAr: "الدعم الفردي", desc: "One-on-one sessions with qualified speech-language pathologists who specialize in early childhood communication development." },
  { icon: Handshake, title: "Parent Collaboration", titleAr: "التعاون مع الأهل", desc: "Regular progress reports and home practice strategies to ensure consistent support between therapy sessions and daily life." },
];

export default function SpeechTherapy() {
  useEffect(() => {
    document.title = "Speech & Language Therapy | Learning Tree Center";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Speech & Language Therapy</h1>
          <p className="text-2xl text-white/80 font-bold" style={{ fontFamily: "var(--font-arabic)" }}>علاج النطق واللغة</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">Supporting Every Child's Voice</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                At Learning Tree Center, we understand that communication is the foundation of learning. Our dedicated Speech & Language Therapy program provides professional support for children who need additional help developing their communication skills.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                Our qualified speech-language pathologists work closely with classroom teachers and parents to create a seamless support system that helps each child reach their full communication potential.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                Whether your child needs support with articulation, language comprehension, expressive language, or social communication, our team is here to help them find their voice.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMG} alt="Speech therapy session at Learning Tree Center" className="w-full h-full img-crop" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">Our Approach</h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>منهجيتنا</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[var(--sky)]/20 flex items-center justify-center mb-5">
                  <svc.icon className="w-7 h-7 text-[var(--navy)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-1">{svc.title}</h3>
                <p className="text-sm font-semibold text-[var(--green-primary)] mb-3" style={{ fontFamily: "var(--font-arabic)" }}>{svc.titleAr}</p>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
