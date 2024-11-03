import { Metadata, Viewport } from "next";

export const metaData: Metadata = {
  title: "Inditrans Satu Nusantara",
  applicationName: "Inditrans 2024",
  description:
    "More than just logistics, we provide reliable and efficient delivery with advanced technology solutions.",
  generator: "Next.js",
  manifest: "/manifest.webmanifest",
  keywords: [
    "Inditrans",
    "inditrans",
    "logistic",
    "logistik",
    "inditrans.co.id"
  ],
  authors: [
    {
      name: "Alvin Dimas Satria",
      url: "https://www.linkedin.com/alvindimas"
    }
  ],
  icons: [
    { rel: "icon", url: "/images/inditrans-logo.png", sizes: "16x16" },
    { rel: "favicon", url: "/images/inditrans-logo.png", sizes: "16x16" }
  ]
};

export const viewPort: Viewport = {
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover"
};
