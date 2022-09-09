import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../image/Logo2.png'

const NavHead = () => {

    return (
        <>
            <Container fluid className="container-fluid p-0  overflow-hidden p-0">

                <nav className="navbar navbar-expand-lg navbar-light mx-3">

                    <a className="navbar-brand" href="/">
                        <img src={logo} className="img-fluid ps-4" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                            <li className="nav-item ms-lg-5 ps-lg-5">
                                <a className="nav-link active" aria-current="page" href="/">Our Vision</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="https://nft-frontend-cryptolution.zeeve.net/">ICO Sale</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="https://swap-frontend-cryptolution.zeeve.net/">Ecosystem</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " aria-current="page" href="#">Seed Phases</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="https://nft-frontend-cryptolution.zeeve.net/">Referral</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="https://swap-frontend-cryptolution.zeeve.net/">Documentation</a>
                            </li>
                            <li className="nav-item ms-lg-5 ps-lg-5 ms-3">
                                <button className="button-card text-light py-2 ps-4 pe-4 text-responsive rounded-pill ms-5" type="button">Connect Wallet</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </>
    )
}

export default NavHead
