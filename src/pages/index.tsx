import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.MCBsoftware.fitStats";
const playStoreMarketingUrl =
  "https://play.google.com/store/apps/details?id=com.MCBsoftware.fitStats&utm_source=fitstats_es&utm_medium=landing&utm_campaign=public_launch";
const googleGroupUrl = "https://groups.google.com/g/fitstats-testing";

const screenshots = [
  {
    title: "Dashboard",
    text: "Ten una visión global de cómo está evolucionando tu cuerpo, tu actividad y tu entrenamiento.",
    image: "/images/Dashboard.png",
  },
  {
    title: "Entrenos y rendimiento",
    text: "Registra sesiones, series, repeticiones y cargas, y sigue métricas como el e1RM para comprobar cómo evoluciona tu rendimiento.",
    image: "/images/Entrenos.png",
  },
  {
    title: "Peso",
    text: "Sigue la evolución de tu peso y compárala con el objetivo que estás persiguiendo.",
    image: "/images/Peso.png",
  },
  {
    title: "Composición corporal",
    text: "Ve cómo están cambiando tu peso, tus medidas y los datos de composición corporal en un mismo lugar.",
    image: "/images/Composición corporal.png",
  },
];

const highlights = [
  "Cuerpo: peso, medidas y composición corporal",
  "Rendimiento: entrenamientos, cargas y evolución",
  "Actividad: pasos e integración con Health Connect",
  "Objetivo: definición, mantenimiento, volumen o recomposición",
];

const valuePoints = [
  "Todo lo que necesitas para observar cuerpo y rendimiento desde un mismo sitio.",
  "Los datos te ayudan a comprobar cómo avanza tu objetivo; FitStats no decide por ti si una fase está funcionando.",
  "Importa y exporta tus datos en CSV para conservarlos, revisarlos o compartirlos con tu entrenador.",
  "Consulta tu evolución con registros, gráficas y métricas claras.",
];

const valueGroups = [
  ["CUERPO", "Ve cómo está cambiando tu peso, tus medidas y tu composición corporal."],
  ["RENDIMIENTO", "Comprueba cómo evoluciona tu entrenamiento con series, repeticiones, cargas, métricas de rendimiento y e1RM."],
  ["ACTIVIDAD", "Ten en cuenta tus pasos y actividad física con permisos opcionales e integración existente con Health Connect."],
  ["OBJETIVO", "Controla tu progreso mientras persigues una definición, mantenimiento, volumen o recomposición."],
];

export default function FitStatsLanding() {
  return (
    <>
      <Head>
        <title>FitStats | Todo tu progreso, no solo tus entrenamientos</title>
        <meta
          name="description"
          content="FitStats reúne peso, medidas, composición corporal, actividad y entrenamiento para seguir tu progreso físico desde una sola app Android."
        />
        <meta property="og:title" content="FitStats | Todo tu progreso, no solo tus entrenamientos" />
        <meta
          property="og:description"
          content="Observa cómo cambia tu cuerpo y cómo evoluciona tu rendimiento con FitStats."
        />
        <meta property="og:image" content="/images/banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FitStats | Todo tu progreso, no solo tus entrenamientos" />
        <meta
          name="twitter:description"
          content="Observa cómo cambia tu cuerpo y cómo evoluciona tu rendimiento con FitStats."
        />
        <meta name="twitter:image" content="/images/banner.png" />
      </Head>

      <main className="min-h-screen bg-[#07110d] text-slate-100">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12">
          <nav className="mb-8 flex flex-col gap-4 border-b border-emerald-400/20 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <a href="#top" className="flex items-center gap-3">
              <Image
                src="/images/icon.png"
                alt="Icono de FitStats"
                width={88}
                height={88}
                className="h-11 w-11 rounded-xl"
                priority
              />
              <span className="text-2xl font-black tracking-wide text-white">
                Fit<span className="text-emerald-300">Stats</span>
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300">
              <a href="#screens" className="hover:text-emerald-200">
                Capturas
              </a>
              <a href="#features" className="hover:text-emerald-200">
                Funciones
              </a>
              <Link href="/privacy" className="hover:text-emerald-200">
                Privacidad
              </Link>
              <a
                href={playStoreMarketingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-400 px-4 py-2 font-bold text-[#07110d] transition hover:bg-emerald-300"
              >
                Descargar
              </a>
            </div>
          </nav>

          <section id="top" className="border-b border-emerald-400/20 pb-14">
            <div className="relative -mx-5 overflow-hidden bg-black sm:-mx-8 lg:-mx-12">
              <Image
                src="/images/banner.png"
                alt="FitStats: sigue tu cuerpo y tu rendimiento desde una sola app"
                width={1792}
                height={1024}
                priority
                sizes="100vw"
                className="h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07110d] to-transparent" />
            </div>

            <div className="mt-10 max-w-4xl">
              <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                Disponible para Android en Google Play
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                Todo tu progreso. No solo tus entrenamientos.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Sigue tu peso, medidas, composición corporal, actividad y
                rendimiento en el gimnasio desde una sola app. Comprueba si tu
                volumen, definición o recomposición están funcionando de verdad.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={playStoreMarketingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
              >
                Descargar en Google Play
              </a>
              <a
                href="#features"
                className="rounded-lg border border-emerald-400/40 px-6 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                Ver cómo encaja todo
              </a>
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-400">
              Una app Android para observar cómo cambia tu cuerpo y cómo evoluciona tu rendimiento.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="screens" className="py-20">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Una visión conjunta de tu progreso
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                FitStats reúne las piezas que necesitas para observar tu
                evolución: cuerpo, rendimiento, actividad y objetivo actual.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((screen) => (
                <article
                  key={screen.title}
                  className="overflow-hidden rounded-lg border border-white/10 bg-[#101513] shadow-lg shadow-black/10"
                >
                  <div className="bg-black p-2">
                    <Image
                      src={screen.image}
                      alt={`Captura de ${screen.title} en FitStats`}
                      width={1080}
                      height={2400}
                      className="aspect-[9/20] w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-emerald-300">
                      {screen.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      {screen.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="features"
            className="grid gap-8 border-t border-emerald-400/20 py-14 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Funciones
              </p>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Cuerpo y rendimiento, en el mismo sitio
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-slate-300">
                Registrar entrenamientos te dice qué haces en el gimnasio, pero
                no explica por sí solo cómo está evolucionando tu físico.
                FitStats reúne los datos que necesitas para observar ambas
                partes sin convertirlas en conclusiones automáticas.
              </p>
            </div>

            <div className="rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-6 shadow-2xl shadow-black/20">
              <div className="grid gap-5 sm:grid-cols-2">
                {valueGroups.map(([title, text]) => (
                  <div key={title}>
                    <p className="text-sm font-black tracking-[0.18em] text-emerald-300">{title}</p>
                    <p className="mt-2 leading-7 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-7 space-y-4 border-t border-white/10 pt-6 text-base leading-7 text-slate-300">
                {valuePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-8 border-t border-emerald-400/20 py-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Privacidad
              </p>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Tus datos bajo control
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                FitStats está diseñada para que puedas registrar y consultar tu
                progreso de forma privada. Los datos se almacenan principalmente
                en tu dispositivo y puedes borrar tus registros desde la app. Los
                permisos de actividad física y Health Connect son opcionales y
                pueden revocarse desde el sistema.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/privacy"
                className="rounded-lg border border-emerald-400/40 px-5 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                Política de privacidad
              </Link>
              <Link
                href="/delete-data"
                className="rounded-lg border border-white/10 px-5 py-3 text-center font-bold text-slate-200 transition hover:border-emerald-300 hover:bg-white/[0.04]"
              >
                Borrar datos
              </Link>
            </div>
          </section>

          <section className="grid gap-6 border-t border-emerald-400/20 py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-white">
                Descarga FitStats en Google Play
              </h2>
              <p className="mt-3 max-w-2xl leading-8 text-slate-300">
                Instala la app pública para Android desde Google Play y empieza
                a registrar tu progreso fitness con datos claros.
              </p>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block break-all text-sm font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
              >
                {playStoreUrl}
              </a>
            </div>
            <a
              href={playStoreMarketingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
            >
              Descargar en Google Play
            </a>
          </section>

          <section
            id="beta"
            className="flex flex-col gap-5 border-t border-emerald-400/20 py-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="text-2xl font-black text-white">Canal beta</h2>
              <p className="mt-2 max-w-2xl leading-7 text-slate-300">
                FitStats ya está disponible en Google Play. El canal beta queda
                reservado para probar futuras novedades antes de su lanzamiento
                público.
              </p>
            </div>
            <a
              href={googleGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-emerald-400/30 px-5 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
            >
              Unirme a la beta
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
