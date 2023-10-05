import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Link } from "react-router-dom";

import pluseight from "../assets/images/18+.png";

function RestrictionModal({ onEnterButtonClick }) {
  // modale 2

  const [show2, setShow2] = useState(true);
  const handleClose2 = () => setShow2(true);

  const handleEnterButtonClicked = () => {
    onEnterButtonClick();
  };
  const mybtnstyle = {
    position: "relative",
    top: 0,
    left: 0,
    margin: "auto",
    right: 0,
    display: "flex",
  };

  return (
    <div>
      <Modal
        className="Feedbackmodal Contactmodal show"
        show={show2}
        onHide={handleClose2}
      >
        <Modal.Header>
          <Modal.Title>
            <img style={{ paddingTop: "30px" }} src={pluseight} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="restriction">
            <h1>Age Restricted Content</h1>
            <p>You must be 18+</p>
            <button
              className="buynow mt-2 btn enter-site-btn px-4"
              style={mybtnstyle}
              onClick={handleEnterButtonClicked}
            >
              Enter Site
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RestrictionModal;
