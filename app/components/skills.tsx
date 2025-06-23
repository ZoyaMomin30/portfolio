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
      description: ["Python, C++, HTML, CSS, JavaScript, SQL, Git."],
    },
    {
      id: 2,
      title: "Frameworks",
      description: ["Bootstrap, React Native, Node, Express, Flask."],
    },
    {
      id: 3,
      title: "Database",
      description:[ "PostgreSQL, MongoDB, SQLAlchemy."],
    },
    {
      id: 4,
      title: "Tools",
      description:["VS Code, Postman, PgAdmin, Canva, Vercel, Render, GitHub, PyCharm, Cursor, Jupyter Notebook"],
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
            <div className="relative w-[190px] h-[254px] bg-[#171717] rounded shadow-md overflow-hidden card-hover">
              <div className="relative z-10 w-[186px] h-[250px] m-auto p-5 bg-[#171717] rounded text-white flex flex-col justify-center items-center text-center space-y-4">
                <h3 className="font-semibold text-lg">{skill.title}</h3>
                <p className="text-sm text-gray-300">{skill.description}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:animate-spin-slow before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-gradient-to-b before:from-[#ff2288] before:to-[#387ef0] before:w-20 before:h-[360px] before:blur-[70px] before:rounded-full card-before z-0" />
              <div className="absolute inset-0 bg-[#17171733] backdrop-blur-[50px] z-[1]" />
            </div>



          </motion.div>
        ))}

        </div>

        
{/* 
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay:  0.2 }}
          >

        <div className="mt-16 border-t border-gray-800 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Languages", count: "6+" },
              { label: "Frameworks", count: "10+" },
              { label: "Databases", count: "3+" },
              { label: "Tools", count: "15+" },
            ].map((skills, index) => (
              <div key={skills.label} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-[#a78bfa] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {skills.count}
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{skills.label}</div>
              </div>
            ))}
          </div>

      </div>
      </motion.div> */}

    </section>
  )
}
