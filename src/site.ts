import type { FooterItem, MainNavItem } from "."

const links = {
  x: "https://twitter.com/Raphico_OA",
  github: "https://github.com/Raphico",
  gmail: "mailto:raphicogit@gmail.com",
  discord: "https://discord.com/users/raphico",
}

export const siteConfig = {
  name: "Raphico",
  description: "Raphael Awoyinfa's Personal Site.",
  url: "http://raphico.vercel.app",
  ogImage: "https://raphico.vercel.app/og.png",
  links,
  mainNav: [
    {
      title: "Works",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Expertise",
      href: "/expertise",
    },
    {
      title: "Notes",
      href: "/notes",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Coding Playlist",
      items: [
        {
          title: "~CZ~",
          href: "https://soundcloud.com/user-471347893",
        },
        {
          title: "LAGXNA",
          href: "https://open.spotify.com/search/LAGXNA",
        },
        {
          title: "~Anxsy~",
          href: "https://open.spotify.com/artist/7FqHT6YG2SXiL0HshXProY?si=Zjpdh3HRQY-5CEj_tjzLvw",
        },
        {
          title: "Coffee to go",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
        },
      ],
    },
    {
      title: "Elsewhere",
      items: [
        {
          title: "X",
          href: links.x,
        },
        {
          title: "Discord",
          href: links.discord,
        },
        {
          title: "Github",
          href: links.github,
        },
        {
          title: "Gmail",
          href: links.gmail,
        },
      ],
    },
  ] satisfies FooterItem[],
}
