"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================================
   TYPES & HELPERS
   ============================================================ */
interface Slide {
  id: string;
  section?: string;
  content: React.ReactNode;
}

/* ============================================================
   HOOKS
   ============================================================ */

function useCountUp(target: string, duration: number = 1500, delay: number = 0) {
  const [display, setDisplay] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    // Extract numeric part
    const match = target.match(/([^\d]*?)([\d,.]+)(.*)/);
    if (!match) { setDisplay(target); return; }
    const [, prefix, numStr, suffix] = match;
    const targetNum = parseFloat(numStr.replace(",", "."));
    if (isNaN(targetNum)) { setDisplay(target); return; }

    const timeout = setTimeout(() => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = targetNum * eased;
        const formatted = numStr.includes(",") || numStr.includes(".")
          ? current.toFixed(1).replace(".", numStr.includes(",") ? "," : ".")
          : Math.round(current).toString();
        setDisplay(`${prefix}${formatted}${suffix}`);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);

  return display;
}

function AnimatedStat({ value, label, color, delay }: { value: string; label: string; color: string; delay: number }) {
  const animated = useCountUp(value, 1500, delay * 1000);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center">
      <p className="text-7xl sm:text-9xl font-black font-mono mb-4" style={{ color }}>{animated}</p>
      <p className="text-xl sm:text-2xl text-gray-400">{label}</p>
    </motion.div>
  );
}

/* ============================================================
   REUSABLE SLIDE COMPONENTS
   ============================================================ */

function SectionTitle({ icon, title, subtitle, color = "#3b82f6", bg }: { icon: string; title: string; subtitle: string; color?: string; bg?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
      {bg && <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${bg})` }} />}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 120, damping: 10 }} className="text-[6rem] sm:text-[8rem] mb-6">{icon}</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 50, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.3, duration: 0.6 }} className="text-5xl sm:text-7xl font-black tracking-tight mb-4" style={{ color }}>{title}</motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-[3px] w-48 sm:w-80 mb-6 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-2xl sm:text-3xl text-gray-300 max-w-5xl">{subtitle}</motion.p>
      </div>
    </div>
  );
}

function BulletSlide({ title, icon, items, note }: { title: string; icon: string; items: { emoji: string; text: string }[]; note?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 sm:px-16">
      <motion.div initial={{ opacity: 0, y: -20, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ type: "spring", stiffness: 100 }}
        className="flex items-center justify-center gap-4 mb-8">
        <motion.span initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", delay: 0.1 }} className="text-5xl sm:text-6xl">{icon}</motion.span>
        <h2 className="text-4xl sm:text-5xl font-bold text-center">{title}</h2>
      </motion.div>
      <div className="space-y-3 sm:space-y-4 w-full max-w-6xl">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.15 * (i + 1), type: "spring", stiffness: 80 }}
            className="flex items-start gap-5 border-l-4 border-blue-500/50 bg-white/[0.03] backdrop-blur-sm rounded-r-xl pl-6 py-4 sm:pl-8 sm:py-5"
            style={{ boxShadow: "-4px 0 12px rgba(59,130,246,0.1)" }}>
            <span className="text-3xl sm:text-4xl shrink-0">{item.emoji}</span>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
      {note && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-6 text-base sm:text-lg text-gray-500 italic text-center">{note}</motion.p>}
    </div>
  );
}

function StatSlide({ title, stats }: { title: string; stats: { value: string; label: string; color: string }[] }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 sm:px-16">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl font-bold mb-14 sm:mb-20 text-center">{title}</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
        {stats.map((s, i) => (
          <AnimatedStat key={i} value={s.value} label={s.label} color={s.color} delay={0.25 * (i + 1)} />
        ))}
      </div>
    </div>
  );
}

function QuoteSlide({ quote, author, emoji }: { quote: string; author: string; emoji: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
      <motion.span initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 100 }} className="text-6xl sm:text-7xl mb-8">{emoji}</motion.span>
      <motion.blockquote initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.3, duration: 0.7 }}
        className="text-3xl sm:text-5xl font-light italic text-gray-200 max-w-5xl leading-relaxed">
        &ldquo;{quote}&rdquo;
      </motion.blockquote>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 text-xl sm:text-2xl text-gray-500 font-medium">— {author}</motion.p>
    </div>
  );
}

function TwoColumnSlide({ title, icon, left, right }: { title: string; icon: string; left: { title: string; items: string[] }; right: { title: string; items: string[] } }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 sm:px-16">
      <motion.div initial={{ opacity: 0, y: -20, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} className="flex items-center justify-center gap-4 mb-8">
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-5xl sm:text-6xl">{icon}</motion.span>
        <h2 className="text-4xl sm:text-5xl font-bold text-center">{title}</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -60, filter: "blur(6px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ delay: 0.2, type: "spring" }}
          className="border-l-4 border-red-500 bg-white/[0.03] backdrop-blur-sm rounded-xl pl-6 sm:pl-8 py-5"
          style={{ boxShadow: "-4px 0 12px rgba(239,68,68,0.1)" }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4">{left.title}</h3>
          <ul className="space-y-3">
            {left.items.map((item, i) => <li key={i} className="text-lg sm:text-xl text-gray-300 flex items-start gap-3"><span className="text-red-400 mt-1 text-xl">✕</span>{item}</li>)}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60, filter: "blur(6px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, type: "spring" }}
          className="border-l-4 border-green-500 bg-white/[0.03] backdrop-blur-sm rounded-xl pl-6 sm:pl-8 py-5"
          style={{ boxShadow: "-4px 0 12px rgba(34,197,94,0.1)" }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">{right.title}</h3>
          <ul className="space-y-3">
            {right.items.map((item, i) => <li key={i} className="text-lg sm:text-xl text-gray-300 flex items-start gap-3"><span className="text-green-400 mt-1 text-xl">✓</span>{item}</li>)}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

function BigTextSlide({ text, subtext, color = "#3b82f6" }: { text: string; subtext: string; color?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 sm:px-16 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.6, filter: "blur(15px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="text-5xl sm:text-7xl font-black max-w-6xl leading-tight" style={{ color }}>{text}</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="mt-10 text-2xl sm:text-3xl text-gray-400 max-w-5xl leading-relaxed">{subtext}</motion.p>
    </div>
  );
}

function ImageSlide({ title, src, alt, caption }: { title: string; src: string; alt: string; caption?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 sm:px-16 text-center">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl font-bold mb-8 text-center">{title}</motion.h2>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
        className="max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </motion.div>
      {caption && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-4 text-base text-gray-500 italic text-center max-w-2xl">{caption}</motion.p>}
    </div>
  );
}

/* ============================================================
   INTERACTIVE: QUIZ (presenter clicks)
   ============================================================ */

function QuizSlide({ question, options, correctIndex, explanation }: { question: string; options: string[]; correctIndex: number; explanation: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-5 mb-8">
        <span className="text-6xl sm:text-7xl">🧩</span>
        <h2 className="text-4xl sm:text-6xl font-bold">Sahte mi Gerçek mi?</h2>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="text-2xl sm:text-3xl text-gray-200 mb-8 leading-relaxed">{question}</motion.p>
      <div className="space-y-4 mb-8 w-full max-w-5xl">
        {options.map((opt, i) => (
          <motion.button key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
            onClick={() => { setSelected(i); setRevealed(true); }}
            disabled={revealed}
            className={`w-full text-left px-8 py-6 rounded-2xl border transition-all text-xl sm:text-2xl ${
              revealed
                ? i === correctIndex
                  ? "bg-green-500/20 border-green-500 text-green-300"
                  : i === selected
                    ? "bg-red-500/20 border-red-500 text-red-300"
                    : "bg-white/5 border-white/10 text-gray-500"
                : "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 cursor-pointer"
            }`}>
            <span className="font-bold mr-3">{String.fromCharCode(65 + i)})</span>{opt}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {revealed && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-8 border max-w-5xl w-full ${selected === correctIndex ? "bg-green-900/20 border-green-500/30" : "bg-red-900/20 border-red-500/30"}`}>
            <p className={`font-bold text-2xl mb-2 ${selected === correctIndex ? "text-green-400" : "text-red-400"}`}>
              {selected === correctIndex ? "Doğru!" : "Yanlış!"}
            </p>
            <p className="text-gray-300 text-xl">{explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   INTERACTIVE: LIVE HACK DEMO (presenter triggers)
   ============================================================ */

const HACK_LINES = [
  "Hedef cihazlar taranıyor...",
  "IP: 85.103.██.███ (Kütahya/Simav)",
  "Tarayıcı: Chrome Mobil — Android 14",
  "Rehber taranıyor... 1.247 kişi bulundu",
  "Fotoğraflar kopyalanıyor... 3.891 dosya",
  "WhatsApp mesajları okunuyor...",
  "Banka uygulamaları tespit edildi: 3 adet",
  "Şifreler çıkartılıyor... 94 adet",
  "TÜM VERİLER ELE GEÇİRİLDİ! 💀",
];

function LiveHackDemo() {
  const [phase, setPhase] = useState<"idle" | "hack" | "reveal">("idle");
  const [lines, setLines] = useState(0);

  useEffect(() => {
    if (phase === "hack" && lines < HACK_LINES.length) {
      const t = setTimeout(() => setLines(p => p + 1), 700);
      return () => clearTimeout(t);
    }
    if (phase === "hack" && lines >= HACK_LINES.length) {
      const t = setTimeout(() => setPhase("reveal"), 2500);
      return () => clearTimeout(t);
    }
  }, [phase, lines]);

  if (phase === "idle") {
    return (
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[7rem] sm:text-[10rem] mb-8">💀</motion.div>
        <h2 className="text-5xl sm:text-8xl font-black text-red-500 mb-6">CANLI DEMO</h2>
        <p className="text-2xl sm:text-3xl text-gray-400 mb-10 max-w-3xl">Şimdi bu salondaki herkesi &quot;hackliyorum&quot;. Hazır mısınız?</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setPhase("hack")}
          className="bg-red-600 hover:bg-red-500 text-white text-2xl sm:text-3xl font-bold px-16 py-7 rounded-2xl border-none cursor-pointer shadow-lg shadow-red-500/30">
          🔴 Saldırıyı Başlat
        </motion.button>
      </div>
    );
  }

  if (phase === "hack") {
    return (
      <div className="flex flex-col h-full relative" style={{ background: "#0a0000" }}>
        {/* CRT scanline overlay */}
        <div className="absolute inset-0 crt-overlay z-10" />
        <motion.div animate={{ backgroundColor: ["#dc2626", "#7f1d1d", "#dc2626"] }} transition={{ repeat: Infinity, duration: 1.2 }}
          className="px-4 py-4 flex items-center justify-center gap-3 relative z-20">
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="text-2xl">⚠️</motion.span>
          <span className="text-white font-bold text-xl sm:text-2xl tracking-widest uppercase">SALONDAKİ CİHAZLAR TARANIYOR</span>
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="text-2xl">⚠️</motion.span>
        </motion.div>
        <div className="flex-1 p-8 sm:p-16 font-mono max-w-5xl mx-auto w-full relative z-20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-red-900/50">
            <span className="text-red-500 animate-pulse text-lg">● REC</span>
            <span className="text-red-700 text-lg">root@attacker:~#</span>
          </div>
          {HACK_LINES.slice(0, lines).map((line, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-4 mb-4">
              <span className="text-red-700 text-2xl">$</span>
              <span className={`text-xl sm:text-2xl terminal-glow ${i >= 6 ? "text-red-400" : "text-green-400"}`} style={i >= 6 ? { textShadow: "0 0 8px rgba(248,113,113,0.5)" } : undefined}>{line}</span>
            </motion.div>
          ))}
          {lines < HACK_LINES.length && (
            <div className="flex items-center gap-3"><span className="text-red-700 text-lg">$</span><span className="w-3 h-5 bg-green-500 animate-pulse" /></div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center" style={{ background: "linear-gradient(180deg, #022c22, #0a0a1a)" }}>
      <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring" }} className="text-[7rem] sm:text-[10rem] mb-8">🛡️</motion.div>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-5xl sm:text-8xl font-black text-emerald-400 mb-4">RAHAT OLUN!</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-2xl sm:text-3xl text-emerald-300/70 mb-10">Kimse hacklenmedi. Bu sadece bir animasyondu.</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl">
        <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
          Ama az önce yaşadığınız o <strong className="text-white">tedirginlik</strong> — işte dolandırıcıların istediği tam olarak bu.
          Panik halindeyken mantık devre dışı kalır. <strong className="text-emerald-300">Durun. Nefes alın. Düşünün.</strong>
        </p>
      </motion.div>
    </div>
  );
}

/* ============================================================
   BACKGROUND EFFECTS
   ============================================================ */

const PARTICLES = [
  { id: 0, x: 10, y: 15, size: 2, duration: 25, delay: 0 },
  { id: 1, x: 85, y: 8, size: 3, duration: 30, delay: 1 },
  { id: 2, x: 25, y: 70, size: 1.5, duration: 22, delay: 2 },
  { id: 3, x: 60, y: 35, size: 2.5, duration: 28, delay: 0.5 },
  { id: 4, x: 5, y: 90, size: 3, duration: 20, delay: 3 },
  { id: 5, x: 75, y: 55, size: 1.8, duration: 26, delay: 1.5 },
  { id: 6, x: 40, y: 20, size: 2.2, duration: 32, delay: 0.8 },
  { id: 7, x: 95, y: 45, size: 1.3, duration: 24, delay: 2.5 },
  { id: 8, x: 15, y: 50, size: 2.8, duration: 27, delay: 1.2 },
  { id: 9, x: 50, y: 85, size: 1.6, duration: 21, delay: 3.5 },
  { id: 10, x: 70, y: 10, size: 3.5, duration: 29, delay: 0.3 },
  { id: 11, x: 30, y: 95, size: 1.2, duration: 23, delay: 4 },
  { id: 12, x: 90, y: 75, size: 2.6, duration: 31, delay: 1.8 },
];

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-500/[0.06]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
            opacity: [0.03, 0.07, 0.04, 0.06, 0.03],
          }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: "linear" }}
        />
      ))}
      {/* Vignette overlay */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
      }} />
    </div>
  );
}

/* ============================================================
   ALL SLIDES — CLEAN, ORDERED, NO DUPLICATES
   ============================================================ */

const slides: Slide[] = [

  // ==========================================
  // AÇILIŞ
  // ==========================================
  {
    id: "cover",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
          <span className="text-base sm:text-xl font-mono text-blue-400 uppercase tracking-[0.3em]">Simav Meslek Yüksekokulu</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="text-6xl sm:text-8xl font-black tracking-tight mb-8">
          <span className="text-shimmer">Siber Güvenlik</span><br />
          <span className="text-white">Farkındalık Etkinliği</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mb-10">
          Son kullanıcı güvenliği · Sosyal mühendislik · Siber zorbalık · Sanal bahis tuzakları
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="text-gray-500">
          <p><strong className="text-gray-300 text-xl sm:text-2xl">Öğr. Gör. Osman Can Çetlenbik</strong></p>
          <p className="text-base sm:text-lg mt-2">Bilgisayar Mühendisi — Manisa Celal Bayar Üniversitesi</p>
        </motion.div>
      </div>
    ),
  },

  {
    id: "stats",
    content: <StatSlide
      title="Türkiye'de Siber Tehditler — 2025/2026"
      stats={[
        { value: "1.2M+", label: "Saldırı girişimi / gün", color: "#ef4444" },
        { value: "%26", label: "Kullanıcılar çevrimiçi tehditle karşılaşıyor", color: "#f59e0b" },
        { value: "49M", label: "Tek sızıntıda açığa çıkan kayıt (2026)", color: "#3b82f6" },
        { value: "%900", label: "Deepfake artış oranı (yıllık)", color: "#a855f7" },
      ]}
    />,
  },

  {
    id: "quote-intro",
    content: <QuoteSlide emoji="🧠" quote="En güçlü güvenlik duvarı bile, içerideki biri kapıyı açarsa işe yaramaz." author="Sosyal Mühendislik Gerçeği" />,
  },

  // ==========================================
  // BÖLÜM 1: SON KULLANICI GÜVENLİĞİ
  // ==========================================
  {
    id: "sec1",
    section: "Son Kullanıcı Güvenliği",
    content: <SectionTitle icon="🔐" title="Son Kullanıcı Güvenliği" subtitle="Teknolojiyi kullanan en zayıf halka: İnsan" color="#3b82f6" bg="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80" />,
  },

  {
    id: "password-basics",
    content: <BulletSlide
      title="Şifre Güvenliği"
      icon="🔑"
      items={[
        { emoji: "❌", text: "123456, qwerty, doğum tarihi — Türkiye'de en çok kullanılan şifreler" },
        { emoji: "🎯", text: "Tek şifre = Domino etkisi: Bir site hacklenirse tüm hesaplarınız düşer" },
        { emoji: "✅", text: "Her hesaba farklı, 12+ karakter, harf-rakam-sembol karışık şifre" },
        { emoji: "🛡️", text: "Şifre yöneticisi kullanın (Bitwarden, KeePass) + 2FA mutlaka açın" },
      ]}
    />,
  },

  {
    id: "password-crack",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
        <motion.div initial={{ opacity: 0, y: -20, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} className="flex items-center justify-center gap-5 mb-10">
          <span className="text-6xl sm:text-7xl">⏱️</span>
          <h2 className="text-4xl sm:text-6xl font-bold text-center">Şifreniz Ne Kadar Sürede Kırılır?</h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 w-full max-w-7xl">
          {[
            { len: "4 karakter", time: "Anında", color: "bg-red-600", ex: "1234" },
            { len: "6 karakter", time: "5 saniye", color: "bg-red-500", ex: "abc123" },
            { len: "8 karışık", time: "7 dakika", color: "bg-orange-500", ex: "Kalem42!" },
            { len: "10 karışık", time: "6 ay", color: "bg-yellow-500", ex: "K@le3m_52!" },
            { len: "12 karışık", time: "3.000 yıl", color: "bg-green-500", ex: "Tr#n85_kL!m2" },
            { len: "14 karakter", time: "800.000 yıl", color: "bg-green-600", ex: "S!m@v_MYO_2026" },
            { len: "16+ karakter", time: "Milyarlarca yıl", color: "bg-emerald-600", ex: "Passphrase" },
            { len: "Cümle şifre", time: "∞", color: "bg-emerald-700", ex: "BenSimavdaYasıyorum!" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.5, filter: "blur(6px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ delay: 0.1 * i, type: "spring" }}
              className={`${item.color} rounded-2xl p-5 sm:p-7 text-center text-white shadow-lg`}>
              <p className="font-bold text-base sm:text-lg">{item.len}</p>
              <p className="text-3xl sm:text-5xl font-black my-3">{item.time}</p>
              <p className="text-sm sm:text-base opacity-80 font-mono">{item.ex}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-base text-gray-500 italic text-center mt-6">Kaynak: Hive Systems 2024 — Modern GPU ile</p>
      </div>
    ),
  },

  {
    id: "password-domino",
    content: <BigTextSlide
      text="1 şifre çalındı → 47 hesap ele geçirildi"
      subtext="Aynı şifreyi kullanan bir kişinin tek bir forum sitesi hacklenince e-posta, banka, sosyal medya, e-Devlet hesaplarının hepsi düştü."
      color="#ef4444"
    />,
  },

  {
    id: "2fa",
    content: <TwoColumnSlide
      title="İki Faktörlü Doğrulama (2FA)"
      icon="📲"
      left={{
        title: "SMS ile 2FA (Riskli)",
        items: ["SIM Swap saldırısına açık", "SMS ele geçirilebilir", "Operatör sosyal mühendisliği", "Hiç yoktan iyidir ama..."],
      }}
      right={{
        title: "Authenticator App (Güvenli)",
        items: ["Google/Microsoft Authenticator", "Kod cihazdan çıkmaz", "SIM Swap'a karşı bağışık", "30 saniyede değişen kod"],
      }}
    />,
  },

  // ==========================================
  // BÖLÜM 2: OLTALAMA SALDIRILARI
  // ==========================================
  {
    id: "sec2",
    section: "Oltalama Saldırıları",
    content: <SectionTitle icon="🎣" title="Oltalama Saldırıları" subtitle="Saldırganların en yaygın silahı: Sahte mesajlar" color="#ef4444" bg="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80" />,
  },

  {
    id: "phishing-types",
    content: <BulletSlide
      title="Oltalama Türleri"
      icon="📧"
      items={[
        { emoji: "📧", text: "E-posta: Sahte CEO, banka veya kargo — aciliyet ve korku yaratır" },
        { emoji: "📱", text: "Smishing (SMS): 'Kargonuz bekliyor' linki ile sahte ödeme sayfası" },
        { emoji: "🔗", text: "Typosquatting: banka.com.tr yerine banka-iade.com veya bank.com" },
        { emoji: "📞", text: "Vishing (Telefon): Sahte polis, savcı veya banka müdürü araması" },
      ]}
    />,
  },

  {
    id: "example-fake-email",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-6 sm:px-16 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-4 mb-8">
          <span className="text-5xl sm:text-6xl">📧</span>
          <h2 className="text-3xl sm:text-5xl font-bold">Örnek: Sahte CEO E-postası</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full max-w-5xl">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl text-gray-800">
            <div className="bg-[#0078d4] text-white px-8 py-4 flex items-center gap-3 text-2xl"><span>📧</span><span className="font-semibold">Outlook</span></div>
            <div className="p-8 border-b border-gray-200">
              <p className="font-bold text-3xl mb-3">Acil Ödeme Talimatı - GİZLİ</p>
              <p className="text-gray-600 text-xl">Gönderen: <strong>Mehmet Kaya (CEO)</strong> <span className="text-red-500 font-mono">&lt;ceo@hoIding-onay.xyz&gt;</span></p>
            </div>
            <div className="p-8 text-xl sm:text-2xl leading-relaxed">
              <p>Şu an yurtdışındayım, <strong>çok acil</strong> bir ödeme lazım. <u>Bugün 17:00&apos;a kadar</u> <strong>450.000 TL</strong> gönderin. <strong>Muhasebeden kimseyle paylaşmayın.</strong> Beni sakın aramayın.</p>
            </div>
            <div className="bg-red-50 border-t border-red-200 px-8 py-6">
              <p className="text-red-600 font-bold text-xl mb-4">🚩 Kırmızı Bayraklar:</p>
              <ul className="space-y-3 text-red-500 text-xl text-left">
                <li>• E-posta adresi şirketin gerçek domaini değil (hoIding-onay.xyz)</li>
                <li>• &quot;Beni aramayın&quot; — teyit almayı engelliyor</li>
                <li>• Aşırı aciliyet ve gizlilik baskısı</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },

  {
    id: "example-fake-sms",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-5 mb-8">
          <span className="text-6xl sm:text-7xl">📱</span>
          <h2 className="text-4xl sm:text-6xl font-bold">Örnek: Sahte Kargo SMS&apos;i</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.2 }}
            className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700">
            <p className="text-gray-400 text-lg sm:text-xl mb-4">PTT Kargo — 14:23</p>
            <div className="bg-gray-800 rounded-xl p-5 text-lg sm:text-xl text-gray-200">
              <p>Sayın müşterimiz, kargonuz gümrükte beklemektedir. 24.90 TL gümrük vergisini ödemezseniz kargonuz iade edilecektir.</p>
              <p className="text-blue-400 mt-3 text-base sm:text-lg">hxxps://ptt-kargo-odeme.com/tr</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700">
            <p className="text-red-400 font-bold text-lg sm:text-xl mb-4">Linke tıklarsanız ne olur?</p>
            <div className="space-y-3 text-lg sm:text-xl text-gray-300">
              <p>1️⃣ Sahte PTT ödeme sayfası açılır</p>
              <p>2️⃣ Kart bilgilerinizi girersiniz</p>
              <p>3️⃣ &quot;24.90 TL&quot; yerine <strong className="text-red-400">24.900 TL</strong> çekilir</p>
              <p>4️⃣ Onay kodundaki tutarı okumadığınız için fark etmezsiniz</p>
            </div>
            <div className="mt-4 bg-green-900/30 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 text-base sm:text-lg">✅ Gerçek PTT sitesi: ptt.gov.tr</p>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },

  {
    id: "example-fake-bank",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
        <motion.div initial={{ opacity: 0, y: -20, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} className="flex items-center justify-center gap-5 mb-8">
          <span className="text-6xl sm:text-7xl">🏦</span>
          <h2 className="text-4xl sm:text-6xl font-bold text-center">Örnek: Sahte Banka Giriş Sayfası</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl text-gray-800">
          {/* Fake browser bar */}
          <div className="bg-gray-100 px-6 py-4 flex items-center gap-3 border-b">
            <div className="flex gap-2"><span className="w-4 h-4 rounded-full bg-red-400" /><span className="w-4 h-4 rounded-full bg-yellow-400" /><span className="w-4 h-4 rounded-full bg-green-400" /></div>
            <div className="flex-1 bg-white rounded-full px-5 py-2.5 text-lg border border-gray-300 flex items-center gap-2">
              <span className="text-green-600">🔒</span>
              <span className="text-gray-500">garanti-bbva-</span><span className="text-red-600 font-bold">giris</span><span className="text-gray-500">.com/online</span>
            </div>
          </div>
          {/* Fake bank page */}
          <div className="text-center py-8 px-6">
            <div className="w-20 h-20 bg-green-600 rounded-2xl mx-auto flex items-center justify-center text-4xl mb-4 shadow-lg">🏦</div>
            <h3 className="font-bold text-2xl text-gray-800 mb-1">Garanti BBVA</h3>
            <p className="text-gray-500 text-base mb-6">İnternet Bankacılığı Giriş</p>
            <div className="max-w-sm mx-auto space-y-4">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-left text-base text-gray-400">TC Kimlik No</div>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 text-left text-base text-gray-400">Şifre</div>
              <div className="bg-green-600 text-white rounded-xl px-5 py-4 text-center text-lg font-bold">Giriş Yap</div>
            </div>
          </div>
          {/* Red flags */}
          <div className="bg-red-50 border-t-2 border-red-200 px-6 py-5">
            <p className="text-red-600 font-bold text-lg sm:text-xl mb-3">🚩 Kırmızı Bayraklar:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ul className="space-y-2 text-red-500 text-lg flex-1">
                <li>• Domain: garanti-bbva-<strong>giris</strong>.com (SAHTE)</li>
                <li>• Gerçek adres: garantibbva.com.tr</li>
                <li>• SMS linki ile geldiniz → kesinlikle sahte</li>
              </ul>
              <div className="bg-green-50 border border-green-300 rounded-xl px-5 py-4 text-center shrink-0">
                <p className="text-green-700 font-bold text-lg">✅ Gerçek adres:</p>
                <p className="text-green-600 text-2xl font-mono font-bold">garantibbva.com.tr</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },

  {
    id: "example-fake-edevlet",
    content: <BulletSlide
      title="Sahte e-Devlet Tuzağı"
      icon="🏛️"
      items={[
        { emoji: "📱", text: "'e-Devlet şifrenizle giriş yapıldı, sizin değilse kontrol edin' — 2025-2026'nın en yaygın SMS dolandırıcılığı" },
        { emoji: "🔗", text: "Adres hilesi: e-devIet.gov.com (büyük I ile 'l' taklit) — gözle farkı yok" },
        { emoji: "💳", text: "Bilgilerinizi girerseniz: adınıza şirket, kredi kartı, telefon hattı açılır" },
        { emoji: "✅", text: "1 Nisan 2026'dan itibaren yurt dışı kaynaklı linkli SMS'ler otomatik engelleniyor — ama yurt içi tehdit sürüyor" },
      ]}
    />,
  },

  {
    id: "quishing",
    content: <BulletSlide
      title="QR Kod Tuzakları — Quishing"
      icon="📷"
      items={[
        { emoji: "📈", text: "2025'te QR kodlu oltalama saldırıları 5 kat arttı — Kasım'da 249.000+ saldırı tespit edildi (Kaspersky)" },
        { emoji: "🏪", text: "Restoran menüsü, otopark, durak — gerçek QR kodun üzerine sahte sticker yapıştırılıyor" },
        { emoji: "💳", text: "Telefon ödeme anında araya giren zararlı yazılım: Siz 50 TL öderken 5.000 TL çekiliyor" },
        { emoji: "🛡️", text: "QR taramadan önce URL'yi kontrol edin — bilinmeyen sitelere kart bilgisi girmeyin" },
      ]}
      note="Kafe, restoran veya otoparkta QR taramadan önce sticker'ın orijinal olduğundan emin olun"
    />,
  },

  {
    id: "quiz-phishing",
    content: <QuizSlide
      question="Aşağıdaki e-posta adreslerinden hangisi SAHTE?"
      options={[
        "destek@garanti.com.tr",
        "bilgi@turkiye.gov.tr",
        "guvenlik@garanti-bbva-destek.com",
        "noreply@ptt.gov.tr",
      ]}
      correctIndex={2}
      explanation="garanti-bbva-destek.com gerçek Garanti adresi değil. Gerçeği: garantibbva.com.tr — Saldırganlar güvenilir görünen sahte domainler kullanır."
    />,
  },

  {
    id: "phishing-cases",
    content: <BulletSlide
      title="Gerçek Hayattan Güncel Örnekler"
      icon="📖"
      items={[
        { emoji: "📞", text: "Mart 2026, Gaziantep: Sahte savcı, 'Adınız terör soruşturmasına karıştı' diyerek bir vatandaştan 6 milyon TL değerinde altın ve mücevher aldı" },
        { emoji: "💰", text: "Aralık 2025, Sakarya: Telefonda kendini polis ve savcı olarak tanıtan dolandırıcılar, 3.5 milyon TL'yi vatandaşların hesaplarından çekti" },
        { emoji: "🎙️", text: "2025: Deepfake ses klonlama vakaları %900 arttı — 3 saniyelik ses kaydıyla annenizin/babanızın sesi birebir kopyalanıyor" },
        { emoji: "💾", text: "Şubat 2026: IDMerit veri sızıntısı — Türkiye'de 49 milyon kişinin kimlik bilgileri açığa çıktı, SIM Swap ve sahte hesap riski" },
      ]}
    />,
  },

  {
    id: "sim-kargo",
    content: (() => {
      function KargoSim() {
        const [phase, setPhase] = useState<"sms" | "site" | "trap" | "done">("sms");
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl sm:text-5xl font-bold mb-8">
              📦 Simülasyon: Sahte Kargo SMS&apos;i
            </motion.h2>
            <div className="w-full max-w-lg">
              <AnimatePresence mode="wait">
                {phase === "sms" && (
                  <motion.div key="sms" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
                    className="bg-gray-100 rounded-2xl p-6 text-gray-800 shadow-2xl cursor-pointer hover:bg-gray-50 transition-colors border-l-4 border-blue-500"
                    onClick={() => setPhase("site")}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl animate-pulse">📦</span>
                      <div className="text-left">
                        <p className="font-bold text-xl text-gray-800">MNG KARGO</p>
                        <p className="text-sm text-gray-500">Şimdi</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 text-left">Kargonuz teslim edilemedi. 24 TL gümrük vergisini ödemek için tıklayınız...</p>
                    <p className="text-blue-500 text-sm font-bold mt-2 text-left">hxxps://mng-kargo-odeme.com/tr</p>
                    <p className="text-center text-gray-400 text-sm mt-4 animate-bounce">👆 Tıklayın</p>
                  </motion.div>
                )}
                {phase === "site" && (
                  <motion.div key="site" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-2xl text-gray-800">
                    <div className="bg-blue-900 p-4 text-white font-bold text-xl">MNG KARGO</div>
                    <div className="p-6">
                      <div className="bg-yellow-50 border border-yellow-300 p-3 rounded-lg mb-4 text-yellow-800 text-lg">⚠️ Teslimat başarısız. Gümrük vergisi eksik.</div>
                      <div className="border rounded-lg p-4 mb-3"><p className="text-sm text-gray-500">Takip No</p><p className="font-mono font-bold text-xl">TR-882931102</p></div>
                      <div className="border rounded-lg p-4 bg-red-50 border-red-200 mb-4"><p className="text-sm text-red-500">Kalan Borç</p><p className="font-bold text-red-700 text-2xl">24.00 TL</p></div>
                      <button onClick={() => setPhase("trap")} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-700">Ödeme Yap (24 TL)</button>
                    </div>
                  </motion.div>
                )}
                {phase === "trap" && (
                  <motion.div key="trap" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-2xl text-gray-800">
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-4 text-center border-b pb-3">3D Secure Doğrulama</h3>
                      <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm text-gray-700 border border-gray-300">
                        SMS: Kartınızla <span className="font-bold bg-yellow-200 px-1">24,500.00 TL</span> tutarındaki işlem için şifreniz: 192381
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => setPhase("done")} className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold text-lg">Onayla</button>
                        <button onClick={() => setPhase("done")} className="flex-1 bg-red-500 text-white py-4 rounded-xl font-bold text-lg">İptal</button>
                      </div>
                    </div>
                  </motion.div>
                )}
                {phase === "done" && (
                  <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-900/30 border border-red-500/30 rounded-2xl p-8">
                    <p className="text-3xl font-bold text-red-400 mb-3">24.500 TL Çekildi!</p>
                    <p className="text-xl text-gray-300 mb-4">SMS&apos;te &quot;24 TL&quot; değil &quot;24.500 TL&quot; yazıyordu. Onay kodunu okumadan girdiniz.</p>
                    <p className="text-lg text-yellow-400 font-bold">Ders: Onay SMS&apos;indeki TUTARI mutlaka okuyun!</p>
                    <button onClick={() => setPhase("sms")} className="mt-4 text-blue-400 underline text-lg cursor-pointer bg-transparent border-none">Tekrar Dene</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      }
      return <KargoSim />;
    })(),
  },

  // ==========================================
  // BÖLÜM 3: SOSYAL MÜHENDİSLİK
  // ==========================================
  {
    id: "sec3",
    section: "Sosyal Mühendislik",
    content: <SectionTitle icon="🎭" title="Sosyal Mühendislik" subtitle="İnsanlar hacklenmiyor, ikna ediliyor" color="#ef4444" bg="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80" />,
  },

  {
    id: "brain-modes",
    content: <TwoColumnSlide
      title="Beyninizin İki Modu"
      icon="🧠"
      left={{
        title: "Otopilot (Refleks)",
        items: ["Hızlı, otomatik, zahmetsiz", "Tehlike anında düşünmeden tepki", "Korku ve panik bunu tetikler", "Saldırganın hedefi: Sizi buraya sokmak"],
      }}
      right={{
        title: "Analitik Zihin (Mantık)",
        items: ["Yavaş, hesaplı, dikkatli", "Enerji gerektirir — beyin kaçınır", "Şüpheli durumları sorgular", "Sizin hedefiniz: Bunu devrede tutmak"],
      }}
    />,
  },

  {
    id: "se-weapons",
    content: <BulletSlide
      title="Saldırganın Silahları"
      icon="⚔️"
      items={[
        { emoji: "👮", text: "Otorite Baskısı: 'Ben komiserim, hesabınız terör soruşturmasında'" },
        { emoji: "⏰", text: "Aciliyet: 'Son 15 dakika! Hemen işlem yapın yoksa hesabınız kapanacak'" },
        { emoji: "😨", text: "Korku: 'Eşiniz tutuklanacak, derhal parayı poşete koyun'" },
        { emoji: "🤑", text: "Açgözlülük: 'Tebrikler! 50.000 TL kazandınız, sadece kart bilgisi lazım'" },
      ]}
    />,
  },

  {
    id: "osint-example",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-5 mb-8">
          <span className="text-6xl sm:text-7xl">📸</span>
          <h2 className="text-4xl sm:text-6xl font-bold">Bir Instagram Paylaşımından Çıkarılan Bilgiler</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl overflow-hidden text-gray-800 shadow-xl">
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 h-48 flex items-center justify-center">
              <div className="bg-white/80 rounded-lg px-6 py-4 text-center">
                <p className="text-sm text-gray-500">📋 Yaka Kartı</p>
                <p className="font-bold text-lg">Ad Soyad — Unvan</p>
                <p className="text-base">ABC Holding</p>
              </div>
            </div>
            <div className="px-5 py-4 text-base">
              <p>📍 <strong>Rixos Premium, Antalya</strong></p>
              <p className="text-gray-500">#fintech2026 #konferans</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="bg-red-900/20 border border-red-500/20 rounded-xl p-5">
            <p className="text-red-400 font-bold text-xl sm:text-2xl mb-4">🕵️ Saldırganın topladığı bilgiler:</p>
            <ul className="space-y-3 text-lg sm:text-xl text-gray-300">
              <li>✓ Ad-soyad ve unvan</li>
              <li>✓ Çalıştığı şirket</li>
              <li>✓ Şu an Antalya&apos;da — evi boş</li>
              <li>✓ Hangi otelde kaldığı</li>
              <li>✓ Yaka kartındaki QR&apos;dan: TC, e-posta</li>
              <li className="text-red-400 font-bold mt-2">→ Hedefli oltalama e-postası kurgulayabilir</li>
            </ul>
          </motion.div>
        </div>
      </div>
    ),
  },

  {
    id: "golden-rule",
    content: <BigTextSlide
      text="Devlet asla telefonda para, altın veya şifre istemez."
      subtext="Bu cümleyi bir yere yazın. Ailenize öğretin. Hayat kurtarır."
      color="#ef4444"
    />,
  },

  {
    id: "whatsapp-fraud",
    content: <BulletSlide
      title="WhatsApp Dolandırıcılığı"
      icon="💬"
      items={[
        { emoji: "🌍", text: "Yabancı numaralardan gelen 'Google/YouTube'da çalış, para kazan' mesajları — Hindistan, Pakistan alan kodları" },
        { emoji: "👻", text: "GhostPairing: 'Bu sen misin?' linkine tıklayınca WhatsApp hesabınız ele geçiriliyor — şifre bile gerekmiyor" },
        { emoji: "📞", text: "'Numaram değişti' mesajıyla tanıdık gibi davranıp acil para talebi — ses kaydıyla doğrulama bile sahte olabilir" },
        { emoji: "📊", text: "WhatsApp 2025'in ilk 6 ayında 6.8 milyon dolandırıcılık hesabını kapattı" },
      ]}
      note="Tanımadığınız numaralardan gelen mesajlara yanıt vermeyin — engelle ve şikayet et"
    />,
  },

  {
    id: "deepfake",
    content: <BulletSlide
      title="Deepfake ve Yapay Zeka Tehditleri"
      icon="🤖"
      items={[
        { emoji: "🎙️", text: "Ses klonlama: 3 saniyelik ses kaydıyla birebir kopya — 2025'te deepfake vakaları %900 arttı, dünyada 8 milyon deepfake tespit edildi" },
        { emoji: "📹", text: "Gerçek zamanlı yüz değiştirme: Video aramalarda bile sahte kimlik kullanılabiliyor — banka KYC doğrulamaları bile atlatılıyor" },
        { emoji: "💬", text: "Yapay zeka ile kusursuz Türkçe dolandırıcılık mesajları — artık yazım hatası yok, dil kusursuz, kişiye özel içerik" },
        { emoji: "🛡️", text: "Aile güvenlik parolası belirleyin — 'Anne acil para lazım' diyene sorun: 'Parolamız ne?'" },
      ]}
    />,
  },

  {
    id: "live-hack",
    content: <LiveHackDemo />,
  },

  // ==========================================
  // BÖLÜM 4: SİBER ZORBALIK
  // ==========================================
  {
    id: "sec4",
    section: "Siber Zorbalık",
    content: <SectionTitle icon="💔" title="Siber Zorbalık" subtitle="Ekranın arkasında da gerçek insanlar var" color="#a855f7" bg="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80" />,
  },

  {
    id: "bully-stats",
    content: <StatSlide
      title="Siber Zorbalık — Türkiye Gerçekleri"
      stats={[
        { value: "1/2", label: "Her 2 çocuktan biri zorbalık yapıyor (TÜBİTAK)", color: "#a855f7" },
        { value: "3/4", label: "Her 4 çocuktan 3'ü zorbalığa uğruyor", color: "#ef4444" },
        { value: "7/24", label: "Evde bile devam eder", color: "#f59e0b" },
        { value: "5+yıl", label: "Hapis cezası", color: "#3b82f6" },
      ]}
    />,
  },

  {
    id: "bully-types",
    content: <BulletSlide
      title="Siber Zorbalık Türleri"
      icon="⚠️"
      items={[
        { emoji: "📸", text: "İfşa: İzinsiz fotoğraf ve video paylaşımı — mağdurun hayatını karartır" },
        { emoji: "👥", text: "Organize dışlama: Gruptan atma, sahte hesapla karalama kampanyası" },
        { emoji: "📱", text: "Sürekli taciz: Tehdit mesajları, stalk, sahte profille yakınlara ulaşma" },
        { emoji: "🎮", text: "Oyun içi zorbalık: Sesli chat'te hakaret, hesap çalma" },
      ]}
    />,
  },

  {
    id: "bully-action",
    content: <TwoColumnSlide
      title="Ne Yapmalı?"
      icon="🆘"
      left={{
        title: "Mağdursanız",
        items: ["Ekran görüntüsü ALIN (delil)", "Engelle + platforma şikayet et", "ALO 182 (Siber Suç İhbar)", "Psikolojik destek almaktan çekinmeyin"],
      }}
      right={{
        title: "Tanıksanız",
        items: ["Sessiz kalmayın — sessizlik onay demektir", "Mağdura destek olun", "Zorbalığı paylaşmayın/beğenmeyin", "Yetkiliye bildirin"],
      }}
    />,
  },

  {
    id: "sim-teknik-destek",
    content: (() => {
      function TeknikDestekSim() {
        const [phase, setPhase] = useState<"virus" | "done">("virus");
        const [countdown, setCountdown] = useState(30);
        useEffect(() => {
          if (phase === "virus" && countdown > 0) {
            const t = setInterval(() => setCountdown(p => p - 1), 1000);
            return () => clearInterval(t);
          }
        }, [phase, countdown]);
        return (
          <div className="flex flex-col items-center justify-center h-full px-4 text-center">
            <AnimatePresence mode="wait">
              {phase === "virus" && (
                <motion.div key="virus" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="w-full max-w-3xl">
                  <motion.div animate={{ backgroundColor: ["#1e40af", "#1e3a8a", "#1e40af"] }} transition={{ repeat: Infinity, duration: 2 }}
                    className="rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500">
                    <div className="bg-blue-900 p-3 flex items-center gap-2">
                      <div className="flex gap-1"><span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-green-400" /></div>
                      <span className="text-white/50 text-sm font-mono flex-1 text-center">microsoft-security-alert.com</span>
                    </div>
                    <div className="p-8 text-white text-center">
                      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}
                        className="text-6xl mb-4">⚠️</motion.div>
                      <h2 className="text-3xl sm:text-4xl font-black text-red-400 mb-3">VİRÜS TESPİT EDİLDİ!</h2>
                      <p className="text-lg sm:text-xl text-gray-300 mb-4">Bilgisayarınızda 3 virüs bulundu. Verileriniz risk altında.</p>
                      <motion.p animate={{ color: ["#ef4444", "#fbbf24", "#ef4444"] }} transition={{ repeat: Infinity, duration: 1 }}
                        className="text-4xl font-black font-mono mb-4">{countdown}s</motion.p>
                      <p className="text-gray-400 mb-6">Hemen Microsoft Destek&apos;i arayın: <span className="text-yellow-400 font-bold">0850-XXX-XXXX</span></p>
                      <div className="flex gap-4 justify-center">
                        <button onClick={() => setPhase("done")} className="bg-red-600 text-white py-3 px-8 rounded-xl text-lg font-bold border-none cursor-pointer hover:bg-red-500">Numarayı Ara</button>
                        <button onClick={() => setPhase("done")} className="bg-gray-700 text-white py-3 px-8 rounded-xl text-lg font-bold border-none cursor-pointer hover:bg-gray-600">Kapat (Ctrl+W)</button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
              {phase === "done" && (
                <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="max-w-2xl bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-10">
                  <span className="text-6xl block mb-4">🛡️</span>
                  <p className="text-3xl font-bold text-emerald-400 mb-3">Bu Bir Dolandırıcılık!</p>
                  <p className="text-xl text-gray-300 mb-4">Microsoft, Apple veya hiçbir şirket sizi pop-up ile uyarıp aratmaz. Tarayıcı kilitlenirse Ctrl+W veya zorla kapatma kullanın.</p>
                  <button onClick={() => { setPhase("virus"); setCountdown(30); }} className="text-blue-400 underline cursor-pointer bg-transparent border-none text-lg">Tekrar</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }
      return <TeknikDestekSim />;
    })(),
  },

  // ==========================================
  // BÖLÜM 5: SANAL BAHİS VE VERİ SORGULAMA PANELLERİ
  // ==========================================
  {
    id: "sec5",
    section: "Sanal Bahis & Veri Panelleri",
    content: <SectionTitle icon="🎰" title="Sanal Bahis & Veri Sorgulama Panelleri" subtitle="'Kolay para' vaadi — pahalı ders" color="#f59e0b" bg="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=1920&q=80" />,
  },

  {
    id: "bahis-tuzak",
    content: <BulletSlide
      title="Yasadışı Bahis Tuzağı"
      icon="🚫"
      items={[
        { emoji: "📱", text: "Instagram ve TikTok reklamları ile gençleri hedef alıyor — 'garantili kupon', 'bedava bonus' yalanları" },
        { emoji: "💸", text: "Kazandığınızı çekemezsiniz: Sahte bonuslar, çekim engelleri, hesap dondurma — para hep sitede kalır" },
        { emoji: "🏦", text: "IBAN kiralama teklifi: 'Hesabınızı verin, 500 TL kazanın' → kara para aklama suçunun faili SİZ olursunuz" },
        { emoji: "⛓️", text: "Mart 2026: 13 ilde operasyon — tek bir çetenin 1.2 milyar TL işlem hacmi tespit edildi, kripto ile yurt dışına aktarıldı" },
      ]}
      note="2025'te tek bir bahis altyapısının aylık cirosu: 1 milyar dolar — 40 site, BTK tarafından erişime kapatıldı"
    />,
  },

  {
    id: "bahis-stats",
    content: <StatSlide
      title="Yasadışı Bahis — Gerçek Rakamlar (2025)"
      stats={[
        { value: "₺26M+", label: "Tek operasyonda tespit edilen ciro (milyar)", color: "#f59e0b" },
        { value: "%94", label: "Uzun vadede kaybeden", color: "#ef4444" },
        { value: "3-7yıl", label: "Hapis cezası (7258 SK)", color: "#a855f7" },
        { value: "%40", label: "Üniversitelilerde yaygınlık", color: "#3b82f6" },
      ]}
    />,
  },

  {
    id: "veri-panel",
    content: <BulletSlide
      title="Kişisel Veri Sorgulama Panelleri"
      icon="🖥️"
      items={[
        { emoji: "🔍", text: "Panel nedir? TC, isim, adres, telefon, aile bilgileri gibi kişisel verilerin toplu sorgulandığı yasadışı sistemler" },
        { emoji: "💾", text: "2026: IDMerit sızıntısı ile 49M kişinin verisi açığa çıktı · Şikayetvar 212K + Baydöner 1.5M kullanıcı sızdırıldı" },
        { emoji: "🕸️", text: "Telegram gruplarında satılıyor: 'TC gir, tüm bilgileri al' — aylık abonelik ile" },
        { emoji: "⚖️", text: "Kullanmak ve dağıtmak SUÇ: KVKK md. 17-18, TCK 136 — 2-4 yıl hapis · 2026'da en yüksek KVKK cezası: 17 milyon TL" },
      ]}
      note="Verileriniz büyük ihtimalle zaten sızdırılmış durumda — e-Devlet'ten düzenli kontrol edin"
    />,
  },

  {
    id: "panel-danger",
    content: <BulletSlide
      title="Panel Bilgisi Nasıl Kullanılıyor?"
      icon="⚠️"
      items={[
        { emoji: "📞", text: "Sahte polis araması: Adınızı, adresinizi, eşinizin bilgilerini bilerek güven kazanır" },
        { emoji: "🏦", text: "Sahte banka müdürü: 'TC'niz şu, adresiniz şu' diyerek kimliğini doğrulatır" },
        { emoji: "📱", text: "SIM Swap: TC ve kişisel bilgilerle operatörden yeni SIM çıkartılır" },
        { emoji: "🎭", text: "Hedefli oltalama: Kişisel bilgilerinizle size özel sahte mesaj kurgulanır" },
      ]}
      note="Sizi arayan kişi bilgilerinizi biliyorsa bu onun 'gerçek' olduğu anlamına gelmez — bu bilgiler panellerden alınmış olabilir"
    />,
  },

  {
    id: "sim-ponzi",
    content: (() => {
      function PonziSim() {
        const [phase, setPhase] = useState<"offer" | "earning" | "trap" | "done">("offer");
        const [balance, setBalance] = useState(0);
        useEffect(() => {
          if (phase === "earning" && balance < 250) {
            const t = setTimeout(() => setBalance(p => p + 50), 400);
            return () => clearTimeout(t);
          }
          if (phase === "earning" && balance >= 250) {
            const t = setTimeout(() => setPhase("trap"), 1000);
            return () => clearTimeout(t);
          }
        }, [phase, balance]);
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 text-center">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl sm:text-5xl font-bold mb-8">
              💰 Simülasyon: Görev Dolandırıcılığı
            </motion.h2>
            <div className="w-full max-w-lg">
              <AnimatePresence mode="wait">
                {phase === "offer" && (
                  <motion.div key="offer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
                    <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">💬</div>
                    <p className="text-xl text-gray-200 mb-2 font-bold">WhatsApp Mesajı:</p>
                    <p className="text-lg text-gray-300 mb-6">&quot;Merhaba! YouTube videolarını beğenerek günlük 500-2000 TL kazanabilirsiniz. Hemen başlamak için tıklayın!&quot;</p>
                    <button onClick={() => setPhase("earning")} className="bg-green-600 text-white py-4 px-10 rounded-xl text-xl font-bold border-none cursor-pointer hover:bg-green-500">Katıl</button>
                  </motion.div>
                )}
                {phase === "earning" && (
                  <motion.div key="earning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
                    <p className="text-gray-400 text-lg mb-2">Kazancınız</p>
                    <motion.p className="text-6xl font-black text-green-400 font-mono mb-4" key={balance}
                      initial={{ scale: 1.3 }} animate={{ scale: 1 }}>{balance} TL</motion.p>
                    <div className="w-full bg-gray-800 rounded-full h-3 mb-4"><motion.div className="bg-green-500 h-3 rounded-full" animate={{ width: `${(balance / 250) * 100}%` }} /></div>
                    <p className="text-gray-500">Video beğeniliyor...</p>
                  </motion.div>
                )}
                {phase === "trap" && (
                  <motion.div key="trap" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-8">
                    <p className="text-yellow-400 text-2xl font-bold mb-3">250 TL Kazandınız!</p>
                    <p className="text-xl text-gray-300 mb-6">Çekmek için 20.000 TL &quot;teminat yatırmanız&quot; gerekiyor. Yatırmak ister misiniz?</p>
                    <div className="flex gap-4">
                      <button onClick={() => setPhase("done")} className="flex-1 bg-red-600 text-white py-4 rounded-xl text-lg font-bold border-none cursor-pointer">Hayır, Tuzak!</button>
                      <button onClick={() => setPhase("done")} className="flex-1 bg-green-600 text-white py-4 rounded-xl text-lg font-bold border-none cursor-pointer">Yatır</button>
                    </div>
                  </motion.div>
                )}
                {phase === "done" && (
                  <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
                    <p className="text-3xl font-bold text-red-400 mb-3">Klasik Ponzi Tuzağı!</p>
                    <p className="text-xl text-gray-300 mb-4">İlk 250 TL &quot;olta yemi&quot;dir. Asıl hedef sizden 20.000 TL almaktır. İş veren para istemez, öder!</p>
                    <button onClick={() => { setPhase("offer"); setBalance(0); }} className="text-blue-400 underline cursor-pointer bg-transparent border-none text-lg">Tekrar</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      }
      return <PonziSim />;
    })(),
  },

  {
    id: "kripto-fraud",
    content: <BulletSlide
      title="Sahte Yatırım ve Kripto Dolandırıcılığı"
      icon="📉"
      items={[
        { emoji: "📱", text: "Instagram'da lüks yaşam gösteren profiller: 'VIP yatırım grubuna katıl, garantili kazanç' — başta küçük kâr gösterilir" },
        { emoji: "💰", text: "Mart 2026, Gaziantep: Sahte yatırım sitesiyle 2.3 milyar TL'lik vurgun — yüksek kazanç vaadiyle tuzağa düşürüldüler" },
        { emoji: "🪙", text: "Kripto fenomenlerinin hesapları hackleniyor: Sahte röportaj teklifleriyle X hesapları ele geçiriliyor" },
        { emoji: "⚖️", text: "Aralık 2025: Yeni CMK 128/A — bilişim dolandırıcılığında hesaplara anında el koyma yetkisi" },
      ]}
      note="'Garantili kazanç' diye bir şey yoktur — hiçbir yatırım %100 kâr vaat edemez"
    />,
  },

  {
    id: "bahis-rule",
    content: <BigTextSlide
      text="Yasadışı bahis siteleri senin kazanman için değil, kaybetmen için tasarlanmıştır."
      subtext="Kasa her zaman kazanır. Kazandığını çekemezsin. Kaybedince borcunu ödemek için daha fazla oynarsın. Bu bir döngü."
      color="#f59e0b"
    />,
  },

  // ==========================================
  // BÖLÜM 6: KENDİNİZİ KORUYUN
  // ==========================================
  {
    id: "sec6",
    section: "Kendinizi Koruyun",
    content: <SectionTitle icon="🛡️" title="Kendinizi Koruyun" subtitle="Bugün uygulayabileceğiniz adımlar" color="#22c55e" bg="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1920&q=80" />,
  },

  {
    id: "wifi-danger",
    content: <BulletSlide
      title="Halka Açık Wi-Fi = Açık Kapı"
      icon="📶"
      items={[
        { emoji: "☕", text: "Kafe, otel, havaalanı Wi-Fi'ına bağlandığınız an — tüm trafiğiniz izlenebilir" },
        { emoji: "👿", text: "Şeytani İkiz saldırısı: Sahte 'Starbucks_WiFi' ağı kurulur — bağlanınca şifreleriniz çalınır" },
        { emoji: "🏦", text: "Halka açık ağda banka uygulaması açmak = kredi kartı bilgilerinizi teslim etmek" },
        { emoji: "🛡️", text: "Çözüm: VPN kullanın, hassas işlemleri mobil veriyle yapın, otomatik bağlanmayı kapatın" },
      ]}
      note="Ücretsiz Wi-Fi'ın bedeli: Kişisel verileriniz"
    />,
  },

  {
    id: "sim-simswap",
    content: (() => {
      function SimSwapSim() {
        const [phase, setPhase] = useState<"normal" | "nosignal" | "hack" | "done">("normal");
        const [notifications, setNotifications] = useState(0);
        useEffect(() => {
          if (phase === "normal") {
            const t = setTimeout(() => setPhase("nosignal"), 2000);
            return () => clearTimeout(t);
          }
        }, [phase]);
        useEffect(() => {
          if (phase === "nosignal") {
            const t = setTimeout(() => setPhase("hack"), 1500);
            return () => clearTimeout(t);
          }
        }, [phase]);
        useEffect(() => {
          if (phase === "hack" && notifications < 5) {
            const t = setTimeout(() => setNotifications(p => p + 1), 600);
            return () => clearTimeout(t);
          }
          if (phase === "hack" && notifications >= 5) {
            const t = setTimeout(() => setPhase("done"), 1500);
            return () => clearTimeout(t);
          }
        }, [phase, notifications]);
        const bankMsgs = ["Hesabınızdan 4.500 TL çekildi", "Hesabınızdan 12.000 TL çekildi", "Yeni cihaz girişi: iPhone 16", "Şifre değiştirildi", "EFT: 28.000 TL gönderildi"];
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 text-center">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl sm:text-5xl font-bold mb-8">
              📲 Simülasyon: SIM Swap Saldırısı
            </motion.h2>
            <div className="flex gap-8 items-start max-w-4xl w-full justify-center">
              {/* Telefon */}
              <div className="bg-black rounded-[2rem] border-4 border-gray-800 p-6 w-64 shadow-2xl">
                <AnimatePresence mode="wait">
                  {phase === "normal" && (
                    <motion.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                      <div className="flex justify-between text-xs text-gray-400 mb-4"><span>Turkcell</span><span>📶 5G</span></div>
                      <span className="text-6xl block mb-4">📱</span>
                      <p className="text-green-400 text-lg">Her şey normal</p>
                    </motion.div>
                  )}
                  {phase === "nosignal" && (
                    <motion.div key="nosignal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                      <div className="flex justify-between text-xs text-red-400 mb-4"><span>Servis Yok</span><span>❌</span></div>
                      <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} className="text-6xl block mb-4">📵</motion.span>
                      <p className="text-red-400 text-lg font-bold">SIM Kayıtlı Değil</p>
                    </motion.div>
                  )}
                  {(phase === "hack" || phase === "done") && (
                    <motion.div key="hack" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
                      <p className="text-red-400 text-sm font-bold mb-3">📵 Sinyal Yok</p>
                      <div className="space-y-2 text-left">
                        {bankMsgs.slice(0, notifications).map((msg, i) => (
                          <motion.div key={i} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                            className="bg-red-900/40 border border-red-500/30 rounded-lg p-2 text-red-300 text-xs">{msg}</motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Bilgi */}
              <div className="flex-1 text-left max-w-sm">
                <AnimatePresence mode="wait">
                  {phase === "done" && (
                    <motion.div key="info" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
                      <p className="text-2xl font-bold text-red-400 mb-3">44.500 TL Çalındı!</p>
                      <p className="text-lg text-gray-300 mb-4">Dolandırıcı, sızdırılmış TC bilgilerinizle operatörden yeni SIM aldı. SMS doğrulamanız artık ona gidiyor.</p>
                      <p className="text-yellow-400 font-bold text-base">Çözüm: SMS yerine Authenticator kullanın. Operatöre SIM değişiklik şifresi tanımlayın.</p>
                      <button onClick={() => { setPhase("normal"); setNotifications(0); }} className="mt-3 text-blue-400 underline cursor-pointer bg-transparent border-none text-base">Tekrar</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );
      }
      return <SimSwapSim />;
    })(),
  },

  {
    id: "phone-check",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[6rem] sm:text-[8rem] mb-6">📱</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-black text-yellow-400 mb-8">ŞİMDİ TELEFONUNUZU ÇIKARIN</motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 max-w-5xl w-full text-left space-y-6">
          <div>
            <p className="text-yellow-400 font-bold text-2xl sm:text-3xl mb-3">📍 Konum Geçmişinize Bakın:</p>
            <p className="text-gray-300 text-xl sm:text-2xl"><strong>iPhone:</strong> Ayarlar → Gizlilik → Konum Servisleri → Önemli Konumlar</p>
            <p className="text-gray-300 text-xl sm:text-2xl mt-2"><strong>Android:</strong> Google Maps → Zaman Tüneli</p>
          </div>
          <div className="border-t border-white/10 pt-5">
            <p className="text-red-400 font-bold text-2xl sm:text-3xl mb-2">Gördünüz mü?</p>
            <p className="text-gray-400 text-xl sm:text-2xl">Google/Apple son 2 yılda gittiğiniz her yeri kaydediyor. Bu veri sızarsa saldırgan sizi tanıdığınızdan daha iyi tanır.</p>
          </div>
        </motion.div>
      </div>
    ),
  },

  {
    id: "app-permissions",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 sm:px-20 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-5 mb-10">
          <span className="text-6xl sm:text-7xl">🔍</span>
          <h2 className="text-4xl sm:text-6xl font-bold">Uygulama İzinlerini Kontrol Edin</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-yellow-400 font-bold text-xl sm:text-2xl mb-8">Şimdi bakın: Ayarlar → Uygulamalar → İzinler</motion.p>
        <div className="space-y-5 w-full max-w-5xl">
          {[
            { app: "Fener uygulaması", perm: "Kamera, Mikrofon, Konum", verdict: "🚩 Neden?!" },
            { app: "Hesap makinesi", perm: "Rehber, SMS okuma", verdict: "🚩 Casus yazılım!" },
            { app: "Hava durumu", perm: "Konum (her zaman)", verdict: "⚠️ Sadece kullanırken" },
            { app: "Sosyal medya", perm: "Kamera, Mikrofon, Rehber, Konum, Depolama", verdict: "⚠️ Kontrollü kullan" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-10 py-7">
              <div className="text-left">
                <p className="text-white text-2xl sm:text-3xl font-bold">{item.app}</p>
                <p className="text-gray-400 text-lg sm:text-xl">{item.perm}</p>
              </div>
              <span className="text-2xl sm:text-3xl shrink-0 ml-4">{item.verdict}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "five-steps",
    content: <BulletSlide
      title="5 Dakikada 5 Adım"
      icon="✅"
      items={[
        { emoji: "1️⃣", text: "Tüm hesaplarınıza 2FA (Authenticator) açın — şimdi, bu akşam" },
        { emoji: "2️⃣", text: "Aynı şifreyi kullanan tüm hesapları değiştirin — şifre yöneticisi kurun" },
        { emoji: "3️⃣", text: "e-Devlet'e girin → adınıza açılmış şirket/hat var mı kontrol edin" },
        { emoji: "4️⃣", text: "Sosyal medya gizliliğinizi 'Private' yapın — konumunuzu kapatın" },
        { emoji: "5️⃣", text: "Ailenize bir güvenlik parolası belirleyin — telefonda para isteyene karşı" },
      ]}
    />,
  },

  {
    id: "three-second-rule",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-[6rem] sm:text-[9rem] mb-8">⏱️</motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-6xl sm:text-9xl font-black text-blue-500 mb-8 leading-none">3 SANİYE KURALI</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-2xl sm:text-3xl text-gray-300 max-w-4xl leading-relaxed">
          Bir link tıklamadan, bir bilgi vermeden önce<br />
          <strong className="text-white">3 saniye durun ve düşünün:</strong>
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mt-10 text-2xl sm:text-4xl text-yellow-400 italic font-bold max-w-5xl">
          &ldquo;Bu benim düşüncem mi, yoksa birisi bana bunu düşündürtüyor mu?&rdquo;
        </motion.p>
      </div>
    ),
  },

  // ==========================================
  // KAPANIŞ
  {
    id: "live-try",
    content: (
      <div className="flex items-center justify-center h-full px-8 sm:px-16">
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 max-w-7xl w-full">
          {/* QR Code */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, boxShadow: ["0 0 20px rgba(59,130,246,0.2)", "0 0 50px rgba(59,130,246,0.4)", "0 0 20px rgba(59,130,246,0.2)"] }}
            transition={{ scale: { delay: 0.3, type: "spring" }, boxShadow: { repeat: Infinity, duration: 2, delay: 1 } }}
            className="bg-white p-8 rounded-3xl shrink-0">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://hackleme-sanati.vercel.app" alt="QR" className="w-72 h-72 sm:w-96 sm:h-96" />
          </motion.div>
          {/* Description */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl font-black text-blue-400 mb-6">ŞİMDİ DENEYİN!</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              QR kodu telefonunuzla tarayın ve gerçekçi dolandırıcılık simülasyonlarını deneyimleyin.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="space-y-4">
              {[
                { emoji: "🎣", text: "Sahte banka, e-Devlet ve kargo sayfaları" },
                { emoji: "📱", text: "SMS ve e-posta oltalama senaryoları" },
                { emoji: "📷", text: "QR kod tuzağı deneyleri" },
                { emoji: "🛡️", text: "Her senaryoda korunma ipuçları" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex items-center gap-4">
                  <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                  <p className="text-lg sm:text-xl text-gray-400">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "qr-experiment-final",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring" }} className="text-[6rem] sm:text-[8rem] mb-6">📷</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="text-5xl sm:text-7xl font-black text-yellow-400 mb-4">Son Bir Deney</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl text-gray-400 mb-10">Bu QR kodu telefonunuzla tarayın — bakalım ne olacak?</motion.p>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, boxShadow: ["0 0 20px rgba(234,179,8,0.2)", "0 0 50px rgba(234,179,8,0.4)", "0 0 20px rgba(234,179,8,0.2)"] }}
          transition={{ scale: { delay: 0.5, type: "spring" }, boxShadow: { repeat: Infinity, duration: 2, delay: 1 } }}
          className="bg-white p-8 rounded-3xl mb-6">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://hackleme-sanati.vercel.app/bolum/qr-kod-tuzagi" alt="QR" className="w-72 h-72 sm:w-96 sm:h-96" />
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="text-xl sm:text-2xl text-gray-500 italic">Merak etmeyin... ya da edin?</motion.p>
      </div>
    ),
  },

  {
    id: "closing",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-6 sm:px-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl font-black mb-3">Teşekkürler!</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl text-gray-400 mb-2">Sorularınız için hazırım.</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mb-6">
          <p className="text-gray-300 text-xl sm:text-2xl font-bold">Öğr. Gör. Osman Can Çetlenbik</p>
          <p className="text-gray-500 text-base sm:text-lg">osmancancetlenbik@gmail.com</p>
        </motion.div>
        {/* Social QR codes - büyük boyut */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex flex-row items-start gap-8 sm:gap-12">
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <motion.div animate={{ boxShadow: ["0 0 15px rgba(59,130,246,0.2)", "0 0 40px rgba(59,130,246,0.4)", "0 0 15px rgba(59,130,246,0.2)"] }}
              transition={{ repeat: Infinity, duration: 2.5 }} className="bg-white p-5 rounded-2xl mb-3">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://linkedin.com/in/osmancancetlenbik" alt="LinkedIn QR" className="w-52 h-52 sm:w-60 sm:h-60" />
            </motion.div>
            <p className="text-xl sm:text-2xl font-bold text-blue-400">💼 LinkedIn</p>
          </motion.div>
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <motion.div animate={{ boxShadow: ["0 0 15px rgba(236,72,153,0.2)", "0 0 40px rgba(236,72,153,0.4)", "0 0 15px rgba(236,72,153,0.2)"] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }} className="bg-white p-5 rounded-2xl mb-3">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://instagram.com/osmancancetlenbik" alt="Instagram QR" className="w-52 h-52 sm:w-60 sm:h-60" />
            </motion.div>
            <p className="text-xl sm:text-2xl font-bold text-pink-400">📸 Instagram</p>
          </motion.div>
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <motion.div animate={{ boxShadow: ["0 0 15px rgba(34,197,94,0.2)", "0 0 40px rgba(34,197,94,0.4)", "0 0 15px rgba(34,197,94,0.2)"] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.6 }} className="bg-white p-5 rounded-2xl mb-3">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://hackleme-sanati.vercel.app" alt="Site QR" className="w-52 h-52 sm:w-60 sm:h-60" />
            </motion.div>
            <p className="text-xl sm:text-2xl font-bold text-green-400">🌐 Simülasyonlar</p>
          </motion.div>
        </motion.div>
      </div>
    ),
  },
];

/* ============================================================
   PRESENTATION ENGINE
   ============================================================ */

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = slides.length;

  const goNext = useCallback(() => { setDirection(1); setCurrent(prev => Math.min(prev + 1, total - 1)); }, [total]);
  const goPrev = useCallback(() => { setDirection(-1); setCurrent(prev => Math.max(prev - 1, 0)); }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); goPrev(); }
      if (e.key === "Home") { e.preventDefault(); setDirection(-1); setCurrent(0); }
      if (e.key === "End") { e.preventDefault(); setDirection(1); setCurrent(total - 1); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, total]);

  const slide = slides[current];
  const section = slide.section || slides.slice(0, current + 1).reverse().find(s => s.section)?.section;

  return (
    <div className="h-screen w-screen relative overflow-hidden select-none"
      style={{ background: "linear-gradient(135deg, #020204 0%, #0a0a1a 50%, #0f0f20 100%)" }}>

      <BackgroundEffects />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3">
        <span className="text-xs sm:text-sm font-mono text-gray-600 uppercase tracking-wider">{section || ""}</span>
        <span className="text-xs sm:text-sm font-mono text-gray-600">{current + 1} / {total}</span>
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 z-50 transition-all duration-500 ease-out"
        style={{ width: `${((current + 1) / total) * 100}%`, boxShadow: "0 0 10px rgba(59,130,246,0.5), 0 0 20px rgba(59,130,246,0.2)" }} />

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id + current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60, scale: 0.95, filter: "blur(12px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: direction * -40, scale: 1.02, filter: "blur(6px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full pt-10 pb-14"
        >
          {slide.content}
        </motion.div>
      </AnimatePresence>

      {/* Navigation (click sides) */}
      <button onClick={goPrev} className="absolute left-0 top-0 bottom-0 w-1/6 z-40 cursor-pointer bg-transparent border-none opacity-0 hover:opacity-100 transition-opacity"
        disabled={current === 0}>
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-4xl">‹</span>
      </button>
      <button onClick={goNext} className="absolute right-0 top-0 bottom-0 w-1/6 z-40 cursor-pointer bg-transparent border-none opacity-0 hover:opacity-100 transition-opacity"
        disabled={current === total - 1}>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 text-4xl">›</span>
      </button>

      {/* Bottom navigation */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button onClick={goPrev} disabled={current === 0}
          className="text-gray-500 hover:text-white text-2xl border-none bg-transparent cursor-pointer disabled:opacity-20 transition-colors">‹</button>
        <span className="text-sm font-mono text-gray-500 min-w-[60px] text-center">{current + 1} / {total}</span>
        <button onClick={goNext} disabled={current === total - 1}
          className="text-gray-500 hover:text-white text-2xl border-none bg-transparent cursor-pointer disabled:opacity-20 transition-colors">›</button>
      </div>
    </div>
  );
}
