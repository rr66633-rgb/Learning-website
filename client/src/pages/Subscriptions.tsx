import { Link } from "wouter";
import { ArrowLeft, Crown, Award, Medal, Bus, BookOpen, Users, Clock, CreditCard, UtensilsCrossed } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function Subscriptions() {
  return (
    <div>
      <SEOHead
        title="الرسوم والاشتراكات | مركز شجرة التعلم"
        description="دليل الرسوم الدراسية والباقات والاشتراكات في مركز شجرة التعلم – حضانة وروضة أطفال بالظهران. اشتراكات مرنة تناسب جميع الأسر."
        path="/subscriptions"
        keywords="رسوم حضانة الظهران, اشتراكات روضة أطفال, باقات مركز شجرة التعلم, أسعار KG1 KG2 KG3"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-bl from-[var(--sand)] via-white to-[var(--sand)]">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--green-primary)]/10 text-[var(--green-primary)] px-4 py-2 rounded-full text-sm font-bold mb-6">
            <CreditCard className="w-4 h-4" />
            دليل الباقات والرسوم المعتمد
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4">
            الرسوم والاشتراكات
          </h1>
          <p className="text-lg text-[var(--navy)]/70 max-w-2xl mx-auto leading-relaxed">
            نقدّم خيارات مرنة تناسب احتياجات كل أسرة، مع ضمان أعلى معايير الجودة التعليمية والرعاية
          </p>
        </div>
      </section>

      {/* Tuition Table */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-2">
              الرسوم الدراسية الأساسية
            </h2>
            <p className="text-[var(--navy)]/60 text-sm">الاشتراكات المتاحة ومدة الالتزام</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--green-primary)] text-white">
                    <th className="px-6 py-4 text-right font-bold">نوع الاشتراك</th>
                    <th className="px-6 py-4 text-center font-bold">المدة الزمنية</th>
                    <th className="px-6 py-4 text-center font-bold">الرسوم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[var(--navy)]">التزام سنوي</td>
                    <td className="px-6 py-4 text-center text-[var(--navy)]/70">ترمين دراسيين</td>
                    <td className="px-6 py-4 text-center font-bold text-[var(--green-primary)]">22,900 ريال</td>
                  </tr>
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[var(--navy)]">التزام ترم</td>
                    <td className="px-6 py-4 text-center text-[var(--navy)]/70">ترم دراسي كامل</td>
                    <td className="px-6 py-4 text-center font-bold text-[var(--green-primary)]">11,500 ريال</td>
                  </tr>
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[var(--navy)]">التزام شهري</td>
                    <td className="px-6 py-4 text-center text-[var(--navy)]/70">شهر واحد</td>
                    <td className="px-6 py-4 text-center font-bold text-[var(--green-primary)]">3,290 ريال</td>
                  </tr>
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[var(--navy)]">تسجيل يومي</td>
                    <td className="px-6 py-4 text-center text-[var(--navy)]/70">يوم واحد</td>
                    <td className="px-6 py-4 text-center font-bold text-[var(--green-primary)]">230 ريال</td>
                  </tr>
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[var(--navy)]">تسجيل بالساعة</td>
                    <td className="px-6 py-4 text-center text-[var(--navy)]/70">ساعة واحدة</td>
                    <td className="px-6 py-4 text-center font-bold text-[var(--green-primary)]">60 ريال</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[var(--sand)]/50 px-6 py-3 text-xs text-[var(--navy)]/60">
              <span className="font-bold">رسوم إضافية:</span> كل ساعة إضافية بعد الدوام: 40 ريال | تُحتسب رسوم تأخير بعد انتهاء أوقات الدوام المعتمدة
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Monthly Packages */}
      <section className="py-16 bg-[var(--sand)]">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-2">
              الباقات المرنة الشهرية
            </h2>
            <p className="text-[var(--navy)]/60 text-sm">اختر عدد الأيام الذي يناسب جدول أسرتك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bronze */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Medal className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--navy)] mb-2">الباقة البرونزية</h3>
              <p className="text-[var(--navy)]/60 text-sm mb-4">يومان في الأسبوع</p>
              <div className="text-3xl font-extrabold text-[var(--green-primary)]">1,890</div>
              <p className="text-sm text-[var(--navy)]/50 mt-1">ريال / شهرياً</p>
            </div>

            {/* Silver */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[var(--green-primary)] hover:shadow-lg transition-shadow text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--green-primary)] text-white text-xs font-bold px-4 py-1 rounded-full">
                الأكثر طلباً
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--navy)] mb-2">الباقة الفضية</h3>
              <p className="text-[var(--navy)]/60 text-sm mb-4">3 أيام في الأسبوع</p>
              <div className="text-3xl font-extrabold text-[var(--green-primary)]">2,490</div>
              <p className="text-sm text-[var(--navy)]/50 mt-1">ريال / شهرياً</p>
            </div>

            {/* Gold */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-[var(--sunshine)]/50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Crown className="w-8 h-8 text-[var(--navy)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--navy)] mb-2">الباقة الذهبية</h3>
              <p className="text-[var(--navy)]/60 text-sm mb-4">4 أيام في الأسبوع</p>
              <div className="text-3xl font-extrabold text-[var(--green-primary)]">2,950</div>
              <p className="text-sm text-[var(--navy)]/50 mt-1">ريال / شهرياً</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Care */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[var(--sky)]/10 text-[var(--sky)] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Clock className="w-4 h-4" />
              خيارات الرعاية الإضافية
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-2">
              الاشتراكات الممتدة
            </h2>
            <p className="text-[var(--navy)]/60 text-sm">رعاية إضافية حتى الساعة 4:00 مساءً</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--green-primary)] text-white">
                    <th className="px-5 py-4 text-right font-bold">نوع الاشتراك</th>
                    <th className="px-5 py-4 text-center font-bold">حتى 2:00 م</th>
                    <th className="px-5 py-4 text-center font-bold">حتى 3:00 م</th>
                    <th className="px-5 py-4 text-center font-bold">حتى 4:00 م</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-[var(--navy)]">الاشتراك السنوي</td>
                    <td className="px-5 py-4 text-center text-[var(--navy)]/70">24,900 ريال</td>
                    <td className="px-5 py-4 text-center text-[var(--navy)]/70">27,500 ريال</td>
                    <td className="px-5 py-4 text-center font-bold text-[var(--green-primary)]">29,000 ريال</td>
                  </tr>
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-[var(--navy)]">اشتراك الترم</td>
                    <td className="px-5 py-4 text-center text-[var(--navy)]/70">12,900 ريال</td>
                    <td className="px-5 py-4 text-center text-[var(--navy)]/70">13,900 ريال</td>
                    <td className="px-5 py-4 text-center font-bold text-[var(--green-primary)]">14,900 ريال</td>
                  </tr>
                  <tr className="hover:bg-[var(--sand)]/50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-[var(--navy)]">الاشتراك الشهري</td>
                    <td className="px-5 py-4 text-center text-[var(--navy)]/70">3,490 ريال</td>
                    <td className="px-5 py-4 text-center text-[var(--navy)]/70">3,550 ريال</td>
                    <td className="px-5 py-4 text-center font-bold text-[var(--green-primary)]">3,850 ريال</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-[var(--sand)]">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[var(--green-primary)]/10 text-[var(--green-primary)] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Bus className="w-4 h-4" />
              خدمة نقل آمنة
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-2">
              رسوم النقل المدرسي
            </h2>
            <p className="text-[var(--navy)]/60 text-sm">خدمة نقل آمنة بإشراف مرافقة معتمدة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] text-center">
              <h3 className="text-lg font-bold text-[var(--navy)] mb-2">النقل للترم الدراسي</h3>
              <div className="text-3xl font-extrabold text-[var(--green-primary)]">2,000</div>
              <p className="text-sm text-[var(--navy)]/50 mt-1">ريال / ترم</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] text-center">
              <h3 className="text-lg font-bold text-[var(--navy)] mb-2">النقل للسنة الدراسية</h3>
              <div className="text-3xl font-extrabold text-[var(--green-primary)]">3,500</div>
              <p className="text-sm text-[var(--navy)]/50 mt-1">ريال / سنة</p>
            </div>
          </div>

          <p className="text-center text-sm text-[var(--navy)]/60 mt-6 max-w-lg mx-auto">
            تشمل الخدمة مرافقة مسؤولة لاستلام وتسليم الأطفال، وتخضع لتوفر المقاعد وخط السير المعتمد
          </p>
        </div>
      </section>

      {/* Policies & Discounts */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-2">
              الرسوم والسياسات المالية
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registration Fee */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--sunshine)]/50 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[var(--navy)]" />
                </div>
                <h3 className="font-bold text-[var(--navy)]">رسوم التسجيل وحجز المقعد</h3>
              </div>
              <p className="text-2xl font-extrabold text-[var(--green-primary)] mb-2">1,000 ريال</p>
              <p className="text-sm text-[var(--navy)]/60 leading-relaxed">
                تُحتسب ضمن الرسوم الدراسية النهائية، وغير مستردة بعد تأكيد التسجيل
              </p>
            </div>

            {/* Sibling Discount */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--green-primary)]/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-[var(--green-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--navy)]">خصومات الإخوة</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-[var(--sand)] rounded-lg px-4 py-2.5">
                  <span className="text-sm text-[var(--navy)]">الشقيق الثاني</span>
                  <span className="font-bold text-[var(--green-primary)]">خصم 10%</span>
                </div>
                <div className="flex items-center justify-between bg-[var(--sand)] rounded-lg px-4 py-2.5">
                  <span className="text-sm text-[var(--navy)]">الشقيق الثالث</span>
                  <span className="font-bold text-[var(--green-primary)]">خصم 15%</span>
                </div>
              </div>
              <p className="text-xs text-[var(--navy)]/50 mt-3">
                الخصومات على الرسوم الدراسية فقط، ولا تشمل رسوم التسجيل أو الخدمات الإضافية
              </p>
            </div>

            {/* Uniform Included */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--blush)] rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[var(--navy)]" />
                </div>
                <h3 className="font-bold text-[var(--navy)]">الزي المدرسي والباقة التعليمية</h3>
              </div>
              <p className="text-sm text-[var(--navy)]/60 leading-relaxed">
                الزي المدرسي والباقة التعليمية <span className="font-bold text-[var(--green-primary)]">مشمولة</span> ضمن الرسوم الدراسية — لا حاجة لشرائها بشكل منفصل
              </p>
            </div>

            {/* Payment Policy */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--sky)]/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[var(--sky)]" />
                </div>
                <h3 className="font-bold text-[var(--navy)]">سياسة السداد</h3>
              </div>
              <p className="text-sm text-[var(--navy)]/60 leading-relaxed">
                يُلتزم بسداد الرسوم حسب الخطة المتفق عليها. تطبق سياسة الانسحاب والاسترداد وفقاً لبنود عقد التسجيل المعتمد لدى المركز.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Terms */}
      <section className="py-16 bg-[var(--sand)]">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-2">
              تعليمات وشروط التسجيل
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)]">
            <ul className="space-y-4 text-sm text-[var(--navy)]/80 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full mt-2 shrink-0"></span>
                <span>أولوية القبول للمشتركين بالاشتراك الفصلي والسنوي</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full mt-2 shrink-0"></span>
                <span>يتم اعتماد التسجيل بعد استكمال السداد والمستندات المطلوبة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full mt-2 shrink-0"></span>
                <span>الباقات المرنة تخضع لتوفر المقاعد والأيام المطلوبة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full mt-2 shrink-0"></span>
                <span>يرجى الالتزام بأوقات الحضور والانصراف المحددة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full mt-2 shrink-0"></span>
                <span>تطبق رسوم إضافية على التأخير بعد وقت الدوام</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meals Section - Nutria */}
      <section className="py-16 bg-gradient-to-b from-white to-[var(--sand)]/50">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <UtensilsCrossed className="w-4 h-4" />
              خدمة الوجبات المدرسية
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)] mb-2">
              وجبات نوتريا
            </h2>
            <p className="text-[var(--navy)]/60 text-sm max-w-xl mx-auto">
              وجبات مدرسية متوازنة تُعدّ طازجة كل يوم — فطور وغداء وعصائر طازجة بالتعاون مع نوتريا
            </p>
          </div>

          {/* Price Card */}
          <div className="bg-white rounded-2xl shadow-md border border-orange-200 p-8 mb-10 text-center max-w-md mx-auto">
            <div className="text-5xl font-extrabold text-[var(--green-primary)] mb-2">600 <span className="text-xl font-bold">ريال/شهر</span></div>
            <p className="text-[var(--navy)]/70 text-sm mb-4">فطور + غداء يومي</p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <span className="bg-[var(--sand)] text-[var(--navy)] px-3 py-1.5 rounded-full font-medium">56 صنف متنوع</span>
              <span className="bg-[var(--sand)] text-[var(--navy)] px-3 py-1.5 rounded-full font-medium">10.50 ريال لكل صنف</span>
              <span className="bg-[var(--sand)] text-[var(--navy)] px-3 py-1.5 rounded-full font-medium">يُحضّر يومياً طازجاً</span>
            </div>
          </div>

          {/* Meals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/FbqXEQUVmwTeaaRM.png" alt="فطور نوتريا" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">الفطور</h3>
                <p className="text-sm text-[var(--navy)]/70">بداية يوم مليئة بالطاقة — بانكيك، بيض، توست، فواكه طازجة، وزبادي بالجرانولا</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/TVJIQkQJIRzmfQch.png" alt="غداء نوتريا" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">الغداء</h3>
                <p className="text-sm text-[var(--navy)]/70">وجبة متوازنة يحبها الأطفال — أرز، دجاج مشوي، خضروات، سلطة، وحمص مع خبز</p>
              </div>
            </div>
          </div>

          {/* Menu Categories */}
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] p-6 mb-10">
            <h3 className="text-lg font-bold text-[var(--navy)] mb-4 text-center">أقسام القائمة</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
              <div className="bg-[var(--sand)] rounded-xl p-3">
                <div className="text-2xl font-bold text-[var(--green-primary)]">15</div>
                <div className="text-xs text-[var(--navy)]/70 mt-1">ساندوتشات وراب</div>
              </div>
              <div className="bg-[var(--sand)] rounded-xl p-3">
                <div className="text-2xl font-bold text-[var(--green-primary)]">14</div>
                <div className="text-xs text-[var(--navy)]/70 mt-1">أطباق رئيسية</div>
              </div>
              <div className="bg-[var(--sand)] rounded-xl p-3">
                <div className="text-2xl font-bold text-[var(--green-primary)]">13</div>
                <div className="text-xs text-[var(--navy)]/70 mt-1">سلطات وفواكه</div>
              </div>
              <div className="bg-[var(--sand)] rounded-xl p-3">
                <div className="text-2xl font-bold text-[var(--green-primary)]">9</div>
                <div className="text-xs text-[var(--navy)]/70 mt-1">عصائر طازجة</div>
              </div>
              <div className="bg-[var(--sand)] rounded-xl p-3">
                <div className="text-2xl font-bold text-[var(--green-primary)]">5</div>
                <div className="text-xs text-[var(--navy)]/70 mt-1">حلويات</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-[var(--border)]">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🌿</span>
              </div>
              <h4 className="font-bold text-[var(--navy)] text-sm mb-1">مكونات طازجة</h4>
              <p className="text-xs text-[var(--navy)]/60">تُحضّر يومياً بدون تخزين</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-[var(--border)]">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">⚖️</span>
              </div>
              <h4 className="font-bold text-[var(--navy)] text-sm mb-1">متوازنة غذائياً</h4>
              <p className="text-xs text-[var(--navy)]/60">حصص مدروسة تناسب الأطفال</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-[var(--border)]">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🛡️</span>
              </div>
              <h4 className="font-bold text-[var(--navy)] text-sm mb-1">إدارة الحساسية</h4>
              <p className="text-xs text-[var(--navy)]/60">نُبلّغ المطبخ بحساسية طفلكم ويُستبعد المسبّب</p>
            </div>
          </div>

          <p className="text-center text-sm text-[var(--navy)]/60">
            للاشتراك في خدمة الوجبات، يرجى التواصل مع الاستقبال أو عبر واتساب
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--green-primary)]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            جاهز لتسجيل طفلك؟
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            تواصل معنا لحجز جولة تعريفية أو لأي استفسار حول الاشتراكات والبرامج
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--green-primary)] px-7 py-3.5 rounded-full font-bold text-base hover:bg-[var(--sand)] transition-colors active:scale-[0.97]">
              احجز جولة تعريفية
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/966546653383" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-[#20bd5a] transition-colors active:scale-[0.97]">
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
