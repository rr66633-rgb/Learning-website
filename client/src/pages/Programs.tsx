import { useEffect } from "react";
import { BookOpen, MessageCircle, Users, Activity, Brain } from "lucide-react";

const IMG1 = "/manus-storage/IMG_4410_32804e7a.jpeg";
const IMG2 = "/manus-storage/IMG_4411_8c1e7d44.jpeg";
const IMG3 = "/manus-storage/IMG_4412_ae9147b3.jpeg";
const IMG4 = "/manus-storage/IMG_4413_6db9bfd0.jpeg";
const IMG5 = "/manus-storage/IMG_4414_4863c1f5.jpeg";

const programs = [
  {
    name: "Early Years Program",
    nameAr: "برنامج السنوات المبكرة",
    age: "Age 2+",
    img: IMG1,
    goals: [
      { icon: BookOpen, text: "Sensory exploration and early literacy foundations" },
      { icon: MessageCircle, text: "Language development through songs, stories, and play" },
      { icon: Users, text: "Social skills through guided group interactions" },
      { icon: Activity, text: "Gross and fine motor skill development" },
      { icon: Brain, text: "Early numeracy through hands-on activities" },
    ],
  },
  {
    name: "Kindergarten",
    nameAr: "الروضة",
    age: "Age 3+",
    img: IMG2,
    goals: [
      { icon: BookOpen, text: "Phonics awareness and pre-reading skills" },
      { icon: Brain, text: "Number recognition and basic counting" },
      { icon: MessageCircle, text: "Expressive language and vocabulary building" },
      { icon: Users, text: "Cooperative play and emotional regulation" },
      { icon: Activity, text: "Creative arts and physical coordination" },
    ],
  },
  {
    name: "KG1",
    nameAr: "تمهيدي ١",
    age: "Age 4+",
    img: IMG3,
    goals: [
      { icon: BookOpen, text: "Reading readiness and letter-sound correspondence" },
      { icon: Brain, text: "Mathematical concepts: patterns, sorting, and measurement" },
      { icon: MessageCircle, text: "Bilingual communication skills (Arabic & English)" },
      { icon: Users, text: "Leadership skills and collaborative projects" },
      { icon: Activity, text: "Structured physical education and outdoor play" },
    ],
  },
  {
    name: "KG2",
    nameAr: "تمهيدي ٢",
    age: "Age 5+",
    img: IMG4,
    goals: [
      { icon: BookOpen, text: "Fluent reading and early writing skills" },
      { icon: Brain, text: "Addition, subtraction, and problem-solving" },
      { icon: MessageCircle, text: "Presentation skills and confident self-expression" },
      { icon: Users, text: "Community awareness and cultural appreciation" },
      { icon: Activity, text: "Advanced fine motor skills and handwriting" },
    ],
  },
  {
    name: "KG3",
    nameAr: "تمهيدي ٣",
    age: "Age 6+",
    img: IMG5,
    goals: [
      { icon: BookOpen, text: "Independent reading and comprehension strategies" },
      { icon: Brain, text: "Grade 1 math readiness: operations and word problems" },
      { icon: MessageCircle, text: "Critical thinking and inquiry-based learning" },
      { icon: Users, text: "Responsibility, time management, and school readiness" },
      { icon: Activity, text: "Science exploration and environmental awareness" },
    ],
  },
];

export default function Programs() {
  useEffect(() => {
    document.title = "Programs | Learning Tree Center";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Our Programs</h1>
          <p className="text-2xl text-white/80 font-bold" style={{ fontFamily: "var(--font-arabic)" }}>برامجنا التعليمية</p>
          <p className="text-white/70 mt-4 max-w-2xl">From age 2 through KG3, our programs build progressively on each child's development, preparing them for academic success and lifelong learning.</p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20">
        <div className="container space-y-16">
          {programs.map((prog, idx) => (
            <div key={prog.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src={prog.img} alt={prog.name} className="w-full h-full img-crop" />
                </div>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block bg-[var(--sunshine)] text-[var(--navy)] text-sm font-bold px-4 py-1.5 rounded-full mb-3">{prog.age}</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-1">{prog.name}</h2>
                <p className="text-lg text-[var(--green-primary)] font-bold mb-6" style={{ fontFamily: "var(--font-arabic)" }}>{prog.nameAr}</p>
                <div className="space-y-3">
                  {prog.goals.map((goal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <goal.icon className="w-4 h-4 text-[var(--green-primary)]" />
                      </div>
                      <p className="text-sm text-[var(--navy)]/80 leading-relaxed">{goal.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
