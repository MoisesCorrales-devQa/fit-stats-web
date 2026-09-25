import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ScrollReveal from "@/components/ScrollReveal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollReveal />
      <Component {...pageProps} />
    </>
  );
}
