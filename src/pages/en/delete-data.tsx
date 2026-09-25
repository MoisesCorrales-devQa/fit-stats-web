import Head from "next/head";
import Link from "next/link";

const contactEmail = "fitstats.support@gmail.com";
const steps = [
  "Open FitStats on your Android device.",
  "If the app provides an option to erase records, use it and confirm the action.",
  "To remove local app data, uninstall FitStats from Android.",
  "Review and revoke Health Connect or physical-activity permissions from Android system settings if you granted them.",
  "Delete any exported files manually from the location where you stored or shared them.",
];

export default function EnglishDeleteData() {
  return (
    <>
      <Head>
        <title>Delete Your Data | FitStats</title>
        <meta name="description" content="How to remove local FitStats data and manage permissions on Android." />
        <link rel="canonical" href="https://www.fitstats.es/en/delete-data/" />
        <link rel="alternate" hrefLang="es" href="https://www.fitstats.es/delete-data/" />
        <link rel="alternate" hrefLang="en" href="https://www.fitstats.es/en/delete-data/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fitstats.es/delete-data/" />
        <meta property="og:title" content="Delete Your Data | FitStats" />
        <meta property="og:description" content="How to remove local FitStats data and manage permissions on Android." />
        <meta property="og:url" content="https://www.fitstats.es/en/delete-data/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Delete Your Data | FitStats" />
        <meta name="twitter:description" content="How to remove local FitStats data and manage permissions on Android." />
      </Head>
      <main className="min-h-screen bg-[#07110d] px-5 py-12 text-slate-100 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/en/" className="mb-8 inline-flex font-semibold text-emerald-300 hover:text-emerald-200">Back to FitStats</Link>
          <Link href="/delete-data/" hrefLang="es" className="mb-8 ml-5 inline-flex font-semibold text-slate-300 hover:text-emerald-200">Español</Link>
          <header className="mb-10 border-b border-emerald-400/20 pb-8">
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">FitStats</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">How to delete your FitStats data</h1>
            <p className="mt-6 text-slate-300"><strong className="text-slate-100">Contact:</strong> <a href={`mailto:${contactEmail}`} className="font-semibold text-emerald-300 underline underline-offset-4">{contactEmail}</a></p>
          </header>
          <article className="mb-5 rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-6 leading-8 text-slate-200">
            <p>FitStats stores core records primarily on your Android device, so you retain direct control over local app data.</p>
          </article>
          <article className="rounded-lg border border-white/10 bg-[#101513] p-6">
            <h2 className="mb-4 text-2xl font-semibold text-emerald-300">Steps to remove your data</h2>
            <ol className="space-y-3 leading-8 text-slate-300">
              {steps.map((step, index) => <li key={step} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-[#07110d]">{index + 1}</span><span>{step}</span></li>)}
            </ol>
          </article>
          <article className="mt-5 rounded-lg border border-white/10 bg-[#101513] p-6">
            <h2 className="mb-4 text-2xl font-semibold text-emerald-300">Exported files and permissions</h2>
            <div className="space-y-4 leading-8 text-slate-300">
              <p>Exported files are not deleted automatically when FitStats is uninstalled or its local records are erased. Remove them manually wherever you stored or shared them.</p>
              <p>Revoking Health Connect access prevents further access but does not automatically delete records held by other services.</p>
              <p>For privacy or deletion questions, email <a href={`mailto:${contactEmail}`} className="font-semibold text-emerald-300 underline underline-offset-4">{contactEmail}</a>.</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
