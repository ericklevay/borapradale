import { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Music2,
  Leaf,
  Shield,
  ChevronDown,
  Instagram,
  MessageCircle,
  ExternalLink,
  Zap,
} from "lucide-react";

const F = "'Figtree', sans-serif";
const DISPLAY = F;
const BODY = F;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function useCountdown(target: Date): TimeLeft {
  const [t, setT] = useState<TimeLeft>(getTimeLeft(target));
  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

const EVENT_DATE = new Date("2026-07-17T19:00:00-03:00");

/* ── Nav ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0C0D1E]/95 backdrop-blur-md border-b border-[#393A84]/40" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="/img/logo-dale-aura.png" alt="DALE" width={1517} height={769} className="h-10 w-auto object-contain" />
        <div
          className="hidden md:flex items-center gap-8 text-xs font-semibold text-white/60 tracking-[0.2em]"
          style={{ fontFamily: BODY }}
        >
          <a href="#sobre" className="hover:text-white transition-colors">SOBRE</a>
          <a href="#programacao" className="hover:text-white transition-colors">PROGRAMAÇÃO</a>
          <a href="#atracoes" className="hover:text-white transition-colors">ATRAÇÕES</a>
          <a href="#galeria" className="hover:text-white transition-colors">GALERIA</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <a
          href="#ingressos"
          className="bg-[#F2CB53] text-[#0C0D1E] px-5 py-2 text-xs font-black tracking-[0.2em] hover:bg-white transition-colors"
          style={{ fontFamily: DISPLAY }}
        >
          INGRESSOS
        </a>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);
  const units = [
    { value: days, label: "DIAS" },
    { value: hours, label: "HORAS" },
    { value: minutes, label: "MIN" },
    { value: seconds, label: "SEG" },
  ];
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Photo backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-[#0C0D1E]"
        style={{
          backgroundImage:
            "url(/img/hero.jpg)",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0C0D1E]/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 60%, rgba(57,58,132,0.55) 0%, transparent 65%), radial-gradient(ellipse at 75% 30%, rgba(65,139,176,0.25) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0C0D1E]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto">
        <p
          className="text-[#418BB0] text-xs font-semibold tracking-[0.45em] mb-2"
          style={{ fontFamily: BODY }}
        >
          BORA PRA
        </p>
        <img
          src="/img/top-banner-aura.jpg"
          alt="DALE Aura"
          width={1400}
          height={733}
          className="w-full max-w-3xl mx-auto h-auto"
        />

        {/* Date line */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 md:gap-5 mt-2 mb-10"
          style={{ fontFamily: DISPLAY }}
        >
          <span className="text-[#F2CB53] text-lg md:text-2xl font-bold tracking-[0.2em]">
            17 JULHO
          </span>
          <span className="text-white/25 hidden sm:inline">·</span>
          <span className="text-white text-lg md:text-2xl font-semibold tracking-widest">
            AMP213
          </span>
          <span className="text-white/25 hidden sm:inline">·</span>
          <span className="text-white/60 text-lg md:text-2xl font-semibold tracking-widest">
            OLINDA
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-start justify-center gap-4 md:gap-10 mb-12">
          {units.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-4xl md:text-7xl font-black text-white tabular-nums leading-none"
                style={{ fontFamily: DISPLAY }}
              >
                {String(value).padStart(2, "0")}
              </div>
              <div
                className="text-[#418BB0] text-[10px] font-semibold tracking-[0.25em] mt-2"
                style={{ fontFamily: BODY }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.sympla.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F2CB53] text-[#0C0D1E] px-10 py-4 text-base font-black tracking-[0.2em] hover:bg-white transition-colors w-full sm:w-auto text-center"
            style={{ fontFamily: DISPLAY }}
          >
            COMPRAR INGRESSO
          </a>
          <a
            href="#sobre"
            className="border border-white/25 text-white px-10 py-4 text-base font-bold tracking-[0.2em] hover:border-white hover:bg-white/5 transition-colors w-full sm:w-auto text-center"
            style={{ fontFamily: DISPLAY }}
          >
            SAIBA MAIS
          </a>
        </div>

        <p
          className="mt-8 text-white/35 text-sm italic"
          style={{ fontFamily: BODY }}
        >
          "Chegou antes das 20h? Tem um shot incluso pra você."
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/30 w-5 h-5" />
      </div>
    </section>
  );
}

/* ── Marquee ── */
function Marquee() {
  const genres = [
    "Salsa",
    "Cumbia",
    "Reggaeton",
    "Bachata",
  ];
  const all = [...genres, ...genres, ...genres];
  return (
    <div className="bg-[#393A84] py-[14px] overflow-hidden">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "daleMarquee 22s linear infinite" }}
      >
        {all.map((g, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 pr-6 text-lg font-black tracking-[0.18em] text-white/90"
            style={{ fontFamily: DISPLAY }}
          >
            {g}
            <span className="text-[#F2CB53] text-base">★</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes daleMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

/* ── Sobre ── */
function Sobre() {
  const highlights = [
    {
      icon: <Music2 className="w-5 h-5" />,
      title: "100m² de Pista",
      desc: "Espaço amplo pra você soltar o corpo",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Shot Incluso",
      desc: "Um drink de boas-vindas pra quem chega até 20h",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Comes e Bebes",
      desc: "Estrutura completa de alimentação e bar",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Ambiente Seguro",
      desc: "Curadoria de público e equipe de acolhimento",
    },
  ];
  return (
    <section id="sobre" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p
            className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-5"
            style={{ fontFamily: BODY }}
          >
            SOBRE O EVENTO
          </p>
          <h2
            className="text-5xl md:text-7xl font-black text-white leading-none mb-7"
            style={{ fontFamily: DISPLAY }}
          >
            A PISTA É SÓ<br />
            <span className="text-[#F2CB53]">ALEGRIA</span>
          </h2>
          <p
            className="text-white/55 leading-relaxed text-base mb-4"
            style={{ fontFamily: BODY }}
          >
            DALE é uma festa de música latina em Olinda que reúne salsa, cumbia,
            reggaeton e muito mais num único espaço vibrante. No AMP213, você
            encontra pista de dança, aula para iniciantes, gastronomia e um
            ambiente acolhedor — pra ir sozinho, em casal ou em grupo.
          </p>
          <p
            className="text-white/55 leading-relaxed text-base"
            style={{ fontFamily: BODY }}
          >
            Venha sem medo.{" "}
            <span className="text-white/80">Aqui todo mundo aprende, todo mundo dança.</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-[#13153A] border border-[#393A84]/35 p-5 hover:border-[#418BB0]/50 transition-colors"
            >
              <div className="text-[#F2CB53] mb-3">{h.icon}</div>
              <h3
                className="text-base font-bold text-white mb-1"
                style={{ fontFamily: DISPLAY }}
              >
                {h.title}
              </h3>
              <p
                className="text-white/45 text-sm leading-snug"
                style={{ fontFamily: BODY }}
              >
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Schedule ── */
function Schedule() {
  const items = [
    {
      time: "19h00",
      title: "Abertura das Portas",
      desc: "Entrada liberada. Primeiros a chegar ganham o shot incluso.",
    },
    {
      time: "19h00 – 20h00",
      title: "Shot de Boas-vindas",
      desc: "Resgate no balcão ao apresentar seu ingresso.",
    },
    {
      time: "20h00",
      title: "Set do DJ Incidental",
      desc: "15 anos de pista. Salsa, cumbia, reggaeton — e o que mais rolar.",
    },
    {
      time: "20h30",
      title: "Aula de Dança — Corpo de Baile",
      desc: "Mini-workshop aberto para iniciantes direto na pista.",
    },
    {
      time: "22h00+",
      title: "Pista Livre",
      desc: "A noite é longa e a pista é sua. Dança até o fim.",
    },
  ];
  return (
    <section id="programacao" className="py-28 px-6 bg-[#080910]">
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-4 text-center"
          style={{ fontFamily: BODY }}
        >
          17 JULHO 2026
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-16"
          style={{ fontFamily: DISPLAY }}
        >
          PROGRAMAÇÃO
        </h2>
        <div className="relative pl-10 border-l border-[#393A84]/40 space-y-10">
          {items.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[2.45rem] top-1 w-3 h-3 rounded-full bg-[#F2CB53] border-2 border-[#080910]" />
              <span
                className="text-[#418BB0] text-xs font-bold tracking-[0.2em]"
                style={{ fontFamily: DISPLAY }}
              >
                {item.time}
              </span>
              <h3
                className="text-xl font-bold text-white mt-1"
                style={{ fontFamily: DISPLAY }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/50 text-sm mt-1 leading-relaxed"
                style={{ fontFamily: BODY }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Lineup ── */
function Lineup() {
  return (
    <section id="atracoes" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-4 text-center"
          style={{ fontFamily: BODY }}
        >
          NA NOITE
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-16"
          style={{ fontFamily: DISPLAY }}
        >
          ATRAÇÕES
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {/* DJ Incidental */}
          <div className="relative overflow-hidden group bg-[#13153A]">
            <img
              src="/img/dj-incidental.jpg"
              alt="DJ Incidental no palco"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D1E] via-[#0C0D1E]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span
                className="text-[#F2CB53] text-xs font-bold tracking-[0.3em]"
                style={{ fontFamily: BODY }}
              >
                DJ · RESIDENTE
              </span>
              <h3
                className="text-4xl font-black text-white mt-1"
                style={{ fontFamily: DISPLAY }}
              >
                DJ INCIDENTAL
              </h3>
              <p
                className="text-white/55 text-sm mt-2"
                style={{ fontFamily: BODY }}
              >
                15 anos de pista. O residente que conduz a noite do início ao fim.
              </p>
            </div>
          </div>
          {/* Corpo de Baile */}
          <div className="relative overflow-hidden group bg-[#13153A]">
            <img
              src="/img/corpo-de-baile.jpg"
              alt="Casal do Corpo de Baile dançando"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D1E] via-[#0C0D1E]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span
                className="text-[#418BB0] text-xs font-bold tracking-[0.3em]"
                style={{ fontFamily: BODY }}
              >
                DANÇA · INICIANTES
              </span>
              <h3
                className="text-4xl font-black text-white mt-1"
                style={{ fontFamily: DISPLAY }}
              >
                CORPO DE BAILE
              </h3>
              <p
                className="text-white/55 text-sm mt-2"
                style={{ fontFamily: BODY }}
              >
                Dois casais de instrutores pra te colocar na pista sem medo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Video ── */
function VideoSection() {
  return (
    <section className="py-28 px-6 bg-[#080910]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-4 text-center"
          style={{ fontFamily: F }}
        >
          SENTE A VIBE
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-4"
          style={{ fontFamily: F }}
        >
          VEJA COMO É
        </h2>
        <p
          className="text-white/35 text-center text-sm mb-14"
          style={{ fontFamily: F }}
        >
          Registro de edições anteriores — o que esperar da pista
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Shorts embed — vertical 9:16 */}
          <div className="relative mx-auto w-full max-w-[320px] shrink-0">
            {/* Glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse, #393A84 0%, #418BB0 60%, transparent 100%)",
              }}
            />
            {/* Phone frame */}
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#393A84]/60 shadow-2xl shadow-[#393A84]/30 bg-[#0C0D1E]">
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/d_mzKQkg8V8?rel=0&modestbranding=1&playsinline=1"
                  title="DALE — vídeo da festa"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>

          {/* Copy alongside */}
          <div className="flex-1 text-center lg:text-left">
            <h3
              className="text-3xl md:text-4xl font-black text-white leading-tight mb-5"
              style={{ fontFamily: F }}
            >
              É assim que a{" "}
              <span className="text-[#F2CB53]">pista vibra</span>{" "}
              no DALE
            </h3>
            <p
              className="text-white/55 leading-relaxed mb-8 text-base"
              style={{ fontFamily: F }}
            >
              Salsa, cumbia e reggaeton num espaço que acolhe todo mundo.
              Deu pra sentir a energia? Garanta seu lugar na próxima edição.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#ingressos"
                className="bg-[#F2CB53] text-[#0C0D1E] px-8 py-4 text-sm font-black tracking-[0.2em] hover:bg-white transition-colors text-center"
                style={{ fontFamily: F }}
              >
                COMPRAR INGRESSO
              </a>
              <a
                href="https://www.youtube.com/shorts/d_mzKQkg8V8"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white/70 px-8 py-4 text-sm font-semibold hover:border-white/50 hover:text-white transition-colors text-center inline-flex items-center justify-center gap-2"
                style={{ fontFamily: F }}
              >
                Ver no YouTube
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Tickets ── */
function Tickets() {
  const tiers = [
    {
      batch: "1º LOTE",
      name: "Abre Alas",
      note: "Vagas limitadas",
      price: "R$ 30",
      featured: false,
    },
    {
      batch: "2º LOTE",
      name: "Lote 2",
      note: "",
      price: "R$ 40",
      featured: false,
    },
    {
      batch: "DUPLA",
      name: "Casal / Date",
      note: "Entrada para 2 pessoas",
      price: "R$ 50",
      featured: true,
    },
    {
      batch: "ESPECIAL",
      name: "Mãe Solo",
      note: "Homenagem às mães solo",
      price: "R$ 30",
      featured: false,
    },
    {
      batch: "4 PESSOAS",
      name: "Mesa VIP",
      note: "Mesa reservada + atendimento",
      price: "R$ 200",
      featured: false,
    },
  ];
  return (
    <section id="ingressos" className="py-28 px-6 bg-[#080910]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-4 text-center"
          style={{ fontFamily: BODY }}
        >
          GARANTA O SEU
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-4"
          style={{ fontFamily: DISPLAY }}
        >
          INGRESSOS
        </h2>
        <p
          className="text-white/35 text-center mb-16 text-sm"
          style={{ fontFamily: BODY }}
        >
          Compre pelo Sympla ou via PIX direto no WhatsApp
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-6 border transition-all duration-200 ${
                t.featured
                  ? "bg-[#393A84] border-[#418BB0]/70 shadow-xl shadow-[#393A84]/25"
                  : "bg-[#13153A] border-[#393A84]/30 hover:border-[#393A84]/60"
              }`}
            >
              {t.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F2CB53] text-[#0C0D1E] text-[10px] font-black px-3 py-1 tracking-[0.25em]"
                  style={{ fontFamily: DISPLAY }}
                >
                  MAIS POPULAR
                </span>
              )}
              <span
                className="text-[#418BB0] text-[10px] font-bold tracking-[0.3em]"
                style={{ fontFamily: BODY }}
              >
                {t.batch}
              </span>
              <h3
                className="text-2xl font-black text-white mt-1"
                style={{ fontFamily: DISPLAY }}
              >
                {t.name}
              </h3>
              {t.note && (
                <p
                  className="text-white/40 text-xs mt-1"
                  style={{ fontFamily: BODY }}
                >
                  {t.note}
                </p>
              )}
              <div
                className="text-4xl font-black text-[#F2CB53] mt-5"
                style={{ fontFamily: DISPLAY }}
              >
                {t.price}
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-white/25 text-xs mt-10"
          style={{ fontFamily: BODY }}
        >
          PIX disponível via WhatsApp · Sujeito a disponibilidade
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <a
            href="https://www.sympla.com.br/evento/dale-fuego-sexta-05-de-junho-amp-213-olinda-rua-do-amparo-213/3438745"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#2EC420] text-white px-8 py-4 text-sm font-black tracking-[0.15em] uppercase hover:brightness-110 transition-all shadow-lg shadow-[#2EC420]/30"
            style={{ fontFamily: DISPLAY }}
          >
            Comprar no Sympla
          </a>
          <a
            href="https://wa.me/5581989713537?text=Oi!%20Quero%20comprar%20ingresso%20no%20PIX%20sem%20taxas%20para%20o%20DALE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-[#F2CB53] text-[#F2CB53] px-8 py-4 text-sm font-black tracking-[0.15em] uppercase hover:bg-[#F2CB53] hover:text-[#0C0D1E] transition-colors"
            style={{ fontFamily: DISPLAY }}
          >
            Pix sem taxas · WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Venue ── */
function Venue() {
  return (
    <section id="local" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p
            className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-5"
            style={{ fontFamily: BODY }}
          >
            ONDE VAI SER
          </p>
          <h2
            className="text-5xl md:text-7xl font-black text-white leading-none mb-7"
            style={{ fontFamily: DISPLAY }}
          >
            AMP<span className="text-[#F2CB53]">213</span>
          </h2>
          <p
            className="text-white/55 leading-relaxed mb-8"
            style={{ fontFamily: BODY }}
          >
            Espaço cultural e gastronômico em Olinda, PE. Um lugar que respira
            arte, comida boa e noites que ficam na memória.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#F2CB53] w-4 h-4 mt-0.5 shrink-0" />
              <span
                className="text-white/65 text-sm"
                style={{ fontFamily: BODY }}
              >
                Rua do Amparo, 213 — Olinda, PE
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-[#418BB0] w-4 h-4 mt-0.5 shrink-0" />
              <span
                className="text-white/65 text-sm"
                style={{ fontFamily: BODY }}
              >
                Quinta-feira, 17 de julho · Abertura às 19h
              </span>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Rua+do+Amparo+213+Olinda+PE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 text-[#F2CB53] text-sm font-semibold hover:text-white transition-colors"
            style={{ fontFamily: BODY }}
          >
            Ver no Google Maps <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="relative">
          <img
            src="/img/fachada-amp.jpg"
            alt="AMP213 — Olinda"
            width={798}
            height={1200}
            loading="lazy"
            className="w-full aspect-[2/3] object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-[#393A84]/40" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0C0D1E]/70 to-transparent h-24" />
        </div>
      </div>
    </section>
  );
}

/* ── Gallery ── */
function Gallery() {
  const photos = [
    {
      url: "/img/galeria-1.jpg",
      alt: "Galera na pista de dança",
      tall: false,
      w: 1200,
      h: 800,
    },
    {
      url: "/img/galeria-2.jpg",
      alt: "Amigas dançando",
      tall: true,
      w: 1200,
      h: 800,
    },
    {
      url: "/img/galeria-3.jpg",
      alt: "Bar do AMP213",
      tall: false,
      w: 1200,
      h: 800,
    },
    {
      url: "/img/galeria-4.jpg",
      alt: "Casal dançando salsa",
      tall: false,
      w: 1200,
      h: 800,
    },
    {
      url: "/img/galeria-5.jpg",
      alt: "Galera comemorando",
      tall: false,
      w: 1200,
      h: 838,
    },
    {
      url: "/img/galeria-6.jpg",
      alt: "Quintal Secreto do AMP213",
      tall: false,
      w: 900,
      h: 1200,
    },
    {
      url: "/img/galeria-7.jpg",
      alt: "Drink no AMP213",
      tall: true,
      w: 1200,
      h: 798,
    },
    {
      url: "/img/galeria-8.jpg",
      alt: "Salão de dança do AMP213",
      tall: false,
      w: 960,
      h: 764,
    },
    {
      url: "/img/galeria-9.jpg",
      alt: "DALE - edição anterior",
      tall: false,
      w: 1200,
      h: 800,
    },
    {
      url: "/img/galeria-10.jpg",
      alt: "DALE - edição anterior",
      tall: false,
      w: 1200,
      h: 800,
    },
  ];
  return (
    <section id="galeria" className="py-28 px-6 bg-[#080910]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-4 text-center"
          style={{ fontFamily: BODY }}
        >
          EDIÇÃO ANTERIOR
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-16"
          style={{ fontFamily: DISPLAY }}
        >
          GALERIA
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-2">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`overflow-hidden bg-[#13153A] ${p.tall ? "row-span-2" : ""}`}
            >
              <img
                src={p.url}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Preciso saber dançar para ir?",
      a: "Não! A DALE é para todo mundo. O Corpo de Baile fará uma aula para iniciantes durante a festa — você vai sair sabendo dançar.",
    },
    {
      q: "Como funciona o shot incluso?",
      a: "Quem chegar até as 20h tem direito a um shot gratuito. É só apresentar o ingresso no balcão na entrada.",
    },
    {
      q: "Posso comprar pelo PIX?",
      a: "Sim! Basta entrar em contato via WhatsApp. Enviaremos a chave PIX e confirmaremos sua reserva em seguida.",
    },
    {
      q: "Tem opções veganas?",
      a: "Sim, o AMP213 oferece opções gastronômicas sem proteína animal. Fique à vontade pra pedir!",
    },
    {
      q: "Qual é o dress code?",
      a: "Casual e confortável para dançar. Venha do jeito que se sentir bem — a única regra é se divertir.",
    },
    {
      q: "O espaço é acessível?",
      a: "Estamos trabalhando para garantir acessibilidade plena. Para informações específicas, entre em contato pelo WhatsApp.",
    },
    {
      q: "Tem estacionamento?",
      a: "Há estacionamentos próximos ao AMP213. Recomendamos também aplicativos de transporte para maior comodidade.",
    },
  ];
  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[#418BB0] text-xs font-semibold tracking-[0.35em] mb-4 text-center"
          style={{ fontFamily: BODY }}
        >
          DÚVIDAS
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-white text-center mb-16"
          style={{ fontFamily: DISPLAY }}
        >
          FAQ
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#393A84]/30 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#13153A]/60 transition-colors"
              >
                <span
                  className="text-white font-semibold pr-4 text-sm"
                  style={{ fontFamily: BODY }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`shrink-0 text-[#418BB0] w-5 h-5 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: BODY }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-[#080910] border-t border-[#393A84]/30 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <img src="/img/logo-dale-aura.png" alt="DALE" width={1517} height={769} loading="lazy" className="h-16 w-auto object-contain mx-auto md:mx-0 mb-1" />
            <p
              className="text-white/35 text-sm"
              style={{ fontFamily: BODY }}
            >
              17 Julho · AMP213 · Olinda, PE
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/borapradale"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/45 hover:text-[#F2CB53] transition-colors text-sm"
              style={{ fontFamily: BODY }}
            >
              <Instagram className="w-4 h-4" />
              @borapradale
            </a>
            <a
              href="https://instagram.com/amp.213"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/45 hover:text-[#F2CB53] transition-colors text-sm"
              style={{ fontFamily: BODY }}
            >
              <Instagram className="w-4 h-4" />
              @amp.213
            </a>
            <a
              href="https://wa.me/55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-[#418BB0] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          <a
            href="#ingressos"
            className="bg-[#F2CB53] text-[#0C0D1E] px-7 py-3 text-sm font-black tracking-[0.2em] hover:bg-white transition-colors"
            style={{ fontFamily: DISPLAY }}
          >
            COMPRAR INGRESSO
          </a>
        </div>
        <div className="mt-10 pt-6 border-t border-[#393A84]/20 text-center">
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: BODY }}
          >
            © 2026 DALE · Todos os direitos reservados · Realização: AMP213 Olinda
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── App ── */
export default function App() {
  return (
    <div
      className="bg-background text-foreground min-h-screen overflow-x-hidden"
      style={{ fontFamily: BODY }}
    >
      <Nav />
      <Hero />
      <Marquee />
      <VideoSection />
      <Sobre />
      <Schedule />
      <Lineup />
      <Tickets />
      <Venue />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}
