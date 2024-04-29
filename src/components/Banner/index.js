import BannerImg from "../../images/offers.png";
import "./index.css";

function Banner() {
  return (
    <div className="banner">
      <div>
        <h1>The Biggest Sale is on!</h1>
        <p>
          During this exclusive sale, grab items at top discount
          <br />
          Don't miss the chance
        </p>
        <button>Check now</button>
      </div>
      <img src={BannerImg} alt="Banner for special offers" />
    </div>
  );
}

export default Banner;
