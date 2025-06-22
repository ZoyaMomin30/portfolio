"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GitHubCalendar from "react-github-calendar";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "digital", "paintings", "sculptures"]

  const works = [
    {
      id: 1,
      title: "Digital Dreamscape",
      category: "digital",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
    },
    {
      id: 2,
      title: "Abstract Harmony",
      category: "paintings",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
    {
      id: 3,
      title: "Metal Flow",
      category: "sculptures",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
    },
    {
      id: 4,
      title: "Neon Nights",
      category: "digital",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
    {
      id: 5,
      title: "Nature's Whisper",
      category: "paintings",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
    },
    {
      id: 6,
      title: "Bronze Echo",
      category: "sculptures",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="bg-black py-20">


      <div className="relative w-[300px] h-[500px] p-3 flex flex-col justify-end gap-3 rounded-lg bg-black text-white cursor-pointer overflow-hidden">

        
        <div className="absolute -inset-[5px] -z-10 rounded-[10px] bg-gradient-to-br from-[#e81cff] to-[#40c9ff] animate-pulse blur-sm"></div>

        
        <img
          src="/habit-tracker"
          alt="habit tracker"
          className="w-full h-[180px] object-cover rounded-md"
        />

        
        <p className="text-[20px] capitalize font-bold">Habit Tracker</p>

        
        <p className="text-sm">
          An UI appealing habit tracker that urges you to do the tasks that you're tracking.
        </p>

        
        <a
          href="https://www.example.com"
          className="text-sm text-blue-400 underline"
        >
          Habit Tracker
        </a>
      </div>

      




      <div className="container mx-auto px-4">
        <h1 className="text-center p-4"> My Projects </h1>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                        <p className="mt-2 text-sm text-gray-300">{work.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}


<div className="flex flex-col items-center justify-center py-10 space-y-6 w-full mx-auto">
  <h1 className="text-2xl font-bold text-center">My GitHub Contributions</h1>
  <p className="mt-2 text-sm text-gray-300">Committed to building daily commits, one contribution at a time.</p>

  <div className="p-4 bg-black w-[900px] shadow-md">
    <GitHubCalendar username="zoyamomin30" />
  </div>
</div>

          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  )
}
