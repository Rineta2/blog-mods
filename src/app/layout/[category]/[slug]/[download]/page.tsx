import { dataPage } from "@/components/data/data"

import Image from "next/image"

import Link from "next/link"

import "@/components/sass/Page.scss"

export default function page({ params }: { params: { category: string, slug: string, download: string } }) {

  const slug = dataPage.find((item) => item.slug === params.slug)

  if (!slug) {
    return <div>Slug Not Found</div>
  }

  return (
    <section className="download">
      <div className="download__container container grid">
        <div className="content">
          {
            slug.downloadDetails?.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Image src={item.img} alt="" quality={100} />

                  {
                    item.text?.map((text) => {
                      return (
                        <div className="text" key={text.id}>
                          <p>{text.desc}</p>
                        </div>
                      )
                    })
                  }

                  {
                    item.button?.map((button) => {
                      return (
                        <div className="btn" key={button.id}>
                          <Link href={button.path}>{button.name}</Link>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
