import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeroMeshGlow from "@/components/HeroMeshGlow";

const siteUrl = "https://www.fitstats.es";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.MCBsoftware.fitStats&utm_source=fitstats_es&utm_medium=landing&utm_campaign=public_launch";
const googleGroupUrl = "https://groups.google.com/g/fitstats-testing";

const pillars = [
  ["CUERPO", "Sigue tu peso, medidas corporales, porcentaje de grasa y estimaciones de composición corporal a lo largo del tiempo."],
  ["RENDIMIENTO", "Registra entrenamientos de fuerza, series, repeticiones y cargas, y consulta métricas como el e1RM."],
  ["ACTIVIDAD", "Mantén tus pasos diarios junto al resto de tu progreso, con acceso opcional a Health Connect en Android."],
  ["OBJETIVO", "Define tu objetivo actual: definición, mantenimiento, volumen o recomposición corporal."],
];

const benefits = [
  ["Una visión conjunta de tu progreso", "Observa los cambios de tu cuerpo, tu actividad y tu rendimiento en el gimnasio sin repartirlos entre aplicaciones distintas."],
  ["Creada para entrenar fuerza", "Registra tus sesiones y compara los datos que importan sin convertir FitStats en una red social."],
  ["Tus datos siguen siendo útiles", "Los registros principales se almacenan sobre todo en tu dispositivo y puedes exportarlos para revisarlos, compartirlos con tu entrenador o usarlos con otras herramientas."],
];

const screenshots = [
  ["Tu progreso semanal", "Comprueba de un vistazo cómo avanzan tu cuerpo, actividad y objetivo actual.", "/images/screen-dashboard-es.png"],
  ["Entrenamientos y rendimiento", "Registra tus sesiones y consulta series, cargas y estimaciones de e1RM.", "/images/screen-workouts-es.png"],
  ["Tendencia de peso", "Observa la evolución de tu peso con gráficas, medias e historial de registros.", "/images/screen-weight-es.png"],
  ["Composición corporal", "Consulta estimaciones y mediciones corporales junto a una lectura prudente de los cambios.", "/images/screen-composition-es.png"],
];

export default function SpanishLanding() {
  return (
    <>
      <Head>
        <title>FitStats | Sigue tu cuerpo y tu progreso de fuerza</title>
        <meta name="description" content="FitStats es una app Android para seguir peso, medidas corporales, composición corporal, pasos y rendimiento en entrenamientos de fuerza." />
        <link rel="canonical" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en/`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:title" content="FitStats | Más que un registro de entrenamientos" />
        <meta property="og:description" content="Sigue cómo cambia tu cuerpo y cómo evoluciona tu rendimiento de fuerza desde una sola app Android." />
        <meta property="og:image" content={`${siteUrl}/images/banner_mejorado.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FitStats | Más que un registro de entrenamientos" />
        <meta name="twitter:description" content="Sigue los cambios de tu cuerpo, actividad y rendimiento de fuerza en un mismo lugar." />
        <meta name="twitter:image" content={`${siteUrl}/images/banner_mejorado.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "FitStats",
              operatingSystem: "Android",
              applicationCategory: "HealthApplication",
              description: "App Android para seguir cambios corporales, actividad y rendimiento en entrenamientos de fuerza.",
              installUrl: playStoreUrl,
              url: `${siteUrl}/`,
            }),
          }}
        />
      </Head>

      <main className="landing-shell min-h-screen bg-[#07110d] text-slate-100">
        <div className="landing-container mx-auto max-w-6xl px-5 py-5 sm:px-8 lg:px-12">
          <nav className="site-nav mb-8 flex flex-col gap-4 border-b border-emerald-400/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <a href="#top" className="flex items-center gap-3">
              <Image src="/images/icon.png" alt="Icono de la app FitStats" width={88} height={88} className="h-11 w-11 rounded-xl" priority />
              <span className="text-2xl font-black tracking-wide text-white">Fit<span className="text-emerald-300">Stats</span></span>
            </a>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300">
              <a href="#features" className="hover:text-emerald-200">Funciones</a>
              <Link href="/privacy/" className="hover:text-emerald-200">Privacidad</Link>
              <Link href="/en/" hrefLang="en" className="rounded-lg border border-white/15 px-3 py-2 hover:border-emerald-400/50 hover:text-emerald-200" aria-label="View FitStats in English">EN</Link>
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-400 px-4 py-2 font-bold text-[#07110d] transition hover:bg-emerald-300">Descargar</a>
            </div>
          </nav>

          <section id="top" className="hero-section relative overflow-hidden border-b border-emerald-400/20 pb-14 pt-8 sm:pt-14">
            <div className="hero-glow pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="hero-grid relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="hero-copy">
                <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">Disponible para Android en Google Play</p>
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">Todo tu progreso. No solo tus entrenamientos.</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Registra tu cuerpo y tus entrenamientos en un mismo lugar para entender si realmente estás progresando.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300">Descargar en Google Play</a>
                  <a href="#features" className="rounded-lg border border-emerald-400/40 px-6 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10">Ver funciones</a>
                </div>
              </div>
              <figure className="hero-device flex flex-col items-center justify-end">
                <HeroMeshGlow />
                <Image
                  src="/images/dashboard-header-es.png"
                  alt="Dashboard de FitStats en español con peso, medidas, entrenamientos, pasos y objetivo actual"
                  width={850}
                  height={1600}
                  priority
                  sizes="(max-width: 767px) 80vw, 40vw"
                  className="max-h-[500px] w-auto max-w-full object-contain drop-shadow-2xl md:max-h-[540px] lg:max-h-[590px]"
                />
                <figcaption className="mt-2 text-center text-sm font-semibold text-slate-400">
                  Tu cuerpo, actividad y rendimiento de un vistazo.
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="features" className="py-16">
            <div className="max-w-3xl" data-reveal>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Un único registro de tu progreso</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Relaciona los cambios de tu cuerpo con tu rendimiento en el gimnasio</h2>
              <p className="mt-4 leading-8 text-slate-300">Un registro de entrenamientos te cuenta qué ocurrió en el gimnasio, pero no muestra por sí solo cómo está cambiando tu cuerpo. FitStats mantiene ambas partes juntas sin pretender tomar la decisión por ti.</p>
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Así se ve FitStats</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Tus datos, claros y conectados</h2>
              <p className="mt-4 leading-8 text-slate-300">Cada pantalla te ayuda a revisar una parte del progreso sin perder la visión conjunta.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
              {screenshots.map(([title, text, image]) => (
                <article key={title} className="overflow-hidden rounded-xl border border-white/10 bg-[#101513] shadow-xl shadow-black/20" data-reveal>
                  <div className="bg-black p-2">
                    <Image src={image} alt={`Captura de ${title} en FitStats`} width={1344} height={2843} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw" className="aspect-[9/19] w-full rounded-lg object-cover object-top" />
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
            <h2 className="text-3xl font-black text-white sm:text-4xl" data-reveal>Pensada para comprobar tu progreso real</h2>
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Privacidad y control</p>
              <h2 className="mt-4 text-3xl font-black text-white">Tus registros siguen siendo tuyos</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">Los registros principales de progreso se almacenan principalmente en tu dispositivo. El acceso a Health Connect para consultar pasos es opcional, y algunos servicios externos pueden tratar los datos técnicos necesarios para distribuir o prestar soporte a la app.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/privacy/" className="rounded-lg border border-emerald-400/40 px-5 py-3 text-center font-bold text-emerald-200 hover:bg-emerald-400/10">Política de privacidad</Link>
              <Link href="/delete-data/" className="rounded-lg border border-white/10 px-5 py-3 text-center font-bold text-slate-200 hover:bg-white/[0.04]">Eliminar datos</Link>
            </div>
          </section>

          <section className="grid gap-6 border-t border-emerald-400/20 py-12 lg:grid-cols-[1fr_auto] lg:items-center" data-reveal>
            <div>
              <h2 className="text-3xl font-black text-white">Descarga FitStats en Google Play</h2>
              <p className="mt-3 max-w-2xl leading-8 text-slate-300">Empieza a registrar tu cuerpo, actividad y progreso en entrenamientos de fuerza desde una sola app Android.</p>
            </div>
            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300">Descargar en Google Play</a>
          </section>

          <section className="border-t border-emerald-400/20 py-10 text-sm text-slate-300" data-reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <p><strong className="text-white">Android:</strong> disponible en Google Play.</p>
              <p><strong className="text-white">Enfoque local:</strong> los registros principales permanecen sobre todo en tu dispositivo.</p>
              <p><strong className="text-white">Sin red social:</strong> céntrate en tu propio progreso.</p>
              <p><strong className="text-white">Portabilidad:</strong> exporta los datos para utilizarlos como quieras.</p>
              <p><strong className="text-white">Independiente:</strong> desarrollo independiente.</p>
            </div>
          </section>

          <section className="flex flex-col gap-4 border-t border-emerald-400/20 py-8 sm:flex-row sm:items-center sm:justify-between" data-reveal>
            <p className="text-slate-300">¿Quieres probar futuras mejoras antes de su lanzamiento? Únete al canal beta.</p>
            <a href={googleGroupUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-bold text-slate-200 hover:border-emerald-400/40">Unirme a la beta</a>
          </section>

          <footer className="border-t border-emerald-400/20 py-8 text-sm text-slate-400">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-white">Fit<span className="text-emerald-300">Stats</span></p>
              <nav className="flex flex-wrap gap-x-5 gap-y-3">
                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200">Google Play</a>
                <Link href="/privacy/" className="hover:text-emerald-200">Privacidad</Link>
                <Link href="/delete-data/" className="hover:text-emerald-200">Eliminar datos</Link>
                <a href="mailto:fitstats.support@gmail.com" className="hover:text-emerald-200">Soporte</a>
                <Link href="/en/" hrefLang="en" className="hover:text-emerald-200">English</Link>
              </nav>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
