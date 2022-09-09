import React from 'react';
import {Container, Card, Col , Row } from 'react-bootstrap';

const Partnerscard = (props) => {
  return (
        <>
            <Col xs={12} md={12} lg={5}>
                <Card.Text className="text-start Font3 mt-2"><img src={props.img} className="float-start Firstblogbtn1img" /><span  style={{ marginLeft: '1rem' }}>{props.address} </span></Card.Text>
            </Col>
            <Col xs={12} md={12} lg={4}>
                <Card.Text className="text-center Font3 mt-2">{props.date} </Card.Text>
            </Col>
            <Col xs={12} md={12} lg={2}>
                <Card.Text className="text-end Font3 mt-2">{props.busd} </Card.Text>
                
            </Col>
        </>
    );
}

export default Partnerscard;
