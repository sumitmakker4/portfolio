import styles from "../../styles/ProjectSection.module.css"
import { useEffect, useRef } from "react";
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import {Card} from '../../lib/cardHover'
import Link from "next/link";

export default function Projects({title,projects}){

    useEffect(() => {
        const cards = document.querySelectorAll(`.${styles.shot}`)
        cards.forEach(card => new Card(card, 3/4))
    })
    return (
        <Section title={title} className={`${styles["container"]} py-8 md:py-12`}>
            <div className={styles["projects"]}>
                {projects.map(project => (
                    <div className={styles.shot} key={project.id} data-aos="fade-up">
                        <ProjectCard project={project}/>
                    </div>
                ))}
            </div>

            <div className="mt-16" data-aos="fade-up">
                <Link href={"/project"} className="btn btn-primary">More Projects</Link>
            </div>

        </Section>
    )
}