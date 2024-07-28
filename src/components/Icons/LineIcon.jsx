import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Pages/Home/Home.css";

const LineIcon = (props) => {
  return (
    <div className="text-center">
      <h2 className="home-title text-uppercase pt-5 w-100">{props.title}</h2>
      <div className="home-icon d-flex align-items-center gap-3 justify-content-center pt-2 pb-3">
        <div className="line"></div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default LineIcon;
