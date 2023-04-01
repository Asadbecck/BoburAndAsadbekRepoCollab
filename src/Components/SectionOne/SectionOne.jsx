import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./SectionOne.css";
import { useTranslation } from "react-i18next";
import Okey from '.././img/Vector (Stroke).svg'
const bexa = require("../img/bexa.png")


const imgSofa = require("./Images/04 1.png");
const cart = require("./Images/Group.png");

const SectionOne = () => {
  const { t } = useTranslation();

  return (
    <>
    <Container>
      <Row className="justify-content-around mt-5">
        <Col xs={3}>
          <div className="sofa">
            <img className="imgSofa" src={imgSofa} alt="" />

            <div class="bubble">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="bubble">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="bubble">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="bubble">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="bubble">
              <div className="small">
                <img src={cart} alt="" />
              </div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </Col>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="bubble">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Col xs={5}>
          <Button className="btn btn-danger our">{t("text.our")}</Button>
          <br />
          <br />
          <div className="big">
            <h1 className="why">  {t("text.why")}</h1>

            <h4 className="seo d-flex"> <div id='img-50'>
              <img
                src={Okey}
                alt="" />
            </div>
              {t("text.seo")}
            </h4>
            <br />
            <p className="simply">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry.
            </p>
            <h4 className="seo1 d-flex">
              <div id='img-50'>
                <img src={Okey} alt="" />
              </div>
              {t("text.fast")}</h4>
            <br />
            <p className="simply">{t("text.it")}</p>
            <h4 className="seo1 d-flex">
              <div id='img-50'>
                <img src={Okey} alt="" />
              </div>
              {t("text.seo")}</h4>
            <br />
            <p className="simply">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="mt-5">
        <Col xs={5}>
          <Button className="bexabut">CREATIVE PROCESS</Button>
          <h1 className="bexahbir">Know your ads inside & out-perform</h1>
          <p className="bexaptag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </Col>
          <Col xs={6} className="bexbak">
            <img src={bexa} className="bexpnimg" alt=""/>
          </Col>
      </Row>
    </Container>
      
      </>
  );
};

export default SectionOne;
