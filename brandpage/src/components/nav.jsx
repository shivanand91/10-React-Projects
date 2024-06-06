import logo from "../assets/brand_logo.png";

function Nav(){
    return(
        <>      
        <div>
            <div className="nav">
                <img src={logo} alt="logo" />
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                   
                </ul>

                <button className="login">login</button>
            </div>
        </div>
        </>
    );
}

export default Nav