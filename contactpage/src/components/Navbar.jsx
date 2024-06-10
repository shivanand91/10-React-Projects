import logo from "../assets/Frame.png";
import contImg from "../assets/Service 24_7-pana.svg";
import Message from "../assets/Vector.png";

function Nav() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" />
      </div>

      <div className="contact">
        <div className="contacthead">
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>

        <div className="contactInfo">
          <div className="form">
            <div className="anotherOptions">
              <button className="others">
                <img src={Message} alt="" />
                SUPPORT CHAT
              </button>
              <button className="others">
                <img src={Message} alt="" />
                CALL NOW
              </button>
            </div>
            <div className="emailOption">
              <button className="email">
                <img src={Message} alt="" />
                EMAIL FORM
              </button>
            </div>

            <div className="formInfo">
              <form action="submit" className="submit">
                <label>Name:</label>
                <input type="text" />
                <label>Email:</label>
                <input type="text" />
                <label>Message: </label>
                <textarea type="text" />
                <button className="submitbtn">Submit</button>
              </form>
            </div>
          </div>
          <div className="img">
            <img src={contImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
