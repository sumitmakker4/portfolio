import dynamic from "next/dynamic"
import { getGithubUserData } from "../lib/fetch"

import Layout from "../components/layout/Layout"
const Intro = dynamic(() => import("../components/home/Intro"))
const AboutSection = dynamic(() => import("../components/about/AboutSection"))
const ProjectCarousel = dynamic(() => import("../components/home/ProjectCarousel"))
import projects from "../data/Projects"

export default function Home() {
  return(
    <Layout 
      title="Home - Sumit Makker"
      description="Hello! I'm Sumit Makker. This is my personal website where I put my past projects and blogs."
    >
      <Intro/>
      <AboutSection/>
      <ProjectCarousel projects={projects}/>
    </Layout>
  )
}

export async function getStaticProps(){
  const blogs = await getGithubUserData()

  return{
    props:{
      blogs
    }
  }
}