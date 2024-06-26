import { dataPage, socialLink } from "@/components/data/data";

import { IoMdArrowDropright } from "react-icons/io";

import "@/components/sass/Page.scss";

import Link from "next/link";

import Image from "next/image";

const detailsLayout = ({ params }: { params: { slug: string } }) => {

  const slug = dataPage.find((item) => item.slug === params.slug)

  if (!slug) {
    return <div>Slug Not Found</div>;
  }

  return (
    <section className="details">
      <div className="details__container container grid">
        <div className="content">
          {
            slug.slugDetails.map((head) => {
              return (
                <div className="head" key={head.id}>
                  <span>{head.category} <i><IoMdArrowDropright /></i></span>
                  <h1>{head.title}</h1>
                </div>
              )
            })
          }

          {
            slug.slugDetails.map((details) => {
              return (
                <p key={details.id}>
                  {details.desc}
                </p>
              )
            })
          }

          <div className="date-social">

            {
              slug.slugDetails.map((date) => {
                return (
                  <div className="date" key={date.id}>
                    <div className="name">{date.name}</div>
                    <span>{date.date}</span>
                  </div>
                )
              })
            }

            <ul className="social">
              {
                socialLink.map((social) => {
                  return (
                    <li className="box" key={social.id}>
                      <Link href={social.path}>{social.icons}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="box__content">
            {
              slug.slugDetails.map((image) => {
                return (
                  <div key={image.id}>
                    <Image src={image.img} alt={image.category} quality={100} />

                    <h1 className="title__fiture">{image.fiturname}</h1>

                    <ul>
                      {
                        image.fiturlist.map((list) => {
                          return (
                            <li key={list.id}>
                              <h3>{list.title}</h3>
                              <p>{list.desc}</p>
                            </li>
                          )
                        })
                      }
                    </ul>

                    <h1 className="title__instalasi">{image.instalasi}</h1>

                    <ul>
                      {
                        image.instalasilist.map((list) => {
                          return (
                            <li key={list.id}>
                              <p>{list.desc}</p>
                            </li>
                          )
                        })
                      }
                    </ul>

                    <h1 className="title__version">{image.version}</h1>
                    <h3 className="title__size">{image.size}</h3>
                    <div className="btn">
                      {
                        image.download.map((download) => {
                          return (
                            <Link key={download.id} href={download.path}>
                              <span className="name">{download.name}</span> |
                              <span className="title">{download.title}</span>
                            </Link>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default detailsLayout