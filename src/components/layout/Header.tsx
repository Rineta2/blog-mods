'use client'

import { navLink, logo, navActions } from "@/components/data/data"

import Link from "next/link"

import "@/components/sass/Header.scss"

import { usePathname } from 'next/navigation'

const Header = () => {

  const pathname = usePathname()

  return (
    <header>
      <nav className='nav container'>
        {
          logo.map((logo) => {
            return (
              <h1 key={logo.id} className="logo">{logo.name}</h1>
            )
          })
        }

        <ul>
          {
            navLink.map((nav) => {
              return (
                <li key={nav.id} className={pathname === nav.link ? "active" : ""}>
                  <Link href={nav.link}>{nav.name}</Link>
                </li>
              )
            })
          }
        </ul>

        {
          navActions.map((icons) => {
            return (
              <div className="nav__actions" key={icons.id}>
                <Link href={icons.path} key={icons.id} className="give">
                  {icons.icons}
                  {icons.name}
                </Link>
              </div>
            )
          })
        }
      </nav>
    </header>
  )
}

export default Header