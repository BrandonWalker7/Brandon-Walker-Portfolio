import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Goal Tracking Website",
    description: "'Attack your goals with Habitack!' Worked with a group of four to develop a goal tracking website built with React and AWS. ",
    image: "/Habitack.png",
    github: "https://github.com/BrandonWalker7/Habitack-REACT",
  },
  {
    name: "Virtual Reality Racing Game",
    description: "Independently built Virtual Reality hover bike racing game in Unity with C#.",
    image: "/VRHoverBike.png",
    github: "https://github.com/BrandonWalker7/VRHoverBike",
  },
  {
    name: "Augmented Reality Chess",
    description:
      "Led team of five students in creating AI chess game with Unity and Firebase.",
    image: "/ARChess.jpg",
    github: "https://github.com/BrandonWalker7/First-Draft-AR-Chess",
  },
  {
    name: "Asteroid Man",
    description:
      "Published 4.9-star 2D Unity mobile space arcade game to iOS and Google Play Store.",
    image: "/AsteroidMan.jpg",
    github: "https://apps.apple.com/us/app/asteroid-man/id1139114378",
  },
  {
    name: "The Falling Lines Game",
    description:
      "Published 5-star 2D Unity mobile arcade game to iOS and Google Play Store.",
    image: "/TheFallingLinesGame.jpg",
    github: "https://apps.apple.com/us/app/the-falling-lines-game/id1040461563",
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
                    <Link href={project.github}>
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
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {/* <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
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
