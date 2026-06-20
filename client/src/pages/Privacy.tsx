import { SEOHead } from "@/components/SEOHead";

export default function Privacy() {
  return (
    <div>
      <SEOHead
        title="سياسة الخصوصية | مركز شجرة التعلم"
        description="سياسة الخصوصية لمركز شجرة التعلم – حضانة وروضة أطفال بالظهران. نوضح كيف نجمع بياناتكم ونحميها."
        path="/privacy"
      />
      {/* Hero */}
      <section className="relative py-16 bg-[var(--navy)]">
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">سياسة الخصوصية</h1>
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
                يلتزم مركز شجرة التعلم ("المركز"، "نحن") بحماية خصوصية زوار موقعنا الإلكتروني وأولياء أمور الأطفال المسجلين لدينا. توضح هذه السياسة كيفية جمع المعلومات الشخصية واستخدامها وحمايتها عند استخدام موقعنا الإلكتروني (learningtreeco.com) أو التواصل معنا.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">البيانات التي نجمعها</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">نجمع المعلومات التالية عند تقديم استفسار أو طلب تسجيل عبر نموذج التواصل:</p>
              <ul className="list-disc list-inside space-y-2 text-[var(--navy)]/80 mr-4">
                <li>الاسم الكامل لولي الأمر</li>
                <li>البريد الإلكتروني</li>
                <li>رقم الهاتف (اختياري)</li>
                <li>عمر الطفل (اختياري)</li>
                <li>نص الرسالة أو الاستفسار</li>
              </ul>
              <p className="text-[var(--navy)]/80 leading-relaxed mt-4">
                لا نجمع أي بيانات شخصية تلقائياً من الأطفال. جميع البيانات المُقدمة تأتي من أولياء الأمور مباشرة.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">كيف نستخدم بياناتكم</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">نستخدم المعلومات المُجمعة للأغراض التالية فقط:</p>
              <ul className="list-disc list-inside space-y-2 text-[var(--navy)]/80 mr-4">
                <li>الرد على استفساراتكم ومتابعة طلبات التسجيل</li>
                <li>التواصل معكم بخصوص برامجنا التعليمية</li>
                <li>تحسين خدماتنا وتجربة الموقع الإلكتروني</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">حماية البيانات</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                نتخذ إجراءات أمنية مناسبة لحماية معلوماتكم الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. تشمل هذه الإجراءات: تشفير البيانات أثناء النقل (SSL/TLS)، تخزين البيانات في خوادم آمنة، تقييد الوصول إلى البيانات على الموظفين المخولين فقط.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">مشاركة البيانات مع أطراف ثالثة</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                لا نبيع أو نؤجر أو نشارك معلوماتكم الشخصية مع أي أطراف ثالثة لأغراض تسويقية. قد نشارك البيانات فقط في الحالات التالية: عند وجود التزام قانوني، لحماية حقوقنا القانونية، أو مع مزودي خدمات تقنية يعملون نيابة عنا (مثل خدمات الاستضافة) وفق اتفاقيات سرية صارمة.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">حقوقكم</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed mb-4">وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية، لديكم الحقوق التالية:</p>
              <ul className="list-disc list-inside space-y-2 text-[var(--navy)]/80 mr-4">
                <li>الحق في الاطلاع على بياناتكم الشخصية المحفوظة لدينا</li>
                <li>الحق في تصحيح أي بيانات غير دقيقة</li>
                <li>الحق في طلب حذف بياناتكم الشخصية</li>
                <li>الحق في سحب موافقتكم على معالجة البيانات في أي وقت</li>
              </ul>
              <p className="text-[var(--navy)]/80 leading-relaxed mt-4">
                لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني: Support@learningtreeco.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                يستخدم موقعنا ملفات تعريف الارتباط الضرورية لتشغيل الموقع بشكل صحيح، مثل ملفات الجلسة (session cookies) للمصادقة. لا نستخدم ملفات تعريف ارتباط لأغراض إعلانية أو تتبع سلوك المستخدم عبر مواقع أخرى.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">الاحتفاظ بالبيانات</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                نحتفظ بالبيانات الشخصية طالما كانت ضرورية لتحقيق الأغراض المذكورة أعلاه، أو وفقاً لما يتطلبه القانون. يمكنكم طلب حذف بياناتكم في أي وقت عبر التواصل معنا.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">خصوصية الأطفال</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                موقعنا الإلكتروني موجه لأولياء الأمور وليس للأطفال مباشرة. لا نجمع عن قصد أي معلومات شخصية من الأطفال دون سن 13 عاماً عبر الموقع. إذا علمنا أننا جمعنا بيانات طفل دون إذن ولي الأمر، سنحذفها فوراً.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">التعديلات على هذه السياسة</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث". ننصح بمراجعة هذه الصفحة بشكل دوري.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">تواصل معنا</h2>
              <p className="text-[var(--navy)]/80 leading-relaxed">
                إذا كان لديكم أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتكم، يرجى التواصل معنا:
              </p>
              <div className="mt-4 bg-[var(--sand)] rounded-xl p-6">
                <p className="text-[var(--navy)] font-semibold">مركز شجرة التعلم</p>
                <p className="text-[var(--navy)]/70 text-sm mt-1">حي أجيال، شارع عنيزة، الظهران 34513</p>
                <p className="text-[var(--navy)]/70 text-sm">المملكة العربية السعودية</p>
                <p className="text-[var(--navy)]/70 text-sm mt-2" dir="ltr">البريد: Support@learningtreeco.com</p>
                <p className="text-[var(--navy)]/70 text-sm" dir="ltr">الهاتف: +966 54 665 3383</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
