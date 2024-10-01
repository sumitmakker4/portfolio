import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/AboutSection.module.css"
import { useTheme } from "next-themes"

import BoxlDark from "../../public/images/boxl-logo-dark.svg"
import BoxlLight from "../../public/images/boxl-logo-light.svg"

import Section from "../common/Section"

export default function AboutSection(){
    const {theme} = useTheme()
    return (
        <Section title={"About me"} id="about-section" className={styles.container}>
            <div className={styles["about-description"]} data-aos="fade-up">
                <p>I started my career in Android app development, where I built native mobile applications. Later, I shifted to React Native, focusing on hybrid mobile app development to create cross-platform apps. As I grew in my tech expertise, I transitioned into web development, working with both front-end and back-end technologies to build complete web applications.</p>
                <div className={styles["section-wrapper"]}>
                    <Link href="https://boxl.tech" target="_blank">
                        <Image src={theme === 'light' ? BoxlDark : BoxlLight} alt="" width={340}/>
                    </Link>
                    <p>Currently, I am working as a Junior Web Developer at BOXL Technologies. In this role, I focus on developing dynamic and scalable web solutions, contributing to various projects. This position has helped me further refine my coding skills and gain practical experience in real-world web development projects.</p>
                </div>
            </div>
        </Section>
    )
}