import { useState, useContext } from "react"
import React from 'react';
import { Container, Card, Col, Row, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AstroTokenContext } from "../context/astroTokenContext";
import { Link } from 'react-router-dom';
import StatusBar from '../image/Status Bar.png';
import astor_logo from '../image/astor_logo.png';
import List from '../image/List.png';
import HeaderCopy from '../component/HeaderCopy';
import FooterCopy from '../component/FooterCopy';

import Partnersdata from './Partnersdata';
import Partnerscard from './Partnerscard';

import Group from '../image/Group 329.png';
import Unbenannt from '../image/Unbenannt-2-05.png';
import facebook from '../image/facebook.png';
import telegram from '../image/telegram.png';
import BuyAstorImg from '../image/Hero_Text.png';
import msg from '../image/msg.png';
import youtube from '../image/youtube.png';
import { TOKEN_RATE_IN_STAGE } from "../utils/constants";
import addressShortner from "../utils/addressShortner"

const BuyAstor = () => {
    const {
        userAddress,
        stage,
        totalTokens,
        totalTokensBought,
        allReferals,
        eligibleAmount,
        refferalIncome,
        transactionFee,
        updateTotalTokens,
        updatePrice,
        buyAstroToken,
        updateTransactionFees,
        poolForUser
    } = useContext(AstroTokenContext)

    const [amount, setAmount] = useState(0)
    const [currentCurrency, setCurrentCurrency] = useState("BNB")

    const setCurrency = (currency) => {
        updatePrice(currency)
        if (amount >= 50)
            updateTotalTokens(amount)
        updateTransactionFees()
        setCurrentCurrency(currency)
    }

    const updateAmount = (investAmount) => {
        setAmount(investAmount)
        updateTotalTokens(investAmount)
        updateTransactionFees()
    }

    const buyToken = () => {
        if (amount <= 50) {
            return window.alert("Minimum amount allowed is $50")
        }
        buyAstroToken(amount, currentCurrency)
    }

    return (
        <>
            <div className="token-page">
                <Container fluid className="Tokenblog">
                    <HeaderCopy />
                    <div className='ps-5 ms-5 d-grid Social'>
                        <Link className='' to=""><img src={Unbenannt} className='img-fluid mx-4' alt='avtar' /></Link>
                        <Link className='' to=""><img src={facebook} className='img-fluid mx-4' alt='avtar' /></Link>
                        <Link className='' to=""><img src={telegram} className='img-fluid mx-4' alt='avtar' /></Link>
                        <Link className='' to=""><img src={msg} className='img-fluid mx-4' alt='avtar' /></Link>
                        <Link className='' to=""><img src={youtube} className='img-fluid mx-4' alt='avtar' /></Link>
                    </div>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col xs={12} md={12} lg={12} className="text-center">
                                        <h6 className='Font5 text-center mt-4'>― CRYPTOLUTION</h6>
                                        <img src={BuyAstorImg} alt={BuyAstorImg} />
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col xs={12} md={8} lg={8} className="buy-progressbar">
                                        <span>
                                            Raised $5,460,085
                                        </span>
                                        <span className='float-right'>
                                            Target $32,000,000
                                        </span>
                                        <ProgressBar now={20 * stage} className="mt-2 mb-2" />
                                        <Row>
                                            <div className='w-20p text-center'><b>Phase 1</b><br />0.010$/Token</div>
                                            <div className='w-20p text-center'><b>Phase 2</b><br />0.020$/Token</div>
                                            <div className='w-20p text-center'><b>Phase 3</b><br />0.025$/Token</div>
                                            <div className='w-20p text-center'><b>Phase 4</b><br />0.030$/Token</div>
                                            <div className='w-20p text-center'><b>Phase 5</b><br />0.035$/Token</div>
                                        </Row>
                                    </Col>
                                </Row>
                                <Card className="tokenFirstBlog p-5 mt-4">
                                    <Card.Body>
                                        <Row>
                                            <Col xs={12} md={10} lg={7}>
                                                <Row style={{ marginLeft: '4rem' }} className="mt-3">
                                                    <Col xs={12} md={12} lg={5}>
                                                        <Card.Text className="text-center Font"> YOUR INVEST AMOUNT </Card.Text>
                                                        <div className="d-grid">
                                                            {/*  not less than $50 <button className="btn btn-primary Firstblogbtn1" type="button">$1000</button> */}
                                                            <input
                                                                type="number"
                                                                value={amount}
                                                                className="form-control Firstblogbtn1"
                                                                placeholder="$1000"
                                                                onChange={(event) => updateAmount(event.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={12} lg={4} style={{ marginLeft: '4rem' }}>
                                                        <Card.Text className="text-center Font">YOU GET </Card.Text>
                                                        <div className="d-grid">
                                                            <button className="btn btn-primary Firstblogbtn2" type="button"><img src={astor_logo} className="float-start Firstblogbtn1img" /> <span style={{ marginRight: '1rem' }}>{amount / TOKEN_RATE_IN_STAGE[stage]}</span></button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginLeft: '4rem' }} className="mt-3">
                                                    <Col xs={12} md={12} lg={5}>
                                                        <Card.Text className="text-center Font "> CHOOSE CURRENCY   </Card.Text>
                                                        <div className="d-grid">
                                                            {/* <button className="btn btn-primary Firstblogbtn1 fw-bold" type="button"><img src={List} className="float-center Firstblogbtn1img"  /> BNB <FontAwesomeIcon icon={faChevronDown}/></button> */}
                                                            <select
                                                                className="form-control Firstblogbtn1"
                                                                value={currentCurrency}
                                                                onChange={(event) => setCurrency(event.target.value)}
                                                            >
                                                                <option value="BNB">BNB</option>
                                                                <option value="BUSD">BUSD</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={12} lg={4} style={{ marginLeft: '4rem' }}>
                                                        <Card.Text className="text-center Font ">ASTOR TOKENS </Card.Text>
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginLeft: '4rem' }} className="mt-5">
                                                    <Col xs={12} md={12} lg={5}>
                                                        <div className="d-grid">
                                                            <button
                                                                className="btn btn-primary Firstblogbtn fw-bold"
                                                                type="button"
                                                                onClick={() => buyToken(amount, currentCurrency)}>
                                                                <span className="buy-astor-text-btn">BUY ASTOR</span>
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <p className='text-white mt-3 ' style={{ marginLeft: '4rem' }}>*Note that minimum Purchase is 50$</p>
                                            </Col>
                                            <Col xs={12} md={10} lg={5}>
                                                <h6 className='text-center mt-3'>SUMMARY</h6>
                                                <Card className='FirstblogBlack mt-3 p-2'>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> Rate </Card.Text>
                                                            </Col>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start">1 Token = $ {TOKEN_RATE_IN_STAGE[stage]} </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row className='mt-2'>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> Current Phase </Card.Text>
                                                            </Col>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start">{stage}/5 </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row className='mt-2'>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> Total Tokens </Card.Text>
                                                            </Col>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start">{amount / TOKEN_RATE_IN_STAGE[stage]} Astor </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row className='mt-2'>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> Amount in $</Card.Text>
                                                            </Col>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start">{amount} </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row className='mt-2'>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> Transaction Currency </Card.Text>
                                                            </Col>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> {currentCurrency} </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row className='mt-2'>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> Transaction fee </Card.Text>
                                                            </Col>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start">{transactionFee} BNB </Card.Text>
                                                            </Col>
                                                        </Row>
                                                        <Row className='mt-2'>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start"> Payment Method </Card.Text>
                                                            </Col>
                                                            <Col xs={12} md={12} lg={6}>
                                                                <Card.Text className="text-start">Metamask</Card.Text>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="Tokenblog1">
                    <Col xs={12} md={12} lg={12}>
                        <Container>
                            <h6 className='Font5 text-center mt-4'>― GET YOUR STATS</h6>
                            <Row className="justify-content-center">
                                <Col xs={12} md={12} lg={2}>
                                    <h1 className='text-center blueFont'>Dashboard</h1>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col xs={12} md={12} lg={3}>
                                    <div className="d-grid mx-2">
                                        <button className="btn btn-primary Firstblogbtn text-primary fw-bold" type="button">Statistics</button>
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={3}>
                                    <div className="d-grid mx-2" >
                                        <button className="btn btn-primary Firstblogbtn1 fw-bold" type="button">Income Streams</button>
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={3}>
                                    <div className="d-grid mx-2" >
                                        <button className="btn btn-primary Firstblogbtn fw-bold" type="button">Income Streams</button>
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={3}>
                                    <div className="d-grid mx-2">
                                        <button className="btn btn-primary Firstblogbtn1 fw-bold" type="button">ICO Referral Details</button>
                                    </div>
                                </Col>
                            </Row>
                            <Card className="tokenSecondBlog p-2 mt-5">
                                <Card.Body>
                                    <h6 className='blueFont text-center mt-2 '>Your Statistics</h6>
                                    <Row>
                                        <Col xs={12} md={10} lg={12}>
                                            <Row style={{ marginLeft: '4rem' }} className="mt-3">
                                                <Col xs={12} md={12} lg={4}>
                                                    <Card.Text className="text-center Font2"> You ({addressShortner(userAddress)}) purchased </Card.Text>
                                                    <div className="d-grid mx-2">
                                                        <button className="btn btn-primary no" type="button"><img src={astor_logo} className="float-start Firstblogbtn1img" /> <span style={{ marginRight: '1rem' }}>{Number(totalTokensBought).toFixed(4)} ASTOR</span></button>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={12} lg={4}>
                                                    <Card.Text className="text-center Font2">Direct affiliates via your referral link </Card.Text>
                                                    <div className="d-grid mx-2">
                                                        <button className="btn btn-primary no" type="button">{allReferals}</button>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={12} lg={4}>
                                                    <Card.Text className="text-center Font2">Total team partners </Card.Text>
                                                    <div className="d-grid mx-2">
                                                        <button className="btn btn-primary no" type="button">{allReferals}</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='mt-2'>
                                        <Col xs={12} md={10} lg={12}>
                                            <Row style={{ marginLeft: '4rem' }} className="mt-3">
                                                <Col xs={12} md={12} lg={4}>
                                                    <Card.Text className="text-center Font2"> Total comission from your referrals </Card.Text>
                                                    <div className="d-grid mx-2">
                                                        <button className="btn btn-primary Firstblogbtn" type="button">USD {refferalIncome}</button>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={12} lg={4}>
                                                    <Card.Text className="text-center Font2">Total turnover </Card.Text>
                                                    <div className="d-grid mx-2">
                                                        <button className="btn btn-primary Firstblogbtn" type="button">USD {refferalIncome}</button>
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={12} lg={4}>
                                                    <Card.Text className="text-center Font2">Eligible pool </Card.Text>
                                                    <div className="d-grid mx-2">
                                                        <button className="btn btn-primary Firstblogbtn" type="button">USD {eligibleAmount}</button>
                                                    </div>
                                                    <p className='Font4 text-center mt-2'>Remaining for Pool {poolForUser}</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <h6 className='Font2 text-center mt-3'>Referral link for 0x...34FB</h6>
                                    <h6 className='Font3 text-center mt-2'>cryptolution.com/referral/0x...345DF</h6>
                                    <Row className="justify-content-center">
                                        <Col xs={12} md={12} lg={2}>
                                            <div className="d-grid mx-2" >
                                                <button className="btn btn-primary Firstblogbtnblue mt-2" type="button">COPY REFERRAL LINK</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="tokenThirdBlog  p-2 mt-5">
                                <Card.Body >
                                    <h6 className='text-center mt-2 blueFont'>Your direct partners</h6>
                                    <Row>
                                        <Col xs={12} md={12} lg={12}>
                                            <Row style={{ marginLeft: '4rem' }} className="mt-3">
                                                <Col xs={12} md={12} lg={5}>
                                                    <Card.Text className="text-start Font4">Wallet Address </Card.Text>
                                                </Col>
                                                <Col xs={12} md={12} lg={4}>
                                                    <Card.Text className="text-center Font4">Sign up Date </Card.Text>
                                                </Col>
                                                <Col xs={12} md={12} lg={3}>
                                                    <Card.Text className="text-center Font4">Turnover IN BUSD</Card.Text>
                                                </Col>
                                            </Row>
                                            <div className="mt-3 scroll-container">
                                                <Row style={{ marginLeft: '4rem' }}>
                                                    {
                                                        Partnersdata.map((val, ind) => {
                                                            return <Partnerscard key={ind} img={val.img} address={val.address}
                                                                date={val.date} busd={val.busd}
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
                    </Col>
                </Container>
                <FooterCopy />
            </div>
        </>
    );
}

export default BuyAstor;