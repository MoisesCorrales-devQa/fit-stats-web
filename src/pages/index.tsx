import { FormEvent, useState } from "react";
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

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function FitStatsLanding() {
  const [form, setForm] = useState({
    email: "",
    note: "",
    website: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<null | "success" | "error">(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setError("");

    if (!isValidEmail(form.email)) {
      setError("Introduce un email válido para unirte a la prueba cerrada.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "closed-beta",
          name: "FitStats beta tester",
          email: form.email,
          message:
            form.note.trim() ||
            "Quiero unirme a la prueba cerrada de FitStats.",
          website: form.website,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setResult("success");
      setForm({ email: "", note: "", website: "" });
    } catch {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  }

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
                href="#beta"
                className="rounded-lg bg-emerald-400 px-6 py-3 text-center font-bold text-[#07110d] transition hover:bg-emerald-300"
              >
                Unirme a la prueba cerrada
              </a>
              <a
                href="#screens"
                className="rounded-lg border border-emerald-400/40 px-6 py-3 text-center font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/10"
              >
                Ver la app
              </a>
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
                Déjame tu email y te escribiré cuando pueda añadir nuevos
                testers a la prueba cerrada de la app móvil.
              </p>
            </div>

            <form
              className="rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-6 shadow-2xl shadow-black/20"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="hidden">
                <label>
                  Website
                  <input
                    name="website"
                    value={form.website}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        website: event.target.value,
                      }))
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-semibold text-emerald-100">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-emerald-400/30 bg-[#07110d] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/20"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  disabled={isSubmitting}
                  required
                />
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block font-semibold text-emerald-100">
                  Mensaje opcional
                </span>
                <textarea
                  name="note"
                  className="min-h-28 w-full resize-y rounded-lg border border-emerald-400/30 bg-[#07110d] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/20"
                  placeholder="Cuéntame si quieres probar algo concreto de la app."
                  value={form.note}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      note: event.target.value,
                    }))
                  }
                  disabled={isSubmitting}
                />
              </label>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Usaré tu email únicamente para contactar contigo sobre la prueba
                cerrada de FitStats.
              </p>

              {error && <p className="mt-4 text-sm text-red-300">{error}</p>}

              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-emerald-400 px-6 py-3 font-bold text-[#07110d] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mi email"}
              </button>

              {result === "success" && (
                <p className="mt-4 font-semibold text-emerald-300">
                  Gracias. Te contactaré para la prueba cerrada.
                </p>
              )}
              {result === "error" && (
                <p className="mt-4 font-semibold text-red-300">
                  No se ha podido enviar. Inténtalo de nuevo en unos minutos.
                </p>
              )}
            </form>
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
