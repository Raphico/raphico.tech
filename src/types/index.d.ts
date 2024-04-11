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
  title: string
  description: string
}

export type WorkItem = {
  id: string
  title: string
  thumbnail: ImageMetadata
  images: ImageMetadata[]
  description: string
  about: string
  technologies: string[]
  liveSiteLink: string
  githubLink: string
}
