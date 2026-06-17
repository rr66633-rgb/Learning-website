import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SEOHead } from "@/components/SEOHead";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("شكراً لتواصلك! سنرد عليك قريباً.");
    setFormData({ name: "", email: "", phone: "", childAge: "", message: "" });
  };

  return (
    <div>
      <SEOHead
        title="تواصل معنا | مركز شجرة التعلم - سجّل طفلك الآن"
        description="تواصل مع مركز شجرة التعلم في شارع عنيزة، الظهران. اتصل بنا على 0546653383 أو راسلنا واتساب للاستفسار عن التسجيل والبرامج."
        path="/contact"
        keywords="تواصل مركز شجرة التعلم, تسجيل حضانة الظهران, رقم هاتف حضانة, عنوان مركز شجرة التعلم"
      />
      {/* Hero */}
      <section className="relative py-20 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">تواصل معنا</h1>
          <p className="text-lg text-white/70 max-w-2xl">نسعد بالإجابة على استفساراتكم ومساعدتكم في التسجيل.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">معلومات التواصل</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-8 text-lg">
                سواء كنت مهتماً بتسجيل طفلك أو حجز جولة تعريفية أو لديك أسئلة عن برامجنا، فريقنا هنا لمساعدتك.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">الموقع</h3>
                    <p className="text-sm text-[var(--navy)]/70">حي أجيال، شارع عنيزة، الظهران 34513</p>
                    <p className="text-sm text-[var(--navy)]/70">المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">الهاتف</h3>
                    <a href="tel:+966546653383" className="text-sm text-[var(--green-primary)] font-semibold hover:underline" dir="ltr">+966 54 665 3383</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">البريد الإلكتروني</h3>
                    <a href="mailto:Support@learningtreeco.com" className="text-sm text-[var(--green-primary)] font-semibold hover:underline" dir="ltr">Support@learningtreeco.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">ساعات العمل</h3>
                    <p className="text-sm text-[var(--navy)]/70">الأحد – الخميس: ٧:٠٠ صباحاً – ٦:٣٠ مساءً</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/966546653383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-colors active:scale-[0.97]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  راسلنا واتساب
                </a>
                <a
                  href="https://linktr.ee/Learningtreeksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[var(--green-primary)] text-white px-6 py-3 rounded-full font-bold hover:bg-[var(--navy)] transition-colors active:scale-[0.97]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7.953 15.066l-.038.002a.975.975 0 0 1-.935-.7l-.002-.006-1.558-5.153a.976.976 0 0 1 .648-1.222l.002-.001h.014a.976.976 0 0 1 1.217.649l1.092 3.56 2.313-2.313a.976.976 0 0 1 1.38 1.38l-2.312 2.313 3.559 1.092a.976.976 0 0 1-.573 1.866l-5.153-1.558a.953.953 0 0 1-.652-.909zm8.091 0l.038.002a.975.975 0 0 0 .935-.7l.002-.006 1.558-5.153a.976.976 0 0 0-.648-1.222l-.002-.001h-.014a.976.976 0 0 0-1.217.649l-1.092 3.56-2.313-2.313a.976.976 0 0 0-1.38 1.38l2.312 2.313-3.559 1.092a.976.976 0 0 0 .573 1.866l5.153-1.558a.953.953 0 0 0 .652-.909zM12 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 12 0z"/></svg>
                  تابعونا على منصات التواصل
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--sand)] rounded-2xl p-8">
              <h3 className="text-2xl font-extrabold text-[var(--navy)] mb-6">استفسار عن التسجيل</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">الاسم الكامل</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">رقم الجوال</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                      placeholder="+966 5X XXX XXXX"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">عمر الطفل</label>
                  <input
                    type="text"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                    placeholder="مثال: ٣ سنوات"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">الرسالة</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow resize-none"
                    placeholder="أخبرنا عن استفسارك..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--green-primary)] text-white py-3 rounded-xl font-bold text-base hover:bg-[var(--navy)] transition-colors active:scale-[0.98]"
                >
                  إرسال الاستفسار
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-10">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d50.1136!3d26.3042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e126310f074b%3A0xeef6c2748e2df88!2z2YXYsdmD2LIg2LTYrNix2Kkg2KfZhNiq2LnZhNmFIExlYXJuaW5nIFRyZWUgQ2VudGVy!5e0!3m2!1sar!2ssa!4v1718000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مركز شجرة التعلم"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
