import { useEffect } from "react";
import { Heart, Lightbulb, Sparkles, Shield, BookOpen, Users } from "lucide-react";

const IMG = "/manus-storage/IMG_4416_bb4c7e59.jpeg";
const IMG2 = "/manus-storage/IMG_4417_1d27fc77.jpeg";

const values = [
  { icon: Heart, name: "Respect", nameAr: "الاحترام" },
  { icon: Sparkles, name: "Creativity", nameAr: "الإبداع" },
  { icon: Lightbulb, name: "Curiosity", nameAr: "حب الاستطلاع" },
  { icon: Shield, name: "Confidence", nameAr: "الثقة" },
  { icon: Users, name: "Kindness", nameAr: "اللطف" },
  { icon: BookOpen, name: "Lifelong Learning", nameAr: "التعلم مدى الحياة" },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | Learning Tree Center";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">About Us</h1>
          <p className="text-2xl text-white/80 font-bold" style={{ fontFamily: "var(--font-arabic)" }}>من نحن</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-2">Our Story</h2>
              <p className="text-lg text-[var(--green-primary)] font-bold mb-6" style={{ fontFamily: "var(--font-arabic)" }}>قصتنا</p>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                Founded in 2024, Learning Tree Center was born from a vision to create a world-class early years learning environment in Dhahran, Saudi Arabia. We believe that every child deserves a nurturing space where they can grow, explore, and develop confidence for the future.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                Our internationally inspired curriculum, combined with a deep respect for local values and culture, creates a unique educational experience that prepares children for academic success while fostering their natural curiosity and creativity.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                With NDNA Quality Counts accreditation, we maintain the highest international standards in early childhood education, ensuring every child receives the care and attention they deserve.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMG} alt="Learning Tree Center environment" className="w-full h-full img-crop" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[var(--navy)] mb-2">Our Mission</h3>
              <p className="text-[var(--green-primary)] font-bold mb-4" style={{ fontFamily: "var(--font-arabic)" }}>رسالتنا</p>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                To provide a safe, nurturing, and stimulating environment where every child can develop holistically — intellectually, socially, emotionally, and physically — preparing them to become confident, curious, and compassionate lifelong learners.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[var(--navy)] mb-2">Our Vision</h3>
              <p className="text-[var(--green-primary)] font-bold mb-4" style={{ fontFamily: "var(--font-arabic)" }}>رؤيتنا</p>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                To be the leading early years education center in the Eastern Province, recognized for excellence in child development, innovative teaching practices, and strong family partnerships that shape the leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--navy)] mb-3">Our Values</h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>قيمنا</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((val) => (
              <div key={val.name} className="bg-[var(--sand)] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[var(--green-primary)]/10 flex items-center justify-center mx-auto mb-3">
                  <val.icon className="w-6 h-6 text-[var(--green-primary)]" />
                </div>
                <h4 className="text-sm font-bold text-[var(--navy)]">{val.name}</h4>
                <p className="text-xs text-[var(--green-primary)] font-semibold mt-1" style={{ fontFamily: "var(--font-arabic)" }}>{val.nameAr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-10">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[21/9]">
            <img src={IMG2} alt="Learning Tree Center activities" className="w-full h-full object-cover" style={{ objectPosition: 'center 55%' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
