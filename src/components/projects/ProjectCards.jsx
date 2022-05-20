import '../../Style Sheets/projects.css'
import purity from '../../images/purity.png'

import html from './projectLanguageIcons/html.png'
import css from './projectLanguageIcons/css.png'
import js from './projectLanguageIcons/js.png'
import react from './projectLanguageIcons/react.png'

export default function ProjectCards(props) {
    return (
        <div className='card--wrapper'>
            <img className='card--logo' src={purity} alt="Project Logo" />
            <div className='card--body'>
                <h3 className='card--text card--title pt-2'>{props.name}</h3>
                <p className='card--text pt-4'>{props.info}</p>
                <div className='card--text pt-2'>
                    <span><img className='card--icons' src={html} alt="project languages icons" /></span>
                    <span><img className='card--icons' src={css} alt="project languages icons" /></span>
                    <span><img className='card--icons' src={js} alt="project languages icons" /></span>
                    <span><img className='card--icons' src={react} alt="project languages icons" /></span>
                </div>
                <div className='card--text pt-3'>
                    {/* MESSAGE BTN <span><button className='card--btn card--message'>Message</button></span> */}
                    <span><button className='card--btn card--github'>Visit</button></span>
                </div>
            </div>
        </div>
    )
}