import Head from "next/head";
import Link from "next/link";

const contactEmail = "fitstats.support@gmail.com";

const deletionSteps = [
  "Abre la app FitStats en tu dispositivo.",
  "Entra en la sección Ajustes.",
  "Busca la opción relacionada con datos, privacidad o gestión de datos.",
  "Selecciona la opción para borrar tus datos o restablecer los registros de la app.",
  "Confirma la acción cuando la app lo solicite.",
];

const deletedData = [
  "Datos de perfil físico guardados en la app.",
  "Registros de peso corporal.",
  "Medidas corporales.",
  "Entrenamientos y estadísticas asociadas.",
  "Objetivos nutricionales configurados por el usuario.",
  "Datos de pasos o actividad física almacenados localmente por FitStats.",
];

export default function DeleteData() {
  return (
    <>
      <Head>
        <title>Eliminación de Datos | FitStats</title>
        <meta
          name="description"
          content="Instrucciones para borrar los datos de usuario de la aplicación FitStats."
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
              Cómo borrar tus datos en FitStats
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
                  Desarrollador:
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
              Esta página explica cómo borrar los datos guardados por FitStats
              desde la sección de ajustes de la app. FitStats almacena los datos
              principalmente de forma local en el dispositivo, por lo que el
              usuario mantiene el control directo sobre sus registros.
            </p>
          </div>

          <div className="space-y-5">
            <article className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Pasos para borrar tus datos
              </h2>
              <ol className="space-y-3 text-base leading-8 text-slate-300">
                {deletionSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-[#07110d]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Datos que se pueden eliminar
              </h2>
              <ul className="space-y-3 text-base leading-8 text-slate-300">
                {deletedData.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Datos locales, exportaciones y actividad física
              </h2>
              <div className="space-y-4 text-base leading-8 text-slate-300">
                <p>
                  Si los datos están almacenados localmente, también puedes
                  eliminarlos desinstalando FitStats del dispositivo. Esta acción
                  borra los datos locales asociados a la app en ese dispositivo.
                </p>
                <p>
                  Si has exportado archivos en JSON o Excel, esos archivos no se
                  eliminan automáticamente desde FitStats. Puedes borrarlos
                  manualmente desde la ubicación donde los hayas guardado o
                  compartido.
                </p>
                <p>
                  Si concediste permisos de Health Connect u otros servicios
                  equivalentes, puedes revocarlos desde los ajustes del sistema
                  del dispositivo.
                </p>
              </div>
            </article>

            <article className="rounded-lg border border-white/10 bg-[#101513] p-6 shadow-lg shadow-black/10">
              <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
                Solicitudes de privacidad
              </h2>
              <p className="text-base leading-8 text-slate-300">
                Para cualquier solicitud relacionada con privacidad, eliminación
                de datos o dudas sobre el tratamiento de la información en
                FitStats, puedes escribir a{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-200"
                >
                  {contactEmail}
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
