"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"


export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      id: 1,
      title: "Habit Tracker",
      description: "A visually appealing habit tracker designed to boost productivity and consistency. It features a user-friendly interface and uses APIs to track your daily habits efficiently. To keep you motivated, it also fetches and displays a new inspirational quote each day.",
      techstack:["Flask", "HTML", "CSS", "SQLAlchemy"],
      link: "https://habit-tracker-qemq.onrender.com/",
      image:"/habit-main.png"
    },
    {
      id: 2,
      title: "Smart Contract System",
      description: "An application for decentralised document storage providing a quick access to all the documents so none of them are lost.Provides a hassle free storage and contains history of all the documents. users permissions based on their assigned roles within a system or organisation",
      techstack:["React Native", "Expo", "Firebase"],
      link: "https://github.com/ZoyaMomin30/DocManager",
      image:"/document-main.png"
    },
    {
      id: 3,
      title: "Iqra Laser Dies",
      description: "A business website for Die Maker and Laser Die Cutting and Auto Bending Machine company. ",
      techstack:["Next.js", "Node.js"],
      link: "https://github.com/ZoyaMomin30/ild",
      image:"/ild-main.png"
    },
    // {
    //   id: 4,
    //   title: "Code Snippet Storage",
    //   description: "A project that stores your code snippet for you. ",
    //   techstack:["Next.js", "Node.js"],
    //   link: "https://habit-tracker-qemq.onrender.com/",
    //   image:"/ild-main.png"
    // },
  ]

  return (
    <section className="relative py-20 bg-black text-white">
      <div ref={ref} className="container mx-auto px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects &<span className="text-[#a78bfa]"> Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            These are the projects and experiences I've had the joy of building. I've had a great time building these and picked up a ton of lessons along the journey — from late-night debugging to those little “aha!” moments.
          </p>
        </div>

      </motion.div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-[#e81cff] to-[#40c9ff] w-full max-w-sm mx-auto">
                <div className="bg-black rounded-xl flex flex-col justify-end p-3 text-white">

                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center ">
                           <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                  <p className="text-lg font-bold text-center">{project.title}</p>
                  {project.description && (
                    <p className="text-sm mt-1 text-justify">{project.description}</p>
                  )}

                  {project.techstack && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techstack.map((tech, i) =>(
                        <span
                          key={i}
                          className="bg-[#1f1f1f] border border-[#444] text-sm px-2 py-1 rounded-md text-gray-200"
                        >
                          {tech}
                        </span>
                      )
                      )}
                    </div>
                  )

                  }

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-center text-[#e81cff] font-semibold mt-2 underline"
                    >
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

// from-[#e81cff] to-[#40c9ff]
// from-[#c4b5fd] to-[#1e1b4b]