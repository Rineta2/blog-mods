'use client'

import { useState } from "react"

import { dataPage, headAside, dataAside, tutorial } from "@/components/data/data"

import "@/components/sass/Home.scss"

import Image from "next/image"

import Link from "next/link"

const Layout = () => {

  const [selectedCategory, setSelectedCategory] = useState("all-categories");
  const [visibleItems, setVisibleItems] = useState(5);
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "all-categories"
      ? dataPage
      : dataPage.filter((id) => id.category === selectedCategory);

  return (
    <section className="layout">
      <div className="layout__container container grid">
        <article>
          <div className="content">
            {
              filteredData.map((data) => {
                return (
                  <div className="box" key={data.id}>
                    <Image src={data.img} alt={data.title} quality={100} />

                    <div className="profile">
                      <span>{data.date}</span>
                      <span>{data.name}</span>
                    </div>

                    <div className="text">
                      <h1>{data.title}</h1>
                      <p>{data.desc}</p>
                    </div>

                    <div className="btn">
                      <Link href={`/[slug]`} as={`/layout/${data.slug}`}>Lihat Details</Link>
                    </div>

                  </div>
                )
              })
            }
          </div>

          <div className="btn">
            <button>Load More</button>
          </div>
        </article>

        <aside>
          <div className="title">
            {
              headAside.map((head) => {
                return (
                  <h1 key={head.id}>{head.title}</h1>
                )
              })
            }
          </div>

          <ul className="content">
            {
              dataAside.map((data) => {
                return (
                  <li key={data.id} className={data.category === selectedCategory ? "active" : "all-categories"} onClick={() => handleFilter(data.category)}>
                    <h3>{data.name}</h3>
                  </li>
                )
              })
            }
          </ul>

          <div className="tutorial">
            {
              tutorial.map((tutor) => {
                return (
                  <div className="box" key={tutor.id}>
                    <h4>{tutor.name}</h4>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zzFsx1iqcgg?si=zU4yKJbHBhe3qwb-" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy={"strict-origin-when-cross-origin"} allowFullScreen></iframe>
                  </div>
                )
              })
            }
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Layout