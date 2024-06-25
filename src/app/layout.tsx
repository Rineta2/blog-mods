import React, { ReactNode } from "react";

import { Fragment } from "react";

import "@/components/sass/Globals.scss"

import { Raleway as RalewayFont } from "next/font/google";

const Raleway = RalewayFont({ subsets: ["latin"] });

import Head from "next/head";

import dynamic from "next/dynamic";

import Script from "next/script";

export const metadata = {
  title: "Blog Mods",
  description:
    "Blogs Mods, Kumpulan Blog Software. Hubungi Kami Sekarang!",
  author: "rizki",
  keywords:
    "Aplikasi Mods,Mods, Software, Windows, Game PC, Game Mobile, Microsoft Office, Software, Game PC, Game Mobile, Microsoft Office",
};

const siteUrl = "https://aplikasi-mod.vercel.app/";
const faviconUrl = `${siteUrl}/favicon.ico`;
const canonicalUrl = "https://aplikasi-mod.vercel.app/";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name="version" content="1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content="google5f7447e6164a9762.html" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href={faviconUrl} />
        <link rel="apple-touch-icon" href={faviconUrl} />
        <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
      </Head>
      <body className={Raleway.className}>
        <Fragment>
          <main>
            {children}
            <Footer />
          </main>
        </Fragment>

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-XXXXX-Y', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
