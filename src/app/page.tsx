"use client";

import { motion } from "framer-motion";

const classes = [
  {
    title: "Minis (4-6 Jahre) - Sternenreise",
    icon: "🌟",
    duration: "40 Minuten",
    description:
      "Spielerische Bewegungen, Atemspiele und kleine Fantasiegeschichten fur einen liebevollen Einstieg.",
  },
  {
    title: "Kids (7-10 Jahre) - Abenteuer Flow",
    icon: "🦊",
    duration: "50 Minuten",
    description:
      "Dynamische Sequenzen mit Fokus auf Koordination, Konzentration und mutige Korperwahrnehmung.",
  },
  {
    title: "Teens (11-14 Jahre) - Balance & Fokus",
    icon: "🌙",
    duration: "60 Minuten",
    description:
      "Moderne Yoga-Praxis fur mehr Selbstvertrauen, innere Ruhe und einen gesunden Ausgleich zum Alltag.",
  },
];

const weeklySchedule = [
  { day: "Montag", time: "15:30 - 16:10", className: "Minis (4-6) - Sternenreise" },
  { day: "Dienstag", time: "16:30 - 17:20", className: "Kids (7-10) - Abenteuer Flow" },
  { day: "Donnerstag", time: "17:30 - 18:30", className: "Teens (11-14) - Balance & Fokus" },
  { day: "Samstag", time: "10:00 - 10:50", className: "Familienyoga (Eltern & Kind)" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#e9f0e5] via-[#f5efe6] to-[#eee9f8] font-[Nunito] text-slate-800">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 -left-16 h-52 w-52 rounded-full bg-[#d6e5cb]/70 blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-36 right-0 h-64 w-64 rounded-full bg-[#f6d8c7]/65 blur-2xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-40 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#d9d2ef]/60 blur-2xl"
      />

      <header className="sticky top-0 z-20 border-b border-[#b8c7ac]/35 bg-white/70 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-[0.14em] text-[#6f7d61] uppercase">
            Nava Yoga
          </p>
          <div className="hidden items-center gap-7 text-sm md:flex">
            <a href="#about" className="text-slate-700 transition hover:text-[#a87961]">Uber uns</a>
            <a href="#classes" className="text-slate-700 transition hover:text-[#a87961]">Kurse</a>
            <a href="#schedule" className="text-slate-700 transition hover:text-[#a87961]">Stundenplan</a>
            <a href="#contact" className="text-slate-700 transition hover:text-[#a87961]">Kontakt</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-30">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="space-y-7"
          >
            <p className="text-sm tracking-[0.14em] text-[#8ea37e] uppercase">
              Kinderyoga in liebevoller Atmosphare
            </p>
            <h1 className="text-4xl leading-tight font-semibold text-slate-900 md:text-6xl">
              Kinderyoga mit Freude,
              <span className="block text-[#a87961]"> Fantasie & Ruhe</span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-700 md:text-lg">
              Spielerische Yoga-Stunden fur Kinder, die Bewegung, Achtsamkeit und
              Selbstvertrauen starken.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#8ea37e] px-7 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_28px_rgba(126,149,107,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7e946b]"
              >
                Kostenlose Schnupperstunde
              </a>
              <a
                href="#schedule"
                className="rounded-full border border-[#d7c6b7] bg-white/70 px-7 py-3 text-center text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-[#c8a996] hover:text-[#9f6f58]"
              >
                Stundenplan ansehen
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#ddd4ed] bg-white/65 p-8 shadow-[0_20px_60px_rgba(121,105,152,0.14)] backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute -top-14 -right-14 h-44 w-44 rounded-full bg-[#f6d8c7]/70 blur-2xl" />
            <p className="text-xs tracking-[0.14em] text-[#8a78ab] uppercase">Sanfte Bildflache</p>
            <h2 className="mt-3 text-2xl font-medium text-slate-900">Kinder-Yoga Studio</h2>
            <p className="mt-2 text-sm text-slate-600">Platzhalter fur ein warmes Hero-Bild mit Kinderyoga-Szene</p>
            <div className="mt-6 rounded-3xl border border-white/60 bg-gradient-to-br from-[#efe8fb] via-[#f9f2e8] to-[#e8f0e2] p-7">
              <p className="text-4xl">🧘‍♀️ ✨ 🌈</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Helle, freundliche Bildwelt mit ruhigen Farben und verspielten Details fur Kinder
                und Eltern.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-[#d4e1cc]/80 bg-white/75 p-4 transition duration-300 hover:scale-[1.01]">
                <p className="text-sm font-medium text-slate-900">Kleine Gruppen</p>
                <p className="text-sm text-slate-600">Maximal 10 Kinder fur achtsame Begleitung.</p>
              </div>
              <div className="rounded-2xl border border-[#ead9cf]/80 bg-white/75 p-4 transition duration-300 hover:scale-[1.01]">
                <p className="text-sm font-medium text-slate-900">Elternfreundlich</p>
                <p className="text-sm text-slate-600">Transparente Kommunikation und sichere Umgebung.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-[#d6e5cb]/80 bg-white/70 p-8 shadow-[0_14px_34px_rgba(110,130,92,0.12)] backdrop-blur-sm md:p-12"
          >
            <p className="text-xs tracking-[0.14em] text-[#8ea37e] uppercase">Uber uns</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              Nava Yoga begleitet Kinder achtsam und spielerisch
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-700">
              Bei Nava Yoga erleben Kinder Yoga in einer ruhigen, sicheren und warmen Atmosphare.
              Jede Stunde verbindet Bewegung, Konzentration, Selbstvertrauen, Entspannung und
              Fantasie - kindgerecht, modern und mit viel Herz.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 md:grid-cols-5">
              {["Bewegung", "Konzentration", "Selbstvertrauen", "Entspannung", "Fantasie"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#d7c6b7]/70 bg-[#fffaf5]/80 px-4 py-3 text-center"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </section>

        <section id="classes" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.14em] text-[#8ea37e] uppercase">Kurse</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Passende Kurse fur jedes Alter</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {classes.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-[#ddd4ed] bg-white/75 p-7 shadow-[0_10px_28px_rgba(115,99,150,0.11)] backdrop-blur-sm"
              >
                <p className="text-3xl">{item.icon}</p>
                <h3 className="mt-3 text-2xl font-medium text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[#8a78ab]">{item.duration}</p>
                <p className="mt-5 leading-7 text-slate-700">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="schedule" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-[#ead9cf]/80 bg-white/70 p-8 shadow-[0_14px_34px_rgba(153,121,99,0.12)] backdrop-blur-sm md:p-12"
          >
            <p className="text-xs tracking-[0.14em] text-[#9f6f58] uppercase">Stundenplan</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Wochenplan bei Nava Yoga</h2>
            <div className="mt-8 divide-y divide-[#ecded4]">
              {weeklySchedule.map((item) => (
                <div
                  key={item.day}
                  className="grid gap-2 rounded-2xl py-4 text-sm transition md:grid-cols-3 md:px-3 md:text-base md:hover:bg-[#fffaf5]/70"
                >
                  <p className="font-medium text-slate-900">{item.day}</p>
                  <p className="text-slate-600">{item.time}</p>
                  <p className="text-slate-600">{item.className}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pt-16 pb-22 md:pt-24 md:pb-28">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 rounded-[2rem] border border-[#d6e5cb]/80 bg-white/70 p-8 shadow-[0_14px_34px_rgba(110,130,92,0.12)] backdrop-blur-sm md:grid-cols-[1fr_1.1fr] md:p-12"
          >
            <div>
              <p className="text-xs tracking-[0.14em] text-[#8ea37e] uppercase">Kontakt</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Wir freuen uns auf euch</h2>
              <p className="mt-4 max-w-md leading-8 text-slate-700">
                Schreib uns fur Fragen, Schnupperstunden oder eine personliche Beratung fur dein Kind.
              </p>
            </div>
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Dein Name"
                className="rounded-2xl border border-[#d4e1cc] bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-[#8ea37e]"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="rounded-2xl border border-[#ead9cf] bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-[#c8a996]"
              />
              <textarea
                placeholder="Nachricht"
                rows={4}
                className="rounded-2xl border border-[#ddd4ed] bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-[#8a78ab]"
              />
              <button
                type="button"
                className="mt-2 rounded-full bg-[#8ea37e] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#7e946b]"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
