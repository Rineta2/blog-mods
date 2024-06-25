import dynamic from "next/dynamic"

const Route = dynamic(() => import("@/components/layout/Route"), {
  ssr: false,
});

const page = () => {
  return (
    <Route />
  )
}

export default page