import styles from "../../styles/GithubCarouselSection.module.css"
import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Link from "next/link";

import Section from "../common/Section";
import ImageWithFallback from "../common/ImageWithFallback";

import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft"
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { IoBrowsersOutline } from "@react-icons/all-files/io5/IoBrowsersOutline";
import { formatDate } from "../../lib/date";

const glideConfig = {
    type: "carousel",
    perView: 1,
    startAt: 0,
    swipeThreshold: 50,
    dragThreshold: false,
    throttle: 25,
    autoplay: 5000,
    focusAt: "center",
    gap: 16,
    hoverpause: true,
};

export default function ProjectCarousel({projects}){

    return (
        <Section title="Latest Projects" className={`${styles["container"]} pb-8 md:pb-12`}>

            <div className="splide-wrapper pb-12">
                <div className="splide">
                    <Splide 
                        options={{
                            type: "carousel",
                            perView: 1,
                            startAt: 0,
                            swipeThreshold: 50,
                            dragThreshold: false,
                            throttle: 25,
                            autoplay: 5000,
                            focusAt: "center",
                            gap: 16,
                            hoverpause: true,
                        }}
                        renderControls={() => (
                            <>
                                <button className="splide__arrow splide__arrow--left splide__arrow--prev">
                                    <AiOutlineArrowLeft className="text-black dark:text-white"/>
                                </button>
                                <button className="splide__arrow splide__arrow--right splide__arrow--next">
                                    <AiOutlineArrowRight className="text-black dark:text-white"/>
                                </button>
                            </>
                        )}
                    >
                        
                        {
                            projects.map((project,index) => (
                                <SplideSlide alt={`project-${index}`}>
                                    <li className="splide__slide" key={project.id}>
                                        <ImageWithFallback
                                            src={project.images[0]}
                                            fallbackSrc={`https://raw.githubusercontent.com/ervin-sungkono/web-assets/master/images/no-image.png`}
                                            fill
                                            style={{objectFit: 'cover'}}
                                            alt=""
                                        />
                                        <div className="overlay p-3 absolute left-0 w-full bg-black/50 backdrop-blur-md">
                                            <div className="flex justify-between mb-2">
                                                <div className="flex flex-col">
                                                    <h2 className="text-white text-base md:text-lg mb-1">{project.title}</h2>
                                                    <p className="text-white text-xs md:text-sm font-normal">{formatDate(new Date(project.createdAt))}</p>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    {project.url ? 
                                                        <Link href={project.url} className="text-white" target={"_blank"} aria-label={`${project.title} Website Link`}>
                                                            <IoBrowsersOutline size={20}/>
                                                        </Link> 
                                                        : 
                                                        ""
                                                    }
                                                    {/* <Link href={project.html_url} className="text-white" target={"_blank"} aria-label={`${project.name} Github Link`}>
                                                        <AiFillGithub size={20}/>
                                                    </Link> */}
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.topics.slice(0,3).map((topic, index) => (
                                                    <span className="text-xs md:text-sm text-white rounded-full px-2 py-1 border border-white hover:bg-white hover:text-black transition-colors duration-200" key={index}>{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                </SplideSlide>
                            ))
                        }

                    </Splide> 
                </div>
            </div>

            <div className="mt-6" data-aos="fade-up">
                <Link href={"/project"} className="btn btn-primary">More Projects</Link>
            </div>
        </Section>
    )
}