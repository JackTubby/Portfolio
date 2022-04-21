import '../Style Sheets/intro.css'
import gmail from '../images/gmail.png'
import linkedIn from '../images/linkedIn.png'
import twitter from '../images/twitter.png'

export default function SocialIconsBar() {
    return(
        <div>
            <div>
                <img className="intro--socialIcons" src={gmail} alt="gmail icon" />
            </div>
            <div>
                <img className="intro--socialIcons" src={linkedIn} alt="linkedIn icon" />
            </div>
            <div>
                <img className="intro--socialIcons" src={twitter} alt="Twitter Icon" />
            </div>
        </div>
    )
}