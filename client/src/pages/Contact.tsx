import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Learning Tree Center";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", childAge: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-2xl text-white/80 font-bold" style={{ fontFamily: "var(--font-arabic)" }}>تواصل معنا</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--navy)] mb-6">Get in Touch</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-8">
                We'd love to hear from you. Whether you're interested in enrolling your child, booking a tour, or simply have questions about our programs, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">Location</h3>
                    <p className="text-sm text-[var(--navy)]/70">Dhahran – Ajaal District</p>
                    <p className="text-sm text-[var(--navy)]/70">Saudi Arabia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">Phone</h3>
                    <a href="tel:+966546653383" className="text-sm text-[var(--green-primary)] font-semibold hover:underline">+966 54 665 3383</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">Email</h3>
                    <a href="mailto:Support@learningtreeco.com" className="text-sm text-[var(--green-primary)] font-semibold hover:underline">Support@learningtreeco.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--green-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--green-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)]">Working Hours</h3>
                    <p className="text-sm text-[var(--navy)]/70">Sunday – Thursday: 7:00 AM – 6:30 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a
                  href="https://wa.me/966546653383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-colors active:scale-[0.97]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us — راسلنا واتساب
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--sand)] rounded-2xl p-8">
              <h3 className="text-2xl font-extrabold text-[var(--navy)] mb-2">Enrollment Inquiry</h3>
              <p className="text-sm text-[var(--green-primary)] font-bold mb-6" style={{ fontFamily: "var(--font-arabic)" }}>استفسار عن التسجيل</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Child's Age</label>
                  <input
                    type="text"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow"
                    placeholder="e.g., 3 years"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] transition-shadow resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--green-primary)] text-white py-3 rounded-xl font-bold text-base hover:bg-[var(--navy)] transition-colors active:scale-[0.98]"
                >
                  Submit Inquiry — إرسال الاستفسار
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d50.1!3d26.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE4JzAwLjAiTiA1MMKwMDYnMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Learning Tree Center Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
