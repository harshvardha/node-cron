import React from 'react';
import { useContext } from "react"
import { AstroTokenContext } from '../context/astroTokenContext';
import { Button, Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import Group from '../image/Group 329.png';
import addressShortner from "../utils/addressShortner"

const HeaderCopy = () => {
  const { userAddress, connectWallet, logoutUser } = useContext(AstroTokenContext)

  return (
    <>
      <Navbar bg="transparent" variant="" className='pt-2'>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Group} className="img-fluid ms-5" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-3">
            <Nav.Link href="#home">Our Vision</Nav.Link>
            <Nav.Link href="/buy-astor">ICO Sale</Nav.Link>
            <Nav.Link href="#Ecosystem">Ecosystem</Nav.Link>
            <Nav.Link href="#Seed Phases">Seed Phases</Nav.Link>
            <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
            <Nav.Link href="/ico-referral-details">Referral</Nav.Link>
            <Nav.Link href="#Documentation">Documentation</Nav.Link>

            <div className='ms-5 me-5 mt-3'>
              {!userAddress ? (
                <Button
                  variant="outline-success"
                  className='Firstblogbtnblue ms-5'
                  onClick={connectWallet}>CONNECT WALLET</Button>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle variant='success' id='logout'>
                    {addressShortner(userAddress)}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                // <p>{addressShortener(userAddress)}</p>
              )
              }
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderCopy
