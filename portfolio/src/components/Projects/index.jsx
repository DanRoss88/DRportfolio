import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "First Aide",
        src: "speech-recognition.gif",
        link: "https://github.com/danross88/first-aide-client",
        description: "First Aide is an AI-powered personal health assistant that utilizes speech recognition and Open AI to provide medical-related advice. It also keeps track of personal medical records. This was a collaborative effort for my final project at Lighthouse Labs."
    },
    {
        title: "Photolabs",
        src: "photo-lab.png",
        link: "https://github.com/DanRoss88/photolabs-project",
        description: "PhotoLabs is a full-stack web application that allows users to upload photos, categorize them into topics and store their favorites. It was built using React and Node.js. It was my first introduction to React."
    },
    {
        title: "Tweeter",
        src: "Tweeter!.png",
        link: "https://github.com/DanRoss88/tweeter",
        description: "Tweeter is a simple, single-page Twitter clone. I took this project on to learn more about front-end development and to practice my HTML, CSS, JS, jQuery, and AJAX front-end skills. I customized the design to my liking and added a few features of my own."
    },
    {
        title: "Cover Letter",
        src: "miniques_lagoon.jpg",
        link: "#",
        description: "An interactive cover letter designed in NextJs to showcase my skills and experience. I wanted to create something that was more than just a PDF. I wanted to create something that would stand out and be memorable."
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                  <Link href={`${projects[selectedProject].link}`}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        // fill={true}
                        style={{objectFit: "cover"}}
                        height={500}
                        width={500}
                        alt="project image"
                        priority={true}
                    /></Link>
                </div>
               
                <div className={styles.column}>
                    <p>{`${projects[selectedProject].description}`}</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
