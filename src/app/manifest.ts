import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Inditrans Satu Nusantara",
    short_name: "Inditrans",
    description: "PT. Inditrans Satu Nusantara",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/inditrans-icon.ico",
        sizes: "144x144",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/inditrans-icon.ico",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/inditrans-icon.ico",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/inditrans-icon.ico",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/inditrans-icon.ico",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
