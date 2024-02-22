import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Notes Making Web App",
    description:
      "notes making app is a to do list app that built using the html, css and js.",
    image: "/notes.png",
    // github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://shivanshu-tech.github.io/notes-making-app/",
  },
  {
    name: "Crypto Currency Web App",
    description: "web application listing all available cryptocurrencies along with their current market prices.",
    image: "/crypto.png",
    
    link: "https://virtual-currency.netlify.app/",
  },
  {
    name: "Password Generator Web App",
    description:
    "that generates random passwords with a mix of lowercase letters, uppercase letters, numbers, and special characters upon button click.",
    image: "/PasswordGen.jpg",
    
    link: "https://my1stproj.netlify.app/",
  },
  {
    name: "Flexi-Gym Web App",
    description:
    "Seamlessly discover exercises with React JS & Rapid API, curated with tailored workout videos. Need a personal trainer? Fill out our form for a perfect match! 💪🚀",
    image: "/gym.png",
    link: "https://flexigym.netlify.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
