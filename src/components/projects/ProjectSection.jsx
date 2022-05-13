import ProjectCard from "./ProjectCards"

import data from './projectsData'


export default function ProjectSection(){


    const projects = data.map(project => {
        return (
            <ProjectCard
                key={project.id}
                {...project}
            />
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    {projects}
                </div>
            </div>
        </div>
    )
}