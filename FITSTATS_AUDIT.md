# FitStats — Auditoría de producto y código

## 1. Resumen ejecutivo

**Fecha:** 21 de septiembre de 2026. **Repositorio analizado:** `fit-stats-web`. **HEAD:** `7693e43`. El árbol de trabajo versionado estaba limpio al comenzar.

**Conclusión principal: este repositorio contiene la web promocional y las páginas legales, no la aplicación Android.** El propio `README.md` lo describe como «Landing y páginas legales para la app móvil FitStats». Hay tres páginas públicas, cinco componentes de página contando los envoltorios de Next.js, estilos y recursos gráficos. No hay proyecto Android, manifiesto, Gradle, modelos fitness, base de datos, motor de métricas, SDK móvil de compras ni integración ejecutable con Health Connect.

La auditoría cubre el código relevante presente. **No es posible certificar el estado real de la aplicación móvil con este material.** Que una función figure en el texto o en una captura no acredita que esté conectada, que persista datos o que funcione en la versión de Google Play. Tampoco su ausencia aquí demuestra que falte en Android.

Resultados principales:

- La web implementa presentación comercial, galería estática, enlaces a Google Play y a un grupo beta, política de privacidad, instrucciones de eliminación y contacto por correo.
- TypeScript y ESLint pasan en el entorno local. Esto valida tipos y reglas estáticas, no un despliegue ni los flujos móviles.
- El script de despliegue utiliza `gh-pages -d out`, pero `next.config.ts` no configura exportación a `out`. Es una incoherencia verificable del proceso declarado.
- Las instrucciones de borrado no identifican el nombre real del control que el usuario debe pulsar. Además, la política condiciona la disponibilidad del borrado, mientras que la página de eliminación describe un flujo aparentemente disponible.
- RevenueCat, Google Fit, JSON, Excel, compras y suscripciones aparecen en textos; no hay implementación que los confirme en este repositorio.
- No hay instrumentación de uso propia. Los enlaces UTM no implementan medición del funnel solicitado.
- La web solo ofrece español. No puede evaluarse la internacionalización móvil.

Método: lectura de todas las páginas, configuración, estilos, manifiesto y versiones principales del lockfile; inventario de archivos versionados y recursos; búsqueda de conexiones, estado, persistencia, llamadas de red, SDK, TODO y tests; comprobaciones estáticas locales. Se revisaron los nombres de variables locales sin incorporar sus valores. Los artefactos generados preexistentes no se consideran evidencia de la release actual.

No se ejecutó build, publicación, app móvil ni pruebas visuales en navegador/dispositivo. No se verificaron los destinos externos ni la infraestructura desplegada. No se hizo una revisión de CVE o actualidad de dependencias. Solo se añade este informe al código versionado; no se implementan correcciones.

## 2. Arquitectura

| Pieza | Función real dentro del repositorio |
|---|---|
| Next.js 15.3.8 | Pages Router, resolución de rutas, metadatos, imágenes y ejecución/build web. No es el runtime Android. |
| React / React DOM | Renderizado declarativo de páginas. El lockfile resuelve 19.1.0; el manifiesto declara `^19.0.0`. |
| TypeScript | Tipado de componentes y configuración. `strict: true`, alias `@/*` a `src/*`. |
| Tailwind CSS 4 y PostCSS | Utilidades de layout, colores, espaciado y breakpoints; entrada en `globals.css`. |
| `next/head` | Títulos, descripciones y metadatos sociales. |
| `next/link` | Navegación entre las tres páginas locales. |
| `next/image` | Banner, icono y cuatro capturas; configuración predeterminada de imágenes. |
| ESLint 9.30.1 | Reglas Next Core Web Vitals y TypeScript mediante FlatCompat. `eslint-config-next` resuelve 15.3.2, distinto de Next 15.3.8. No se observó fallo por ello. |
| `gh-pages` 6.3.0 | Publicación declarada del directorio `out`; no demuestra qué hosting está activo. |
| `react-icons` 5.5.0 | Dependencia declarada sin imports encontrados en el código de aplicación. |

Estructura y conexiones:

- `src/pages/index.tsx`, `FitStatsLanding`: `/`; constantes `screenshots`, `highlights`, `valuePoints` y URLs externas.
- `src/pages/privacy.tsx`, `PrivacyPolicy`: `/privacy/`; contenido legal, correo y enlace a eliminación.
- `src/pages/delete-data.tsx`, `DeleteData`: `/delete-data/`; instrucciones, correo y vuelta a portada.
- `src/pages/_app.tsx`: importa estilos y renderiza `Component` con `pageProps`. No incorpora proveedores de estado, sesión, analytics o compras.
- `src/pages/_document.tsx`: `lang="es"`, favicons y estructura HTML.
- `src/styles/globals.css`: Tailwind y fondo global; variables de fuentes Geist sin definición encontrada.
- `public/`: iconos y capturas. Son archivos estáticos, no módulos funcionales.
- `next.config.ts`: `trailingSlash: true` y seis redirecciones permanentes desde variantes `/FitStats` y `/Fitstats` y sus páginas legales hacia las rutas raíz.
- `.idea/`: configuración del IDE, incluido nombre de módulo heredado `qa-automation-portfolio`; no interviene en la aplicación.

**Estado y persistencia:** no hay hooks de estado, contextos, stores, almacenamiento del navegador, IndexedDB, modelos ni repositorios de datos en el código propio. Las listas son constantes compiladas. No hay API routes, backend propio, autenticación ni formularios.

**Servicios:** los puntos de salida son enlaces a Google Play, Google Groups y `mailto:`. No se detectan clientes de Health Connect, Billing, notificaciones, importación o exportación. No hay service worker ni una estrategia offline explícita. El caché que pueda aplicar un navegador no equivale a garantizar funcionamiento offline.

## 3. Inventario funcional

Clasificación: **C** = implementación completa dentro del alcance web, por inspección del código; **P** = parcial; **U** = código/configuración existente sin uso encontrado; **M** = contenido estático demostrativo, sin funcionalidad interactiva equivalente; **T** = pendiente explícito; **O** = potencialmente obsoleto. **NV** = no verificable: categoría de evidencia necesaria para no confundir ausencia del repositorio móvil con función pendiente o inexistente.

| Función | Acceso y comportamiento | Datos / almacenamiento | Estado y acceso | Dependencias y casos especiales |
|---|---|---|---|---|
| Presentación comercial | `/`, secciones Funciones y presentación | Textos constantes en `index.tsx` | C, pública | No permite registrar datos fitness. |
| Galería | `/#screens`, cuatro tarjetas | PNG en `public/images` y `screenshots` | M como demostración de app; C como galería pública | No hay zoom, edición ni navegación al dashboard real. No se certifica si los datos fotografiados son reales o ficticios. |
| Descarga | Navegación, hero y bloque final | Dos URLs de Play en `index.tsx` | C como enlace público | Abre pestaña nueva; instalación y disponibilidad externas NV. |
| Canal beta | Sección `#beta` | URL de Google Groups | C como enlace; proceso de alta NV | Unirse al grupo no demuestra completar inscripción como tester. |
| Privacidad | Navegación y bloque de privacidad | Texto en `privacy.tsx` | C como documento público | Correspondencia con Android NV. |
| Guía de borrado | Bloque de privacidad y política | `deletionSteps`, `deletedData` | P como guía operativa; página accesible y pública | No borra datos desde la web y no precisa el control de ajustes. |
| Contacto | Páginas legales | Correo constante | C como `mailto:`, público | Depende de cliente de correo; no hay envío ni confirmación web. |
| Compatibilidad de rutas antiguas | Configuración Next | Seis redirecciones | C en configuración; hosting NV | Requiere que el despliegue interprete las redirecciones. |
| Metadatos sociales | Cabecera de portada | Título, descripción y banner | P | Imagen social relativa y sin `og:url` ni canonical declarados. Resultado en plataformas externas NV. |
| Español | Todas las páginas | Literales TSX y `lang="es"` | C para contenido web español | Inglés y selector ausentes en esta web. |
| Iconos/librería no conectados | Sin acceso detectado | `react-icons`, `Android_logo_2019.png`, `playstore.png` | U; posible O | No asumir que pueden eliminarse sin comprobar usos externos. |
| Formspree | Sin formulario | Nombre `NEXT_PUBLIC_FORMSPREE_ENDPOINT` en entorno local | U; posible O | Sin referencia en código, no demuestra envío de datos. |

Inventario móvil solicitado: en todas las filas siguientes son **NV** la pantalla operativa, el esquema de almacenamiento, las reglas Free/Premium y la conexión efectiva. Las menciones se enumeran solo como evidencia documental.

| Área móvil | Evidencia disponible | Qué falta verificar |
|---|---|---|
| Peso corporal | Landing, captura `Peso.png`, política | Alta, edición, borrado, fechas, validaciones, tendencias y persistencia. |
| Medidas | Landing y política | Tipos, unidades, edición, historial y relación con composición. |
| Grasa/composición | Captura y textos de estimaciones | Fórmulas, medidas de entrada, medición real, impedancia/pliegues/DEXA, precedencia. |
| Pasos | Landing y política | Manual, sincronización, permisos, duplicados y prioridad de fuentes. |
| Entrenamientos | Landing, captura, política | Biblioteca, personalizados, plantillas, sesiones, series, descansos y recuperación. |
| Métricas de fuerza | Textos de volumen/progreso/rendimiento | e1RM, PR, volumen, grupos musculares y coherencia entre pantallas. |
| Objetivos | Objetivos nutricionales, peso objetivo, calorías y macros en textos | Volumen/definición, modelo de fases, progreso, fechas e historial. |
| Dashboard | `Dashboard.png` y descripción comercial | Consultas, agregaciones, períodos, estados vacíos y tarjetas Premium. |
| Suplementos y recordatorios | Solo contexto aportado por el usuario | Modelo, pantallas, alarmas, permisos y scheduling. |
| Importación | Solo contexto del usuario | Formatos, parser, validación, duplicados y transacciones. |
| Exportación | Landing y menciones JSON/Excel en legales | Serialización, campos, CSV, compatibilidad y acceso Premium. |
| Premium | Política menciona compras, licencias y suscripciones | Producto, precio, límites, paywalls, restauración y estado offline. |
| Offline / métrico-imperial / ES-EN | Offline local mencionado; resto en contexto | Persistencia, conversiones, traducciones y comportamiento sin red. |

No hay TODO funcional explícito localizado. **NV no significa TODO.** Las funciones adicionales anunciadas respecto al foco inicial son objetivos calóricos/macros sin diario de comidas y canal beta; solo el enlace beta tiene ejecución verificable aquí.

## 4. Flujos de usuario

Flujos web reconstruidos desde los elementos enlazados:

1. Primera visita → portada → banner y propuesta → descargar o ver funciones. No hay onboarding ni configuración web. El banner precede al H1 y CTA principal del hero; hay otro botón Descargar en navegación. El coste visual en móvil requiere comprobación renderizada.
2. Capturas → cuatro tarjetas. Son imágenes sin controles; no se puede entrar al dashboard ni ampliar desde la interfaz. No hay bloqueo técnico, pero la letra fotografiada puede resultar poco legible en tarjetas pequeñas.
3. Descargar → Google Play con UTM en los CTA. El enlace textual de Play usa URL sin UTM. No hay callback ni confirmación de instalación.
4. Privacidad → política → guía de borrado → seguir instrucciones en Android o escribir un correo. La instrucción «Busca la opción relacionada con datos, privacidad o gestión de datos» obliga a explorar ajustes y puede bloquear a quien no encuentre esa opción.
5. Canal beta → Google Groups. No hay más pasos de incorporación implementados en la web.

| Flujo móvil solicitado | Resultado de reconstrucción |
|---|---|
| Primera apertura, onboarding, configuración inicial | NV: no hay punto de entrada móvil ni preferencias. |
| Dashboard | NV: únicamente imagen y descripción, sin consultas ni navegación móvil. |
| Registro de peso, medidas y composición | NV: no existen formularios, validadores ni escrituras correspondientes. |
| Objetivos | NV: textos nutricionales sin editor ni motor de progreso. |
| Registro/sincronización de pasos | NV: no existen handlers ni permisos nativos. |
| Crear/ejecutar entrenamientos, plantillas e historial | NV: no hay sesiones ni rutas móviles. |
| Estadísticas/e1RM | NV: no hay lógica numérica ni componentes analíticos. |
| Suplementos | NV: no hay implementación. |
| Premium | NV: no hay compra, restauración ni estado de entitlement. |
| Importación/exportación | NV: no hay selección de fichero ni generación. |
| Ajustes | NV: solo se citan en la guía de borrado. |

No se pueden localizar con rigor puntos de pérdida de datos, acciones excesivas, inconsistencias o pantallas vacías de esos flujos sin sus implementaciones. No se sustituyen por hipótesis presentadas como bugs.

## 5. Dashboard y métricas

`screenshots` en `index.tsx` asigna a Dashboard un título, texto e imagen. No carga registros ni calcula indicadores.

| Métrica | Evidencia de cálculo |
|---|---|
| Objetivo actual / porcentaje de progreso | Ninguna función, modelo o fórmula. |
| Peso y tendencias | Descripción de gráficas; sin cálculo de tendencia o suavizado. |
| Medidas | Menciones comerciales; sin agregaciones. |
| Pasos | Mención de permisos; sin sumas ni períodos. |
| Entrenamientos | Mención de rendimiento semanal; sin definición de semana o sesión. |
| e1RM / PR | No se encuentra algoritmo en este repositorio. |
| Volumen / series por músculo | Volumen citado en política; no hay asignación muscular ni fórmula. |
| Composición corporal | Descripción de estimaciones; no hay ecuaciones ni selección de método. |
| Calorías / macros | Textos anunciados, sin fórmula de mantenimiento ni reparto. |

No se ha encontrado información fitness calculada internamente y desaprovechada por la UI. Esto describe la web, no la aplicación. No es válido atribuirle una fórmula habitual de e1RM o grasa corporal por semejanza visual.

## 6. Objetivos, volumen y definición

Las únicas estructuras relacionadas son cadenas de texto: `highlights`, párrafo de funciones y `collectedData` en `privacy.tsx`. «Peso objetivo» y «objetivos calóricos o de macronutrientes» no son campos persistidos aquí.

| Cuestión | Estado verificable |
|---|---|
| Tipos de objetivo | No hay enum ni configuración; nutrición y peso se mencionan. Volumen/definición NV. |
| Datos guardados | No existe esquema de objetivo disponible. |
| Progreso | No hay fórmula ni tratamiento de denominador cero, sobrecumplimiento o dirección. |
| Inicio/fin | No hay fechas de fase. |
| Historial | No hay colección de objetivos. |
| Snapshot inicial | No hay estado inicial persistido. |
| Comparación inicio/actual | No hay consulta ni pantalla. |
| Terminar/cambiar | No hay transición de estado ni política de conservación. |
| Asociar otros datos a una fase | No puede evaluarse sin IDs, timestamps, relaciones y reglas de edición del modelo Android. |

**Reutilización:** esta web permite reutilizar presentación y contenido editorial, pero no aporta arquitectura de seguimiento de fases. Si el modelo móvil tuviera mediciones fechadas, podrían estudiarse comparaciones por intervalos; es una posibilidad condicionada, no una capacidad comprobada. La necesidad de snapshots, historial o vínculos explícitos depende de cómo se editan y borran los datos originales. No se propone ni implementa un sistema nuevo.

## 7. Entrenamientos

`Entrenos.png` es accesible como imagen en la portada. El texto anuncia sesiones, ejercicios y rendimiento semanal. `privacy.tsx` añade volumen y progreso. No hay código de entrenamiento ejecutable.

No pueden verificarse: catálogo de ejercicios, personalizados, plantillas, sesiones, validación de series/repeticiones/peso, descansos, historial, PRs, e1RM, volumen, grupos musculares, resumen final, edición/eliminación ni persistencia de entrenamiento activo.

Los casos de cierre de app, muerte del proceso, recuperación de sesión, doble finalización, edición posterior y coherencia entre historial y estadísticas requieren la capa móvil. Tampoco puede comprobarse si el volumen cuenta calentamientos, series fallidas, peso corporal, ejercicios unilaterales o unidades convertidas. Se documentan como **preguntas de auditoría pendientes**, no fallos detectados.

## 8. Premium

**Web:** todas las páginas y enlaces son públicos. No hay límites, paywalls, promociones de precio ni proceso de compra. El vínculo a Google Play no procesa un pago.

**Android:** no se pueden reconstruir las matrices FREE/PREMIUM ni confirmar el precio aproximado de 3 € indicado por el usuario. Faltan product IDs, catálogo, configuración de límites, listeners, persistencia del derecho de acceso y pantallas.

`privacy.tsx` declara Google Play Billing, Google Play Services y RevenueCat y habla de «compras premium, suscripciones o licencias». Ninguno está integrado como cliente de aplicación en este proyecto. Por tanto, quedan NV: compra pendiente, cancelación, acknowledgement, reembolso, restauración, errores de conexión, sincronización y funcionamiento offline.

No hay fundamento para valorar la utilidad percibida de funciones Premium ni la colocación de paywalls móviles. La amplitud del texto legal debe contrastarse con los productos reales; no acredita que se ofrezcan suscripciones. No se recomienda un modelo de precios nuevo.

## 9. Importación y exportación

| Aspecto | Resultado |
|---|---|
| Importación | Ningún parser, input de fichero o flujo de importación. |
| Exportación | Anunciada en landing; `privacy.tsx` dice «como JSON o Excel» y `delete-data.tsx` repite estos formatos. |
| CSV / otros formatos | No hay implementación para confirmar soporte. |
| Campos, versión y compatibilidad | Sin esquema ni ejemplos de archivo. |
| Validaciones y errores | Sin código de validación, transacciones o rollback. |
| Duplicados / IDs | Sin política observable. |
| Unidades, decimales y fechas | Sin normalización o parseo observable. |
| Datos excluidos | No determinable para Android. |
| Free/Premium | No determinable para Android. |

No se puede acreditar ningún formato como operativo a partir de estos textos. La guía sí informa de que los ficheros exportados no se eliminan al borrar datos de la app y requieren gestión manual; es contenido informativo, no comportamiento probado. No hay una ruta de corrupción de datos fitness en esta web porque no los recibe ni escribe. El riesgo móvil de duplicación/importación permanece sin evaluar.

## 10. Health Connect

No hay manifiesto Android ni cliente de Health Connect. La landing declara permisos opcionales y revocables; la política añade Google Fit y servicios equivalentes.

Quedan NV los permisos concretos, lectura frente a escritura, períodos de acceso, lectura en segundo plano, disparadores de sincronización, intervalos, fuentes, deduplicación, edición manual y reglas de prioridad. Tampoco se pueden evaluar permisos denegados/revocados, proveedor no instalado o no disponible, zonas horarias y cambio de día.

La página de borrado explica revocación de permisos, pero **no especifica el destino de posibles registros externos**. La revocación y el borrado se presentan como acciones distintas; no hay evidencia de que la app borre datos de Health Connect. La mención a Google Fit es una afirmación a contrastar, no una integración comprobada.

## 11. Privacidad y datos

Auditoría técnica, sin juicio legal.

| Destino / dato | Evidencia y límite |
|---|---|
| Datos fitness introducidos en la web | No hay formularios ni persistencia que los recojan. |
| Servidor web | La navegación solicita páginas, JavaScript, CSS e imágenes. Política de logs, IP, CDN y retención del hosting desconocida. |
| Google Play | Al pulsar CTA se abre la URL con paquete y, en algunos enlaces, UTM. No se adjuntan medidas fitness ni identificadores de usuario desde este código. Tratamiento posterior externo NV. |
| Google Groups | Se abre un grupo beta por acción del usuario. Cuenta, miembros y tratamiento externo NV. |
| Correo | `mailto:` delega al cliente del usuario; no envía automáticamente desde la web. |
| SDK de analytics / anuncios | No se encuentran imports ni scripts propios de este tipo. Configuración de infraestructura fuera del repositorio NV. |
| Formspree | Variable local sin referencias; no prueba que exista recogida de formularios. |
| Android / Billing / Health Connect | Solo afirmaciones de contenido; no se verifican flujos de datos. |

Inconsistencias o ambigüedades observadas:

1. La landing afirma que se pueden borrar registros desde la app; la política añade «cuando esta funcionalidad esté disponible»; la guía describe ajustes sin el nombre exacto del control. Son niveles de certeza diferentes sobre una operación sensible.
2. «Principalmente» local no enumera qué sale del dispositivo. RevenueCat, Google Play Services y compras se citan sin detallar los datos asociados. El código móvil es necesario para identificar transmisiones reales.
3. Se nombran Google Fit y suscripciones sin evidencia ejecutable aquí. No se concluye que el texto sea falso; se exige contraste con Android.
4. La guía describe eliminación local y exportaciones, pero no aclara copias de seguridad/restauración, datos de proveedores externos o estado de compra. Falta el manifiesto y la configuración móvil para validar alcance.

La política está redactada sobre la app, no documenta en detalle el hosting de esta web. La ausencia de un SDK en el frontend no demuestra ausencia de logs del servidor.

## 12. Internacionalización

La web contiene solo español: textos hardcodeados en TSX y `lang="es"` en `_document.tsx`. No hay diccionarios, selector, rutas de idiomas ni i18n en Next. Esto no permite concluir nada sobre los idiomas móviles.

Hallazgos concretos:

- `valuePoints` contiene «Sin diario diario de comidas.»: duplicación real de palabra.
- Aparecen «Dashboard», «Entrenos» y «premium» junto a español; la uniformidad terminológica es pulido editorial, no fallo funcional.
- Fechas legales fijas: «14 de mayo de 2026». No existe formateo dinámico ni fecha por locale.
- No hay campos numéricos: separadores decimales, kg/lb y cm/in no son evaluables en esta web.
- El archivo `Composición corporal.png` incluye espacio y tilde y coincide con la referencia. No se observó un fallo por ese nombre.
- No hay `truncate` ni límites de líneas en el texto principal. El posible recorte de capturas mediante `object-cover` y la legibilidad móvil requieren renderización.

Si la adquisición exige inglés, esta web no lo proporciona. No se ha confirmado que ese requisito aplique a la web publicada.

## 13. UX/UI

Por inspección, las tres páginas comparten fondo oscuro, acentos verdes, contenedores y tipografía de utilidades. La navegación usa enlaces reales, hay `main`, encabezados, listas y texto alternativo en imágenes. Los enlaces externos incorporan `noopener noreferrer`.

Problemas verificables o límites concretos:

- **Guía de borrado ambigua:** no identifica la opción exacta y no distingue lo que realmente está disponible. Problema de contenido operativo.
- **Favicon alternativo inexistente:** `_document.tsx` referencia `/favicon.ico`, ausente de `public/`; existe el SVG principal. Impacto limitado a fallback/solicitud de recurso, no bloqueo de navegación.
- **Galería sin ampliación:** comprobado en JSX; posible dificultad para leer una pantalla móvil encajada en una tarjeta, pendiente de inspección visual.
- **Repetición editorial:** disponibilidad en Play aparece en badge, párrafo y bloque final; se repite el mensaje de datos claros. Es redundancia, no bloqueo.
- **Beta:** el CTA enlaza a un grupo sin explicar el resto del alta; el proceso externo no se comprobó.
- **Accesibilidad:** `lang`, textos de enlaces y semántica básica están presentes. No hay enlace para saltar navegación ni estilos específicos `focus-visible`. Esto no prueba que falte foco nativo. No se midieron contraste, tamaño efectivo de objetivos táctiles, zoom o lector de pantalla; no se declara incumplimiento visual sin prueba.

No existen formularios, loaders de operaciones, confirmaciones ni mensajes de éxito propios; su ausencia es coherente con una web informativa. La app Android necesita su propia evaluación de estados vacíos, errores y densidad. El color verde y las esquinas elegidas son preferencias estéticas, no problemas encontrados.

## 14. Calidad técnica

**Despliegue:** `package.json` define `deploy = npm run build && gh-pages -d out`. `next.config.ts` no define `output: "export"` ni otra generación de `out`; `out` tampoco existe en el árbol inspeccionado. El build normal de Next produce `.next`, no el directorio que ese comando intenta publicar. La configuración y la implementación instalada de Next apoyan este diagnóstico; no se ejecutó la publicación. Si el hosting real es otro, puede funcionar aunque este script esté obsoleto. Redirecciones e imágenes también necesitan una estrategia compatible si se adopta hosting exclusivamente estático.

**Código sin uso / restos potenciales:** `react-icons` sin imports; dos PNG sin referencias (`Android_logo_2019.png`, `playstore.png`); variable local de Formspree sin consumidor; variables de fuente Geist sin definición; nombre heredado de proyecto en `.idea`. No se afirma que las URLs públicas carezcan de consumidores fuera del repositorio.

**Duplicación:** correo y datos editoriales repetidos entre páginas legales; estilos de tarjetas y enlaces repetidos; afirmaciones de producto distribuidas entre varias listas. Puede generar divergencias de copy. La duplicación de estos componentes pequeños no justifica por sí sola un refactor antes de release.

**Activos:** banner de 1.353.340 bytes, PNG de icono de 587.742 bytes y SVG de icono de 154.590 bytes. Son tamaños de origen, no transferencia efectiva: `next/image` puede servir derivados. No se ha medido LCP ni coste real de red. Banner e icono usan `priority`; las capturas no declaran `sizes` aunque su ancho visual depende del grid. Revisar solo si la medición confirma impacto.

**SEO/social:** metadatos presentes, imágenes OG/Twitter relativas, sin canonical, `og:url`, sitemap o robots propios encontrados. La previsualización social no fue probada. No se afirma fallo de indexación.

**Fiabilidad:** no hay escrituras, lifecycle móvil, concurrencia fitness, consultas a DB ni migraciones que evaluar aquí. No se encuentran TODO/FIXME ni bloques catch que ignoren errores en el código propio. Esto no certifica Android ni dependencias transitivas.

**Dependencias:** se documentan versiones instaladas/lockfile, no una afirmación de vigencia o seguridad. No se consultaron avisos externos ni se ejecutaron actualizaciones. El desfase de `eslint-config-next` se registra como configuración, sin fallo observado.

## 15. Tests

No se encuentran tests propios, fixtures, suites unitarias/E2E, script `test` ni workflows de CI versionados. Las pruebas internas de paquetes de `node_modules` no cuentan como cobertura de FitStats.

Comprobaciones ejecutadas:

| Comando | Resultado | Alcance |
|---|---|---|
| `tsc --noEmit --incremental false` desde binarios locales | Sin errores | Tipos; sin generar JS ni tsbuildinfo. |
| `eslint src next.config.ts` desde binarios locales | Sin errores ni warnings | Código fuente y configuración indicada. |
| `npm run lint` | `No ESLint warnings or errors` | Script configurado, válido en la versión instalada. Puede mantener caché generada de Next. |
| Inventario y búsquedas estáticas | Realizadas | Rutas, referencias, dependencias, ausencia de módulos móviles y estado Git. |

No se ejecutaron build, deploy, test Android, restauración de compras, importaciones destructivas ni navegación visual. Los comandos pasados no prueban entrega de imágenes, redirecciones en hosting o disponibilidad de enlaces externos.

Flujos web de regresión: descarga y paquete de Play, acceso directo a páginas legales, rutas antiguas, assets y funcionamiento del despliegue. Flujos móviles que necesitarían máxima protección en la iteración: migración/persistencia, recuperación de entrenamiento, conversión de unidades, duplicados/importación, fuentes de pasos, cambios de objetivo y compra/restauración. Son prioridades de validación pendientes, no bugs demostrados.

## 16. Analytics actuales

No hay eventos, identificación de usuario, sesión, SDK analítico, endpoint receptor ni persistencia analítica en el código propio. `_app.tsx` solo renderiza la página e importa estilos.

`playStoreMarketingUrl` incorpora `utm_source=fitstats_es`, `utm_medium=landing`, `utm_campaign=public_launch`. Todos esos CTA comparten campaña; el enlace textual usa `playStoreUrl` sin UTM. Esto identifica parámetros del enlace saliente, **no mide por sí mismo clics, instalaciones o conversiones**. La disponibilidad de datos en Google Play Console u otro servicio no se ha inspeccionado.

| Paso del funnel solicitado | Medición acreditada en este repositorio |
|---|---|
| Instalación | No. Solo enlace saliente. |
| Onboarding completado | No. |
| Primer dato registrado | No. |
| Primer entrenamiento | No. |
| Segunda sesión de uso | No. |
| Retorno D1/D7/D30 | No. |
| Visualización de Premium | No. |
| Inicio de compra | No. |
| Compra completada | No. |

Tampoco se registra el clic en Descargar desde esta web. No se pueden atribuir a Android las mismas carencias sin su código, ni dar por disponibles dashboards de proveedores solo porque se mencionen en la política. No se implementa analytics.

## 17. Problemas encontrados

Clasificación exclusiva por las cuatro categorías solicitadas. La confianza diferencia defectos comprobados, incoherencias de configuración y límites de verificación.

### CRÍTICO

No se ha demostrado un crash, pérdida/corrupción de datos fitness o compra incorrecta en el código accesible. **No equivale a ausencia de problemas críticos en Android**: esas implementaciones no están disponibles. La auditoría móvil pendiente es un límite de evaluación, no un defecto de producto inventado.

### IMPORTANTE

| ID | Hallazgo / evidencia | Impacto y condición |
|---|---|---|
| I-01 | `package.json` publica `out`; `next.config.ts` no lo genera | El proceso de publicación declarado no es coherente para un checkout limpio. Confirmar hosting real antes de confiar en el script. Alta confianza por configuración; no ejecutado. |
| I-02 | `deletionSteps` impreciso y textos de disponibilidad distintos en portada/política | Puede impedir que el usuario encuentre cómo borrar datos. Inconsistencia documental comprobada; funcionamiento móvil NV. |
| I-03 | Política enumera proveedores, modalidades de compra y formatos sin implementación accesible | Falta contrastar la información pública con la app antes de basar distribución en ella. No se declara falsedad técnica sin código Android. |

### PULIDO

| ID | Hallazgo / evidencia | Alcance |
|---|---|---|
| P-01 | «Sin diario diario de comidas.» en `valuePoints` | Error de copy comprobado. |
| P-02 | `/favicon.ico` referenciado y ausente | Fallback de icono; SVG principal presente. |
| P-03 | `react-icons`, dos imágenes y variable de Formspree sin uso encontrado | Restos potenciales; sin impacto funcional demostrado. |
| P-04 | Variables Geist sin definición | Configuración tipográfica incompleta; apariencia final no medida. |
| P-05 | Metadatos sociales con imagen relativa y sin URL canónica | Robustez de previsualización pendiente de validar. |
| P-06 | Enlace textual a Play sin UTM mientras CTA sí lo incluyen | Inconsistencia del etiquetado de campaña, sin sistema de atribución acreditado. |
| P-07 | Fecha/contacto/afirmaciones duplicadas, copy redundante | Mantenimiento editorial y claridad. |
| P-08 | Galería sin zoom y origen de imágenes voluminoso | Legibilidad/rendimiento potenciales; requieren medición antes de tratarlos como fallo visual. |
| P-09 | Beta enlaza solo al grupo | Falta claridad sobre siguientes pasos; incorporación externa NV. |

### IDEA

- Página de ayuda con rutas exactas de la app: posible evolución editorial una vez comprobadas.
- Versión inglesa de la web si la distribución lo requiere.
- Medición futura de adquisición/retención, sujeta a diseño y contraste con el código móvil. No implementada ni convertida en requisito automático de esta release.
- Comparación por fases si el modelo Android permite reutilizar mediciones fechadas; no se ha demostrado su viabilidad con la arquitectura disponible.

## 18. Estado para producción

**Web:** presentación y navegación tienen una implementación sencilla, coherente y válida en las comprobaciones estáticas. Son candidatas a producción, pero no se certifica la release desplegada sin build y verificación del hosting, assets y rutas. El script de publicación y la precisión de la guía de borrado merecen revisión antes de aumentar tráfico.

**Android:** estado de producción indeterminado. La publicación en Google Play es contexto aportado por el usuario y texto del repositorio; no se inspeccionó la build distribuida. No existe base para afirmar que peso, entrenamiento, Premium o Health Connect estén completos, parciales o defectuosos.

**Mayor riesgo de regresión verificable en esta web:** cambiar hosting/exportación, redirecciones antiguas, referencias de assets, URLs de Play y textos legales desacoplados de Android. El riesgo relativo de módulos móviles no es clasificable sin código y tests.

**Valor diferencial:** la propuesta declarada combina seguimiento corporal, fuerza, pasos y exportación, con privacidad local y sin diario de comidas. Su valor operativo y la calidad analítica no están demostrados aquí. La web sí presenta esa propuesta y facilita llegar a la descarga.

No debe usarse este documento como aprobación de una última release móvil. Su resultado principal es separar evidencia web de afirmaciones sobre el producto y dejar localizada la información que falta para esa decisión.

## 19. Preguntas abiertas

1. ¿Dónde está el repositorio Android de FitStats y qué rama/commit corresponde a la versión publicada? Es el requisito principal para completar la auditoría solicitada.
2. ¿Qué versión/build se prepara para el último pulido y cuál está distribuida en Play?
3. ¿Qué hosting y comando publican realmente esta web? ¿`deploy` sigue en uso o es heredado?
4. ¿RevenueCat y Google Fit siguen integrados? ¿La compra es única, suscripción o ambas? ¿Cuáles son los IDs y las reglas de acceso reales?
5. ¿Cuál es la ruta exacta de borrado y qué cubre: registros, perfil, preferencias, exportaciones, backups o fuentes externas?
6. ¿Qué esquema y migraciones guardan objetivos, mediciones, pasos y entrenamientos? ¿Hay timestamps, snapshots y relaciones de fase?
7. ¿Qué formatos de import/export existen realmente y qué versiones de archivo deben mantenerse compatibles?
8. ¿Qué pruebas y accesos de validación existen para Health Connect, Billing y recuperación tras cierre?
9. ¿Hay analytics o paneles externos fuera de este repositorio y qué eventos reciben realmente?
10. ¿Las capturas corresponden a la build actual? ¿Se espera inglés también para la landing?

Con el repositorio móvil se podrá completar la clasificación funcional y sustituir los NV por conclusiones sustentadas en rutas, modelos, cálculos y pruebas. Hasta entonces, esas incógnitas permanecen explícitamente abiertas.
