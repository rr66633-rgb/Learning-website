import { useEffect } from "react";
import { Clock, BookOpen, Palette, BookMarked, Sun, Users } from "lucide-react";

const IMG = "/manus-storage/IMG_4419_f5cf9230.jpeg";

const features = [
  { icon: Clock, title: "Extended Care until 6:30 PM", titleAr: "رعاية ممتدة حتى ٦:٣٠ مساءً", desc: "Flexible pick-up times to accommodate busy family schedules." },
  { icon: Sun, title: "Evening Club", titleAr: "النادي المسائي", desc: "Engaging after-school activities for school-age students in a supervised environment." },
  { icon: BookMarked, title: "Homework Support", titleAr: "دعم الواجبات", desc: "Dedicated time and guidance for completing homework with qualified supervisors." },
  { icon: Palette, title: "Creative Projects", titleAr: "مشاريع إبداعية", desc: "Art, craft, and creative expression activities that develop imagination and fine motor skills." },
  { icon: BookOpen, title: "Reading Support", titleAr: "دعم القراءة", desc: "Guided reading sessions to build literacy skills and foster a love of books." },
  { icon: Users, title: "Structured Activities", titleAr: "أنشطة منظمة", desc: "Age-appropriate group activities that promote teamwork and social development." },
];

export default function ExtendedCare() {
  useEffect(() => {
    document.title = "Extended Care | Learning Tree Center";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Extended Care</h1>
          <p className="text-2xl text-white/80 font-bold" style={{ fontFamily: "var(--font-arabic)" }}>الرعاية الممتدة</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img src={IMG} alt="Extended care activities at Learning Tree Center" className="w-full h-full img-crop" />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">Beyond the School Day</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                We understand that modern families need flexible childcare solutions. Our Extended Care program provides a safe, enriching environment for children beyond regular school hours, giving parents peace of mind while their children continue to learn and grow.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                From homework supervision to creative projects and structured play, our evening program ensures that every moment is purposeful and enjoyable for your child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">What We Offer</h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>ما نقدمه</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--sunshine)]/30 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-[var(--navy)]" />
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
