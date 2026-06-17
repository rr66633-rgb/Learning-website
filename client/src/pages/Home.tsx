import { motion } from "framer-motion";
import { BookOpen, Star, Users, GraduationCap, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* 
 * Design: "Enchanted Forest Classroom" — Organic Modernism meets Storybook Illustration
 * Colors: Forest Green, Sage Green, Sky Blue, Soft Yellow, Warm Beige, Rich Brown
 * Typography: Fredoka (display), Nunito (body)
 */

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663757302822/6L2CpNH9bCGNgbsvFwL2vd/hero-forest-classroom-ar4GQtWA87gCgYpPsQct9D.webp";
const PHONICS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663757302822/6L2CpNH9bCGNgbsvFwL2vd/phonics-workbook-showcase-ikif4goMtEkpgGEEDrLq4b.webp";
const MATH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663757302822/6L2CpNH9bCGNgbsvFwL2vd/math-workbook-showcase-iv6aAQVQEjQLMZZAqoVSB5.webp";
const ARABIC_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663757302822/6L2CpNH9bCGNgbsvFwL2vd/arabic-workbook-showcase-Kk3MhXPP9qKiN4T2DB5KQN.webp";
const PATTERN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663757302822/6L2CpNH9bCGNgbsvFwL2vd/forest-pattern-bg-PowAVjTfFbsvj7cyJoTqpj.webp";
const LOGO_IMG = "/manus-storage/logo_f044417e.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="Learning Tree Center" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-md" />
            <span className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[oklch(0.35_0.12_140)]">Learning Tree</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#workbooks" className="text-sm font-semibold text-[oklch(0.38_0.06_50)] hover:text-[oklch(0.35_0.12_140)] transition-colors">Our Workbooks</a>
            <a href="#characters" className="text-sm font-semibold text-[oklch(0.38_0.06_50)] hover:text-[oklch(0.35_0.12_140)] transition-colors">Characters</a>
            <a href="#about" className="text-sm font-semibold text-[oklch(0.38_0.06_50)] hover:text-[oklch(0.35_0.12_140)] transition-colors">About Us</a>
            <a href="#contact" className="text-sm font-semibold text-[oklch(0.38_0.06_50)] hover:text-[oklch(0.35_0.12_140)] transition-colors">Contact</a>
          </div>
          <Button className="bg-[oklch(0.35_0.12_140)] hover:bg-[oklch(0.3_0.12_140)] text-white font-semibold rounded-full px-6 shadow-lg shadow-green-900/20 active:scale-[0.97] transition-transform duration-150">
            Enroll Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-[oklch(0.92_0.08_90)]" />
              <span className="text-sm font-semibold text-white">Premium Early Years Education</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Where Little Minds <span className="text-[oklch(0.92_0.08_90)]">Grow Big</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 mb-8 max-w-lg font-medium leading-relaxed">
              Nature-inspired curricula designed to nurture curiosity, build confidence, and prepare young learners for Grade 1 success.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button className="bg-[oklch(0.35_0.12_140)] hover:bg-[oklch(0.3_0.12_140)] text-white font-bold rounded-full px-8 py-6 text-lg shadow-xl shadow-green-900/30 active:scale-[0.97] transition-transform duration-150">
                Explore Our Forest of Knowledge
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white font-bold rounded-full px-8 py-6 text-lg hover:bg-white/20 active:scale-[0.97] transition-transform duration-150">
                Meet Our Characters
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { icon: BookOpen, label: "Workbook Pages", value: "600+" },
              { icon: Star, label: "Activities", value: "1,200+" },
              { icon: Users, label: "Happy Families", value: "500+" },
              { icon: GraduationCap, label: "Grade 1 Ready", value: "100%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-xl shadow-green-900/5 border border-[oklch(0.9_0.02_135)] text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[oklch(0.35_0.12_140)]" />
                <div className="text-2xl md:text-3xl font-bold text-[oklch(0.35_0.12_140)] font-[var(--font-display)]">{stat.value}</div>
                <div className="text-sm text-[oklch(0.5_0.03_50)] font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workbooks Section */}
      <section id="workbooks" className="py-24 md:py-32" style={{ backgroundImage: `url(${PATTERN_IMG})`, backgroundSize: '400px' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[oklch(0.92_0.04_135)] rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4 text-[oklch(0.35_0.12_140)]" />
              <span className="text-sm font-semibold text-[oklch(0.35_0.12_140)]">Our Curriculum</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[oklch(0.25_0.04_50)] mb-4">
              Three Paths Through the Forest
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[oklch(0.5_0.03_50)] max-w-2xl mx-auto">
              Each workbook is a carefully crafted journey, designed by early-years specialists to build essential skills for Grade 1 readiness.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 md:gap-10"
          >
            {/* Phonics Workbook */}
            <motion.div variants={fadeUp} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-green-900/5 border border-[oklch(0.9_0.02_135)] hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={PHONICS_IMG} alt="KG3 Phonics Workbook" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[oklch(0.35_0.12_140)] text-white text-xs font-bold px-3 py-1.5 rounded-full">200 Pages</div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[oklch(0.25_0.04_50)] mb-2">KG3 Phonics</h3>
                  <p className="text-[oklch(0.5_0.03_50)] mb-4 leading-relaxed">Master letter sounds, blending, and reading through nature-themed adventures with Ollie the Owl.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold bg-[oklch(0.92_0.04_135)] text-[oklch(0.35_0.12_140)] px-3 py-1 rounded-full">Letter Sounds</span>
                    <span className="text-xs font-semibold bg-[oklch(0.92_0.08_90)] text-[oklch(0.38_0.06_50)] px-3 py-1 rounded-full">Blending</span>
                    <span className="text-xs font-semibold bg-[oklch(0.9_0.06_220)] text-[oklch(0.35_0.08_220)] px-3 py-1 rounded-full">Reading</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Math Workbook */}
            <motion.div variants={fadeUp} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-green-900/5 border border-[oklch(0.9_0.02_135)] hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={MATH_IMG} alt="KG3 Mathematics Workbook" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[oklch(0.35_0.12_140)] text-white text-xs font-bold px-3 py-1.5 rounded-full">200 Pages</div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[oklch(0.25_0.04_50)] mb-2">KG3 Mathematics</h3>
                  <p className="text-[oklch(0.5_0.03_50)] mb-4 leading-relaxed">Explore numbers, shapes, and problem-solving through hands-on activities with Pippo the Squirrel.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold bg-[oklch(0.92_0.04_135)] text-[oklch(0.35_0.12_140)] px-3 py-1 rounded-full">Numbers</span>
                    <span className="text-xs font-semibold bg-[oklch(0.92_0.08_90)] text-[oklch(0.38_0.06_50)] px-3 py-1 rounded-full">Shapes</span>
                    <span className="text-xs font-semibold bg-[oklch(0.9_0.06_220)] text-[oklch(0.35_0.08_220)] px-3 py-1 rounded-full">Logic</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arabic Workbook */}
            <motion.div variants={fadeUp} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-green-900/5 border border-[oklch(0.9_0.02_135)] hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img src={ARABIC_IMG} alt="KG3 Arabic Readiness Workbook" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[oklch(0.35_0.12_140)] text-white text-xs font-bold px-3 py-1.5 rounded-full">200 Pages</div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[oklch(0.25_0.04_50)] mb-2">KG3 Arabic Readiness</h3>
                  <p className="text-[oklch(0.5_0.03_50)] mb-4 leading-relaxed">Build Arabic literacy from letters to sentences, guided by Lumi the Firefly through a magical journey.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold bg-[oklch(0.92_0.04_135)] text-[oklch(0.35_0.12_140)] px-3 py-1 rounded-full">Letters</span>
                    <span className="text-xs font-semibold bg-[oklch(0.92_0.08_90)] text-[oklch(0.38_0.06_50)] px-3 py-1 rounded-full">Words</span>
                    <span className="text-xs font-semibold bg-[oklch(0.9_0.06_220)] text-[oklch(0.35_0.08_220)] px-3 py-1 rounded-full">Reading</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-24 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[oklch(0.92_0.08_90)] rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-[oklch(0.5_0.08_90)]" />
              <span className="text-sm font-semibold text-[oklch(0.38_0.06_50)]">Forest Friends</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[oklch(0.25_0.04_50)] mb-4">
              Meet Your Learning Companions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[oklch(0.5_0.03_50)] max-w-2xl mx-auto">
              Four lovable characters guide children through every lesson, making learning feel like a magical adventure in the forest.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { name: "Ollie the Owl", role: "The Wise Reader", color: "oklch(0.35_0.12_140)", bgColor: "oklch(0.92_0.04_135)", emoji: "🦉", desc: "Guides phonics and reading adventures" },
              { name: "Pippo the Squirrel", role: "The Number Explorer", color: "oklch(0.5_0.12_50)", bgColor: "oklch(0.95_0.04_50)", emoji: "🐿️", desc: "Makes math fun and exciting" },
              { name: "Lumi the Firefly", role: "The Light of Language", color: "oklch(0.5_0.12_90)", bgColor: "oklch(0.95_0.06_90)", emoji: "✨", desc: "Illuminates Arabic letters and words" },
              { name: "Nova the Butterfly", role: "The Creative Spirit", color: "oklch(0.4_0.12_300)", bgColor: "oklch(0.93_0.04_300)", emoji: "🦋", desc: "Inspires art and imagination" },
            ].map((char, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center group"
              >
                <div
                  className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: char.bgColor }}
                >
                  <span className="text-4xl md:text-5xl">{char.emoji}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[oklch(0.25_0.04_50)]">{char.name}</h3>
                <p className="text-sm font-semibold mt-1" style={{ color: char.color }}>{char.role}</p>
                <p className="text-xs text-[oklch(0.5_0.03_50)] mt-2">{char.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-[oklch(0.35_0.12_140)]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4 text-[oklch(0.92_0.08_90)]" />
                <span className="text-sm font-semibold text-white/80">Our Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Nurturing Growth, One Leaf at a Time
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                At Learning Tree Center, we believe every child is a seed of potential. Our nature-inspired approach creates a warm, engaging environment where young minds flourish through discovery, creativity, and hands-on learning.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our curriculum is designed by experienced early-years educators, aligned with international standards, and rooted in the cultural values of Saudi Arabia. We prepare children not just for Grade 1, but for a lifetime of joyful learning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Nature-Based Learning",
                  "Culturally Grounded",
                  "Grade 1 Readiness",
                  "Expert Educators"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.92_0.08_90)]" />
                    <span className="text-sm font-medium text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                <img src={LOGO_IMG} alt="Learning Tree Center" className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl" />
                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-white">Learning Tree Kids Center</h3>
                  <p className="text-white/70 mt-2">Premium Early Years Education</p>
                  <p className="text-white/70">Kingdom of Saudi Arabia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="py-24 md:py-32" style={{ backgroundImage: `url(${PATTERN_IMG})`, backgroundSize: '400px' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[oklch(0.25_0.04_50)] mb-4">
              Why Families Choose Us
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[oklch(0.5_0.03_50)] max-w-2xl mx-auto">
              Every detail of our curriculum is crafted with purpose, passion, and the highest educational standards.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { title: "Hands-On Activities", desc: "Tracing, matching, coloring, and problem-solving activities that engage multiple senses and build fine motor skills.", icon: "✏️" },
              { title: "Progressive Difficulty", desc: "Carefully scaffolded lessons that build confidence step by step, from simple recognition to complex comprehension.", icon: "📈" },
              { title: "Cultural Sensitivity", desc: "Content that respects and celebrates Saudi Arabian values, with nature-inspired themes throughout.", icon: "🌿" },
              { title: "Professional Quality", desc: "Oxford and Cambridge-level design standards ensure every page feels like a premium published resource.", icon: "⭐" },
              { title: "Character-Led Learning", desc: "Four beloved forest friends make every lesson an adventure, building emotional connection to learning.", icon: "🦉" },
              { title: "Assessment Ready", desc: "Built-in review pages and mastery checks ensure children are fully prepared for Grade 1 transition.", icon: "🎓" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-green-900/5 border border-[oklch(0.9_0.02_135)] hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-bold text-[oklch(0.25_0.04_50)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[oklch(0.5_0.03_50)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[oklch(0.25_0.04_50)] mb-4">
              Begin Your Child's Journey
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[oklch(0.5_0.03_50)] mb-10">
              Ready to give your child the best start? Contact us to learn more about enrollment and our curriculum.
            </motion.p>
            <motion.div variants={fadeUp} className="bg-[oklch(0.97_0.01_80)] rounded-3xl p-8 md:p-12 border border-[oklch(0.9_0.02_135)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="text-sm font-semibold text-[oklch(0.38_0.06_50)] block mb-2">Parent Name</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_135)] bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.12_140)] text-sm" />
                </div>
                <div className="text-left">
                  <label className="text-sm font-semibold text-[oklch(0.38_0.06_50)] block mb-2">Phone Number</label>
                  <input type="tel" placeholder="+966 5XX XXX XXXX" className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_135)] bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.12_140)] text-sm" />
                </div>
                <div className="text-left">
                  <label className="text-sm font-semibold text-[oklch(0.38_0.06_50)] block mb-2">Child's Age</label>
                  <input type="text" placeholder="e.g., 5 years" className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_135)] bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.12_140)] text-sm" />
                </div>
                <div className="text-left">
                  <label className="text-sm font-semibold text-[oklch(0.38_0.06_50)] block mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_135)] bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.12_140)] text-sm" />
                </div>
              </div>
              <div className="text-left mt-6">
                <label className="text-sm font-semibold text-[oklch(0.38_0.06_50)] block mb-2">Message</label>
                <textarea placeholder="Tell us about your child's learning needs..." rows={4} className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_135)] bg-white focus:outline-none focus:ring-2 focus:ring-[oklch(0.45_0.12_140)] text-sm resize-none" />
              </div>
              <Button className="mt-6 bg-[oklch(0.35_0.12_140)] hover:bg-[oklch(0.3_0.12_140)] text-white font-bold rounded-full px-10 py-6 text-lg shadow-xl shadow-green-900/20 w-full md:w-auto active:scale-[0.97] transition-transform duration-150">
                Send Inquiry
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.2_0.06_50)] py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={LOGO_IMG} alt="Learning Tree Center" className="w-12 h-12 rounded-full object-cover" />
                <span className="font-[var(--font-display)] text-lg font-bold text-white">Learning Tree</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Premium early-years education center nurturing young minds through nature-inspired, culturally-grounded curricula in Saudi Arabia.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Our Programs</h4>
              <ul className="space-y-2">
                <li><span className="text-sm text-white/60">KG3 Phonics Workbook</span></li>
                <li><span className="text-sm text-white/60">KG3 Mathematics Workbook</span></li>
                <li><span className="text-sm text-white/60">KG3 Arabic Readiness Workbook</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><span className="text-sm text-white/60">Kingdom of Saudi Arabia</span></li>
                <li><span className="text-sm text-white/60">info@learningtree.sa</span></li>
                <li><span className="text-sm text-white/60">+966 XX XXX XXXX</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-8 text-center">
            <p className="text-sm text-white/40">&copy; 2024 Learning Tree Kids Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
