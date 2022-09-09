import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { buyAstor, getAddress, getUsdPrice } from "../utils/webFunctions";

const BuyAstor = ()=>{
    const [amount,setAmount] = useState('0.00')
    const [currencyType,setCurrencyType] = useState('')
    const [address, setAddress] = useState('')
    const [usdtAmount,setUsdtAmount] = useState('0.00')

    const buyToken = async() =>{
        try {
            await buyAstor(currencyType,amount,address)
        } catch (error) {
            console.log(error,"error")
        }
    }

    const getPriceInUsd = async() =>{
        try {
            const value = await getUsdPrice(amount,currencyType)
            setUsdtAmount(value)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPriceInUsd()
    },[currencyType,amount])

    const reset = async() => {
        setAddress('')
        setCurrencyType('')
        setAmount('0.00')
        setUsdtAmount('0.00')
        console.log('reset')
    }

    return (<div>
        <Header/>
        <div className="container-fluid p-0 ">
            <div className="row g-0">
                <div className="thumbnail thumbnail12 pb-5" style={{backgroundImage: "linear-gradient(to right, rgb(76, 40, 197), rgb(229, 68, 109))"}}>                    
                    <div className="container own-crypto mt-5 rounded">
                        <div className="row">
                            <div className="col-md-7 rounded p-5" style={{backgroundImage: "linear-gradient(to right, rgb(76, 40, 197), rgb(229, 68, 109))"}}>
                                <h2 className="text-light">Welcome to Cryptolution</h2>
                                <h5 className="text-light">How many ASTOR you would like to buy?</h5>
                                <form className="text-light">
                                    <div className="row">
                                        <div className="form-group col-md-6 p-2">
                                            <label>NUMBER OF TOKENS</label>
                                            <input type="number" className="form-control" placeholder="10,000" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                        </div>
                                        <div className="form-group col-md-6 p-2">
                                            <label>TOTAL AMOUNT(USD)</label>
                                            <input type="number" className="form-control" disabled={true}  placeholder="$ 100.00" value={usdtAmount}/>
                                        </div>
                                    </div>
                                    <div className="form-group p-2">
                                        <label>BINANCE SMART CHAIN ADDRESS</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Please enter your Binance Smart Chain (BSC) Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 p-2">
                                            <label>CURRENCY</label>
                                            <select className="form-control" value={currencyType} onChange={(e)=>setCurrencyType(e.target.value)}>
                                                <option value="">Select Currency</option>
                                                <option value="BNB">BNB</option>
                                                <option value="BUSD">BUSD</option>
                                            </select>
                                            {/* <input type="number" className="form-control" placeholder="10,000"/> */}
                                        </div>
                                        {/* <div className="form-group col-md-6 p-2">
                                            <label>PAYMENT VALUE</label>
                                            <input type="number" className="form-control"  placeholder="$ 100.00"/>
                                        </div> */}
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 p-2">
                                            <button type="button" className="btn btn-primary btn-block" onClick={buyToken}>Buy Now Astor Token</button>
                                        </div>
                                        <div className="col-sm-6 p-2">
                                            <button type="button" className="btn btn-outline-dark btn-block" onClick={reset}>Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 p-5 rounded">
                                <h2 className="text-light">Summary</h2>
                                <table className="table table-borderless text-light">                                    
                                    <tbody>
                                        <tr>
                                            <td>Rate</td>
                                            <td>1Token = $0.01</td>
                                        </tr>
                                        <tr>
                                            <td>Cuurent Phase 1</td>
                                            <td>1 of 5</td>
                                        </tr>
                                        <tr>
                                            <td>Total Tokens</td>
                                            <td>10,000 Astor</td>
                                        </tr>
                                        <tr>
                                            <td>Transcation Currency</td>
                                            <td>BNB($100.00)</td>
                                        </tr>
                                        <tr>
                                            <td>Payment Method</td>
                                            <td>Metamask</td>
                                        </tr>
                                    </tbody>
                                </table><br/><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default BuyAstor;
