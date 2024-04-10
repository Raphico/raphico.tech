export type FooterItem = {
  title: string
  items: {
    title: string
    href: string
  }[]
}

export type MainNavItem = {
  title: string
  href: string
}

export type Note = {
  title: string
  content: string
}

export type Expertise = {
  icon: ImageMetadata
  title: string
  description: string
}
