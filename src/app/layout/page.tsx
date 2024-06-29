'use client'

import { useState, useEffect } from "react"

import { dataPage, headAside, tutorial } from "@/components/data/data"

import "@/components/sass/Home.scss"

import Image from "next/image"

import Link from "next/link"

const Layout = () => {

  const [visibleItems, setVisibleItems] = useState(5);
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  const handleLoadMore = () => {
    const newVisibleItems = visibleItems + 5;
    const newLoadedItems = dataPage.slice(visibleItems, newVisibleItems).map((data) => data.id);

    setVisibleItems(newVisibleItems);
    setLoadedItems(newLoadedItems);

    setTimeout(() => {
      setLoadedItems([]);
    }, 500);
  };

  const filteredData = dataPage;

  useEffect(() => {
    const initialLoadedItems = filteredData.slice(0, visibleItems).map((data) => data.id);
    setLoadedItems(initialLoadedItems);

    setTimeout(() => {
      setLoadedItems([]);
    }, 500);
  }, [visibleItems, filteredData]);

  const uniqueCategories = Array.from(new Set(dataPage.map(data => data.category)));

  return (
    <section className="layout">
      <div className="layout__container container grid">
        <article>
          <div className="content">
            {
              filteredData.slice(0, visibleItems).map((data) => {
                const isVisible = loadedItems.includes(data.id);
                return (
                  <div className={`box ${isVisible ? "visible" : ""}`} key={data.id}>
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
                      <Link href={`/[category]/[slug]`} as={`/layout/${data.category}/${data.slug}`}>Lihat Details</Link>
                    </div>

                  </div>
                )
              })
            }
          </div>

          {visibleItems < filteredData.length && (
            <div className="btn">
              <button onClick={handleLoadMore}>Load More</button>
            </div>
          )}
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
            {uniqueCategories.map((category, index) => (
              <li key={index}>
                <Link href={`/[category]`} as={`/layout/${category}`}>
                  <span>{category}</span>
                </Link>
              </li>
            ))}
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