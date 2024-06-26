'use client'

import { useState } from "react";

import { dataPage, headAside, tutorial } from "@/components/data/data";

import Image from "next/image";

import Link from "next/link";

import "@/components/sass/Page.scss";

const Page = ({ params }: { params: { category: string } }) => {
  const category = dataPage.find((item) => item.category === params.category);

  const [activeCategory, setActiveCategory] = useState(params.category);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  if (!category) {
    return <div>Category Not Found</div>;
  }

  return (
    <section className="category">
      <div className="category__container container grid">
        <article>
          <div className="content">
            {category.categoryDetails.map((details) => (
              <div className="box" key={details.id}>
                <Image
                  src={details.img}
                  alt={details.name}
                  width={500}
                  height={500}
                />
                <h3>{details.name}</h3>
                <p>{details.desc}</p>
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
            {dataPage.map((data) => (
              <li key={data.id} className={data.category === activeCategory ? "active" : ""}
                onClick={() => handleCategoryClick(data.category)}>
                <Link href={`/[category]`} as={`/layout/${data.category}`}>
                  {data.category}
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
    </section>
  );
};

export default Page;