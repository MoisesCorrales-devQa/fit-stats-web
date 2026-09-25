import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.fitstats.es";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.MCBsoftware.fitStats&hl=en&utm_source=fitstats_en&utm_medium=landing&utm_campaign=international_launch";
const googleGroupUrl = "https://groups.google.com/g/fitstats-testing";

const pillars = [
  ["BODY", "Track weight, body measurements, body-fat percentage and body-composition estimates over time."],
  ["PERFORMANCE", "Log strength workouts, sets, reps and loads, then follow performance metrics such as estimated 1RM."],
  ["ACTIVITY", "Keep daily steps alongside the rest of your progress, with optional Android Health Connect access."],
  ["GOAL", "Set your current goal to cutting, maintenance, bulking or body recomposition."],
];

const benefits = [
  ["One view of your progress", "See body changes, activity and gym performance together instead of splitting them across unrelated apps."],
  ["Built for strength training", "Record sessions and compare the numbers that matter without turning FitStats into a social network."],
  ["Your data stays useful", "Core records are stored primarily on your device and can be exported for your own review, your coach or other tools."],
];

const screenshots = [
  ["Your weekly progress", "See how your body, activity and current goal are developing at a glance.", "/images/screen-dashboard-en.png"],
  ["Workouts and performance", "Log sessions and review sets, loads and estimated 1RM performance.", "/images/screen-workouts-en.png"],
  ["Weight trend", "Follow your weight with clear charts, averages and a complete record history.", "/images/screen-weight-en.png"],
  ["Body composition", "Review body-composition estimates and measurements with careful context around changes.", "/images/screen-composition-en.png"],
];

export default function EnglishLanding() {
  return (
    <>
      <Head>
        <title>FitStats | Track your body and strength progress together</title>
        <meta
          name="description"
          content="FitStats is an Android fitness tracker for weight, body measurements, body composition, steps and strength-training performance."
        />
        <link rel="canonical" href={`${siteUrl}/en/`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en/`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/en/`} />
        <meta property="og:title" content="FitStats | More than a workout tracker" />
        <meta property="og:description" content="Track how your body changes and how your strength performance develops in one Android app." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FitStats | More than a workout tracker" />
        <meta name="twitter:description" content="Track body changes, activity and strength performance together." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "FitStats",
              operatingSystem: "Android",
              applicationCategory: "HealthApplication",
              description: "Android app for tracking body changes, activity and strength-training performance.",
              installUrl: playStoreUrl,
              url: `${siteUrl}/en/`,
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-[#07110d] text-slate-100">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8 lg:px-12">
          <nav className="mb-8 flex flex-col gap-4 border-b border-emerald-400/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <a href="#top" className="flex items-center gap-3">
              <Image src="/images/icon.png" alt="FitStats app icon" width={88} height={88} className="h-11 w-11 rounded-xl" priority />
              <span className="text-2xl font-black tracking-wide text-white">Fit<span className="text-emerald-300">Stats</span></span>
            </a>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300">
              <a href="#features" className="hover:text-emerald-200">Features</a>
              <Link href="/en/privacy/" className="hover:text-emerald-200">Privacy</Link>
              <Link href="/" hrefLang="es" className="rounded-lg border border-white/15 px-3 py-2 hover:border-emerald-400/50 hover:text-emerald-200" aria-label="Ver FitStats en español">ES</Link>
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-400 px-4 py-2 font-bold text-[#07110d] transition hover:bg-emerald-300">Download</a>
            </div>
          </nav>

          <section id="top" className="relative overflow-hidden border-b border-emerald-400/20 pb-14 pt-8 sm:pt-14">
            <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">Available for Android on Google Play</p>
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">All your progress. Not just your workouts.</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Track your body and your training in one place to understand whether you are actually making progress.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300">Get it on Google Play</a>
                  <a href="#features" className="rounded-lg border border-emerald-400/40 px-6 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10">Explore features</a>
                </div>
              </div>
              <figure className="flex flex-col items-center justify-end">
                <Image
                  src="/images/dashboard-header-en.png"
                  alt="FitStats dashboard in English showing weight, measurements, workouts, steps and the current goal"
                  width={850}
                  height={1600}
                  priority
                  sizes="(max-width: 767px) 80vw, 40vw"
                  className="max-h-[500px] w-auto max-w-full object-contain drop-shadow-2xl md:max-h-[540px] lg:max-h-[590px]"
                />
                <figcaption className="mt-2 text-center text-sm font-semibold text-slate-400">
                  Your body, activity and performance at a glance.
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="features" className="py-16">
            <div className="max-w-3xl" data-reveal>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">One fitness record</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Connect body changes with gym performance</h2>
              <p className="mt-4 leading-8 text-slate-300">A workout log tells you what happened in the gym. It does not show the full picture of how your body is changing. FitStats keeps both sides together without claiming to make the decision for you.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2" data-reveal-group>
              {pillars.map(([title, text]) => (
                <article key={title} className="rounded-lg border border-white/10 bg-[#101513] p-6" data-reveal>
                  <h3 className="text-sm font-black tracking-[0.18em] text-emerald-300">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="screens" className="border-t border-emerald-400/20 py-16">
            <div className="max-w-3xl" data-reveal>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Inside FitStats</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Clear data, kept in context</h2>
              <p className="mt-4 leading-8 text-slate-300">Each screen helps you review one part of your progress without losing the bigger picture.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
              {screenshots.map(([title, text, image]) => (
                <article key={title} className="overflow-hidden rounded-xl border border-white/10 bg-[#101513] shadow-xl shadow-black/20" data-reveal>
                  <div className="bg-black p-2">
                    <Image src={image} alt={`FitStats ${title} screen`} width={1344} height={2843} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw" className="aspect-[9/19] w-full rounded-lg object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-emerald-400/20 py-14">
            <h2 className="text-3xl font-black text-white sm:text-4xl" data-reveal>Made for checking real progress</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3" data-reveal-group>
              {benefits.map(([title, text]) => (
                <article key={title} className="rounded-lg border border-emerald-400/15 bg-[#0d1b16] p-6" data-reveal>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-emerald-400/20 py-14 lg:grid-cols-[1fr_auto] lg:items-center" data-reveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Privacy and control</p>
              <h2 className="mt-4 text-3xl font-black text-white">Your records remain yours</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">Core progress records are stored primarily on your device. Health Connect access for steps is optional, and external services may process the technical data required to distribute or support the app.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/en/privacy/" className="rounded-lg border border-emerald-400/40 px-5 py-3 text-center font-bold text-emerald-200 hover:bg-emerald-400/10">Privacy policy</Link>
              <Link href="/en/delete-data/" className="rounded-lg border border-white/10 px-5 py-3 text-center font-bold text-slate-200 hover:bg-white/[0.04]">Delete data</Link>
            </div>
          </section>

          <section className="grid gap-6 border-t border-emerald-400/20 py-12 lg:grid-cols-[1fr_auto] lg:items-center" data-reveal>
            <div>
              <h2 className="text-3xl font-black text-white">Download FitStats on Google Play</h2>
              <p className="mt-3 max-w-2xl leading-8 text-slate-300">Start tracking your body, activity and strength-training progress in one Android app.</p>
            </div>
            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300">Get it on Google Play</a>
          </section>

          <section className="border-t border-emerald-400/20 py-10 text-sm text-slate-300" data-reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <p><strong className="text-white">Android:</strong> available on Google Play.</p>
              <p><strong className="text-white">Local-first:</strong> core records primarily stay on your device.</p>
              <p><strong className="text-white">No social feed:</strong> focus on your own progress.</p>
              <p><strong className="text-white">Portable:</strong> export data for your own use.</p>
              <p><strong className="text-white">Independent:</strong> built independently.</p>
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-emerald-400/20 py-8 sm:flex-row sm:items-center sm:justify-between" data-reveal>
            <p className="text-slate-300">Want to try upcoming improvements before release? Join the beta channel.</p>
            <a href={googleGroupUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-bold text-slate-200 hover:border-emerald-400/40">Join the beta</a>
          </section>

          <footer className="border-t border-emerald-400/20 py-8 text-sm text-slate-400">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-white">Fit<span className="text-emerald-300">Stats</span></p>
              <nav className="flex flex-wrap gap-x-5 gap-y-3">
                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200">Google Play</a>
                <Link href="/en/privacy/" className="hover:text-emerald-200">Privacy</Link>
                <Link href="/en/delete-data/" className="hover:text-emerald-200">Delete data</Link>
                <a href="mailto:fitstats.support@gmail.com" className="hover:text-emerald-200">Support</a>
                <Link href="/" hrefLang="es" className="hover:text-emerald-200">Español</Link>
              </nav>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
