import { useEffect } from "react";
import { Smartphone, Camera, MessageSquare, Bell, Heart } from "lucide-react";

const IMG = "/manus-storage/IMG_4420_0b7e428c.jpeg";

const features = [
  { icon: Smartphone, title: "Illumine App", titleAr: "تطبيق إلوميني", desc: "Stay connected with your child's day through our dedicated parent communication app, available on iOS and Android." },
  { icon: Camera, title: "Daily Updates & Photos", titleAr: "تحديثات وصور يومية", desc: "Receive real-time photos, activity reports, and learning milestones throughout the day." },
  { icon: MessageSquare, title: "Secure Communication", titleAr: "تواصل آمن", desc: "Direct messaging with teachers and staff through a secure, private platform." },
  { icon: Bell, title: "Observations & Reports", titleAr: "ملاحظات وتقارير", desc: "Detailed developmental observations and progress reports shared regularly with parents." },
  { icon: Heart, title: "Parent Engagement", titleAr: "مشاركة أولياء الأمور", desc: "Regular workshops, events, and opportunities to participate in your child's learning journey." },
];

export default function ParentExperience() {
  useEffect(() => {
    document.title = "Parent Experience | Learning Tree Center";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Parent Experience</h1>
          <p className="text-2xl text-white/80 font-bold" style={{ fontFamily: "var(--font-arabic)" }}>تجربة أولياء الأمور</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">Partners in Your Child's Journey</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                At Learning Tree Center, we believe that strong parent-school partnerships are essential for every child's success. We keep you informed, involved, and connected every step of the way.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">
                Through our Illumine parent app, you'll never miss a moment of your child's day. From meal times to learning activities, creative projects to social interactions — you'll have a window into their world.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                Our parent monitoring cameras provide additional peace of mind, allowing you to check in on your child at any time during the day.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMG} alt="Parent engagement at Learning Tree Center" className="w-full h-full img-crop" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">How We Keep You Connected</h2>
            <p className="text-xl text-[var(--green-primary)] font-bold" style={{ fontFamily: "var(--font-arabic)" }}>كيف نبقيكم على تواصل</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--blush)] flex items-center justify-center mb-4">
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
