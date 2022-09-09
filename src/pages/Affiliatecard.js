import React from 'react';
import {Container, Card, Col , Row } from 'react-bootstrap';

const Affiliatecard = (props) => {
  return (
        <>
            <Col xs={12} lg={2}>
                <Card.Text className="text-start Font3 mt-2">{props.date} </Card.Text>
            </Col>
            <Col xs={12} lg={1}>
                <Card.Text className="text-start Font3 mt-2">{props.level}  </Card.Text>
            </Col>
            <Col xs={12} lg={5}>
                <Card.Text className="text-center Font3 mt-2">{props.user} </Card.Text>
            </Col>
            <Col xs={12} lg={2}>
                <Card.Text className="text-center Font3 mt-2">{props.amount} </Card.Text>
            </Col>
            <Col xs={12} lg={2}>
                <Card.Text className="text-center Font3 mt-2">{props.tx} </Card.Text>
            </Col>
            
        </>
    );
}

export default Affiliatecard;
