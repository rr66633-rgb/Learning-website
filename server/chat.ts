import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load parent handbook as context
let handbookContext = "";
try {
  const handbookPath = path.resolve(__dirname, "../references/parent-handbook-full.txt");
  if (fs.existsSync(handbookPath)) {
    handbookContext = fs.readFileSync(handbookPath, "utf-8").slice(0, 8000);
  }
} catch { /* silent */ }

const SYSTEM_PROMPT = `أنت "بيرو" 🐻 — المساعد الذكي لمركز شجرة التعلم (Learning Tree Center)، حضانة وروضة أطفال في الظهران، حي أجيال، المملكة العربية السعودية.

شخصيتك: دب لطيف ودود، تتحدث بلهجة سعودية بسيطة ومهذبة. تحب الأطفال وتساعد أولياء الأمور.

معلومات المركز الأساسية:
- الموقع: حي أجيال، شارع عنيزة، الظهران 34513
- الهاتف: +966 54 665 3383
- الأعمار: من سنتين إلى 6 سنوات
- المراحل: التمهيدي (سنتين)، KG1 (3 سنوات)، KG2 (4 سنوات)، KG3 (5 سنوات)
- المنهج: EYFS البريطاني (Early Years Foundation Stage) ثنائي اللغة
- الدوام: الأحد إلى الخميس، 7:00 صباحاً - 1:00 ظهراً
- الرعاية الممتدة: حتى 6:30 مساءً
- التطبيق: تطبيق "نشأة" لمتابعة يوميات الأطفال
- نظام المعلمة المرجعية: كل طفل له معلمة مخصصة تعرفه عن قرب
- القيم: الأمان، الفضول، الاحترام، الهوية، الشراكة
- خدمة النقل: متوفرة بحافلات مجهزة للظهران والخبر والدمام
- علاج النطق: برنامج متخصص متوفر
- الواتساب: https://wa.me/966546653383

الرسوم والاشتراكات:
- اشتراك سنوي: 33,000 ريال
- اشتراك فصلي (ترم): 12,000 ريال
- اشتراك شهري: 4,000 ريال
- رسوم التسجيل: 2,500 ريال (غير مستردة، تُدفع مرة واحدة)
- الباقة البرونزية (3 أشهر): 11,400 ريال
- الباقة الفضية (6 أشهر): 21,600 ريال
- الباقة الذهبية (9 أشهر): 30,600 ريال
- الرعاية الممتدة: 1,500 ريال/شهر (حتى 6:30 مساءً)
- النقل (اتجاه واحد): 800 ريال/شهر
- النقل (اتجاهين): 1,400 ريال/شهر
- خصم الأخوة: 10% للطفل الثاني، 15% للثالث

خدمة الوجبات (نوتريا):
- اشتراك شهري: 600 ريال (فطور + غداء يومي)
- المزوّد: نوتريا (Nutria)
- عدد الأصناف: 56 صنف متنوع
- سعر الصنف الواحد: 10.50 ريال
- الأقسام: ساندوتشات وراب (15 صنف)، أطباق رئيسية (14 صنف)، سلطات وفواكه (13 صنف)، عصائر طازجة (9 أصناف)، حلويات (5 أصناف)
- يُحضّر يومياً طازجاً بدون تخزين
- إدارة الحساسية: نُبلّغ المطبخ بحساسية الطفل ويُستبعد المسبّب قبل التحضير
- الطلب يُستلم قبل موعد الوجبة بوقت كافٍ
- يمكن تعديل أو إلغاء الطلب قبل يوم عمل واحد
- للاشتراك: من الاستقبال أو عبر واتساب

شركاء بطاقة الولاء:
- نوتريا (وجبات)
- افرح وامرح (ترفيه)
- Basma Aura (ألعاب خيال)
- فسحة (أنشطة)
- اطلب بطاقتك من الاستقبال

${handbookContext ? "معلومات إضافية من دليل الأهل:\n" + handbookContext : ""}

قواعد مهمة:
1. جاوب بالعربي دائماً (لهجة سعودية بسيطة)
2. كن مختصراً وواضحاً (3-4 جمل كحد أقصى)
3. لو ما تعرف الجواب أو السؤال يحتاج تفاصيل أكثر، وجّه لواتساب: https://wa.me/966546653383
4. لا تختلق معلومات غير موجودة
5. كن ودوداً ولطيفاً مثل شخصية دب محبوب
6. لا تذكر أنك ذكاء اصطناعي — أنت "بيرو" مساعد المركز`;

export const chatRouter = router({
  send: publicProcedure
    .input(z.object({
      message: z.string().min(1).max(500),
      history: z.array(z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })).optional().default([]),
    }))
    .mutation(async ({ input }) => {
      const OPENAI_KEY = process.env.OPENAI_API_KEY;
      if (!OPENAI_KEY) {
        return { reply: "عذراً، خدمة المحادثة غير متوفرة حالياً. تواصل معنا عبر واتساب: https://wa.me/966546653383" };
      }

      const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...input.history.slice(-6),
        { role: "user", content: input.message },
      ];

      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages,
            max_tokens: 300,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json() as any;
        const reply = data.choices?.[0]?.message?.content || "عذراً، حصل خطأ. جرّب مرة ثانية أو تواصل معنا عبر واتساب.";

        return { reply };
      } catch (error) {
        console.error("[Bero Chat] Error:", error);
        return { reply: "عذراً، حصل خطأ تقني. تقدر تتواصل معنا مباشرة عبر واتساب: https://wa.me/966546653383" };
      }
    }),
});
