import logo from '../assets/Frame.png'


function Nav(){
    return(
        <>
        <div className="navbar">
            <img src={logo} alt="" />
        </div>

        <div className="contact">
            <div className="contacthead">
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
        </div>

        <div className="contactInfo">
            <div className="form">
              this is the form section
            </div>
            <div className="img">
                <h1>this is the image section</h1>
            </div>
        </div>
        </>
    )
};

export default Nav