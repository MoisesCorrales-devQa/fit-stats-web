import Head from "next/head";
import Link from "next/link";

const contactEmail = "fitstats.support@gmail.com";

const dataItems = [
  "Physical profile information such as age, height, sex, target weight and calorie or macronutrient goals.",
  "Weight and body-measurement records entered by the user.",
  "Workout information such as exercises, sessions, volume, progress and performance.",
  "Step or activity data when the user grants access through Health Connect.",
  "Purchase or Premium-status data when in-app purchases are used.",
];

export default function EnglishPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | FitStats</title>
        <meta name="description" content="Privacy policy for the FitStats Android application." />
        <link rel="canonical" href="https://www.fitstats.es/en/privacy/" />
        <link rel="alternate" hrefLang="es" href="https://www.fitstats.es/privacy/" />
        <link rel="alternate" hrefLang="en" href="https://www.fitstats.es/en/privacy/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fitstats.es/privacy/" />
        <meta property="og:title" content="Privacy Policy | FitStats" />
        <meta property="og:description" content="How FitStats handles information related to fitness tracking." />
        <meta property="og:url" content="https://www.fitstats.es/en/privacy/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | FitStats" />
        <meta name="twitter:description" content="How FitStats handles information related to fitness tracking." />
      </Head>
      <main className="min-h-screen bg-[#07110d] px-5 py-12 text-slate-100 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/en/" className="mb-8 inline-flex font-semibold text-emerald-300 hover:text-emerald-200">Back to FitStats</Link>
          <Link href="/privacy/" hrefLang="es" className="mb-8 ml-5 inline-flex font-semibold text-slate-300 hover:text-emerald-200">Español</Link>
          <header className="mb-10 border-b border-emerald-400/20 pb-8">
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">FitStats</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">FitStats Privacy Policy</h1>
            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <p><strong className="text-slate-100">Last updated:</strong> May 14, 2026</p>
              <p><strong className="text-slate-100">Developer:</strong> Moises Corrales</p>
              <p className="sm:col-span-2"><strong className="text-slate-100">Contact:</strong> <a href={`mailto:${contactEmail}`} className="font-semibold text-emerald-300 underline underline-offset-4">{contactEmail}</a></p>
            </div>
          </header>

          <div className="space-y-5">
            <article className="rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-6 leading-8 text-slate-200">
              <p>This policy explains how FitStats handles information related to the user&apos;s fitness tracking. FitStats does not sell personal data or use progress data for personalized advertising.</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">Data handled by FitStats</h2>
              <ul className="space-y-3 leading-8 text-slate-300">
                {dataItems.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-400" /><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">Storage, activity and external services</h2>
              <div className="space-y-4 leading-8 text-slate-300">
                <p>FitStats records are stored primarily on the user&apos;s device. Health Connect access is optional and is used for steps when the user grants the relevant permissions.</p>
                <p>External services such as Google Play may process technical data needed to distribute the app, validate purchases or provide associated services. Their own privacy policies apply to that processing.</p>
              </div>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">Export, security and deletion</h2>
              <div className="space-y-4 leading-8 text-slate-300">
                <p>FitStats can export data following an explicit action by the user. The user chooses where exported files are stored and who receives them.</p>
                <p>Reasonable safeguards are used to protect information handled by FitStats against unauthorized access, alteration or accidental loss.</p>
                <p>Local data can also be removed by uninstalling FitStats. See the <Link href="/en/delete-data/" className="font-semibold text-emerald-300 underline underline-offset-4">data deletion instructions</Link>.</p>
              </div>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">Children, changes and contact</h2>
              <div className="space-y-4 leading-8 text-slate-300">
                <p>FitStats is not intended for children under 13 and does not knowingly collect personal data from children under 13.</p>
                <p>This policy may be updated to reflect changes to FitStats, legal requirements or privacy practices.</p>
                <p>Questions about privacy or data handling can be sent to <a href={`mailto:${contactEmail}`} className="font-semibold text-emerald-300 underline underline-offset-4">{contactEmail}</a>.</p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
