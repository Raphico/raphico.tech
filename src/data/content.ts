import type { Expertise, Note, WorkItem } from "../types"
import {
  payUpDashboardPageImage,
  payUpHomepageImage,
  payUpInvoicesPageImage,
  wardrobePalHomepageImage,
  wardrobePalOutfitPageImage,
  wardrobePalWardrobePageImage,
  zenflowBillingPageImage,
  zenflowBoardsPageImage,
  zenflowHomepageImage,
  zenflowTasksPageImage,
} from "./images"

export const works = [
  {
    id: "1",
    title: "Zenflow",
    description: "A comprehensive task manager web application",
    thumbnail: zenflowHomepageImage,
    about:
      "ZenFlow is a task manager web app built with Next.js and a host of modern technologies like Tailwind CSS, Clerk, MYSQL, Drizzle ORM, shadcn/ui, Stripe, Contentlayer, and MailChimp. It offers task creation and management, board view, column addition, task filtering and sorting, user authentication, account settings, dark mode, a blog, analytics, Stripe payment integration, and MailChimp newsletter subscription.",
    images: [
      zenflowHomepageImage,
      zenflowBoardsPageImage,
      zenflowTasksPageImage,
      zenflowBillingPageImage,
    ],
    githubLink: "https://github.com/Raphico/Zenflow",
    liveSiteLink: "https://zenflow.vercel.app",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "shadcn-ui",
      "stripe",
      "clerk",
      "MYSQL",
      "drizzle-orm",
      "contentlayer",
      "mailchimp",
    ],
  },
  {
    id: "2",
    title: "WardrobePal",
    description:
      "A web app for managing clothing inventory and creating virtual outfits",
    thumbnail: wardrobePalHomepageImage,
    about:
      "WardrobePal is a web application that simplifies your wardrobe management. It allows you to keep track of your clothing items and assemble virtual outfits. The application is built using Next.js, Tailwind CSS, Clerk, Convex, and shadcn/ui. Key features include a user-friendly interface for adding, viewing, updating, and deleting clothing items and outfits, as well as tracking the usage of each item. This project demonstrates a practical application of modern web technologies.",
    images: [
      wardrobePalHomepageImage,
      wardrobePalWardrobePageImage,
      wardrobePalOutfitPageImage,
    ],
    githubLink: "https://github.com/Raphico/WardrobePal",
    liveSiteLink: "https://wardrobe-pal.vercel.app",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "convex",
      "clerk",
      "shadcn-ui",
      "konvajs",
    ],
  },
  {
    id: "3",
    title: "PayUp",
    description: "A user-friendly web app for managing invoices",
    thumbnail: payUpHomepageImage,
    about:
      "A user-friendly invoice application built with React.js and Firebase, offering features like invoice management, pagination, filtering, table view for seamless user experience.",
    images: [
      payUpHomepageImage,
      payUpDashboardPageImage,
      payUpInvoicesPageImage,
    ],
    githubLink: "https://github.com/Raphico/PayUp",
    liveSiteLink: "https://pay-up-roan.vercel.app/",
    technologies: [
      "react",
      "typescript",
      "tailwindcss",
      "firebase",
      "radix-ui",
    ],
  },
] satisfies WorkItem[]

export const notes = [
  {
    title: "Curiosity in Problem-Solving",
    content:
      "When faced with a problem, it's essential to first understand why the problem exists before diving into finding a solution. Cultivating curiosity leads to deeper insights and more effective problem-solving approaches.",
  },
  {
    title: "Build for Yourself",
    content:
      "Build stuff that solve problems you are personally having; build stuff that address your needs.",
  },
  {
    title: "Step out of your comfort zone",
    content:
      "Purposely step out of your comfort zone and embrace discomfort. By pushing your boundaries and exploring different perspectives, you can gain valuable insights and develop innovative solutions.",
  },
  {
    title: "Documentations",
    content:
      "Learn how to read and understand documentations, utilizing them effectively and efficiently in your projects.",
  },
  {
    title: "Embrace failure",
    content:
      "Failure is an inevitable part of the learning process. Embrace failure as an opportunity for growth and learning.",
  },
] satisfies Note[]

export const expertise = [
  {
    title: "Frontend Dev",
    description:
      "Development expertise in HTML, CSS, Javascript, Typescript, React, Nextjs, and Astro",
  },
  {
    title: "Backend Dev",
    description:
      "Skilled in building robust server-side applications using PostgreSQL for data storage, along with experience in BAAS, such as Convex",
  },
] satisfies Expertise[]
