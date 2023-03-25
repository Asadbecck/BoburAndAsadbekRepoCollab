import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const footer_img = require("./img/shop.png")

export default function Footer() {
    const { t } = useTranslation()
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className="footer_h1">{t("text.footer_h1")} </h1>
            </Col>
            <Col xs={12}>
              <p className="footer_p">
                {t("text.footer_p")}
              </p>
            </Col>
            <Col xs={12}>
            <div className='footer_input_box'>
                        <input className='footer_adress' type="text" placeholder="Type your messages.." />
                        <button className="footer_button" >Get Started</button>
                        </div>
            </Col>
           <Col xs={3}>
           <div className="footer_div">
<img src={footer_img} alt="" />
            </div>
           </Col>
           <Col xs={3}>
          <div className="footer_div2">
          <ul className="footer_ul">
                <li>About</li>
                <li>Product</li>
                <li>Service</li>
                <li>Contact</li>


            </ul>
          </div>

           </Col>
          <Col xs={3}>
          <div className="footer_div3">
          <FaFacebookF/>
          <FaTwitter/>
          <FaInstagram/>
          <FaLinkedinIn/>
          </div>
          </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
