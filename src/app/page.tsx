"use client";

import { motion } from "framer-motion";

const classes = [
  {
    title: "Gentle Flow",
    level: "Beginner",
    duration: "45 min",
    description: "Soft sequences that build strength, mobility, and a grounded breath rhythm.",
  },
  {
    title: "Vinyasa Balance",
    level: "Intermediate",
    duration: "60 min",
    description: "Mindful transitions and balanced postures that energize without overwhelming.",
  },
  {
    title: "Restorative Calm",
    level: "All levels",
    duration: "50 min",
    description: "Long, supported poses to release tension and restore your nervous system.",
  },
];

const weeklySchedule = [
  { day: "Monday", time: "07:00 - 08:00", className: "Sunrise Flow" },
  { day: "Wednesday", time: "18:30 - 19:30", className: "Evening Reset" },
  { day: "Friday", time: "12:30 - 13:15", className: "Midday Grounding" },
  { day: "Sunday", time: "09:30 - 10:30", className: "Weekend Restore" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-20 border-b border-[var(--sage)]/20 bg-[var(--background)]/90 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-[0.15em] text-[var(--sage-dark)] uppercase">
            Serene Yoga
          </p>
          <div className="hidden items-center gap-7 text-sm md:flex">
            <a href="#about" className="transition hover:text-[var(--sage-dark)]">About</a>
            <a href="#classes" className="transition hover:text-[var(--sage-dark)]">Classes</a>
            <a href="#schedule" className="transition hover:text-[var(--sage-dark)]">Schedule</a>
            <a href="#contact" className="transition hover:text-[var(--sage-dark)]">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.2fr_1fr] md:py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="space-y-7"
          >
            <p className="text-sm tracking-[0.14em] text-[var(--sage-dark)] uppercase">
              Find your calm
            </p>
            <h1 className="text-4xl leading-tight font-semibold md:text-6xl">
              Modern yoga that feels
              <span className="block text-[var(--sage-dark)]"> calm, clear, and premium.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-[var(--sage-dark)]/85 md:text-lg">
              A peaceful studio experience designed to help you move gently, breathe deeply,
              and reconnect with your body in an elegant space.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="#classes"
                className="rounded-full bg-[var(--sage-dark)] px-7 py-3 text-center text-sm font-medium text-[#f8f4ec] transition hover:bg-[var(--sage)]"
              >
                Explore classes
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--sage)]/40 px-7 py-3 text-center text-sm font-medium transition hover:border-[var(--sage-dark)]"
              >
                Book a session
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="rounded-3xl border border-[var(--sage)]/25 bg-[var(--surface)] p-8 shadow-[0_20px_60px_rgba(84,106,90,0.1)]"
          >
            <p className="text-xs tracking-[0.14em] text-[var(--sage-dark)] uppercase">Today at studio</p>
            <h2 className="mt-4 text-2xl font-medium">Evening Reset</h2>
            <p className="mt-2 text-sm text-[var(--sage-dark)]/80">18:30 - 19:30 | Breath-led Vinyasa</p>
            <div className="mt-8 space-y-3">
              <div className="rounded-2xl bg-[var(--background)] p-4">
                <p className="text-sm font-medium">Small classes</p>
                <p className="text-sm text-[var(--sage-dark)]/80">Max 12 students for focused guidance.</p>
              </div>
              <div className="rounded-2xl bg-[var(--background)] p-4">
                <p className="text-sm font-medium">Inclusive practice</p>
                <p className="text-sm text-[var(--sage-dark)]/80">Adjustments and props for every body.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl border border-[var(--sage)]/20 bg-[var(--surface)] p-8 md:p-12"
          >
            <p className="text-xs tracking-[0.14em] text-[var(--sage-dark)] uppercase">About</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A serene space for mindful movement</h2>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--sage-dark)]/90">
              Serene Yoga blends traditional breathwork with contemporary movement to help you
              build strength, flexibility, and mental clarity. Every class is intentionally paced
              and taught with gentle precision.
            </p>
          </motion.div>
        </section>

        <section id="classes" className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.14em] text-[var(--sage-dark)] uppercase">Yoga classes</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Choose your practice</h2>
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
                className="rounded-3xl border border-[var(--sage)]/20 bg-[var(--surface)] p-7"
              >
                <p className="text-sm text-[var(--sage-dark)]">{item.level}</p>
                <h3 className="mt-2 text-2xl font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--sage-dark)]/80">{item.duration}</p>
                <p className="mt-5 leading-7 text-[var(--sage-dark)]/90">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="schedule" className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[var(--sage)]/25 bg-[var(--surface)] p-8 md:p-12"
          >
            <p className="text-xs tracking-[0.14em] text-[var(--sage-dark)] uppercase">Schedule</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Weekly studio sessions</h2>
            <div className="mt-8 divide-y divide-[var(--sage)]/20">
              {weeklySchedule.map((item) => (
                <div key={item.day} className="grid gap-2 py-4 text-sm md:grid-cols-3 md:text-base">
                  <p className="font-medium">{item.day}</p>
                  <p className="text-[var(--sage-dark)]/90">{item.time}</p>
                  <p className="text-[var(--sage-dark)]/90">{item.className}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pt-14 pb-20 md:pt-20 md:pb-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 rounded-3xl border border-[var(--sage)]/25 bg-[var(--surface)] p-8 md:grid-cols-[1fr_1.1fr] md:p-12"
          >
            <div>
              <p className="text-xs tracking-[0.14em] text-[var(--sage-dark)] uppercase">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Start your yoga journey</h2>
              <p className="mt-4 max-w-md leading-8 text-[var(--sage-dark)]/90">
                Reach out for memberships, private classes, or studio visits.
              </p>
            </div>
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-[var(--sage)]/25 bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--sage-dark)]"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-[var(--sage)]/25 bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--sage-dark)]"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="rounded-2xl border border-[var(--sage)]/25 bg-[var(--background)] px-4 py-3 text-sm outline-none transition focus:border-[var(--sage-dark)]"
              />
              <button
                type="button"
                className="mt-2 rounded-full bg-[var(--sage-dark)] px-6 py-3 text-sm font-medium text-[#f8f4ec] transition hover:bg-[var(--sage)]"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
