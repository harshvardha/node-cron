import Footer from "../component/Footer";
import Header from "../component/Header";
import POOLS from "../image/pools.png";
import Exmple1 from "../image/example1.png";
import Exmple2 from "../image/example2.png";
import Exmple3 from "../image/example3.png";
import Exmple4 from "../image/example4.png";
const ICOReferralDetails = ()=>{

    return (<div>
        <Header/>
        <div className="container">
            <div className="row mt-5">
                <address>
                    <p>For ASTOR ICO Sales;</p>
                    <p>How it works;</p>
                    <p>There are afliate structure and Referral Pool mechanism,</p>
                    <p>For the afliate structure;</p>
                    <p>There are 7 levels of referral mechanism;</p> 
                    <button className="btn-pink text-light py-2 ps-2 pe-2 text-responsive">Affiliates</button>                   
                </address>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">1</th>
                            <th scope="col">2</th>
                            <th scope="col">3</th>
                            <th scope="col">4</th>
                            <th scope="col">5</th>
                            <th scope="col">6</th>
                            <th scope="col">7</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10%</td>
                            <td>7%</td>
                            <td>5%</td>
                            <td>4%</td>
                            <td>3%</td>
                            <td>2%</td>
                            <td>1%</td>
                        </tr>
                    </tbody>
                </table>
                <p><b><i>Note: There will be a logical anti-scrolling mechanism for the referral levels. When an investor makes diferent amounts of purchases , the system will appoint diferent levels of commission rights to the investor. That means, for example, if I buy $500 worth ASTOR, only level1-level2 will be available for me. If I buy $5000 worth ASTOR, all 7 levels will be unlocked for me. These numbers and levels are just for example, they are needed be confgurable. And another issue is that, for instance, if I buy $500 worth of ASTOR at frst, and I have level-1 opened frst but after some time, I buy $500 more, level1-level2 will be available for me. This unlocking levels according to ASTOR price is critical, so invertors are not tricking the system and creating multiple levels with multiple wallets for themselve.</i></b></p>
                
                <p>According to this above, when afliate, person A, brings 1 person, 10% of the bought ICO by person B (referral of person A) share will go to the person A. If person B brings 1 person, 10% of the bought ICO by person C (referral of person B) share will go to the person B and 7% of the bought ICO by person C (referral of person B) share will go to the person A. And continues like that. Please check the example below.</p>                
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <table class="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col" className="col-3">Person</th>
                                    <th scope="col" className="col-3">Bought ASTOR as $</th>
                                    <th scope="col">Referral Bonus($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A</td>
                                    <td>1000</td>
                                    <td className="text-start">10(from H) + 20(from G) + 30(from F) + 40(from E) + 50(from D) + 70(from C) + 100(from B)</td>
                                </tr>
                                <tr>
                                    <td>B(Referral of A)</td>
                                    <td>1000</td>
                                    <td className="text-start">20(from H) + 30(from G) + 40(from F) + 50(from E) + 70(from D) + 100(from C)</td>
                                </tr>
                                <tr>
                                    <td>C(Referral of B)</td>
                                    <td>1000</td>
                                    <td className="text-start">30(from H) + 40(from G) + 50(from F) + 70(from E) + 100(from D)</td>
                                </tr>
                                <tr>
                                    <td>D(Referral of C)</td>
                                    <td>1000</td>
                                    <td className="text-start">40(from H) + 50(from G) + 70(from F) + 100(from E)</td>
                                </tr>
                                <tr>
                                    <td>E(Referral of D)</td>
                                    <td>1000</td>
                                    <td className="text-start">50(from H) + 70(from G) + 100(from F)</td>
                                </tr>
                                <tr>
                                    <td>F(Referral of E)</td>
                                    <td>1000</td>
                                    <td className="text-start">70(from H) + 100(from G)</td>
                                </tr>
                                <tr>
                                    <td>G(Referral of F)</td>
                                    <td>1000</td>
                                    <td className="text-start">100(from H)</td>
                                </tr>
                                <tr>
                                    <td>H(Referral of G)</td>
                                    <td>1000</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-2">
                    <button className="btn-pink text-light py-2 ps-2 pe-2 text-responsive">POOLS</button> 
                </div>
                <div className="col-sm-8">
                    <img src={POOLS} alt="POOLS"/>
                </div>
                <p className="text-justify">Pools are additional reward for investors with high volumes on their teams other than in the referral bonuses. Pools are accumulated from 4% of all investments on ICO. Qualifcation for the pools over the whole presale phase. If an afliate reaches an amount of sales over $1M with afliate`s whole team over the levels, afliate is qualifed for 1 proportion of Pool 1. If an afliate reaches more than $2M, afliate is qualifed for a proportion for Pool 1 and Pool 2. Qualifcation only 50% is rated from the strongest structure. Please look at the examples below</p>
            </div>
            <div className="row mt-3">
                <div className="col-sm-6 text-start">
                    <img src={Exmple1} alt="Example 1"/>
                </div>
                <div className="col-sm-6 text-end">
                    <img src={Exmple2} alt="Example 2" />
                </div>
                <div className="col-sm-6 text-center">
                    <p className="example-foot"><b>Total eligibility for Pools is $1.2M (Pool 1)</b></p>
                </div>
                <div className="col-sm-6 text-center">
                    <p className="example-foot"><b>Total eligibility for Pools is $900k (Not eligible for the Pools)</b></p>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col-sm-6 text-start">
                    <img src={Exmple3} alt="Example 3"/>
                </div>
                <div className="col-sm-6 text-end">
                    <img src={Exmple4} alt="Example 4" />
                </div>
                <div className="col-sm-6 text-center">
                    <p className="example-foot"><b>Total eligibility for Pools is $2.3M (Pool 2 and Pool 1)</b></p>
                </div>
                <div className="col-sm-6 text-center">
                    <p className="example-foot"><b>Total eligibility for Pools is $5M (Pool 3, Pool 2 and Pool 1)</b></p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default ICOReferralDetails;
