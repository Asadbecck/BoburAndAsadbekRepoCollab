import React, { useState } from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import './Header.css'
import Logo from '../img/Group.svg'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import kubik from '../img/Rectangle 29.svg'
import email from '../img/Email.svg'
import { motion } from 'framer-motion'
import Okey from '../img/Vector (Stroke).svg'
import person from '../img/a 1.svg'
import polygon from '../img/Polygon 1.svg'
import girl from '../img/02 1.svg'
import turn from '../img/Vector (1).svg'
import yellowLight from '../img/Ellipse 5.png'
import blueLight from '../img/Ellipse 5 (1).png'
import panel from '../img/miniPanel.svg'



export default function Header() {
    const { t } = useTranslation()

    const handleClick = (value) => {
        i18next.changeLanguage(value)
    }

    const [rotate, setRotate] = useState(false)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <h1>{t("text.text-paraghrap")}</h1>

                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto m-5">
                        <Nav.Link href="#features" style={{ color: "white" }}>{t("text.about")}</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: "white" }}>{t("text.product")}</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: "white" }}>{t("text.service")}</Nav.Link>
                            <Nav.Link href="#pricing" style={{ color: "white" }}>{t("text.contact")}</Nav.Link>

                            <NavDropdown title={t("text.choose")} style={{ color: "white" }} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" onClick={() => handleClick("ru")}>Russian</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" onClick={() => handleClick("uzb")}>
                                    Uzbek
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" onClick={() => handleClick("eng")}>English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <button id='signIn'>{t("text.sign")}</button>
                                <button id='Try-free'>{t("text.try")}</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={6}>
                        <div id='mt-div'>
                            <motion.div
                                animate={{ rotate: rotate ? 10 : 0 }}
                                onMouseMove={() => {
                                    setRotate(!rotate);
                                }}
                            >
                                <img src={kubik}
                                    id='cube'
                                    alt=""
                                />
                            </motion.div>


                            <div id='safity_box'>{t("text.guarant")}</div>

                        </div>
                        <h1 id='power-text'>
                            {t("text.power")}
                        </h1>
                        <p id='info-text'>{t("text.more")}</p>

                        <div id='input-box'>
                        <input id='email-adress' type="text" placeholder={t("text.email")}/>
                        <p id='inp-text'> <img src={email} alt="" /> </p>
                        <button id='inp-btn'>{t("text.sign")}</button>
                        </div>
                        <div className='check-box'>
                                <div className='child-box'>
                                    <div id='img-50'>
                                        <img src={Okey} alt="" />
                                    </div>
                                    <p className='days'>
                                        {t("text.days")}
                                    </p>
                                </div>  
                                <div className='child-box'>
                                <div id='img-50'>
                                        <img src={Okey} alt="" />
                                    </div>
                                    <p className='days'>
                                        {t("text.card")}
                                      </p>
                                </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div id='images-parent-box'>
                                <img src={person} alt="" id='img-person' />
                                <img src={polygon} alt="" id='polygon' />

                                <img src={blueLight} alt="" id='blueLight'/>

                                <div id='progress-box'>
                                    <div className='df-progress'>
                                <img src={panel} alt="" id='panel'/>  
                                <h5 id='progress'>{t("text.progress")}</h5>
                                <h6 id='plans'>{t("text.plans")}</h6>
                                <button id='buy-plans'>{t("text.buy")}</button>
                                    </div>
                                </div>

                                <div id='margaret-box'>
                                    <div id='back-fon'>
                                        <img src={girl} alt="" id='girl-img' />
                                    </div>
                                    <h4 id='name-girl'>{t("text.name")}</h4>
                                    <h5 id='watch-text'>{t("text.watch")}</h5>

                                    <button id='margaret-btn'><img src={turn} alt="" /></button>
                                    <img src={yellowLight} alt="" id='yellowLight' />

                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>



        </>
    )
}
