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
      description: "A UI appealing habit tracker that urges you to work.",
      link: "https://habit-tracker-qemq.onrender.com/",
      image:"/habit-main.png"
    },
    {
      id: 2,
      title: "Smart Contract System",
      description: "Blockchain-based contract system.",
      link: "https://habit-tracker-qemq.onrender.com/",
      image:"/document-main.png"
    },
    {
      id: 3,
      title: "Iqra Laser Dies",
      description: "ILD business website and management.",
      link: "https://habit-tracker-qemq.onrender.com/",
  
    },
  ]

  return (
    <section className="relative py-20 bg-black text-white">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative p-[4px] rounded-xl bg-gradient-to-br from-[#e81cff] to-[#40c9ff] w-full max-w-sm mx-auto">
                <div className="bg-black rounded-xl h-[400px] flex flex-col justify-end p-4 text-white">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                           <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                  <p className="text-lg font-bold">{project.title}</p>
                  {project.description && (
                    <p className="text-sm mt-1">{project.description}</p>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#e81cff] font-semibold mt-2 underline"
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
