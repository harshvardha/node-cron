import Footer from "../component/Footer";
import Header from "../component/Header";
const Home = ()=>{
  const htmlContent = `   
  
      <div class="container-fluid p-0 ">
      <div class="row g-0">
          <div id="box-search col-12">
              <div class="thumbnail thumbnail1">
                  <!---<img src="image/Cryptolution-New-2.png" class="img-fluid position-relative" alt="card-img">-->
                  <div class="row">
                    <div class="col-md-4 offset-md-1 mt-5 pt-5 top-head">
                        <h1>Cryptolution</h1>
                        <h3>The Fastest & Safest way to grow your wealth</h3>
                        <p>ASTOR Coin is build on the Binance Smart Chain (BEP-20). It is issued by Cryptolution Swap, a cross-chain aggregation platform integrating NFT, DEX, Farming, and Payment Gateway. It will be used for Cryptolution project to gain reward via participating variety of farms and liquidity pools</p>
                        <!--<p>Now the optimized way to democratize Token... anyone can own as little as $ worth of cryptolution.</p>-->
                        <!--<p>Join the most convenient way and tokenize and own it at the convenience of digital assets mobility.</p>-->
                        <br><br>
                        <button class="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Buy Astor Token</button>&ensp;&ensp;
                        <button class="btn-white text-light py-2 ps-2 pe-2 text-responsive" type="button">Read White Paper</button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
</div>
  
  <div class="container-fluid p-0 ">
        <div class="purple-card position-relative text-light pt-5 position-relative">
            <div class="col-md-12 mt-5 pt-5">
                <div class="own-crypto">
                <h2 class="text-light pur-text ps-md-5 ms-4 mt-5 pt-5 text-center">ASTOR ICO PHASE 1 IS LIVE!</h2>
                <div class="row">
                        <div class="col-md-3 text-end">$121.840&ensp;</div>
                        <div class="progress col-md-6 mt-1">
                            <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
                                <span class="sr-only">20% Complete</span>
                            </div>
                        </div>
                        <div class="col-md-3">&nbsp;$600.000</div>
                    </div>
                    <h2 class="text-light pur-text ps-md-5 ms-4 text-center">ASTOR PRICE $0.01</h2>
                    <h2 class="text-light pur-text ps-md-5 ms-4 mt-3 pt-5 text-center">NEXT PHASE PRICE $0.02 (FOR ONLY TOTAL ALLOCATION OF $1.2M)</h2>
                    <div class="col-md-12 text-center mt-5 pt-4 pb-5">
                        <button class="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Buy Astor Token</button>
                    </div>
                </div>
            </div>

          <div class="col-md-12 mt-1 pt-1">
              <h1 class="text-light ps-md-5 ms-4 mt-5 pt-5">Tokenomics</h1>
              <h2 class="text-light pur-text ps-md-5 ms-4">Get your early bird discount by buying your ASTOR in our ongoing Presale </h2>
          </div>
          <div class="col-md-11 ps-5 ms-4">
              <table class="table text-light mt-5 presale-tbl">
                  <thead class="tab-head">
                      <tr>
                          <th>Allocation</th>
                          <th>% Allocation</th>
                          <th>Token Allocation</th>
                          <th>Price per Token</th>
                          <th>Total Raise ($)</th>
                          <th>Vesting Schedule</th>
                      </tr>
                  </thead>
                  <tbody class="tab-cell">
                      <tr>
                          <td>ICO PHASE 1</td>
                          <td>1.2%</td>
                          <td>60.000.000</td>
                          <td>$0.01</td>
                          <td>600.000</td>
                          <td>3 month cliff followed by a 12 month linear vesting</td>
                      </tr>
                      <tr>
                          <td>ICO PHASE 2</td>
                          <td>2.4%</td>
                          <td>120.000.000</td>
                          <td>$0.02</td>
                          <td>2.400.000</td>
                          <td>5% at TGE, 3 month cliff followed by a 10 month linear vesting</td>
                      </tr>
                      <tr>
                          <td>ICO PHASE 3</td>
                          <td>3.6%</td>
                          <td>180.000.000</td>
                          <td>$0.025</td>
                          <td>4.500.000</td>
                          <td>7.5% at TGE, 3 month cliff followed by a 8 month linear vesting</td>
                      </tr>
                      <tr>
                          <td>ICO PHASE 4</td>
                          <td>6.6%</td>
                          <td>330.000.000</td>
                          <td>$0.03</td>
                          <td>9.900.000</td>
                          <td>10% at TGE,3 month cliff followed by a 6 month linear vesting</td>
                      </tr>
                      <tr>
                          <td>ICO PHASE 5</td>
                          <td>10.1%</td>
                          <td>502.900.000</td>
                          <td>$0.035</td>
                          <td>17.601.500</td>
                          <td colspan="3">12.5% at TGE,3 month cliff followed by a 5 month linear vesting</td>
                      </tr>
                      <tr>
                          <td>Launch Price</td>
                          <td></td>
                          <td></td>
                          <td colspan="5">$0.07</td>
                      </tr>
                      <tr>
                          <td>Advisors</td>
                          <td>2.0%</td>
                          <td colspan="3">100.000.000</td>
                          <td colspan="3">3 month cliff followed by a 24 month linear vesting</td>
                      </tr>
                      <tr>
                            <td>Team</td>
                            <td>5.7%</td>
                            <td colspan="3">287.090.571</td>
                            <td colspan="3">6 month cliff followed by a 48 month linear vesting</td>
                        </tr>
                      <tr>
                          <td>Farm Reserves</td>
                          <td>64%</td>
                          <td colspan="3">3.200.000.000</td>
                          <td colspan="3">Unlocked based Farm Reserves Ecosystem Growth</td>
                      </tr>
                      <tr>
                          <td>Ecosystem Pool</td>
                          <td>4.4%</td>
                          <td>220.009.429</td>
                          <td colspan="3"></td>
                      </tr>
                      <tr>
                          <td>Total Max Supply</td>
                          <td>100%</td>
                          <td>5.000.000.000</td>
                          <td colspan="3"></td>
                      </tr>
                  </tbody>
              </table>
          </div>
        <div class="row own-crypto pb-5 mt-5">
            <div class="col-md-12 ps-4">                
                <h1 class="text-light ps-md-5 mt-3 pt-3">ICO REFERRAL</h1>
                <p class="text-light pur-para ps-md-5">Crytolutionswap platform has unique referral system to grow the community together and earn together. There is a referral system for ICO sales of ASTOR Coin and for Cryptolutionswap Platform features (farms, swap, liquidity, lottery etc.). ICO sale of ASTOR Coin referral system is like below;</p>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col col-md-1 border bg-primary">One (10%)</div>
                        <div class="col col-md-1 border bg-primary">Two (7%)</div>
                        <div class="col col-md-1 border bg-primary">Three (5%)</div>
                        <div class="col col-md-1 border bg-primary">Four (4%)</div>
                        <div class="col col-md-1 border bg-primary">Five (3%)</div>
                        <div class="col col-md-1 border bg-primary">Six (2%)</div>
                        <div class="col col-md-1 border bg-primary">Seven (1%)</div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col col-md-8 text-center border bg-primary">When Person A brings Person B, Person A gets 10% of buying amount of ASTOR as BUSD.</div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col col-md-9 text-center border bg-primary">Then Person B brings Person C, Person B gets 10%, and Person A gets 7% of buying amount of ASTOR as BUSD.</div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col col-md-10 text-center border bg-primary">And it continues until 7th person is reached, to reach the details of ICO Referral Program please check the link below</div>
                    </div>
                    <div class="col-md-12 text-center mt-3 pt-3 pb-3">
                        <a href="/ico-referral-details">
                            <button class="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">ICO Referral Details</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            
          <div class="row own-crypto pb-5 mt-5">
              <div class="col-md-12 ps-4">
                  <!--<h2 class="text-light pur-text ps-md-5 mt-5 pt-5">Why Own Cryptolution?</h2>-->
                  <h2 class="text-light pur-text ps-md-5 mt-5 pt-5">Why participate Cryptolution community?</h2>
                  <p class="text-light pur-para ps-md-5">Ensures utmost transparency of the purchase, ownership and
                      redemption of token.</p>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 pt-5">
                  <div class="row">
                      <div class="col-md-4 ps-5">
                          <img src="image/Group 1.png" class="img-fluid" alt="card-img">
                      </div>
                      <div class="col-md-8 pe-5">
                          <h4 class="head">Highly Accessible</h4>
                          <p class="para">On Cryptolutionswap platform, ASTOR Coin and many other can be traded easily and fast. Soon ASTOR will be traded on a lot of respectable platforms as well.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 pt-5">
                  <div class="row">
                      <div class="col-md-4 ps-5">
                          <img src="image/Group 2.png" class="img-fluid" alt="card-img">
                      </div>
                      <div class="col-md-8 pe-5">
                          <h4 class="head">Trusted</h4>
                          <!--<p class="para">Cryptolutionswap uses…</p>-->
                          <p class="para">Cryptolutionswap uses Robust blockchain technology and managed by a highly qualifed experts in the field.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 pt-5">
                  <div class="row">
                      <div class="col-md-4 ps-5">
                          <img src="image/Group 3.png" class="img-fluid" alt="card-img">
                      </div>
                      <div class="col-md-8 pe-5">
                          <h4 class="head">Highly Profitable</h4>
                          <p class="para">Cryptolutionswap platform offers high %APRs through farms. Staking more means earning more with the Cryptolutionswap assurance.</p>
                      </div>

                  </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 pt-5">
                  <div class="row">
                      <div class="col-md-4 ps-5">
                          <img src="image/Group 4.png" class="img-fluid" alt="card-img">
                      </div>
                      <div class="col-md-8 pe-5">
                          <h4 class="head">Fleixble</h4>
                          <p class="para">Payment gateway feature of the Cryptolutionswap platform makes the platform globally highly flexible and rewarding.</p>
                      </div>

                  </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 pt-5">
                  <div class="row">
                      <div class="col-md-4 ps-5">
                          <img src="image/Group 5.png" class="img-fluid" alt="card-img">
                      </div>
                      <div class="col-md-8 pe-5">
                          <h4 class="head">Low Transcation fees</h4>
                          <p class="para">When token swap, liquidity, farm, pool, trade, payment gateway on platform 0.25% of trading fee is considered as one of the lowest comparing with the competitors globally.</p>
                      </div>

                  </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-5 pt-5">
                  <div class="row">
                      <div class="col-md-4 ps-5">
                          <img src="image/Group 6.png" class="img-fluid" alt="card-img">
                      </div>
                      <div class="col-md-8 pe-5">
                          <h4 class="head">Steady growth</h4>
                          <p class="para">With each transaction using Cryptolutionswap platform makes users also grow with us. Our referral system is unique and purposes that grow as a community together.</p>
                      </div>

                  </div>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-10 white-card position-absolute pt-2 ps-md-5">
                  <div class="row">
                      <div class="col-md-9 pt-5">
                          <h2 class="purple-head">Our latest whitepaper</h2>
                          <p class="sec-para text-secondary">This white paper is for Cryptolution Platform and ASTOR Coin, one of the Cryptolution community products, and for subsequent public dissemination. ASTOR is especially grateful to the Cryptolution community for their contributors.</p>
                      </div>
                      <div class="col-md-3">
                          <img src="image/white-tik.png" class="img-fluid" alt="card-img">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid p-0 ">
      <div class="row  pt-5 pb-5 position-relative hand_coin_bg">
          <div class="col-md-5 offset-md-7">
              <div class="p-xs-0 p-sm-0 p-lg-5 p-md-2">
                  <h2 class="img-head text-responsive">The Cryptolution<br>
                      Astor Token</h2>
                  <p class="img-text text-responsive">ASTOR (issued by Cryptolution Swap) combines the advantages of decentralized exchange (DEX), non-fungible tokens (NFT), decentralized finance (DeFi) and decentralized payment gateway to bring an innovation to Decentralized world. </p>
                  <div class="d-grid gap-2 d-md-block mt-5 text-responsive">
                      <button class="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Buy Astor Token</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container-fluid p-0 ">
      <div class="row card-block pt-5">
          <div class="col-md-6 ps-5 pt-5 mt-5">
              
              <div class="img-head text-light ps-5 mt-2">
                  <button class="btn-pink text-light py-2 ps-2 pe-2 text-responsive" type="button">Connect with us</button>                        
              </div>
              <h2 class="img-head text-light ps-5 mt-2">
                  A global community
              </h2>
              <p class="img-text text-light ps-5 mt-4">Cryptolutionswap is a global community with Twitter, Facebook, Telegram and Linkedin social media accounts. You can always connect with the community through these channels.</p>
              <!--<p class="img-text text-light ps-5 mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.</p>
              <p class="img-text text-light ps-5 mt-4 pt-3">Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.</p>-->
          </div>
          <div class="col-md-6">
              <img src="image/socials.png" class="icon-img py-5" alt="card-img">
          </div>
      </div>
      <div class="row own-crypto pb-5 pt-5 news-media">
          <div class="col-md-11">
              <h2 class="img-head text-light mt-2">
                  News and Media
              </h2>
              <div class="text-light">Cryptolutoinswap mentioned in News & Media.</div>
              <div class="row">
                  <div class="col-md-8">
                      <img src="image/img-1.png">
                  </div>
                  <div class="col-md-4">
                      <div>
                          <img src="image/img-2.png">
                      </div>
                      <div>
                          <img src="image/img-3.png">
                      </div>
                  </div>
                  <div class="col-md-4">                    
                      <img src="image/img-4.png">
                  </div>
                  <div class="col-md-4">                    
                      <img src="image/img-5.png">
                  </div>
                  <div class="col-md-4">                    
                      <img src="image/img-6.png">
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  </div>
`;
  return (<>
    <Header/>
    <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    <Footer/>
    </>
  );
}

export default Home;
