export default function Intro() {
    return(
        <div>
            <p className="intro--tagText">{`<Html/>`}</p>
            <p className="intro--tagText indent-1">{`<body/>`}</p>
            <div className="intro--title">
                <div className="intro--tagText">{`<h1>`}</div>
                <h1 className="intro--h1">
                    <div>Hi,</div> 
                    <div>I'm Jack,</div> 
                    <div>Frontend Developer</div>
                </h1>
                <div className="intro--tagText">{`</h1>`}</div>
                <button class="animated-border-button">Get In Touch</button>
            </div>
        </div>
    )
} 