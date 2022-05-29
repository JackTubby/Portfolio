import '../nav/navbar.css'

export default function Navbar() {

    function openNav() {
        document.getElementById("mySidenav").style.width = "15%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <button className="closebtn" onClick={closeNav}>&times;</button>
                <div className="nav--btn-wrappers-top">
                <button className="nav--btn">Welcome</button>
                </div>
                <div className="nav--btn-wrappers">
                <button className="nav--btn">Projects</button>
                </div>
                <div className="nav--btn-wrappers">
                <button className="nav--btn">NotSure</button>
                </div>
                <div className="nav--btn-wrappers-btm">
                <button className="nav--btn">Contact</button>
                </div>
            </div>
            <span className="nav--navIcon" onClick={openNav}>&#9776;</span>
        </div>
    )
}