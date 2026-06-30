"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "leaf" as const,
    title: "Mehr Selbstvertrauen",
    text: "Kinder stärken ihr Selbstbewusstsein und glauben an sich.",
    detail:
      "Jedes Kind trägt bereits alles in sich, was es braucht – manchmal braucht es nur einen geschützten Raum, um daran zu glauben. Mit spielerischem Yoga wächst Schritt für Schritt Mut, Selbstvertrauen und die Freude, sich selbst zu entdecken.",
  },
  {
    icon: "heart" as const,
    title: "Innere Ruhe",
    text: "Yoga hilft Kindern, zur Ruhe zu kommen und Stress abzubauen.",
    detail:
      "In einer Welt voller Reize schenken wir Kindern einen Moment zum Durchatmen. Sie lernen, ihre Gefühle wahrzunehmen, zur Ruhe zu finden und neue Kraft für ihren Alltag zu sammeln.",
  },
  {
    icon: "smile" as const,
    title: "Freude an Bewegung",
    text: "Mit Fantasie und Spiel entdecken Kinder ihren Körper mit Freude.",
    detail:
      "Kinder müssen nichts leisten. Sie dürfen lachen, ausprobieren, klettern, balancieren und ihre Fantasie entfalten. So entsteht eine natürliche Freude an Bewegung, die sie ein Leben lang begleiten kann.",
  },
  {
    icon: "star" as const,
    title: "Konzentration & Fokus",
    text: "Für mehr Konzentration in Schule, Alltag und Freizeit.",
    detail:
      "Kinder entdecken, wie gut es sich anfühlt, ganz bei einer Sache zu sein. Durch spielerische Achtsamkeit und Yoga lernen sie, ihre Aufmerksamkeit bewusst zu lenken und mit mehr Ruhe und Konzentration durch ihren Alltag zu gehen.",
  },
];

const navLinks = [
  { href: "#about", label: "Über Nava Yoga" },
  { href: "#classes", label: "Kurse" },
  { href: "#schedule", label: "Stundenplan" },
  { href: "#contact", label: "Kontakt" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.16em] text-[var(--sage-dark)] uppercase">
      {children}
    </p>
  );
}

function BenefitLineIcon({ icon }: { icon: (typeof benefits)[number]["icon"] }) {
  const stroke = "currentColor";
  const props = {
    className: "h-7 w-7 text-[var(--sage-dark)]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "leaf":
      return (
        <svg {...props}>
          <path d="M12 22c4-4 8-9 8-14a8 8 0 10-16 0c0 5 4 10 8 14z" />
          <path d="M12 22V10" />
          <path d="M8 14c2-1 4-1 8 0" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M12 20.5s-7-4.6-7-10a4 4 0 017-2.4A4 4 0 0119 10.5c0 5.4-7 10-7 10z" />
        </svg>
      );
    case "smile":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 14.5c1.2 1.4 2.4 2 3.5 2s2.3-.6 3.5-2" />
          <path d="M9 10h.01M15 10h.01" />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <path d="M12 3.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 14.8 7.8 16.5l.8-4.7-3.4-3.3 4.7-.7L12 3.5z" />
        </svg>
      );
  }
}

function BenefitCard({ item, index }: { item: (typeof benefits)[number]; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-[var(--beige-deep)]/45 bg-[var(--cream)]/30 p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[var(--beige-deep)]/80 hover:bg-[#f5efe6]/90 hover:shadow-[0_14px_40px_rgba(61,56,50,0.09)]"
    >
      <div className="origin-top-left transition-transform duration-300 ease-out group-hover:scale-110">
        <BenefitLineIcon icon={item.icon} />
      </div>
      <h3 className="mt-6 text-base font-semibold tracking-[0.01em] text-[#2c2620]">{item.title}</h3>
      <p className="mt-3 text-sm leading-[1.75] text-[var(--text-muted)]">{item.text}</p>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="border-t border-transparent pt-0 text-sm leading-[1.8] text-[var(--text-muted)] opacity-0 transition-[opacity,margin,padding,border-color] duration-300 ease-out group-hover:mt-4 group-hover:border-[var(--beige-deep)]/50 group-hover:pt-4 group-hover:opacity-100">
            {item.detail}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function NavLogo() {
  return (
    <a href="#" className="flex flex-col items-start gap-1.5">
      <svg
        className="h-6 w-6 text-[#2c2620]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M12 3c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z" />
        <path d="M12 8v8M9 14h6" />
      </svg>
      <span className="text-[0.65rem] font-bold tracking-[0.22em] text-[#2c2620] uppercase">
        Nava Yoga
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--beige)] text-[var(--foreground)]">
      <main>
        {/* 1. Hero inkl. transparenter Navigation */}
        <section className="relative isolate w-full" aria-label="Kinderyoga – Nava Yoga">
          <img
            src="/homepage-startseite-maedchen.png"
            alt=""
            aria-hidden
            className="block h-auto w-full"
          />

          <header className="fixed inset-x-0 top-0 z-40 border-0 bg-transparent shadow-none">
            <nav className="mx-auto grid w-full max-w-[92rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-[4.5%] py-5 sm:px-[5.5%] lg:py-6">
              <div className="justify-self-start">
                <NavLogo />
              </div>

              <div className="hidden items-center justify-center gap-7 text-[0.72rem] font-medium tracking-[0.14em] text-[#2c2620] uppercase md:flex lg:gap-9">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-[#2c2620]/70"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="justify-self-end">
                <a
                  href="#contact"
                  className="hidden rounded-full bg-[#2c2620] px-5 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--cream)] uppercase transition hover:bg-[#3d3832] md:inline-flex"
                >
                  Schnupperstunde
                </a>
              </div>
            </nav>

            <div className="mx-auto flex max-w-[92rem] gap-4 overflow-x-auto px-[4.5%] pb-3 text-[0.65rem] font-medium tracking-[0.12em] text-[#2c2620] uppercase md:hidden sm:px-[5.5%]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap transition hover:text-[#2c2620]/70"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </header>

          <div className="absolute inset-x-0 top-[20%] z-10 px-[4.5%] sm:top-[22%] sm:px-[5.5%] lg:top-[23%]">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative w-full max-w-[min(100%,30rem)] space-y-5 sm:max-w-[40%] sm:space-y-6 lg:max-w-[38%] lg:space-y-7"
            >
              <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[var(--sage-dark)] uppercase sm:text-xs">
                Kinderyoga mit Herz
              </p>

              <div className="space-y-1">
                <h1 className="text-[2.35rem] leading-[1.08] font-semibold tracking-[-0.02em] text-[#2c2620] sm:text-5xl lg:text-[3.25rem]">
                  Yoga für Kinder.
                </h1>
                <p className="text-[2.35rem] leading-[1.08] font-light tracking-[-0.02em] text-[#2c2620]/88 sm:text-5xl lg:text-[3.25rem]">
                  Für mehr Balance
                  <br />
                  im Leben.
                </p>
              </div>

              <div className="max-w-md space-y-3 border-l border-[var(--beige-deep)] pl-5">
                <p className="text-base leading-relaxed text-[#2c2620]/78 sm:text-lg">
                  Spielerisch. Achtsam. Mit Freude.
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                  Für starke Kinder – von klein bis gross.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--sage-dark)] px-8 py-3.5 text-sm font-medium tracking-wide text-[var(--cream)] transition duration-300 hover:bg-[#5f7356]"
                >
                  Kostenlose Schnupperstunde
                </a>
                <a
                  href="#classes"
                  className="inline-flex items-center justify-center rounded-full border border-[#2c2620]/18 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-[#2c2620] transition duration-300 hover:border-[var(--sage-dark)] hover:text-[var(--sage-dark)]"
                >
                  Kurse entdecken
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Vorteile */}
        <section id="benefits" className="relative overflow-visible bg-[var(--cream)] pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[36%] bottom-0 z-[1] w-screen -translate-x-1/2 md:top-[40%]"
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat opacity-[0.07]"
              style={{
                backgroundImage: "url('/homepage-startseite-maedchen.png')",
                backgroundPosition: "center right",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0.4) 72%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0.4) 72%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: [
                  "linear-gradient(to bottom,",
                  "transparent 0%,",
                  "color-mix(in srgb, var(--beige) 14%, transparent) 10%,",
                  "color-mix(in srgb, var(--beige) 32%, transparent) 24%,",
                  "color-mix(in srgb, var(--beige) 52%, transparent) 38%,",
                  "color-mix(in srgb, var(--beige) 68%, var(--cream)) 48%,",
                  "color-mix(in srgb, var(--beige) 74%, var(--cream)) 54%,",
                  "color-mix(in srgb, var(--beige) 66%, var(--cream)) 62%,",
                  "color-mix(in srgb, var(--beige) 48%, transparent) 76%,",
                  "color-mix(in srgb, var(--beige) 26%, transparent) 88%,",
                  "color-mix(in srgb, var(--beige) 10%, transparent) 96%,",
                  "transparent 100%)",
                ].join(" "),
              }}
            />
          </div>

          <div className="relative z-[2] mx-auto w-full max-w-6xl px-5 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
              {benefits.map((item, i) => (
                <BenefitCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Über die Yogalehrerin */}
        <section id="about" className="relative w-full">
          <img
            src="/Ueber_mich_Abschnitt_3.png"
            alt=""
            aria-hidden
            className="block h-auto w-full"
          />

          <div className="relative px-5 py-10 sm:px-8 md:absolute md:inset-y-0 md:right-0 md:flex md:w-[58%] md:items-center md:px-12 md:py-0 lg:px-16 xl:px-20">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full max-w-lg"
            >
              <SectionLabel>Über die Yogalehrerin</SectionLabel>
              <h2 className="mt-4 text-2xl font-bold text-[#2c2620] md:text-3xl">
                Liebevoll. Erfahren. Achtsam.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                Als ausgebildete Kinderyoga-Lehrerin begleite ich Kinder mit Geduld und Freude durch
                jede Stunde. Mein Fokus liegt auf Sicherheit, altersgerechten Impulsen und einer
                Atmosphäre, in der jedes Kind so sein darf, wie es ist.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--text-muted)] md:text-base">
                <li>· Zertifizierte Kinderyoga-Ausbildung</li>
                <li>· Erfahrung mit Kindern von 4–14 Jahren</li>
                <li>· Respektvolle, einladende Begleitung</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 4. Angebot */}
        <section id="classes" className="relative -mt-3 w-full md:-mt-4">
          <img
            src="/angebot_abschnitt_4.png"
            alt=""
            aria-hidden
            className="block h-auto w-full"
          />
        </section>

        {/* 5. Kontakt */}
        <section
          id="contact"
          className="relative bg-[var(--beige)] px-5 py-16 sm:px-6 md:py-20 lg:py-24"
        >
          <div className="mx-auto w-full max-w-6xl">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-12 rounded-[2rem] border border-[var(--beige-deep)] bg-[var(--cream)] p-8 shadow-[0_16px_48px_rgba(61,56,50,0.06)] md:grid-cols-[1fr_1.15fr] md:p-12 lg:p-14"
            >
              <div>
                <SectionLabel>Kontakt</SectionLabel>
                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Schnupperstunde oder Fragen?
                </h2>
                <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
                  Schreiben Sie uns – wir melden uns zeitnah mit Terminvorschlägen und allen Infos
                  zu Kurs, Alter und Ablauf.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-[var(--text-muted)]">
                  <li>✓ Kostenlose Probestunde</li>
                  <li>✓ Persönliche Beratung zum passenden Kurs</li>
                  <li>✓ Antwort in der Regel innerhalb von 24 Stunden</li>
                </ul>
              </div>
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <label className="sr-only" htmlFor="name">
                  Dein Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Dein Name"
                  className="rounded-2xl border border-[var(--beige-deep)] bg-[var(--beige)]/30 px-5 py-3.5 text-sm outline-none transition placeholder:text-[var(--text-muted)]/70 focus:border-[var(--sage)] focus:bg-[var(--cream)]"
                />
                <label className="sr-only" htmlFor="email">
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="E-Mail"
                  className="rounded-2xl border border-[var(--beige-deep)] bg-[var(--beige)]/30 px-5 py-3.5 text-sm outline-none transition placeholder:text-[var(--text-muted)]/70 focus:border-[var(--sage)] focus:bg-[var(--cream)]"
                />
                <label className="sr-only" htmlFor="message">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  placeholder="Nachricht (z. B. Alter Ihres Kindes, gewünschter Kurs)"
                  rows={5}
                  className="rounded-2xl border border-[var(--beige-deep)] bg-[var(--beige)]/30 px-5 py-3.5 text-sm outline-none transition placeholder:text-[var(--text-muted)]/70 focus:border-[var(--sage)] focus:bg-[var(--cream)]"
                />
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-[var(--sage-dark)] px-8 py-3.5 text-sm font-semibold text-[var(--cream)] shadow-[0_10px_28px_rgba(111,130,100,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5f7356]"
                >
                  Nachricht senden
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative w-full border-t border-[#E5D8C8]">
        <div className="bg-[#F5EFE6] py-10 md:py-12 lg:py-14">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="[&_svg]:text-[#4A3426] [&_span]:text-[#3E2E24]">
              <NavLogo />
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-[#3E2E24] uppercase">
                Links
              </h3>
              <ul className="mt-2.5 space-y-2 text-sm text-[#6B5B4D]">
                <li>
                  <a href="#" className="transition hover:text-[#3E2E24]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#classes" className="transition hover:text-[#3E2E24]">
                    Angebot
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition hover:text-[#3E2E24]">
                    Über mich
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-[#3E2E24]">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-[#3E2E24] uppercase">
                Kontakt
              </h3>
              <ul className="mt-2.5 space-y-2 text-sm text-[#6B5B4D]">
                <li>
                  <a href="mailto:hallo@navayoga.ch" className="transition hover:text-[#3E2E24]">
                    hallo@navayoga.ch
                  </a>
                </li>
                <li>
                  <a href="tel:+41791234567" className="transition hover:text-[#3E2E24]">
                    +41 79 123 45 67
                  </a>
                </li>
                <li>Winterthur &amp; Umgebung</li>
                <li className="flex gap-4">
                  <a href="#" className="text-[#4A3426] transition hover:text-[#3E2E24]">
                    Instagram
                  </a>
                  <a href="#" className="text-[#4A3426] transition hover:text-[#3E2E24]">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-[#3E2E24] uppercase">
                Newsletter
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#6B5B4D]">
                Bleibe auf dem Laufenden über neue Kurse, Workshops und Angebote.
              </p>
              <form
                className="mt-3 flex overflow-hidden rounded-xl border border-[#E5D8C8] bg-[#FFFDF9]"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  E-Mail-Adresse
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="E-Mail eingeben"
                  className="min-w-0 flex-1 bg-[#FFFDF9] px-4 py-2.5 text-sm text-[#3E2E24] outline-none placeholder:text-[#6B5B4D]/70"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center bg-[#4A3426] px-4 text-[#FFFFFF] transition hover:bg-[#3E2E24]"
                  aria-label="Newsletter abonnieren"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-[#4A3426] py-3">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 text-xs tracking-[0.12em] text-[#FFFFFF]/90 sm:flex-row sm:px-6">
            <p>© 2026 Nava Yoga</p>
            <p className="uppercase">
              <a href="#" className="transition hover:text-[#FFFFFF]">
                Impressum
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="transition hover:text-[#FFFFFF]">
                Datenschutz
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
