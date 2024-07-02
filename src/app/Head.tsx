import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Blog Mods",
  description:
    "Blogs Mods, Kumpulan Blog Software. Hubungi Kami Sekarang!",
  author: "rizki",
  keywords:
    "Aplikasi Mods,Mods, Software, Windows, Game PC, Game Mobile, Microsoft Office, Software, Game PC, Game Mobile, Microsoft Office",
  verification: "PPFLRECsv286Qh9u6AsO2sLWattnKN-Z2BsNEMKprsk",
};

const Head: React.FC = () => {
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
    <>
      <title>{metadata.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google-site-verification" content={metadata.verification} />

      <script type="text/javascript">
        {`
        var atOptions = {
          'key' : '27e54543a309a306bcd155d138c3ddc3',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : { }
        };
        `}
      </script>

      <script type="text/javascript" src="//www.topcreativeformat.com/27e54543a309a306bcd155d138c3ddc3/invoke.js" async></script>

      <script type="text/javascript">
        {`
        var atOptions = {
            'key' : '27e54543a309a306bcd155d138c3ddc3',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : { }
        };
        `}
      </script>
      <script type="text/javascript" src="//relishsinew.com/27e54543a309a306bcd155d138c3ddc3/invoke.js" async></script>

      <script src="https://relishsinew.com/uvxj6txzwn?key=fcb0c7e71e6afc5771eaf397bb92b224" async></script>

      <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NDFTW435');`,
        }}
      />

      <link rel="canonical" href="https://aplikasi-mod.vercel.app/" />
      <link rel="icon" href="https://aplikasi-mod.vercel.app/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="https://aplikasi-mod.vercel.app/favicon.ico"
      />
      <link
        rel="shortcut icon"
        href="https://aplikasi-mod.vercel.app/favicon.ico"
        type="image/x-icon"
      />

      {/* JSON-LD structured data */}
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

    </>
  );
};

export default Head;
