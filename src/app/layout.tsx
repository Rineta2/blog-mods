import React, { ReactNode } from "react";

import { Fragment } from "react";

import "@/components/sass/Globals.scss"

import { Raleway as RalewayFont } from "next/font/google";

const Raleway = RalewayFont({ subsets: ["latin"] });

import dynamic from "next/dynamic";

import Head from "@/app/Head";

import Script from "next/script";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={Raleway.className}>
        <Fragment>
          <main>
            <Head />
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
