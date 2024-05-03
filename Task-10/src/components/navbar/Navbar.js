import "./navbar.scss";


const Navbar=()=>{
    return(
        <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="logo"/>
            <span>lamaadmin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon"/>
            <img src="/app.svg" alt="" className="icon"/>
            <img src="/expand.svg" alt="" className="icon"/>
            <div className="notification">
                <img src="/notifications.svg" alt=""/>
                <span>1</span>
            </div>
            <div className="user">
                <img src="IMG_20240316_195435 (1).jpg" alt=""/>
                <span> hamada </span>
            </div>
            <img src="settings.svg" alt="" className="icon"/>
        </div>
        </div>
    )
}

export default Navbar;