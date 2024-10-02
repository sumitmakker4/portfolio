import dynamic from "next/dynamic"
import { skills } from "../data/data"

import Layout from "../components/layout/Layout"
const AboutSection = dynamic(() => import("../components/about/AboutSection"))
const SkillSection = dynamic(() => import("../components/about/SkillSection"))

export default function About() {
    return(
        <Layout title={"Sumit Makker | About Me"}>
            <AboutSection/>
            <SkillSection skills={skills}/>
        </Layout>
    )
}