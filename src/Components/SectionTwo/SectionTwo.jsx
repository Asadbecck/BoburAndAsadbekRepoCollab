import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './SectionTwo.css'
import logoOne from './image/Grow your traffic.svg'
import logoTwo from './image/Content for sales.svg'
import logoThree from './image/Group.png'
import logoFour from './image/Vector (12).png'

export default function SectionTwo() {
    const { t } = useTranslation()

  return (

    <>
    <Container>
        <Row className='mt-5'>
        <Col xs={6}>
        <div id='safity_box_three'>{t("text.weDo")}</div>
        <h1 id='creative'>{t("text.creative")}</h1>
        <p id='motto'>{t("text.motto")}</p>
        </Col>
        <Col xs={6}>
            <div id='card-box'>
                
            <div id='first-card' > 
            <br/>
                <div id='Logo-box'>
                <img src={logoOne} alt="" />
                </div>
                <h3 id='grow'>{t("text.grow")}</h3>
                <p id='help'>{t("text.help")}</p>

            </div>


            <div id='first-card' > 
            <br/>
                <div id='Logo-box-two'>
                <img src={logoTwo} alt=""  id='logoTwo'/>
                </div>
                <h3 id='grow'>{t("text.sales")}</h3>
                <p id='help'>{t("text.handle")}</p>

            </div>
            </div>
            <div id='card-box'>
                
                <div id='first-card' > 
                <br/>
                    <div id='Logo-box-three'>
                    <img src={logoThree} alt="" id='logoThree' />
                    </div>
                    <h3 id='grow'>{t("text.report")}</h3>
                    <p id='help'>{t("text.lorem")}</p>
    
                </div>
    
    
                <div id='first-card' > 
                <br/>
                    <div id='Logo-box-four'>
                    <img src={logoFour} alt="" id='logoFour' />
                    </div>
                    <h3 id='grow'>{t("text.better")}</h3>
                    <p id='help'>{t("text.upgrade")}</p>
    
                </div>
                </div>
        </Col>

        </Row>
    </Container>
    </>
  )
}
