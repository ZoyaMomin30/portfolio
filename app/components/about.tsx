"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
// import '@/styles/about.css'
import './../about.css'
import Faceimage from "../../public/image-face.jpg"


export default function About() {
    return (
        <div>
            <div style={{ display:"block", padding:"55px"}}>

                    <div className="container text-center">
                        <div className="row">

                            <div className="col-sm-4">
                    
                                <motion.img
                                    className="face-image col-sm-4"
                                    src="/image-face.jpg"
                                    alt="Zoya"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    
                                />
                            </div>

                        <div className="col-sm-8">
                                <motion.p
                                    id="para-text"
                                    className="text-lightest-violet text-xl font-sans"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{ margin: "10 auto", color: "#c4b5fd", fontFamily: "sans", textAlign:"justify" }}
                                >
                                    Hello this is Zoya Momin. I love to create. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Beatae dolores pariatur nihil reprehenderit, nobis
                                    quisquam facilis facere quia quibusdam. Error, perferendis officia dignissimos
                                    vitae nesciunt laborum minima officiis similique molestiae? Eveniet debitis est
                                    laboriosam explicabo. Ab dolor pariatur in alias ratione temporibus, quia enim,
                                    culpa porro nemo accusantium dolores nulla, atque inventore?
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{ margin: "30px 0", display:"flex", alignSelf:"center", alignItems:"center" }}
                                >
                                <a id="resume-button" href="/zoyaResume57.pdf" download>
                                <button className="button"  style={{display:"flex", alignSelf:"center", alignItems:"center"}}>
                                    <span>Resume</span>
                                </button>
                                </a>
                            </motion.div>

                        </div>
                        </div>

                    </div>  
            </div>

        </div>

    )

}
