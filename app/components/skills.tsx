"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    {
      id: 1,
      title: "Languages",
      description: ["Python", "C++", "HTML", "CSS", "JavaScript", "SQL", "Git"],
    },
    {
      id: 2,
      title: "Frameworks",
      description: ["Bootstrap", "React Native"," Node", "Express", "Flask."],
    },
    {
      id: 3,
      title: "Database",
      description:[ "PostgreSQL", "MongoDB", "SQLAlchemy."],
    },
    {
      id: 4,
      title: "Tools",
      description:["VS Code", "Postman", "PgAdmin", "Canva", "Vercel", "Render", "GitHub", "PyCharm", "Cursor", "Jupyter Notebook"],
    },
  ]

  return (
    <section className="py-20 bg-black text-white">

        
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &<span className="text-[#a78bfa]"> Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I work with
          </p>
        </div>

      </motion.div>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="group relative flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >

            <div className="relative w-[400px] h-[300px] rounded-md shadow-lg overflow-hidden group">
              {/* Spinning Glow Border */}
              <div className="absolute border border-w-4px " />

              {/* Backdrop */}
              <div className="absolute inset-0 bg-[#171717] backdrop-blur-[30px] z-[1]" />

              {/* Content Box */}
              <div className="relative z-10 w-full h-full p-4 bg-black border border-violet-400 rounded-md flex flex-col justify-center items-center text-center space-y-4 ">
                <h3 className="font-semibold text-lg text-violet-400 ">{skill.title}</h3>

                <div className="flex flex-wrap justify-center gap-2 ">
                  {skill.description?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#1f1f1f] border border-violet-400 text-sm px-2 py-1 text-gray-300 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        ))}
        </div>

        
    </section>
  )
}
