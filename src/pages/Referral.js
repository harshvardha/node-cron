import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import FooterCopy from '../component/Footer-Copy'
import Navbar from '../component/Navbar'

const Referral = () => {
  return (
    <>
      <Navbar />

    <Container fluid>
        <Row>
            <Col md={12} className='shadow'>
                <div className='text-center pt-5'>
                    <p>Referral system</p>
                    <h1 className='card-text1 fw-bold '>Astor <br/> ICO Structure</h1>
                </div>
                <Row>
                    <Col md={1}>
                    <div className='mt-5 pt-5 ps-3 ms-3'>
                        <img src='image/twiter.png ' className='w-50 ms-5 ' alt='avtar' />
                        <img src='image/facebook.png ' className='w-50 ms-5 ' alt='avtar' />
                        <img src='image/telly.png ' className='w-50 ms-5 ' alt='avtar' />
                        <img src='image/Unbenannt.png ' className='w-50 ms-5 ' alt='avtar' />
                        <img src='image/youtube.png ' className='w-50 ms-5 ' alt='avtar' />
                    </div>
                    </Col>
                    
                    <Col md={11} className='pb-5 pe-4 mt-lg-4 mt-md-0 mt-5'> 
                        <Card className='rounded border border-0 shadow-lg ms-5 me-5 mb-5 pt-lg-5'>
                            <Card.Title className='card-text1 text-center fw-bold pt-4'>How it works</Card.Title>
                            <Row>
                                <Col lg={3}>
                                    <Card className='border-0 shadow-lg rounded ms-lg-5 ms-md-3 me-md-3 mb-3'>
                                        <div className='use-card text-center position-absolute'>
                                        <Card.Img src='image/you.png' className='w-75' alt='' />
                                        </div>
                                        <Card.Title className='card-text1 text-center border-bottom pt-5 pb-3'>You</Card.Title>
                                        <Row>
                                            <Col md={3} lg={3} >
                                                <img src='image/image1.png ' className='img-fluid mt-3 ms-lg-5 ms-md-5 ms-3' alt='avtar' />
                                                <img src='image/image2.png ' className='img-fluid mt-lg-4 mt-md-3 ms-md-5 ms-3 ' alt='avtar' />
                                                <img src='image/image3.png ' className='img-fluid mt-lg-4  pt-2 pt-md-3 ms-md-5 ms-3 ' alt='avtar' />
                                            </Col>
                                            <Col md={6} lg={7}>
                                                <p className='mt-3 ms-4 fw-bold'>Share your Link</p>
                                                <p className='mt-3 ms-4'>Collect affiliate commissions</p>
                                                <p className='mt-3 ms-4 me-2 pb-3'>From all tiers of affiliates</p>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col lg={9} className='mt-lg-5 pt-lg-5'>
                                    <div className='ms-lg-4'>
                                    <img src='image/Line 116.png' className='img-fluid' alt='avtar' />
                                    </div>
                                    <Row className='ms-lg-5 ps-lg-4 ps-md-4'>
                                        <Col md={1} className='ms-lg-4 ms-5'>
                                            <img src='image/level1.png' className='img-fluid' alt='avtar' />
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4 ms-5'>
                                            <img src='image/level2.png' className='img-fluid' alt='avtar' />
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4 ms-5'>
                                            <img src='image/level3.png' className='img-fluid' alt='avtar' />
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4 ms-5'>
                                            <img src='image/level4.png' className='img-fluid' alt='avtar' />
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4 ms-5'>
                                            <img src='image/level5.png' className='img-fluid' alt='avtar' />
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4 ms-5'>
                                            <img src='image/level6.png' className='img-fluid' alt='avtar' />
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4 ms-5'>
                                            <img src='image/level7.png' className='img-fluid' alt='avtar' />
                                        </Col>
                                    </Row>
                                    <div className='mt-lg-5 pt-4 me-lg-4 pe-lg-5'>
                                        <p className='ms-lg-5 ps-lg-5 ps-3 pe-lg-5 pe-md-4 pe-3 pb-5'> This is an example text. Explain here a little bit about the system or whatever you would like to let.  people know. Maybe a some clarification? Whatever works and has the same lenght. </p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div className='text-center pt-5 mt-5'>
                    <p>Calculation example</p>
                    <h1 className='card-text1 fw-bold '>Commission <br/> System</h1>
                </div>
                        <Row className='ps-lg-4 ps-md-2 pe-md-2 ms-lg-5 bg-light shadow'>
                            <Col md={12} lg={10} className='ms-lg-5 pt-5 pb-lg-4'>
                            <Card className='rounded border border-0 shadow-lg ms-lg-5 mb-5 pb-5 bg-light'>
                            <Card.Title className='card-text1 text-center fw-bold pt-5'>Example with all levels unlocked.</Card.Title>
                            <Card.Text className='text-center pt-3'>This is an example text. <br/> Explain here a little bit about the system.</Card.Text>
                                    <Row className='ms-lg-5 ps-lg-5 ps-md-5 ps-0 pt-5 '>
                                        <Col md={1} className='ms-lg-5 ms-md-2'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>YOU </Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 5000</Card.Title>
                                            </Card>
                                             <Card className='button-card text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                               
                                                <Card.Text className='text-white fw-bold pt-2 ps-lg-3 pe-lg-3'> Total for you </Card.Text>
                                                <Card.Title className='text-white fw-bold'> $ 320 </Card.Title>
                                            </Card>
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>Level 1</Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 1000</Card.Title>
                                            </Card>
                                             <Card className='text-center border-0 rounded shadow-lg pb-5 pt-4 mb-2'>
                                                <div className='per-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                {/* <div className='cal-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div> */}
                                                <Card.Text className='card-text1 fw-bold pt-3'> $ 100 </Card.Text>
                                            </Card>
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>Level 2</Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 1000</Card.Title>
                                            </Card>
                                             <Card className='text-center border-0 rounded shadow-lg  pb-5 pt-4 mb-2'>
                                                <div className='per-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                {/* <div className='cal-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div> */}
                                                <Card.Text className='card-text1 fw-bold pt-3'> $ 70 </Card.Text>
                                            </Card>
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>Level 3</Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 1000</Card.Title>
                                            </Card>
                                             <Card className='text-center border-0 rounded shadow-lg  pb-5 pt-4 mb-2'>
                                                <div className='per-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                {/* <div className='cal-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div> */}
                                                <Card.Text className='card-text1 fw-bold pt-3'> $ 50 </Card.Text>
                                            </Card>
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>Level 4</Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 1000</Card.Title>
                                            </Card>
                                             <Card className='text-center border-0 rounded shadow-lg  pb-5 pt-4 mb-2'>
                                                <div className='per-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                {/* <div className='cal-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div> */}
                                                <Card.Text className='card-text1 fw-bold pt-3'> $ 40 </Card.Text>
                                            </Card>
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>Level 5</Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 1000</Card.Title>
                                            </Card>
                                             <Card className='text-center border-0 rounded shadow-lg  pb-5 pt-4 mb-2'>
                                                <div className='per-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                {/* <div className='cal-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div> */}
                                                <Card.Text className='card-text1 fw-bold pt-3'> $ 30 </Card.Text>
                                            </Card>
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>Level 6</Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 1000</Card.Title>
                                            </Card>
                                             <Card className='text-center border-0 rounded shadow-lg pb-5 pt-4 mb-2'>
                                                <div className='per-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                {/* <div className='cal-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div> */}
                                                <Card.Text className='card-text1 fw-bold pt-3'> $ 20 </Card.Text>
                                            </Card>
                                        </Col>
                                        <Col md={1} className='ms-lg-4 ms-md-4'>
                                            <Card className='text-center border-0 rounded-pill shadow-lg pb-2 mb-2'>
                                                <div className='you-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                <Card.Text className='card-text1 fw-bold pt-2'>Level 7</Card.Text>
                                            </Card>
                                            <Card className='text-center border-0 rounded shadow-lg pb-2 mb-2'>
                                                <Card.Text className='fw-bold pt-2'>Invest</Card.Text>
                                                <Card.Title className='fw-bold fs-4 pb-2'>$ 1000</Card.Title>
                                            </Card>
                                             <Card className='text-center border-0 rounded shadow-lg  pb-5 pt-4 mb-lg-2'>
                                                <div className='per-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div>
                                                {/* <div className='cal-card text-center position-absolute'>
                                                    <Card.Img src='image/you.png' className='w-50' alt='' />
                                                </div> */}
                                                <Card.Text className='card-text1 fw-bold pt-3'> $ 10 </Card.Text>
                                            </Card>
                                        </Col>
                                    </Row>
                        </Card>
                            </Col>
                        </Row>
                    </Col>
        </Row>
    </Container>
    <Container fluid>
        <Row className='pb-4'>
            <Col md={6}>
                <Card className='border-0 ps-lg-5 pe-lg-5 pe-md-5 mt-5'>
                    <Card.Body className='ms-lg-5 ms-md-4 me-lg-5 ps-lg-5 pe-lg-5 pt-5'>
                    <Card.Text className='me-lg-5 me-md-5 pe-lg-5 pe-md-5 pt-5'>― Get the most from cryptolution</Card.Text>
                    <Card.Title className='card-text1 fw-bold fs-1 me-lg-5 me-md-5 pe-lg-5 pe-md-5'>Affiliate <br/> Pools</Card.Title>
                    <Card.Text className='me-lg-5 me-md-5 pe-lg-5 pe-md-5 pt-2 '>Pools are additional reward for investors with high volumes on their teams other than in the referral bonuses. Pools are accumulated from 4% of all investments on ICO. Qualification for the pools over the whole presale phase.</Card.Text>
                    <Card.Text className='me-lg-5 me-md-5 pe-lg-5 pe-md-5 pt-2 '>ps-5 pe-5If an affiliate reaches an amount of sales over $1M with affilite’s whole team over the levels, affiliate is qualified for 1 proportion of Pool 1.</Card.Text>
                    <Card.Text className='me-lg-5 me-md-5 pe-lg-5 pe-md-5 pt-2 '>If an affiliate reaches more than $2M, affiliate is qualified for a proportion for Pool 1 and Pool 2. Qualification only 50% is rated from the strongest structure. Please look at the examples below.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} className='mt-lg-5 mt-md-5 mt-3 pt-lg-5' >
                <div className='mt-lg-5 mt-md-5 pt-lg-5 pt-md-5 text-center' >
                    <img src='image/chart.png' className='w-75 mt-5 pt-lg-5' alt='avtar' />
                </div>
            </Col>
        </Row>
        <Row className='bg-light shadow mt-5 pt-5 mb-5 pb-5'>
            <Col md={6}>
            <div className='text-center text-lg-end text-md-end pt-5' >
                    <img src='image/SPONSOR 1.png' className='w-75 ' alt='avtar' />
                </div>
            </Col>
            <Col md={6}>
            <div className='text-center pt-5' >
                    <img src='image/SPONSOR 2.png' className='w-75 ' alt='avtar' />
                </div>
            </Col>
            <Col md={6}>
            <div className='text-center text-lg-end text-md-end pb-5' >
                    <img src='image/SPONSOR 3.png' className='w-75 ' alt='avtar' />
                </div>
            </Col>
            <Col md={6}>
            <div className='text-center pb-5' >
                    <img src='image/SPONSOR 4.png' className='w-75 ' alt='avtar' />
                </div>
            </Col>
        </Row>
    </Container>
        <FooterCopy />
    </>
  )
}

export default Referral
