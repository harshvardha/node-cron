
import React from 'react';
import {Container, Card, Col , Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StatusBar from '../image/Status Bar.png'
import astor_logo from '../image/astor_logo.png'
import List from '../image/List.png'
import Affiliatedata from './Affiliatedata';
import Affiliatecard from './Affiliatecard';
function IncomePage() {
  return (
    <>
        <div className="Income-page">
            <Container>
                <h6 className='text-dark text-center mt-4'>― GET YOUR STATS</h6>
                <Row className="justify-content-center">
                    <Col lg={2}>
                        <h1 className='text-center blueFont'>Dashboard</h1>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} md={3}>
                        <div className="d-grid mx-2">
                            <button className="btn btn-primary Firstblogbtn text-primary" type="button">Statistics</button>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="d-grid mx-2" >
                            <button className="btn btn-primary Firstblogbtn1" type="button">Income Streams</button>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="d-grid mx-2" >
                            <button className="btn btn-primary Firstblogbtn" type="button">Income Streams</button>
                        </div>
                    </Col>
                    <Col xs={12} lg={3}>
                        <div className="d-grid mx-2">
                            <button className="btn btn-primary Firstblogbtn1" type="button">ICO Referral Details</button>
                        </div>
                    </Col>
                </Row>
                <Card className="tokenThirdBlog  p-2 mt-5">
                    <Card.Body >
                        <h6 className='blueFont text-center mt-2'>Affiliate Commissions</h6>
                        <Row>
                            <Col xs={12} md={10} lg={12}>
                                <Row style={{ marginLeft: '4rem' }} className="mt-3">
                                    <Col xs={12} lg={2}>
                                        <Card.Text className="text-start Font4">Date </Card.Text>
                                    </Col>
                                    <Col xs={12} lg={1}>
                                        <Card.Text className="text-start Font4">Level </Card.Text>
                                    </Col>
                                    <Col xs={12} lg={5}>
                                        <Card.Text className="text-center Font4">User</Card.Text>
                                    </Col>
                                    <Col xs={12} lg={2}>
                                        <Card.Text className="text-center Font4">Amount in BUSD</Card.Text>
                                    </Col>
                                    <Col xs={12} lg={2}>
                                        <Card.Text className="text-center Font4">TX</Card.Text>
                                    </Col>
                                </Row>
                                
                                <div className="mt-3 scroll-container">
                                    <Row style={{ marginLeft: '4rem' }}>
                                        {
                                            Affiliatedata.map((val,ind) => {
                                                return <Affiliatecard key={ind} level={val.level} date= {val.date}  user ={val.user}
                                                     amount= {val.amount} tx= {val.tx}
                                                /> 
                                            })
                                        }
                                    </Row>
                                
                                </div>
                        
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    </>
   );
}

export default IncomePage;