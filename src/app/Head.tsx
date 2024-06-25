import React from "react";

export const metadata = {
  title: "Blog Mods",
  description:
    "Blogs Mods, Kumpulan Blog Software. Hubungi Kami Sekarang!",
  author: "rizki",
  keywords:
    "Aplikasi Mods,Mods, Software, Windows, Game PC, Game Mobile, Microsoft Office, Software, Game PC, Game Mobile, Microsoft Office",
  verification: "PPFLRECsv286Qh9u6AsO2sLWattnKN-Z2BsNEMKprsk",
};
const Head = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Blog Mods",
    image: "https://aplikasi-mod.vercel.app/favicon.ico",
    "@id": "https://aplikasi-mod.vercel.app/",
    url: "https://aplikasi-mod.vercel.app/",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.595038,
      longitude: 106.670528,
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],
  };

  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <React.Fragment>
      <title>{metadata.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google-site-verification" content={metadata.verification} />
      <link
        rel="canonical"
        href="https://aplikasi-mod.vercel.app/"
      />
      <link
        rel="icon"
        href="https://aplikasi-mod.vercel.app/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        href="https://aplikasi-mod.vercel.app/favicon.ico"
      />
      <link
        rel="shortcut icon"
        href="https://aplikasi-mod.vercel.app/favicon.ico"
        type="image/x-icon"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
    </React.Fragment>
  );
};

export default Head;