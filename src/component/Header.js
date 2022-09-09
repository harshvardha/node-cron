
const Header = () => {

    return (
        <div className="container-fluid p-0  overflow-hidden p-0">

            <nav className="navbar navbar-expand-lg navbar-light mx-3">

                <a className="navbar-brand" href="/">
                    <img src="image/logo-dark.png" className="img-fluid" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="https://nft-frontend-cryptolution.zeeve.net/">NFT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="https://swap-frontend-cryptolution.zeeve.net/">SWAP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " aria-current="page" href="#">WHITE PAPER</a>
                        </li>
                        <li className="nav-item">

                            <a href="/buy-astor"><button className="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Buy Astor Token</button></a>&nbsp;
                        </li>
                        <li className="nav-item">
                            <button className="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Connect Wallet</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>);
}

export default Header;
