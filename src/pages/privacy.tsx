import Head from "next/head";
import Link from "next/link";

const contactEmail = "fitstats.support@gmail.com";

const collectedData = [
  "Datos de perfil físico, como edad, altura, sexo, peso objetivo y objetivos calóricos o de macronutrientes.",
  "Registros de peso corporal introducidos por el usuario.",
  "Medidas corporales registradas en la app.",
  "Datos de entrenamiento, como ejercicios, sesiones, volumen, progreso y rendimiento.",
  "Datos de pasos o actividad física cuando el usuario concede permisos a través de Health Connect o servicios equivalentes.",
  "Datos relacionados con compras o estado premium cuando se utilizan compras dentro de la app.",
];

const purposes = [
  "Mostrar la evolución del usuario y sus estadísticas dentro de la app.",
  "Generar gráficas y resúmenes visuales de progreso.",
  "Calcular estimaciones relacionadas con composición corporal, objetivos y rendimiento.",
  "Permitir la exportación de datos bajo acción explícita del usuario.",
  "Gestionar funciones premium y validar el estado de compra o suscripción.",
];

const sections = [
  {
    title: "Datos que recopilamos",
    items: collectedData,
  },
  {
    title: "Finalidad del uso de los datos",
    items: purposes,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | FitStats</title>
        <meta
          name="description"
          content="Política de privacidad de la aplicación FitStats."
        />
      </Head>

      <main className="min-h-screen bg-[#07110d] px-5 py-12 text-slate-100 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex font-semibold text-emerald-300 hover:text-emerald-200"
          >
            Volver a FitStats
          </Link>

          <header className="mb-10 border-b border-emerald-400/20 pb-8">
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              FitStats
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Política de Privacidad de FitStats
            </h1>
            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <p>
                <span className="font-semibold text-slate-100">
                  Última actualización:
                </span>{" "}
                14 de mayo de 2026
              </p>
              <p>
                <span className="font-semibold text-slate-100">
                  Responsable/desarrollador:
                </span>{" "}
                Moises Corrales
              </p>
              <p className="sm:col-span-2">
                <span className="font-semibold text-slate-100">Contacto:</span>{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
          </header>

          <div className="mb-8 rounded-lg border border-emerald-400/20 bg-[#0d1b16] p-6 text-base leading-8 text-slate-200 shadow-2xl shadow-black/20">
            <p>
              Esta Política de Privacidad explica cómo FitStats trata la
              información relacionada con el seguimiento fitness del usuario.
              FitStats permite registrar peso corporal, medidas corporales,
              entrenamientos, pasos y objetivos nutricionales. La app no registra
              comidas diarias, no ofrece coaching médico ni planes
              personalizados, no vende datos personales y no utiliza los datos
              con fines publicitarios.
            </p>
          </div>

          <div className="space-y-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10"
              >
                <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                  {section.title}
                </h2>
                <ul className="space-y-3 text-base leading-8 text-slate-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Almacenamiento, actividad física y terceros
              </h2>
              <div className="space-y-4 text-base leading-8 text-slate-300">
                <p>
                  Los datos de FitStats se almacenan principalmente de forma
                  local en el dispositivo del usuario. FitStats no vende datos
                  personales y no utiliza los datos para publicidad personalizada.
                </p>
                <p>
                  FitStats puede acceder a datos de pasos o actividad física
                  mediante Health Connect, Google Fit u otros servicios
                  equivalentes, siempre que el usuario conceda los permisos
                  correspondientes. Estos permisos son opcionales y pueden
                  revocarse desde los ajustes del sistema.
                </p>
                <p>
                  FitStats utiliza Google Play Billing, Google Play Services y
                  RevenueCat para procesar, validar o gestionar compras premium,
                  suscripciones o licencias.
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Exportación, seguridad y eliminación
              </h2>
              <div className="space-y-4 text-base leading-8 text-slate-300">
                <p>
                  FitStats puede permitir al usuario generar archivos exportados,
                  como JSON o Excel, bajo una acción explícita dentro de la app.
                  El usuario decide dónde guarda esos archivos y con quién los
                  comparte.
                </p>
                <p>
                  Aplicamos medidas razonables de seguridad para proteger la
                  información gestionada por FitStats frente a accesos no
                  autorizados, alteración o pérdida accidental.
                </p>
                <p>
                  El usuario puede borrar registros desde la propia app cuando
                  esta funcionalidad esté disponible. Si los datos se almacenan
                  localmente, también puede eliminarlos desinstalando FitStats
                  del dispositivo o siguiendo las instrucciones de{" "}
                  <Link
                    href="/delete-data"
                    className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                  >
                    eliminación de datos
                  </Link>
                  .
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Menores, cambios y contacto
              </h2>
              <div className="space-y-4 text-base leading-8 text-slate-300">
                <p>
                  FitStats no está dirigida a menores de 13 años. No recopilamos
                  conscientemente datos personales de menores de 13 años.
                </p>
                <p>
                  Podemos actualizar esta Política de Privacidad para reflejar
                  cambios en FitStats, requisitos legales o mejoras en nuestras
                  prácticas de privacidad.
                </p>
                <p>
                  Para cualquier pregunta sobre esta Política de Privacidad o
                  sobre el tratamiento de datos en FitStats, puedes contactar en{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
