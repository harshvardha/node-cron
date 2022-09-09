import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Group from '../image/Group 329.png';
import twiter from '../image/twiter.png';
import facebook from '../image/facebook.png';
import telly from '../image/telly.png';
import emb from '../image/Unbenannt.png';
import youtube from '../image/youtube.png';
const FooterCopy = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <Container className="container text-md-left mb-5 pb-5">
          <Row className="mt-5">
            <Col md={5} className=" mt-md-0 mt-3">
                <div className=''>
                  <img src={Group} className='img-fluid mx-2 mb-3' alt='avtar' />
                  <h4 className='text-dark mt-3 fw-bold'>Cryptolution is Revolutionizing<br/>Decentralization - We are the Innovators of the Defi Market
                  </h4>
                  <p className='text-dark opacity8'>
                    Expand your vision for decentralization with the first of its kind fiat payment gateway of Cryptolution. Stay anonymous and protect your financial privacy through our exchange platform. Swap tokens freely and take advantage of our quick crypto-to-crypto payments. LP tokens are given for trading and filling up the liquidity pool. Connect your wallet now and reap the benefits of Cryptolution today!
                  </p>
                </div>              
            </Col>
            <hr className="clearfix w-100 d-md-none pb-3"/>
            <Col md={2} className="mb-md-0 mb-3 ms-5 ps-5">
              <h5 className="ps-5">Company</h5>
              <ul className="list-unstyled ps-5 mt-3">
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Vision</Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >ICO Sale</Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Ecosystem</Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Seed Phases</Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Roadmap</Link>
                </li>
                
              </ul>
            </Col>
            <Col md={2} className="mb-md-0 mb-3 ps-5">
              <h5 className="ps-5">Useful links</h5>
              <ul className="list-unstyled ps-5 mt-3">
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Audit</Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Whitepaper</Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Referral System </Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Presentation</Link>
                </li>
              </ul>
            </Col>
            <Col md={2} className="mb-md-0 mb-3 ps-5">
              <h5 className="ps-5">Privacy</h5>
              <ul className="list-unstyled ps-5 mt-3">
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Privacy Policy</Link>
                </li>
                <li className='mt-2'>
                  <Link className='text-decoration-none text-dark opacity8' to="#!" >Terms & Conditions</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
              <Col lg={5} md={6} className='ps-lg-5 ms-lg-5 ms-lg-5'>
                <div className='ps-lg-3 ms-lg-3 social-icon-box'>
                    <img src={twiter} className='img-fluid' alt='avtar' />
                    <img src={facebook} className='img-fluid' alt='avtar' />
                    <img src={telly} className='img-fluid' alt='avtar' />
                    <img src={emb} className='img-fluid' alt='avtar' />
                    <img src={youtube} className='img-fluid' alt='avtar' />
                </div>
             </Col>
              <Col>
              <div className="footer-copyright text-start py-3 opacity8">© 2022. All rights reserved.</div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default FooterCopy
