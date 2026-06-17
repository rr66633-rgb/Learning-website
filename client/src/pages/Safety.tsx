import { useEffect } from "react";
import { Shield, Camera, UserCheck, HeartPulse, Lock } from "lucide-react";

const IMG = "/manus-storage/IMG_4421_a4293a94.jpeg";

const safetyFeatures = [
  { icon: Lock, title: "Secure Environment", titleAr: "بيئة آمنة", desc: "Controlled access entry systems with digital check-in/check-out procedures for authorized persons only." },
  { icon: Camera, title: "Parent Monitoring Cameras", titleAr: "كاميرات مراقبة للأهل", desc: "Live camera access for parents to check on their children at any time during the day, providing complete peace of mind." },
  { icon: UserCheck, title: "Qualified Staff", titleAr: "كادر مؤهل", desc: "All staff members are thoroughly vetted, trained in child safety, and hold relevant early childhood qualifications." },
  { icon: HeartPulse, title: "Health & Hygiene", titleAr: "الصحة والنظافة", desc: "Rigorous cleaning protocols, regular health checks, and strict hygiene procedures throughout the center." },
  { icon: Shield, title: "Child Safeguarding", titleAr: "حماية الطفل", desc: "Comprehensive safeguarding policies aligned with international best practices to protect every child in our care." },
];

export default function Safety() {
  useEffect(() => {
    document.title = "Safety & Security | Learning Tree Center";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Safety & Security</h1>
          <p className="text-2xl text-white/80 font-bold" style={{ fontFamily: "var(--font-arabic)" }}>الأمان والسلامة</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img src={IMG} alt="Safe environment at Learning Tree Center" className="w-full h-full img-crop" />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">Your Child's Safety is Our Priority</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                At Learning Tree Center, nothing is more important than the safety and wellbeing of every child in our care. We have implemented comprehensive security measures and protocols that meet the highest international standards.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                From our secure entry systems to our qualified staff and rigorous health procedures, every aspect of our center is designed to create a safe haven where children can learn, play, and grow with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">Our Safety Measures</h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>إجراءات السلامة لدينا</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-[var(--green-primary)]" />
                </div>
                <h3 className="text-base font-bold text-[var(--navy)] mb-1">{feat.title}</h3>
                <p className="text-sm font-semibold text-[var(--green-primary)] mb-3" style={{ fontFamily: "var(--font-arabic)" }}>{feat.titleAr}</p>
                <p className="text-sm text-[var(--navy)]/70 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
