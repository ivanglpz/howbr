import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Toaster richColors />

      <Component {...pageProps} />
    </>
  );
}
