import '../../Style Sheets/projects.css'

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
        <div>
            <div className='header-wrapper project--Titlewrapper'>
                <div className="tagText">{`<h1>`}</div>
                    <h1 className="headers">My Projects.</h1>
                <div className="tagText">{`<h1>`}</div>
                <div className='tagText'>{`<p>`}</div>
                    <p className='headers--p'>
                        Check out a couple of my personal favourite projects that I 
                        worked on. Visit all my projects by clicking 'See More'.
                    </p>
                <div className='tagText'>{`</p>`}</div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        {projects}
                    </div>
                </div>
            </div>
        </div>
    )
}