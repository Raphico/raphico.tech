import type { Expertise, Note } from "../types"
import { postgresIcon, reactIcon } from "./images"

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
    icon: reactIcon,
    title: "Frontend Dev",
    description:
      "Development expertise in HTML, CSS, Javascript, Typescript, React, Nextjs, and Astro",
  },
  {
    icon: postgresIcon,
    title: "Backend Dev",
    description:
      "Skilled in building robust server-side applications using PostgreSQL for data storage, along with experience in BAAS, such as Convex",
  },
] satisfies Expertise[]
