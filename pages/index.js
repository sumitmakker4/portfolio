import dynamic from "next/dynamic"
import { getGithubUserData } from "../lib/fetch"

import Layout from "../components/layout/Layout"
const HeroSection = dynamic(() => import("../components/home/HeroSection"))
const AboutSection = dynamic(() => import("../components/about/AboutSection"))
const GithubCarouselSection = dynamic(() => import("../components/home/GithubCarouselSection"))

export default function Home({githubProjects}) {
  return(
    <Layout 
      title="Sumit Makker"
      description="Hello! im known as Sumit Makker, a student at Binus University who has a passion for Web Development and Web Design. This is my personal website where I put my past projects and designs."
    >
      <HeroSection/>
      <AboutSection/>
      <GithubCarouselSection githubProjects={githubProjects.slice(0,7)}/>
    </Layout>
  )
}

export async function getStaticProps(){
  const githubData = await getGithubUserData()

  return{
    props:{
      githubProjects: githubData
    }
  }
}