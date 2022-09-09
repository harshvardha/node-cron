import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import twiter from '../image/twiter.png'
import facebook from '../image/facebook.png'
import telly from '../image/telly.png'
import emb from '../image/Unbenannt.png'
import youtube from '../image/youtube.png'

const FooterCopy = () => {
  return (
    <>
    
<footer className="page-footer font-small blue pt-lg-4">
  <Container fluid className="container-fluid text-md-left mb-5 pb-5">

    <Row className="mt-lg-5">
      <Col md={5} className=" mt-md-0 mt-3 ps-lg-5 ms-lg-5 ms-md-5 ms-0">

        <Card className="bg-transparent border-light pull-right ps-lg-5 ms-lg-5  ms-0  ">
          <a>
            <Card.Img src='image/logo2.png' className='w-50' alt='avtar' />
          </a>
          <Card.Body className=''>
              <Card.Title className='fw-bolder fs-5 pe-3'> Cryptolution is Revolutionizing Decentralization - We are the Innovators of the Defi Market </Card.Title>
              <Card.Text> Expand your vision for decentralization with the first of its kind fiat payment gateway of Cryptolution. Stay anonymous and protect your financial privacy through our exchange platform. Swap tokens freely and take advantage of our quick crypto-to-crypto payments. LP tokens are given for trading and filling up the liquidity pool. Connect your wallet now and reap the benefits of Cryptolution today!  </Card.Text>
          </Card.Body>
        </Card>
            
      </Col>
      <hr className="clearfix w-100 d-md-none pb-3"/>
      
      <Col md={2} className="mb-md-0 mb-3 ms-lg-5 ps-lg-5">
        <h5 className="ps-5 mt-3">Company</h5>

        <ul className="list-unstyled ps-5">
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Vision</a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >ICO Sale</a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Ecosystem</a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Seed Phases</a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Roadmap</a>
          </li>
        </ul>
      </Col>
      <Col md={2} className="mb-md-0 mb-3 ps-lg-5">
        <h5 className="ps-5 mt-3">Useful links</h5>

        <ul className="list-unstyled ps-5">
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Audit</a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Whitepaper</a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Referral System </a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Presentation</a>
          </li>
        </ul>
      </Col>
      <Col md={2} className="mb-md-0 mb-3 ps-lg-5">
        <h5 className="ps-5 mt-3">Privacy</h5>

        <ul className="list-unstyled ps-5">
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Privacy Policy</a>
          </li>
          <li>
            <a className='text-decoration-none text-dark' href="#!" >Terms & Conditions</a>
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
        <Col lg={5} md={6} className='ps-lg-5 ms-lg-5 ms-lg-5'>
            <div className='ps-lg-5 ms-lg-5'>
                <img src={twiter} className='img-fluid' alt='avtar' />
                <img src={facebook} className='img-fluid' alt='avtar' />
                <img src={telly} className='img-fluid' alt='avtar' />
                <img src={emb} className='img-fluid' alt='avtar' />
                <img src={youtube} className='img-fluid' alt='avtar' />
            </div>
        </Col>
        <Col lg={5} md={6}>
        <div className="footer-copyright text-start py-3 ms-lg-5 ps-lg-5 ps-md-5">© 2022. All rights reserved.</div>
        </Col>
      </Row>
  </Container>
  </footer>
    </>
  )
}

export default FooterCopy
