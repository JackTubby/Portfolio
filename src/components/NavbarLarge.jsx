import '../Style Sheets/nav.css'

export default function NavbarLarge() {
    return (
        <nav>
            <div className="navlrg--wrapper">
                <button className="navlrg--btn">Intro</button>
                <button className="navlrg--btn">About me</button>
                <button className="navlrg--btn">My Projects</button>
                <button className="navlrg--btn">Contact me</button>
            </div>
        </nav>
    )
}