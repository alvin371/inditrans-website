import "./globals.css";
import { Metadata, Viewport } from "next";
import { metaData, viewPort } from "@/libs/constants/meta";
import Script from "next/script";

export const viewport: Viewport = viewPort;
export const metadata: Metadata = metaData;
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
          as="script"
        />
      </head>
      <Script
        id="google-analytics-first-script"
        type="text/partytown"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
      />
      <Script
        id="google-analytics-second-script"
        type="text/partytown"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <body>{children}</body>
    </html>
  );
}
