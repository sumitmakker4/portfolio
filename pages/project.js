import dynamic from "next/dynamic"

import styles from '../styles/project/Project.module.css'
import Layout from "../components/layout/Layout"
import { getGithubUserData, getProjectCategories } from "../lib/fetch"
import Projects from '../components/project/Projects'
import {projects,categories} from '../data/data'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ProjectCard from "../components/project/ProjectCard"

export default function Github() {
    return(
      <Layout title={"Sumit Makker | Projects"}>
          <Tabs className="w-full">
                <TabList>
                    {categories.map(category => (
                        <Tab className="react-tabs__tab text-sm md:text-base" key={category}>{category}</Tab>
                    ))}
                </TabList>
                {categories.map(category => (
                    <TabPanel className={styles["github-projects"]} key={category}>
                        {category === "All" ? 
                        projects.map(project => (
                                <ProjectCard project={project} key={project.id}/>
                            )
                        )
                        :
                        projects.filter(project => project.category.includes(category))
                            .map(project => (
                                <ProjectCard project={project} key={project.id}/>
                            )
                        )}
                    </TabPanel>
                ))}
            </Tabs>
          
      </Layout>
    )
}

export async function getStaticProps(){
    const githubData = await getGithubUserData()
    const categories = await getProjectCategories()
  
    return{
      props:{
        projects: githubData,
        categories: categories
      }
    }
  }