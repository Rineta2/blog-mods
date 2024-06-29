'use client'

import { useState } from "react";

import { dataPage, headAside, tutorial } from "@/components/data/data";

import Link from "next/link";

import "@/components/sass/Page.scss";

import { IoIosArrowForward } from "react-icons/io";

const Page = ({ params }: { params: { category: string } }) => {

  const category = dataPage.find((item) => item.category === params.category);

  const [activeCategory, setActiveCategory] = useState(params.category);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  if (!category) {
    return <div>Category Not Found</div>;
  }

  const uniqueCategories = Array.from(new Set(dataPage.map(data => data.category)));

  return (
    <section className="category">
      <div className="category__container container grid">

        <div className="head">
          <h3>Home  <i><IoIosArrowForward /></i></h3>
          <span>Category</span>
        </div>

        <div className="btn">
          <Link href={"/"}>Kembali Ke Home</Link>
        </div>

        <div className="content">
          <article>
            <div className="content">
              {category.categoryDetails.map((details) => (
                <div className="box" key={details.id}>

                  <h1 className="title">{details.title}</h1>

                  <div className="date">
                    <div>{details.date}</div>
                    <h3>{details.name}</h3>
                  </div>

                  <p>{details.desc}</p>

                  <div className="btn">
                    <Link href={`/[category]/[slug]`} as={`/layout/${params.category}/${details.slug}`}>
                      Lihat Details
                    </Link>
                  </div>
                </div>
              ))}

            </div>
          </article>

          <aside>
            <div className="title">
              {headAside.map((head) => (
                <h1 key={head.id}>{head.title}</h1>
              ))}
            </div>

            <ul className="content">
              {uniqueCategories.map((category, index) => (
                <li key={index} className={category === activeCategory ? "active" : ""} onClick={() => handleCategoryClick(category)}>
                  <Link href={`/[category]`} as={`/layout/${category}`}>
                    <span>{category}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="tutorial">
              {tutorial.map((tutor) => (
                <div className="box" key={tutor.id}>
                  <h4>{tutor.name}</h4>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/zzFsx1iqcgg?si=zU4yKJbHBhe3qwb-"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy={"strict-origin-when-cross-origin"}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Page;