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
                <img className="face-image" src="/image-face.jpg" />
                <div className="about-para"></div>
                <p id="para-text">Hello this is Zoya Momin i love to create. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolores pariatur nihil reprehenderit, nobis quisquam facilis facere quia quibusdam. Error, perferendis officia dignissimos vitae nesciunt laborum minima officiis similique molestiae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet debitis est laboriosam explicabo. Ab dolor pariatur in alias ratione temporibus, quia enim, culpa porro nemo accusantium dolores nulla, atque inventore?</p>
            </div>

            <a id="resume-button" href="/zoyaResume57.pdf" download>
                <button className="button">
                    <span> Resume </span>
                </button>
            </a>
        </div>
    )
}
