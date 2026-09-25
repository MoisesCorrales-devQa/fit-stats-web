import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

type FitStatsDocumentProps = DocumentInitialProps & { lang: "es" | "en" };

export default function FitStatsDocument({ lang }: FitStatsDocumentProps) {
  return (
    <Html lang={lang}>
      <Head>
        <link rel="icon" href="/icon.svg?v=fitstats-1" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico?v=fitstats-2" sizes="any" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

FitStatsDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<FitStatsDocumentProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  const lang = ctx.pathname === "/en" || ctx.pathname.startsWith("/en/") ? "en" : "es";

  return { ...initialProps, lang };
};
