import dynamic from "next/dynamic"

import Layout from "../components/layout/Layout"
import { getGithubUserData, getProjectCategories } from "../lib/fetch"
import Projects from '../components/project/Projects'
import {projects} from '../data/data'

export default function Github({githubProjects, categories}) {
    return(
      <Layout title={"Sumit Makker | Projects"}>
          <Projects title={'Latest Projects'} projects={projects}/>
      </Layout>
    )
}

export async function getStaticProps(){
    const githubData = await getGithubUserData()
    const categories = await getProjectCategories()
  
    return{
      props:{
        githubProjects: githubData,
        categories: categories
      }
    }
  }