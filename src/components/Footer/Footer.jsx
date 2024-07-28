import {
  faLinkedinIn,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Footer.module.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      <div className={`${style.footer} w-100 text-center text-white py-5`}>
        <div className="container">
          <div className="row py-4 g-4">
            <div className="col-md-4 p-3 ps-0 ps-0">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 p-3 ps-0">
              <h3>AROUND THE WEB</h3>
              <ul className="d-flex list-unstyled justify-content-center gap-3">
                <li className="rounded-circle border border-1 d-grid">
                  <FontAwesomeIcon
                    className="m-auto footer-icon"
                    icon={faFacebook}
                  />
                </li>
                <li className="rounded-circle border border-1 d-grid">
                  <FontAwesomeIcon
                    className="m-auto footer-icon"
                    icon={faTwitter}
                  />
                </li>
                <li className="rounded-circle border border-1 d-grid">
                  <FontAwesomeIcon
                    className="m-auto footer-icon"
                    icon={faLinkedinIn}
                  />
                </li>
                <li className="rounded-circle border border-1 d-grid">
                  <FontAwesomeIcon
                    className="m-auto footer-icon"
                    icon={faGlobe}
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-4 p-3 pe-0">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${style["second-footer"]} w-100 d-flex justify-content-center align-items-center text-white`}
      >
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
};

export default Footer;
