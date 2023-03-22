import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section.css'
import sectionImg from './image/03 1.svg'
// import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

export default function Section() {
    const { t } = useTranslation()


    return (
        <>
            <Container>
                <div><br /><br /><br /><br /></div>
                <Row className='mt-5'>
                    <Col xs={6}>
                        <img src={sectionImg} alt=""  id='Img_section'/>
                    </Col>
                    <Col xs={6}>
                        <div id='section-box'>
                            <div id='safity_box_two'>{t("text.guarant")}</div>
                            <h1 id='build'>{t("text.build")}</h1>
                            <div id='products_sale_box'>

                                <div id="products_one">
                                    <h1 id='number'>5660</h1>
                                    <p id='products'>{t("text.products")}</p>
                                </div>
                                    <div id='left-border'></div>
                                <div id='products_two'>
                                    <h1 id="four_millions">4M+</h1>
                                    <p>{t("text.downloads")}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

        </>
    )
}
