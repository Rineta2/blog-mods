import { Fragment } from "react";

import dynamic from "next/dynamic"

const Home = dynamic(() => import("@/components/sections/Home"), {
  ssr: false,
});

const Page = dynamic(() => import("@/app/layout/page"), {
  ssr: false,
});

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});

const Route = () => {
  return (
    <Fragment>
      <Home />
      <Header />
      <Page />
    </Fragment>
  )
}

export default Route