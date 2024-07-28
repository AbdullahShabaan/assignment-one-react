import LineIcon from "../../Icons/LineIcon";
import "./Portfolio.css";
import poert1 from "../../../assets/poert1.png";
import poert2 from "../../../assets/port2.png";
import poert3 from "../../../assets/port3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import Title from "../../Title/Title";
const Portfolio = () => {
  const [modalState, setModalState] = useState(false);
  const [imageModal, setImageModal] = useState(null);

  return (
    <>
      <Title title="Portfolio" />
      <div className="portfolio text-danger">
        <LineIcon title="portfolio component" />
        <div className="container">
          <div className="portfolio-content row g-5 pb-5">
            <div
              className="col-md-4"
              onClick={() => {
                setModalState(true);
                setImageModal(poert1);
              }}
            >
              <div className="photo rounded-2 overflow-hidden position-relative">
                <div className="plus-icon position-absolute text-white top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-plus-icon"
                  ></FontAwesomeIcon>
                </div>
                <img src={poert1} className="w-100" alt="poert1" />
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                setModalState(true);
                setImageModal(poert2);
              }}
            >
              <div className="photo rounded-2 overflow-hidden position-relative">
                <div className="plus-icon position-absolute text-white top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-plus-icon"
                  ></FontAwesomeIcon>
                </div>
                <img src={poert2} className="w-100" alt="poert2" />
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                setModalState(true);
                setImageModal(poert3);
              }}
            >
              <div className="photo rounded-2 overflow-hidden position-relative">
                <div className="plus-icon position-absolute text-white top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-plus-icon"
                  ></FontAwesomeIcon>
                </div>
                <img src={poert3} className="w-100" alt="poert3" />
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                setModalState(true);
                setImageModal(poert1);
              }}
            >
              <div className="photo rounded-2 overflow-hidden position-relative">
                <div className="plus-icon position-absolute text-white top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-plus-icon"
                  ></FontAwesomeIcon>
                </div>
                <img src={poert1} className="w-100" alt="poert1" />
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                setModalState(true);
                setImageModal(poert2);
              }}
            >
              <div className="photo rounded-2 overflow-hidden position-relative">
                <div className="plus-icon position-absolute text-white top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-plus-icon"
                  ></FontAwesomeIcon>
                </div>
                <img src={poert2} className="w-100" alt="poert2" />
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                setModalState(true);
                setImageModal(poert3);
              }}
            >
              <div className="photo rounded-2 overflow-hidden position-relative">
                <div className="plus-icon position-absolute text-white top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-plus-icon"
                  ></FontAwesomeIcon>
                </div>
                <img src={poert3} className="w-100" alt="poert3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalState && (
        <Modal>
          <div
            className="overlay"
            onClick={() => {
              setModalState(false);
              setImageModal(null);
            }}
          ></div>
          <img
            className="modal-portfolio position-absolute top-50 start-50 translate-middle"
            src={imageModal}
            alt=" "
          />
        </Modal>
      )}
    </>
  );
};

export default Portfolio;
