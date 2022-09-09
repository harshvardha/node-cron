
const Footer = ()=>{
  
  return (<footer className="footer-section text-light">
  <div className="container-fluid p-0  purple-card1 footer">
      <section className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-6 p-3 mb-md-0">
              <div className="h-100 pull-right">
                  <div className="h-100 d-flex align-items-center">
                      <a href="#" className="pull-right">
                          <img src="image/footer.png" className="img-fluid" alt="Avatar" />
                      </a>
                  </div>
              </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12 mb-5 mb-md-0">
              <div className="row">
                  <div className="col-vr col-lg-3 col-md-4  col-sm-6 col-6  p-5 mb-md-0">
                      <div className="text-responsive"><br/>
                              <button className="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Connect Wallet</button><br/><br/>
                              <button className="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Buy Astor Token</button> 
                      </div>                          
                  </div>
                  <div className="col-vr col-lg-4 col-md-4 col-sm-6 col-6 p-5 mb-md-0">
                      <div className="text-responsive">
                          <h6 className="footer-title">Contact</h6>
                              <div className=""><br/>
                                  <span className="footer-txt">Follow us :</span>
                                  <a href="#"><i className="fa fa-facebook  txt-wh btn-icon" aria-hidden="true"></i></a>
                                  <a href="#"><i className="fa fa-twitter txt-wh btn-icon" aria-hidden="true"></i></a>
                                  <a href="#"><i className="fa fa-instagram  txt-wh btn-icon" aria-hidden="true"></i></a>
                              </div>
                          <br/>
                      </div>
                  </div>
                  <div className=" col-lg-4 col-md-4 col-sm-12 col-12 p-5 mb-md-0 ">
                      <div className="text-responsive">
                          <h6 className="footer-title">Newsletter</h6>
                          <p className="footer-newletter">Subscribe our newsletter href connect with virtual
                              crypto world.</p>
                          <div className="position-relative">
                              <input type="text" className="news-btn w-100 mt-3" placeholder="Enter your email" />
                              <img src='image/news_latter_btn.png' className="news-icon" alt="Avatar" />
                          </div>
                      </div>                          
                  </div>
              </div>
          </div>
      </section>
      <section className="row p-3 pt-0">
          <div className="col-md-7 col-lg-8 text-md-start">
              <div className="footertext-left p-3">
                  © Cryptolution Marketplace 2022, We love our users!
              </div>
          </div>              
      </section>
  </div>
</footer>);
}

export default Footer;
