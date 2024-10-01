import styles from '../../styles/HeroSection.module.css'
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiOutlineArrowDown } from '@react-icons/all-files/ai/AiOutlineArrowDown'
import Typewriter from 'typewriter-effect/dist/core'
import { useEffect } from 'react'
import { ScrollIntoView } from '../../lib/scroll'
import Link from 'next/link'
import Image from 'next/image'

import HeroImage from '../../public/images/hero-image.png'
import Square from '../../public/images/rectangle.png'

export default function Intro(){

    const socials = [
        {url: "https://www.instagram.com/sumit__makker", label: <AiFillInstagram size={24}/>},
        {url: "https://in.linkedin.com/in/sumit-makker", label: <AiFillLinkedin size={24}/>},
        {url: "https://github.com/sumitmakker4", label: <AiFillGithub size={24}/>}
    ]
    const typewriterConfig = {
        autoStart: true,
        loop: true,
        delay: 80,
        deleteSpeed: 50,
    }
    useEffect(() => {
        const typewriter = new Typewriter('#heading-typewriter', typewriterConfig)
        typewriter
            .typeString('Sumit Makker')
            .pauseFor(5000)
            .start()
    })
    return (
        <section className={`${styles.container} py-6 md:py-16`}>
            <div className={styles["hero-content"]}>
                <div className={styles["heading-text"]}>
                    <p>Hello! I'm</p>
                    <div className={styles["heading-name"]}>
                        <h1 id="heading-typewriter"></h1>
                        <h1 id="name-text">Sumit Makker</h1>
                    </div>
                    <p>App & Web Developer</p>
                </div>
                <Link href="https://drive.google.com/file/d/1cODpw-zhF3dpDGRBxN0HlxOI1ywUYUbK/view?usp=sharing" className="btn btn-primary" target="_blank">
                    <p>Get Resume</p>
                </Link>
            </div>
            <div className={styles["social-media-links"]}>
                {socials.map((social, i) => (
                    <div className={`${styles["social-media"]} hover:text-white transition-colors duration-300`} key={i}>
                        <Link href={social.url} aria-label={social.label} target="_blank">
                            {social.label}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="relative px-4 sm:px-0">
                <Image src={HeroImage} width={400} height={400} priority alt="Main Image" className="relative animate-float"/>
                <Image src={Square} width={360} height={360} priority className="-z-10 absolute rotate-12 top-0 right-2 animate-rotate scale-75" alt=""/>
            </div>
            <div className={styles["arrow-btn"]}>
                <button className='cursor-pointer hover:text-white transition-colors duration-300' onClick={() => ScrollIntoView({id: 'about-section', block: 'center'})}>
                    <AiOutlineArrowDown size={24}/>
                </button>
            </div>
        </section>
    )
}