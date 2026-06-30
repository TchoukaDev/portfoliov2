import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/realisations", "/a-propos", "/contact"],
        disallow: ["/admin", "/login", "/register", "/api/"],
      },
    ],
    sitemap: "https://romainwirth.fr/sitemap.xml",
  };
}
