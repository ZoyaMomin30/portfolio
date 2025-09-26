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
                                    src="/face-image.JPEG"
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
                                Since you've stumbled upon this little corner of the internet, let's make it worth your while.
                                I'm Zoya Momin — part Full Stack Developer, part Data Science & Machine Learning enthusiast, and full-time idea-to-reality wizard. <br /> I don't just code — I create. Ever since I made my first project, I knew I'd found my favourite potion.<br />
                                And while I enjoy building apps and solving data puzzles, I also love collaborating with people, leading with purpose, and showing up with sincerity (and maybe snacks). 🍪
                                Whether it's solving a problem solo or vibing with a team to get things done. I enjoy the process, always. 
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{ margin: "30px 0", display:"flex", alignSelf:"center", alignItems:"center" }}
                                >
                                <a id="resume-button" href="/Zoya_BE_copy.pdf" download>
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
