import Link from "next/link"
import ImageWithFallback from "../common/ImageWithFallback"

export default function ProjectCard({project}){
    return(
        <Link href={project.url} target="_blank" className="group">
            <ImageWithFallback
                src={project.images[0]}
                fallbackSrc={`https://raw.githubusercontent.com/ervin-sungkono/web-assets/master/images/no-image.png`}
                fill
                alt={project.title}
                className="group-hover:scale-[1.15] transition-transform duration-700 ease-in-out"
            />
            <div className="project-overlay bg-black/[0.6] dark:bg-white/[0.7]">
                <h3>{project.title}</h3>
            </div>
        </Link>
    )
}