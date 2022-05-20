import '../Style Sheets/intro.css'
import SocialIconsBar from './SocialIconsBar'

export default function Intro() {
    return(
        <div>
            <p className="tagText">{`<Html/>`}</p>
            <p className="tagText indent-1">{`<body/>`}</p>
            <div className="intro--title">
                <div className="tagText">{`<h1>`}</div>
                <h1 className="intro--h1 headers">
                    <div>Hi,</div> 
                    <div>I'm Jack,</div> 
                    <div>Frontend Developer</div>
                </h1>
                <div className="tagText">{`</h1>`}</div>
                <button className="animated-border-button">Get In Touch</button>
            </div>
            <div className="intro--socialWrapper">
                <SocialIconsBar />
            </div>
        </div>
    )
} 