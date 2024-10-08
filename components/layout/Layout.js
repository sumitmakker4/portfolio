import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../common/Navbar"))
const Footer = dynamic(() => import("../common/Footer"))

export default function Layout({title, description = "", children, showNavbar = true, showFooter = true}){
    return(
        <>
            <Head>
                <title key={"site-title"}>{title}</title>
                <meta key={"site-desc"} name="description" content={description}/>

                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            {showNavbar && <Navbar/>}
            <main className={`container mx-auto ${showNavbar && "pt-20 lg:pt-18"}`}>
                {children}
            </main>
            {showFooter && <Footer/>}
        </>
    )
}