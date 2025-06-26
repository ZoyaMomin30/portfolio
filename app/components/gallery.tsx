"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "/award1.JPG",
      alt: "Art piece 1",
      title: "EDC Member of the Month",
    },
    {
      src: "/host1.JPG",
      alt: "host image",
      title: "Flagship Event Host",
    },
    {
      src: "/debate.jpg",
      alt: "award",
      title: "Debate Competition Winner",
    },
    {
      src: "/softball.jpg",
      alt: "Award",
      title: "State Level Softball",
    },
    {
      src: "/wdc.jpg",
      alt: "Art piece 4",
      title: "WDC Woman Representative",
    },
  ]

  return (
    <section className="relative py-20">
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
            Extra <span className="text-[#a78bfa]"> Curricular</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From playing softball at states level to winning the debate competition. Extra curricular things have always fascinated me. As a strong believer of "All work and no play makes Jack a dull boy" doing things that spark joy and clear my mind has been the perfect companion to handling academics — a balance I genuinely enjoy.
          </p>
        </div>

      </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
          <motion.div
            key={index}
            className="group overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[2/3]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl text-violet-400 font-semibold ">{image.title}</h3>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

            // <motion.div
            //   key={index}
            //   className="group relative overflow-hidden rounded-lg"
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            //   transition={{ duration: 0.8, delay: index * 0.2 }}
            // >
            //   <div className="relative aspect-[2/3] overflow-hidden">
            //     <img
            //       src={image.src || "/placeholder.svg"}
            //       alt={image.alt}
            //       className="h-full w-full object-cover relative transition-transform duration-500 group-hover:scale-110"
            //     />
            //   </div>

            //   <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            //     <h3 className="text-xl font-semibold text-white">{image.title}</h3>
            //   </div>
            // </motion.div>
