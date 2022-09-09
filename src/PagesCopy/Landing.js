import React from 'react'
import { Button, Card, Container, Col, Row, Table, Form } from 'react-bootstrap'
import FooterCopy from '../component/Footer-Copy';
import Navbar from '../component/Navbar'
import twiter from '../image/twiter.png'
import facebook from '../image/facebook.png'
import telly from '../image/telly.png'
import emb from '../image/Unbenannt.png'
import backgroundtop from '../image/Background_Iso.png'
import status from '../image/Status Bar.png'
import bnd from '../image/List.png'
import youtube from '../image/youtube.png'
import Phase1 from '../image/Phase 1.png'
import Phase2 from '../image/Phase 2.png'
import Phase3 from '../image/Phase 3.png'
import Phase4 from '../image/Phase 4.png'
import Phase5 from '../image/Phase 5.png'
import Ellipse1 from '../image/Ellipse 1.png'
import Ellipse2 from '../image/Ellipse 2.png'
import Ellipse3 from '../image/Ellipse 3.png'
import Ellipse4 from '../image/Ellipse 4.png'
import Ellipse5 from '../image/Ellipse 5.png'
import Ellipse6 from '../image/Ellipse 6.png'

const Landing = () => {
  return (
    <>
      <Navbar />

        <Container fluid className='overflow-hidden p-0 rounded-bottom shadow-lg g-0 pb-5 border-bottem'>
            <Row className=''>
                    <Row>
                    <Col md={2} className=''>
                    </Col>
                    <Col md={11} className='pay-card ms-lg-5 ps-lg-5 position-absolute'>
                        <img src={backgroundtop} className='w-100 ms-lg-5 ms-md-5' alt='avtar' />
                    </Col>
                    <Row>
                    <Col lg={4} className="top-card ms-lg-5">
                            <Card className="bg-transparent border-light">
                                <Card.Body>
                                    <Card.Text className='fs-6 fw-bolder '> DEX | PAYMENT GATEWAY | DEBIT CARD </Card.Text>
                                    <Card.Title className='Card-Title fs-1 fw-bold'> The Bridge Between Two Worlds </Card.Title>
                                    <Card.Text> Cryptolution is the first crypto platform ever to merge a decentralized exchange with a fiat payment gateway. Connecting two different worlds and combining ease of use with safety. </Card.Text>
                                    <Button className="button-card text-light py-2 ps-4 pe-4 text-responsive text-white fw-bold  rounded-pill shadow" type="button">Astor Token</Button>
                                    <Button className="btn2 color-text bg-light ms-2 py-2 ps-4 pe-4 text-responsive rounded-pill shadow" type="button">White Paper</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </Row>
                    <Row className='time-card'>
                    <Col lg={1}></Col>
                        <Col lg={4} className='text-center'>
                            <Row>
                            <Col md={3}>
                            <Card className="bg-transparent shadow ms-2 mb-5">
                                <Card.Body>
                                    <h2>32</h2>
                                    <Card.Text>Days</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="bg-transparent shadow ms-2 mb-5">
                                <Card.Body>
                                 <h2>16</h2>
                                    <Card.Text>Hours</Card.Text>
                                </Card.Body>
                            </Card>
                       </Col>
                        <Col md={3}>
                            <Card className="bg-transparent shadow ms-2 mb-5">
                                <Card.Body>
                                    <h2>24</h2>
                                    <Card.Text>Minutes</Card.Text>
                                </Card.Body>
                            </Card>
                       </Col>
                        <Col md={3}>
                            <Card className="bg-transparent shadow ms-2 mb-5">
                                <Card.Body>
                                    <h2>32</h2>
                                    <Card.Text>Seconds</Card.Text>
                                </Card.Body>
                            </Card>
                       </Col>
                            </Row>
                        </Col>
                        <Col md={6} lg={3} className='ms-lg-5 ms-md-4 mt-3'>
                        <img src={status} className='img-fluid' alt='avtar' />
                        </Col>
                        <Col md={4} lg={2} className='ms-5 mt-3'>
                        <Button className="button-card py-2 ps-2 pe-2 ms-2 text-responsive text-white fw-bold shadow" type="button">Buy with BNB / BUSD
                            <img src={bnd} className='ms-2' alt='avtar' />
                        </Button>
                        </Col>
                    </Row>
                    
            </Row>
        </Container>
        <Container fluid className='card-sec overflow-hidden'>
                <Row>
                <Col lg={7}>
                <Button className='read-btn position-absolute rounded-pill btn-light border shadow-lg'> Read more </Button>
                </Col>
                <Col lg={3}>
                            <Card className="bg-transparent border-light mt-5 pt-5">
                                <Card.Body>
                                    <Card.Text className='fs-6 fw-bold '> ― CRYPTOLUTION VISION </Card.Text>
                                    <Card.Title className='futer-text fs-2 fw-bolder'> Future of Defi has never been so Bright </Card.Title>
                                    <Card.Text> Our vision is to create the most secure Defi platform on multiple chains and bring the first Defi payment gateway to life. We strive to inspire innovative ideas and consistently grow our community. </Card.Text>
                                    <Button className="btn2 color-text bg-light text-dark py-2 ps-4 pe-4 text-responsive rounded-pill shadow" type="button">White Paper</Button>
                                </Card.Body>
                            </Card>
                </Col>
                <Row className='my-5 py-5'>
                    <Col lg={1} className='me-4'></Col>
                    <Col md={4} lg={2} className='border-0 bg-white shadow-lg ms-lg-5 ms-md-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src="image/exchange.png" className='icon-img w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-2 pt-4 text-center'>DecentralizedExchange</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>Join the Decentralized world to ensure the safety of your funds while reducing the risk of hacks.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={2} className='border-0 bg-white shadow-lg ms-lg-4 ms-md-4 mt-md-0 mt-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/gateway.png' className='icon-img w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-2 pt-4 text-center'>Fiat Payment Gateway</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>The first decentralized fiat payment gateway allows you to exchange crypto seamlessly and safely.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={2} className='border-0 bg-white shadow-lg ms-lg-4 ms-md-5 mt-lg-0 mt-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/token.png' className='icon-img1 w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-2 pt-4 text-center'>Token Launch Pad</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>No text yet</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={2} className='border-0 bg-white shadow-lg ms-lg-4 ms-md-4 mt-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/debit.png' className='icon-img1 w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-2 pt-4 text-center'>Cryptolution Debit Card</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>No text yet</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>
        <Container fluid className='overflow-hidden'>
            <Row className="btn-card">
                <Col md={2} lg={4}></Col>
                <Col md={8} lg={4}>
                    <Card className='btn-child-card'>
                        <Card.Body >
                            <Card.Title className='fs-1 fw-bold rounded text-center'>We strive for <span className='sp-text fw-bold'>greatness.</span></Card.Title>
                            <Button className="button-card2 mt-2 text-light py-2 ps-4 pe-4 position-absolute text-white fw-bold rounded-pill shadow" type="button">WATCH VIDEO</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} lg={4}></Col>
            </Row>
        </Container>
        <Container fluid className='overflow-hidden'>
            <Row className='mt-5 ps-lg-5 ps-md-5'>
                <Col md={10} className='eco-card mt-5 ms-lg-5 ps-lg-5 position-absolute'>
                    <img src='image/card-img.png' className='w-100 ms-lg-5 mt-4' alt='avtar' />
                </Col>
                <Col lg={4} className="pt-5 ps-lg-5 pe-3">
                            <Card className="bg-transparent border-light pt-3">
                                <Card.Body>
                                    <Card.Text className='fs-6 fw-bolder'> ― THE ECOSYSTEM </Card.Text>
                                    <Card.Title className='Card-Title fs-1 fw-bold'> The Astor Token is the driving force behind Cryptolution </Card.Title>
                                    <Card.Text className='pt-2'> ASTOR Token is built on the Binance Smart Chain (BEP-20). Issued by Cryptolution Swap, a cross-chain aggregation platform integrating NFT, DEX, Farming, and the first decentralized Fiat Payment Gateway. </Card.Text>
                                   
                                </Card.Body>
                            </Card>
                </Col>
                <Row className='my-5 py-lg-5 ms-lg-5 ms-md-5 ps-lg-5 ps-md-5'>
                    <Col md={4} lg={2} className='mt-lg-5 border-0 bg-white shadow-lg ms-lg-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src="image/lock.png" className='icon-img2 w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 pt-4 text-center'>Stake Astor andEarn Profit</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>Lock your Astor Tokens today and gain value on every single transaction made on Cryptolution.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={2} className='mt-lg-5 border-0 bg-white shadow-lg ms-lg-4 ms-md-2 mt-lg-0 mt-md-0 mt-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/light.png' className='icon-img2 w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 pt-4 text-center'>Highly Accessible Platform</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>Convenient access to our platform from all devices. Connecting your wallet has never been easier.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={2} className='mt-5 border-0 bg-white shadow-lg ms-lg-4 ms-md-1 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/grow.png' className='icon-img2 w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 pt-4 ps-3 pe-3 text-center'>Grow with Astor</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>Our efficient referral system offers users a variety of earning options on the Astor Token.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={2} className='mt-5 border-0 bg-white shadow-lg ms-lg-4 ms-md-2 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/invest.png' className='icon-img2 w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 pt-4 ps-3 pe-3 text-center'>Invest withAstor</Card.Title>
                                <Card.Text className='py-3 mt-3 border-top'>Get exclusive offers on staking, trading, and token exchange. Take advantage of our VIP Program for loyal token holders.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={8} className='text-center'>
                    <div  className=" position-absolute ps-md-5 ms-md-5" >
                    <Button className="button-card text-light mt-3 ms-3 ms-md-5 py-2 ps-4 pe-4 text-white fw-bold rounded-pill shadow" type="button">Astor Token</Button>
                    </div>
                    </Col>
                </Row>
            </Row>
        </Container>
        <Container fluid>
            <Row className=''>
            <Col md={4}></Col>
            <Col lg={4}>
                <Card className="bg-transparent border-light text-center ps-lg-5 ps-md-5 pe-lg-5 pe-md-5 mt-5 pt-5">
                    <Card.Body>
                        <Card.Text className='fs-6 fw-bold ms-lg-2 ms-md-3 ps-lg-3 ps-md-3 pe-3'> ― PResale information </Card.Text>
                        <Card.Title className='futer-text fs-2 fw-bolder ms-lg-2 ms-md-3 ps-lg-3 ps-md-3 pe-3'> Cryptolution Presale of Astor </Card.Title>
                        <Card.Text className=' ms-lg-2 ms-md-3 ps-lg-3 ps-md-3'> Drive your earnings upwards by participating in our ongoing Presale. Get your early bird discount and buy Astor now! </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            <Col md={4}></Col>
            </Row>
            <Row className='mt-5 mb-5 ms-lg-5 ps-lg-5 ms-lg-5 ps-md-5 ps-md-5'>
                <Col md={2} className='ms-lg-5'>
                    <img src={Phase1} className='img-fluid' alt='' />
                </Col>
                <Col md={2} className='ms-md-3 mt-3 mt-lg-0 mt-md-0'>
                    <img src={Phase2} className='img-fluid' alt='' />
                </Col>
                <Col md={2} className='ms-md-3 mt-3 mt-lg-0 mt-md-0'>
                    <img src={Phase3} className='img-fluid' alt='' />
                </Col>
                <Col md={2} className='ms-md-3 mt-3 mt-lg-0 mt-md-0'>
                    <img src={Phase4} className='img-fluid' alt='' />
                </Col>
                <Col md={2} className='ms-md-3 mt-3 mt-lg-0 mt-md-0'>
                    <img src={Phase5} className='img-fluid' alt='' />
                </Col>
            </Row>
            {/* <Row className='mt-5 mb-5'>
                <Col md={1}></Col>
                <Col md={2} className='rounded shadow'>
                    <Card className='border-0 pb-3'>
                        <Card.Body>
                        <div className='ICO-btn1 position-absolute'>
                        <Button className=' bg-white shadow text-secondary border-white'>ICO PHASE 1</Button>
                        </div>
                            <Card.Text className='text-center pt-4' >TOKEN PRICE:</Card.Text>
                            <Card.Title className='text-center text-secondary fs-1 fw-bold'>$0.010</Card.Title>
                            <Table>
                                <tbody>
                                    <tr>
                                    <td className='avt-text fw-semibold'>% Allocation:</td>
                                    <td className='fw-bold'>1,2%</td>
                                    </tr>
                                    <tr>
                                    <td className='avt-text fw-semibold'>Token Allocation</td>
                                    <td className='fw-bold'>60.000.000</td>
                                    </tr>
                                    <tr>
                                    <td  className='avt-text fw-semibold'>Total Raise ($):</td>
                                    <td className='fw-bold'>600.000</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Text className='border-top border-3 pt-4 text-center fw-bold'>Vesting Schedule</Card.Text>
                            <Card.Title className='text-tb text-secondary text-center ps-3 pe-3'>3 month cliff followed by a 10 month linear vesting</Card.Title>
                            
                            <div className='ord-btn position-absolute'>
                                <Button className='fw-bold rounded-pill bold bg-secondary shadow border-white'>SOLD OUT</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} className='ms-md-3 shadow rounded'>
                    <Card className='border-0 pb-3'>
                        <Card.Body>
                        <div className='ICO-btn position-absolute'>
                        <Button className='button-card fw-bold bg-white shadow border-white'>ICO PHASE 2</Button>
                        </div>
                            <Card.Text className='text-center card-text1 pt-4' >TOKEN PRICE:</Card.Text>
                            <Card.Title className='text-center card-text1 fs-1 fw-bold'>$0.020</Card.Title>
                            <Table>
                                <tbody>
                                    <tr>
                                    <td className='avt-text fw-semibold'>% Allocation:</td>
                                    <td className='fw-bold card-text1'>2,4%</td>
                                    </tr>
                                    <tr>
                                    <td className='avt-text fw-semibold'>Token Allocation</td>
                                    <td className='fw-bold card-text1'>120.000.000</td>
                                    </tr>
                                    <tr>
                                    <td  className='avt-text fw-semibold'>Total Raise ($):</td>
                                    <td className='fw-bold card-text1'>2.400.000</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Text className=' card-text1 border-top border-3 pt-4 text-center fw-bold'>Vesting Schedule</Card.Text>
                            <Card.Title className='text-tb text-secondary text-center'>5% at launch, 3 month cliff followed by a 10 month linear vesting</Card.Title>
                            
                            <div className='ord-btn position-absolute'>
                                <Button className='button-card fw-bold bg-white rounded-pill shadow border-white'>BUY NOW</Button>
                            </div>
                        
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} className='ms-md-3 shadow rounded'>
                    <Card className='border-0 pb-3'>
                        <Card.Body>
                        <div className='ICO-btn position-absolute'>
                        <Button className='fw-bold bg-white shadow text-dark border-white'>ICO PHASE 3</Button>
                        </div>
                            <Card.Text className='text-center pt-4' >TOKEN PRICE:</Card.Text>
                            <Card.Title className='text-center card-text1 fs-1 fw-bold'>$0.025</Card.Title>
                            <Table>
                                <tbody>
                                    <tr>
                                    <td className='avt-text fw-semibold'>% Allocation:</td>
                                    <td className='fw-bold'>3,6%</td>
                                    </tr>
                                    <tr>
                                    <td className='avt-text fw-semibold'>Token Allocation</td>
                                    <td className='fw-bold'>180.000.000</td>
                                    </tr>
                                    <tr>
                                    <td  className='avt-text fw-semibold'>Total Raise ($):</td>
                                    <td className='fw-bold'>4.500.000</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Text className='border-top border-3 pt-4 text-center fw-bold'>Vesting Schedule</Card.Text>
                            <Card.Title className='text-tb text-secondary text-center'>7,5% at launch, 3 month cliff followed by a 8 month linear vesting</Card.Title>
                            
                            <div className='ord-btn position-absolute'>
                                <Button className='fw-bold bg-white rounded-pill shadow border-white text-secondary'>OPEN SOON</Button>
                            </div>
                        
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} className='ms-md-3 shadow rounded'>
                    <Card className='border-0 pb-3'>
                        <Card.Body>
                        <div className='ICO-btn position-absolute'>
                        <Button className='fw-bold bg-white shadow text-dark border-white'>ICO PHASE 4</Button>
                        </div>
                            <Card.Text className='text-center pt-4' >TOKEN PRICE:</Card.Text>
                            <Card.Title className='text-center card-text1 fs-1 fw-bold'>$0.030</Card.Title>
                            <Table>
                                <tbody>
                                    <tr>
                                    <td className='avt-text fw-semibold'>% Allocation:</td>
                                    <td className='fw-bold'>6,6%</td>
                                    </tr>
                                    <tr>
                                    <td className='avt-text fw-semibold'>Token Allocation</td>
                                    <td className='fw-bold'>330.000.000</td>
                                    </tr>
                                    <tr>
                                    <td  className='avt-text fw-semibold'>Total Raise ($):</td>
                                    <td className='fw-bold'>9.900.000</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Text className='border-top border-3 pt-4 text-center fw-bold'>Vesting Schedule</Card.Text>
                            <Card.Title className='text-tb text-secondary text-center'>10% at launch, 3 month cliff followed by a 6 month linear vesting</Card.Title>
                            
                            <div className='ord-btn position-absolute'>
                            <Button className='fw-bold bg-white rounded-pill shadow border-white text-secondary'>OPEN SOON</Button>
                            </div>
                        
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} className='ms-md-3 shadow rounded'>
                    <Card className='border-0 pb-3'>
                        <Card.Body>
                        <div className='ICO-btn position-absolute'>
                        <Button className='fw-bold bg-white shadow text-dark border-white'>ICO PHASE 5</Button>
                        </div>
                            <Card.Text className='text-center pt-4' >TOKEN PRICE:</Card.Text>
                            <Card.Title className='text-center card-text1 fs-1 fw-bold'>$0.035</Card.Title>
                            <Table>
                                <tbody>
                                    <tr>
                                    <td className='avt-text fw-semibold'>% Allocation:</td>
                                    <td className='fw-bold'>10,1%</td>
                                    </tr>
                                    <tr>
                                    <td className='avt-text fw-semibold'>Token Allocation</td>
                                    <td className='fw-bold'>502.900.000</td>
                                    </tr>
                                    <tr>
                                    <td  className='avt-text fw-semibold'>Total Raise ($):</td>
                                    <td className='fw-bold'>17.601.500</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Text className='border-top border-3 pt-4 text-center fw-bold'>Vesting Schedule</Card.Text>
                            <Card.Title className='text-tb text-secondary text-center'>12,5% at launch, 3 month cliff followed by a 5 month linear vesting</Card.Title>
                            
                            <div className='ord-btn position-absolute'>
                                <Button className='fw-bold bg-white rounded-pill shadow border-white text-secondary'>OPEN SOON</Button>
                            </div>
                        
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
        </Container>
        <Container fluid className='bg-light shadow'>
            <Row className=' mb-5 pb-5'>
                <Col md={7} className='pt-lg-5'>
                    <img src='image/circle-img.png' className='img-fluid mt-5 pt-5' alt='avt' />
                    <Row>
                        <Col md={12} className='ms-5 ps-lg-5 mt-4'>
                            <div className='ms-lg-5 ps-lg-5'>
                            <div className="mb-2 ms-lg-4 ms-md-4">
                            <Button variant="" className='shadow rounded-pill mt-3 mt-lg-0 ms-lg-5 ms-2 '>
                                <img src={Ellipse1} className='img-fluid me-2' />
                            64 % Farm Reserves
                            </Button>{' '}
                            <Button variant="" className='shadow rounded-pill mt-3 mt-lg-0 ms-2 ps-3 pe-5 '>
                                <img src={Ellipse2} className='img-fluid me-3' />
                            23,9% Presale
                            </Button>
                        </div>
                        <div className="mb-2 ms-lg-4 ms-md-4">
                            <Button variant="" className='shadow rounded-pill mt-3 mt-lg-0 ms-lg-5 ms-2  ps-3 pe-5'>
                                <img src={Ellipse3} className='img-fluid me-4' />
                            5,7 % Team
                            </Button>{' '}
                            <Button variant="" className='shadow rounded-pill mt-3 mt-lg-0 ms-lg-2 ms-md-1 ms-2 '>
                                <img src={Ellipse4} className='img-fluid me-2' />
                            4,4 % Ecosystem Pool 
                            </Button>
                        </div>
                        <div className="mb-2 ms-lg-4 ms-md-4">
                            <Button variant="" className='shadow rounded-pill mt-3 mt-lg-0 ms-lg-5 ms-2 ps-3 pe-5'>
                                <img src={Ellipse5} className='img-fluid me-2' />
                            2% Marketing
                            </Button>{' '}
                            <Button variant="" className='shadow rounded-pill mt-3 mt-lg-0 ms-lg-2 ms-2 ps-3 pe-5'>
                                <img src={Ellipse6} className='img-fluid me-3' />
                            2 % Advisors
                            </Button>
                        </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className='pt-lg-5'>
                <Card className="bg-transparent border-light mt-lg-5 pt-lg-5 pt-md-5">
                    <Card.Body className='pt-lg-5 mt-lg-5'>
                        <Card.Text className='fs-6 fw-bolder mt-lg-5 mt-md-5 pt-5'> ― TOKENOMICS </Card.Text>
                           <Card.Title className='Card-Title fs-1 fw-bold'>Simple model with defined usage and rocketing value </Card.Title>
                           <Card.Text> The Astor Token will be used for the Cryptolution project to gain rewards via participating variety of farms, lottery, and liquidity pools. Astor is the main token in the Cryptolution platform. It’s the intersection of three markets, (Defi; NFT; Staking) each of which has strong growth potential. </Card.Text>
                           <Button className="btn2 color-text bg-light ms-2 py-2 ps-3 pe-5 text-responsive rounded-pill shadow" type="button">
                            <img src='image/bscscan.png' className='img-fluid me-2' alt='avt' />
                           BSCSCAN</Button>
                           <Button className="btn2 color-text bg-light ms-2 mt-lg-0 mt-3 py-2 ps-5 pe-5 text-responsive rounded-pill shadow" type="button">WHITEPAPER</Button>
                           <Button className="btn2 color-text bg-light ms-2 mt-3 py-2 ps-5 pe-5 text-responsive rounded-pill shadow" type="button">AUDIT</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>


        <Container fluid>
            <Row className=''>
            <Col md={4}></Col>
            <Col lg={4}>
                <Card className="bg-transparent border-light text-center mt-lg-5 pt-5">
                    <Card.Body>
                        <Card.Text className='fs-6 fw-bold'> ― THE ECOSYSTEM </Card.Text>
                        <Card.Title className='futer-text fs-2 fw-bolder'> Our roadmap gives perspective into the future </Card.Title>
                        <Card.Text className='pt-2'> Achieving goals requires a clear and reliable business plan. Visualizing our objectives and strategies to ensure prosperity and progress is the key method that our organization uses. </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            <Col md={4}></Col>
            </Row>
            <Row className='mt-5 my-5 pb-5'>
                <Col md={12}>
                    <img src='image/Roadmap (1).png' className='img-fluid' alt='avtar' />
                </Col>
                
            </Row>
        </Container>
        <Container fluid className='overflow-hidden'>
            <Row className="avt-card">
                <Col md={12}>
                    <Row>
                    <Col md={3}></Col>
                <Col md={6}>
                    <Card className='avt-child-card'>
                        <Card.Body >
                            <Card.Title className='fs-1 fw-bold rounded text-center'>Stay connected  and  <span className='sp-text fw-bold'>earn together.</span></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}></Col>
                
                <Row className='my-lg-5 mb-5 pb-5'>
                    <Col md={1} className='me-4'></Col>
                    <Col md={2} className='border-0 bg-white shadow-lg ms-lg-5 mb-md-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src="image/one.png" className='num-img w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 ps-lg-4 pe-lg-4 pt-4 text-center'>Connect your Wallet</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} className='border-0 bg-white shadow-lg ms-lg-4 ms-md-4 mb-md-5 mt-md-0 mt-5 mt-lg-0 mt-mb-0 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/two.png' className='num-img w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 ps-lg-4 pe-lg-4 pt-4 text-center'>Buy Astor Token</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} className='border-0 bg-white shadow-lg ms-lg-4 ms-md-4 mb-md-5 mt-md-0 mt-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/three.png' className='num-img w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 ps-lg-4 pe-lg-4 pt-4 text-center'>Share your  referral link</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} className='border-0 bg-white shadow-lg ms-lg-4 ms-md-4 mb-md-5 mt-md-0 mt-5 rounded'>
                        <Card className='border-light'>
                            <Card.Img src='image/four.png' className='num-img w-25 position-absolute' alt='avtar' />
                            <Card.Body>
                                <Card.Title className='card-text1 fw-bold fs-4 ps-lg-4 pe-lg-4 pt-4 text-center'>Sit back and collect</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                    </Row>
                    <div className="cardbtn mb-5 position-absolute">
                        <Button variant="" className='button-card ps-5 pe-5 rounded-pill text-white fw-bold py-2'>
                        DETAIL
                        </Button>{' '}
                        <Button variant="" className='button-card ps-5 pe-5 rounded-pill text-white fw-bold py-2'>
                        JOIN
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid>
        <Row>
                <Col md={11}>
                    <Row>
                        <Col md={12} lg={4} className='ms-3 pt-lg-5'>
                        <Card className="bg-transparent border-light ms-lg-5 mt-lg-5 pt-5">
                                <Card.Body>
                                    <Card.Text className='fs-6 fw-bolder '> ― latest news </Card.Text>
                                    <Card.Title className='Card-Title fs-1 fw-bold'> Latest News and Media </Card.Title>
                                    <Card.Text>Follow us on social media and sign up for our newsletter today so you can learn more about Cryptolution and feel connected to our mission. </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card className='ms-lg-4 ms-md-4 border-0 mt-4'> 
                                <Card.Body className='rounded shadow-lg'>
                                <Card.Img src="image/cryp-card.png" className='' alt='avtar' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='ms-lg-4 ms-md-4 border-0 mt-2'> 
                                <Card.Body className='rounded shadow-lg'>
                                <Card.Img src="image/cryp-card.png" className='' alt='avtar' />
                                </Card.Body>
                            </Card>
                            <Card className='ms-lg-4 ms-md-4 border-0 mt-2'> 
                                <Card.Body className='rounded shadow-lg'>
                                <Card.Img src="image/cryp-card.png" className='' alt='avtar' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>  
                            <Card className='ms-lg-4 ms-md-4 border-0 mt-2'> 
                                <Card.Body className='rounded shadow-lg'>
                                <Card.Img src="image/cryp-card.png" className='' alt='avtar' />
                                </Card.Body>
                            </Card>    
                        </Col>
                        <Col md={4}>  
                            <Card className='ms-lg-4 ms-md-4 border-0 mt-2'> 
                                <Card.Body className='rounded shadow-lg'>
                                <Card.Img src="image/cryp-card.png" className='' alt='avtar' />
                                </Card.Body>
                            </Card>                  
                        </Col>
                        <Col md={4}>     
                            <Card className='ms-lg-4 ms-md-4 border-0 mt-2'> 
                                <Card.Body className='rounded shadow-lg'>
                                <Card.Img src="image/cryp-card.png" className='' alt='avtar' />
                                </Card.Body>
                            </Card>               
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col xs={2} md={8} lg={7} className='pt-5'>
                    <div className=' mt-lg-5 mt-5 pt-md-5 pt-lg-5 ps-lg-5 ms-lg-3'>
                        <img src={twiter} className='img-fluid mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 ms-lg-5 ps-lg-5' alt='avtar' />
                        <img src={facebook} className='img-fluid mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 ' alt='avtar' />
                        <img src={telly} className='img-fluid mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 ' alt='avtar' />
                        <img src={emb} className='img-fluid mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 ' alt='avtar' />
                        <img src={youtube} className='img-fluid mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 ' alt='avtar' />
                    </div>
                </Col>
                <Col xs={10} md={4} lg={4} className='pt-lg-4 pt-md-4'>
                <Card className="bg-transparent border-light py-3 py-5 my-lg-5 my-md-4">
                    <Card.Body>
                       <Card.Text className='fs-6 fw-bolder pe-lg-5 me-lg-5'>― our global community </Card.Text>
                       <Card.Title className='Card-Title fs-1 fw-bold'> Connect with Cryptolution and Follow Innovation </Card.Title>
                        <Card.Text className='pe-lg-5 me-lg-5'>Join the Cryptolution family and help us lead the way to create a tokenized world. Subscribe to our social media channels and stay tuned for news and updates. </Card.Text>
                     </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        <Container fluid className='overflow-hidden '>
            <Row className="doc-card">
                <Col md={12}>
                    <Row>
                    <Col md={4}></Col>
                <Col md={5}>
                    <Card className='doc-child-card'>
                        <Card.Body >
                            <Card.Title className='fs-1 fw-bold rounded text-center'>Additional   <span className='sp-text fw-bold'>documents.</span></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}></Col>
                
                <Row className='text-center ms-lg-5 ms-md-5'>
                    <Col md={1} className=''></Col>
                    <Col xs={4} md={2} className='border-0 shadow-lg  rounded position-relative ms-lg-1 ms-md-1'>
                            <img src="image/document.png" className='img-fluid ' alt='avtar' />
                            
                    </Col>
                    <Col xs={4} md={2} className='border-0 shadow-lg ms-lg-5 ms-md-5 rounded position-relative'>
                            <img src='image/document.png' className='img-fluid ' alt='avtar' />
                    </Col>
                    <Col xs={4} md={2} className='border-0 shadow-lg ms-lg-5 ms-md-5 me-lg-5 me-md-5 rounded position-relative'>
                            <img src='image/document.png' className='img-fluid ' alt='avtar' />
                    </Col>
                </Row>
                    </Row>
                    <Row className="ps-lg-5 pb-lg-0 pb-md-0 mb-3">
                    <Col md={1} className=''></Col>
                    <Col xs={4} md={2} className='ps-lg-5 ps-md-5 ps-2'>
                        <Button variant="" className='button-card ps-lg-4 pe-lg-5  rounded-pill text-white fw-bold py-2'>
                        WHITEPAPER
                        </Button>{' '}
                       </Col>
                    <Col xs={4} md={2} className='ps-lg-5 ps-5'>
                        <Button variant="" className='button-card  ps-lg-4 pe-lg-5 ms-lg-5 ms-md-5 rounded-pill text-white fw-bold py-2'>
                        PRESENTATION
                        </Button>{' '}
                        </Col>
                        <Col md={1}></Col>
                    <Col xs={4} md={2} className='ps-lg-5 ps-5 mt-3 mt-lg-0 mt-md-0'>
                        <Button variant="" className='button-card  ps-5 ps-md-4 pe-5 pe-md-4 ms-md-5 ms-lg-0 rounded-pill text-white fw-bold py-2'>
                        AUDIT
                        </Button>
                       </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='bg-light'>
            <Col md={3}></Col>
                <Col md={6}>
                    <Card className='doc-child-card border-0 bg-light'>
                        <Card.Body >
                            <Card.Title className='futer-text fs-1 fw-bold rounded text-center'>Get the important news first!</Card.Title>
                            <Row className='ms-lg-4 ps-lg-2 ps-md-2'>  
                                <Col md={10} className=' border rounded-pill ms-lg-5'>
                                <div className='d-flex py-1'>
                                <input type="text" placeholder="Enter Your email" className='rounded-pill ms-lg-2 ms-md-2 me-lg-5 me-mg-5 me-lg-4 me-md-4 pe-lg-5 border-0' />
                                <div className='ms-lg-5 ps-lg-4'>
                                <Button variant="" className='button-card ps-lg-4 pe-lg-5 ms-lg-5 rounded-pill text-white fw-bold py-2'>
                                    SUBSCRIBE
                                </Button>{' '}
                                </div>
                            </div>
                                </Col>
                            </Row>
                            <p className='text-center pt-3'>Subscribe our newsletter to get access to early news.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
        <FooterCopy />
    </>
  )
}

export default Landing;
