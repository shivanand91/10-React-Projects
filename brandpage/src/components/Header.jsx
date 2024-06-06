import shoe from "../assets/shoe_image.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";

function Header() {
  return (
    <>
      <div className="headerSection">
        <div className="contentSection">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <div className="description">
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>

          <div className="available">
            <p className="availOn">Also Available On</p>
            <div className="plateform">
              <img src={flipkart} alt="flipkart" />
              <img src={amazon} alt="amazon" />
            </div>

            <div className="buttons">
              <button className="login">Shop Now</button>
              <button className="category">Category</button>
            </div>
          </div>
        </div>

        <div className="imgSec">
          <img src={shoe} className="shoesImg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
