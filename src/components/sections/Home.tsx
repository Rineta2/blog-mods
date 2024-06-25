'use client'

import { useEffect } from "react"

import { homeImg, dataHome, socialLink } from "@/components/data/data"

import Image from "next/image"

import "@/components/sass/Home.scss"

import Header from "@/components/layout/Header"

import Link from "next/link"

const Home = () => {

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll<HTMLElement>(".parallax__image").forEach(el => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0");
        el.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };

    const throttle = (callback: () => void, delay: number) => {
      let lastCall = 0;
      return () => {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
          callback();
          lastCall = now;
        }
      };
    };

    const throttledHandleScroll = throttle(handleScroll, 10);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <section className="home">
      <div className="home__container container grid">
        <div className="img">
          {
            homeImg.map((img) => {
              return (
                <Image src={img.img} key={img.id} alt="Home" className="parallax__image" data-speed={"0.5"} quality={100} />
              )
            })
          }
        </div>

        <div className="content">
          <div className="text">
            {
              dataHome.map((data) => {
                return (
                  <div className="box" key={data.id}>
                    <h1>{data.title}</h1>
                    <p>{data.text}</p>
                  </div>
                )
              })
            }
          </div>

          <ul className="social">
            {
              socialLink.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.path}>{link.icons}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home