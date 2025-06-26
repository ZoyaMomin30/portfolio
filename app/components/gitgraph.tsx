"use client"

import GitHubCalendar from "react-github-calendar";
import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function Gitgraph(){

    return(

    <section>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >

            <div className="flex flex-col items-center justify-center py-10 space-y-2 w-full mx-auto">
                <h1 className="text-5xl font-bold text-center max-w-3xl mx-auto pt-20px">My GitHub <span className="text-violet-400">Contributions</span></h1>
                <p className="mt-2 text-lg  max-w-3xl mx-auto text-gray-300">Trying to make my GitHub greener than my diet ever will be. And oh lord am I trying. </p>

                <div className="p-4 bg-black w-full max-w-[900px] shadow-md overflow-auto">
                    <GitHubCalendar username="zoyamomin30" />
                </div>
                </div>

      </motion.div>

    </section>
    )

}