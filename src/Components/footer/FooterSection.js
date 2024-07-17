import React from "react";

import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="bg-white text-dark py-3">
      <Container>
        <div className="d-flex justify-content-around align-items-center">
          <h3>Connections</h3>
          <div>
            <FontAwesomeIcon icon={faTwitter} className="mx-2" />

            <FontAwesomeIcon icon={faFacebook} className="mx-2" />

            <FontAwesomeIcon icon={faInstagram} className="mx-2" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
