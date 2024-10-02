import dynamic from "next/dynamic"

import Layout from "../components/layout/Layout"
const ContactForm = dynamic(() => import("../components/contact/ContactForm"))

export default function Contact(){
    return(
        <Layout
            title={"Sumit Makker | Contact"}
            description="Contact me if you have a question"
        >
            <ContactForm/>
        </Layout>
    )
}