import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { X, Send } from "lucide-react";

const BERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663757302822/NxnIziMWdhCufJoR.png";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function BeroChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "أهلاً! أنا بيرو 🐻 مساعد مركز شجرة التعلم. كيف أقدر أساعدك؟" },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMutation = trpc.chat.send.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "عذراً، حصل خطأ. تواصل معنا عبر واتساب: https://wa.me/966546653383" },
      ]);
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || sendMutation.isPending) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    sendMutation.mutate({
      message: text,
      history: messages.slice(-6),
    });
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 w-16 h-16 rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95 overflow-hidden border-2 border-[var(--green-primary)] bg-[var(--sand)]"
          aria-label="تحدث مع بيرو"
        >
          <img src={BERO_IMG} alt="بيرو" className="w-full h-full object-cover object-center" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 w-full md:w-[380px] h-[500px] md:h-[520px] md:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col overflow-hidden border border-[var(--border)] bg-white">
          {/* Header */}
          <div className="bg-[var(--navy)] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--green-primary)] bg-[var(--sand)] shrink-0">
              <img src={BERO_IMG} alt="بيرو" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">بيرو 🐻</p>
              <p className="text-white/60 text-xs">مساعد مركز شجرة التعلم</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--sand)]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--green-primary)] text-white rounded-br-sm"
                      : "bg-white text-[var(--navy)] shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {sendMutation.isPending && (
              <div className="flex justify-end">
                <div className="bg-white text-[var(--navy)] shadow-sm px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-[var(--green-primary)] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[var(--border)] p-3 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 bg-[var(--sand)] rounded-full px-4 py-2.5 text-sm text-[var(--navy)] placeholder:text-[var(--navy)]/40 outline-none focus:ring-2 focus:ring-[var(--green-primary)]/30"
                disabled={sendMutation.isPending}
              />
              <button
                type="submit"
                disabled={!input.trim() || sendMutation.isPending}
                className="w-10 h-10 bg-[var(--green-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--navy)] transition-colors disabled:opacity-50 active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
