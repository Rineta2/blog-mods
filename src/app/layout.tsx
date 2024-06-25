import type { Metadata } from "next";

import "@/components/sass/Globals.scss"

import { Raleway as RalewayFont } from "next/font/google";

import Head from "next/head";

import Script from "next/script";

const Raleway = RalewayFont({ subsets: ["latin"] });

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Blog Mods",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="PPFLRECsv286Qh9u6AsO2sLWattnKN-Z2BsNEMKprsk" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={Raleway.className}>
        <main>
          {children}
          <Footer />
        </main>

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
}
