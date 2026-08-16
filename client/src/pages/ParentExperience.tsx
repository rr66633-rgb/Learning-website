import { Smartphone, Camera, MessageSquare, Bell, Heart } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/mdXmIUpOPizrzssr.jpeg";

const features = [
  { icon: Smartphone, title: "تطبيق نشأة", desc: "ابقَ على تواصل مع يوم طفلك من خلال تطبيق التواصل المخصص لأولياء الأمور." },
  { icon: Camera, title: "تحديثات وصور يومية", desc: "استقبل صوراً وتقارير أنشطة وإنجازات تعلم طفلك على مدار اليوم." },
  { icon: MessageSquare, title: "تواصل آمن", desc: "مراسلة مباشرة مع المعلمات والموظفين عبر منصة آمنة وخاصة." },
  { icon: Bell, title: "ملاحظات وتقارير", desc: "ملاحظات تطورية مفصلة وتقارير تقدم تُشارك بانتظام مع أولياء الأمور." },
  { icon: Heart, title: "مشاركة أولياء الأمور", desc: "ورش عمل وفعاليات وفرص للمشاركة في رحلة تعلم طفلك." },
];

export default function ParentExperience() {
  return (
    <div>
      <SEOHead
        title="تجربة أولياء الأمور | مركز شجرة التعلم - تطبيق نشأة"
        description="تواصل مستمر مع أولياء الأمور عبر تطبيق نشأة. تحديثات يومية بالصور والتقارير ومراسلة مباشرة مع المعلمات."
        path="/parent-experience"
      />
      {/* Hero */}
      <section className="relative py-20 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">تجربة أولياء الأمور</h1>
          <p className="text-lg text-white/70 max-w-2xl">شراكة حقيقية مع الأسرة لضمان أفضل تجربة تعليمية لطفلك.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">شركاء في رحلة طفلك</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4 text-lg">
                نؤمن في مركز شجرة التعلم بأن الشراكة القوية بين المركز والأسرة ضرورية لنجاح كل طفل. نحرص على إبقائكم على اطلاع ومشاركة وتواصل في كل خطوة.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4 text-lg">
                من خلال تطبيق نشأة لن تفوتكم أي لحظة من يوم طفلك. من أوقات الوجبات إلى الأنشطة التعليمية والمشاريع الإبداعية والتفاعلات الاجتماعية.
              </p>
              <p className="text-[var(--navy)]/80 leading-relaxed text-lg">
                كاميرات المراقبة المتاحة لأولياء الأمور توفر مزيداً من الاطمئنان، حيث يمكنكم الاطلاع على طفلك في أي وقت خلال اليوم.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMG} alt="تجربة أولياء الأمور في مركز شجرة التعلم" className="w-full h-full img-crop" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--sand)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-3">كيف نبقيكم على تواصل</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[var(--blush)] flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-[var(--navy)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-3">{feat.title}</h3>
                <p className="text-[var(--navy)]/70 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
