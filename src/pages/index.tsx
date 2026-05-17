import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const screenshots = [
  {
    title: "Dashboard",
    text: "Consulta tu estado actual, tus registros recientes y tus métricas principales sin perderte entre menús.",
    image: "/images/Dashboard.png",
  },
  {
    title: "Peso",
    text: "Registra tu peso corporal y revisa la evolución con gráficas claras.",
    image: "/images/Peso.png",
  },
  {
    title: "Entrenos",
    text: "Lleva el control de sesiones, ejercicios y rendimiento semanal.",
    image: "/images/Entrenos.png",
  },
  {
    title: "Composición corporal",
    text: "Guarda medidas y estimaciones para entender mejor cómo cambia tu cuerpo.",
    image: "/images/Composición corporal.png",
  },
];

const highlights = [
  "Peso, medidas y evolución corporal",
  "Entrenamientos y progreso",
  "Pasos y actividad física con permisos opcionales",
  "Objetivos calóricos y macros sin diario de comidas",
];

const featureCards = [
  {
    title: "Seguimiento útil",
    text: "Registra peso, medidas corporales, entrenamientos, pasos y objetivos nutricionales. FitStats no registra comidas diarias ni pretende sustituir asesoramiento médico.",
  },
  {
    title: "Datos privados",
    text: "Los datos se almacenan principalmente en tu dispositivo. FitStats no vende datos personales y no los usa para publicidad personalizada.",
  },
  {
    title: "Control real",
    text: "Puedes exportar datos en JSON o Excel, borrar registros desde ajustes y revocar permisos de Health Connect desde el sistema.",
  },
];

const googleGroupUrl = "https://groups.google.com/g/fitstats-testing";
const googleGroupEmail = "fitstats-testing@googlegroups.com";
const testingUrl =
  "https://play.google.com/apps/testing/com.MCBsoftware.fitStats";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.MCBsoftware.fitStats";

export default function FitStatsLanding() {
  return (
    <>
      <Head>
        <title>FitStats | Seguimiento fitness claro y privado</title>
        <meta
          name="description"
          content="FitStats es una app móvil para registrar peso, medidas, entrenamientos, pasos y objetivos nutricionales."
        />
        <meta property="og:title" content="FitStats" />
        <meta
          property="og:description"
          content="Controla tu progreso con peso, medidas, entreno y composición corporal."
        />
        <meta property="og:image" content="/images/banner.png" />
      </Head>

      <main className="min-h-screen bg-[#07110d] text-slate-100">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12">
          <nav className="mb-8 flex flex-col gap-4 border-b border-emerald-400/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
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
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
              <a href="#screens" className="hover:text-emerald-200">
                Capturas
              </a>
              <a href="#features" className="hover:text-emerald-200">
                Funciones
              </a>
              <a href="#beta" className="hover:text-emerald-200">
                Prueba cerrada
              </a>
              <Link href="/privacy" className="hover:text-emerald-200">
                Privacidad
              </Link>
            </div>
          </nav>

          <section id="top" className="border-b border-emerald-400/20 pb-14">
            <div className="relative -mx-5 overflow-hidden bg-black sm:-mx-8 lg:-mx-12">
              <Image
                src="/images/banner.png"
                alt="FitStats: controla tu progreso con peso, medidas, entreno y composición corporal"
                width={1792}
                height={1024}
                priority
                sizes="100vw"
                className="h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07110d] to-transparent" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={googleGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
              >
                Solicitar acceso
              </a>
              <a
                href={testingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-emerald-400/40 px-6 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                Abrir prueba en Play Store
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Prueba cerrada disponible
                </p>
                <p className="mt-2 text-base leading-7 text-slate-300">
                  De momento FitStats se puede probar solo en Android. Para
                  acceder, únete al grupo de Google y después abre el enlace de
                  prueba en Google Play.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/Android_logo_2019.png"
                  alt="Android"
                  width={96}
                  height={56}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/images/playstore.png"
                  alt="Google Play Store"
                  width={96}
                  height={56}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

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
                Una app pensada para mirar datos de un vistazo
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Cada pantalla está enfocada en una tarea concreta: consultar,
                registrar y entender tu progreso sin saturarte.
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
            className="grid gap-5 border-t border-emerald-400/20 py-14 lg:grid-cols-3"
          >
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-white/10 bg-[#101513] p-6"
              >
                <h2 className="text-2xl font-bold text-emerald-300">
                  {card.title}
                </h2>
                <p className="mt-4 leading-8 text-slate-300">{card.text}</p>
              </article>
            ))}
          </section>

          <section
            id="beta"
            className="grid gap-8 border-t border-emerald-400/20 py-14 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Prueba cerrada
              </p>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Únete a la beta de FitStats
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-slate-300">
                Para solicitar acceso, únete al grupo de Google de testers.
                Cuando estés dentro, podrás abrir el enlace de prueba de Google
                Play y acceder a la app en Android.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  <Image
                    src="/images/Android_logo_2019.png"
                    alt=""
                    width={48}
                    height={28}
                    className="h-5 w-auto object-contain"
                  />
                  Solo Android
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  <Image
                    src="/images/playstore.png"
                    alt=""
                    width={48}
                    height={28}
                    className="h-5 w-auto object-contain"
                  />
                  Alta por Google Play Store
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-6 shadow-2xl shadow-black/20">
              <ol className="space-y-4 text-base leading-7 text-slate-300">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-[#07110d]">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-white">
                      Únete al grupo de Google
                    </p>
                    <a
                      href={googleGroupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                    >
                      {googleGroupEmail}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-[#07110d]">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-white">
                      Abre el enlace de prueba
                    </p>
                    <a
                      href={testingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                    >
                      {testingUrl}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-[#07110d]">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-white">
                      Instala FitStats desde Play Store
                    </p>
                    <a
                      href={playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                    >
                      {playStoreUrl}
                    </a>
                  </div>
                </li>
              </ol>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={googleGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-400 px-5 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
                >
                  Solicitar acceso
                </a>
                <a
                  href={testingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-emerald-400/40 px-5 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
                >
                  Enlace de prueba
                </a>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-5 border-t border-emerald-400/20 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">
                Información legal y gestión de datos
              </h2>
              <p className="mt-2 text-slate-300">
                Consulta la política de privacidad y las instrucciones para
                borrar datos de FitStats.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/privacy"
                className="rounded-lg border border-emerald-400/40 px-5 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                Política de privacidad
              </Link>
              <Link
                href="/delete-data"
                className="rounded-lg bg-emerald-400 px-5 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
              >
                Borrar datos
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
