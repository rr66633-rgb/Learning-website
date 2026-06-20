import { SEOHead } from "@/components/SEOHead";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div>
      <SEOHead
        title="شروط الاستخدام | مركز شجرة التعلم"
        description="شروط استخدام موقع مركز شجرة التعلم الإلكتروني – حضانة وروضة أطفال بالظهران."
        path="/terms"
      />
      {/* Hero */}
      <section className="relative py-16 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">شروط الاستخدام</h1>
          <p className="text-white/70">آخر تحديث: ٢٠ يونيو ٢٠٢٦</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-[var(--navy)] leading-relaxed space-y-8" dir="rtl">

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">مقدمة</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                مرحباً بكم في موقع مركز شجرة التعلم الإلكتروني (learningtreeco.com). باستخدامكم لهذا الموقع، فإنكم توافقون على الالتزام بهذه الشروط والأحكام. إذا كنتم لا توافقون على أي من هذه الشروط، يرجى عدم استخدام الموقع.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">وصف الخدمة</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                يقدم هذا الموقع معلومات عن مركز شجرة التعلم، بما في ذلك البرامج التعليمية المتاحة، ومعلومات التواصل، وإمكانية تقديم استفسارات التسجيل. الموقع هو منصة معلوماتية وتواصلية ولا يُعد عقداً ملزماً للتسجيل.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">استخدام الموقع</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">عند استخدام هذا الموقع، تتعهدون بما يلي:</p>
              <ul className="list-disc list-inside space-y-2 text-[var(--navy)]/80 mr-4">
                <li>تقديم معلومات صحيحة ودقيقة عند ملء نماذج التواصل</li>
                <li>عدم استخدام الموقع لأي أغراض غير مشروعة أو محظورة</li>
                <li>عدم محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو أنظمته</li>
                <li>عدم إرسال محتوى مسيء أو ضار أو غير لائق عبر نماذج التواصل</li>
                <li>عدم استخدام أدوات آلية لإرسال طلبات متكررة أو إغراق النظام</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">الملكية الفكرية</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم، هي ملكية فكرية لمركز شجرة التعلم أو مرخصة له. لا يجوز نسخ أو إعادة إنتاج أو توزيع أي محتوى من الموقع دون إذن كتابي مسبق منا.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">نماذج التواصل والاستفسارات</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                عند تقديم استفسار عبر نموذج التواصل، فإنكم توافقون على أن المعلومات المُقدمة ستُستخدم للتواصل معكم بخصوص استفساركم. تقديم الاستفسار لا يضمن مكاناً في المركز ولا يُعد تسجيلاً رسمياً. عملية التسجيل الرسمية تتم في مقر المركز بعد استكمال جميع المتطلبات.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">دقة المعلومات</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                نسعى لتقديم معلومات دقيقة ومحدثة على الموقع، لكننا لا نضمن خلو المحتوى من الأخطاء. قد تتغير البرامج والرسوم والمواعيد دون إشعار مسبق. للحصول على أحدث المعلومات، يرجى التواصل معنا مباشرة.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">الروابط الخارجية</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                قد يحتوي الموقع على روابط لمواقع خارجية (مثل منصات التواصل الاجتماعي). نحن لسنا مسؤولين عن محتوى هذه المواقع أو سياسات الخصوصية الخاصة بها. ننصح بمراجعة شروط وسياسات أي موقع خارجي قبل استخدامه.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">حدود المسؤولية</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                يُقدم هذا الموقع "كما هو" دون أي ضمانات صريحة أو ضمنية. لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع أو عدم القدرة على استخدامه، بما في ذلك أي انقطاع في الخدمة أو فقدان بيانات.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">التعديلات على الشروط</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستُنشر التعديلات على هذه الصفحة مع تحديث تاريخ "آخر تحديث". استمراركم في استخدام الموقع بعد نشر التعديلات يُعد قبولاً للشروط المحدثة.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">القانون المعمول به</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                تخضع هذه الشروط لأنظمة المملكة العربية السعودية وتُفسر وفقاً لها. أي نزاع ينشأ عن استخدام هذا الموقع يخضع لاختصاص المحاكم المختصة في المملكة العربية السعودية.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">تواصل معنا</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                لأي استفسارات حول هذه الشروط، يرجى التواصل معنا:
              </p>
              <div className="mt-4 bg-[var(--sand)] rounded-xl p-6">
                <p className="text-[var(--navy)] font-semibold">مركز شجرة التعلم</p>
                <p className="text-[var(--navy)]/70 text-sm mt-1">حي أجيال، شارع عنيزة، الظهران 34513</p>
                <p className="text-[var(--navy)]/70 text-sm">المملكة العربية السعودية</p>
                <p className="text-[var(--navy)]/70 text-sm mt-2" dir="ltr">البريد: Support@learningtreeco.com</p>
                <p className="text-[var(--navy)]/70 text-sm" dir="ltr">الهاتف: +966 54 665 3383</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <p className="text-sm text-[var(--navy)]/60">
                يرجى أيضاً مراجعة{" "}
                <Link href="/privacy" className="text-[var(--green-primary)] hover:underline font-semibold">
                  سياسة الخصوصية
                </Link>{" "}
                الخاصة بنا لفهم كيفية تعاملنا مع بياناتكم الشخصية.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
