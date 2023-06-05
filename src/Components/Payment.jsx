import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import './Payment.css'

function Payment({ value, setValue }) {
    let [pageNumber, setPageNumber] = useState(2);
    let [relleventPath, setRelleventPath] = useState("/Payment/PayChoice")
    let [firstBallStyle , setFirstBallStyle]=useState("")
    let [secondBallStyle , setSecondBallStyle]=useState("")
    let [thirdBallStyle , setThirdBallStyle]=useState("")
    let [fourthBallStyle , setFourthBallStyle]=useState("")

    useEffect(() => {
        if (pageNumber === 2) {
            setRelleventPath("/Payment/PayOrder")
        } else if (pageNumber === 3) {
            setRelleventPath("/Payment/PayPaying")
        } else if (pageNumber === 4) {
            setRelleventPath("/Payment/PayReceipt")
        } else if (pageNumber === 5) {
            setRelleventPath("/")
        } else if (pageNumber === 6) {
            setPageNumber(1)
        } else {
            setRelleventPath("/Payment/PayChoice")
        }
    }, [pageNumber])

    return (
        <div id="payment-page">
            <div id="payment-process">
                <div className="half-process-ball" id="process-first-ball">Choose</div>
                <div className="grey-process-bar" id="process-first-bar"></div>
                <div className="grey-process-ball" id="process-second-ball">Order</div>
                <div className="grey-process-bar" id="process-second-bar"></div>
                <div className="grey-process-ball" id="process-third-ball">Payment</div>
                <div className="grey-process-bar" id="process-third-bar"></div>
                <div className="grey-process-ball" id="process-fourth-ball">Receipt</div>
            </div>

            <div id="payment-inner-page">
                <Outlet></Outlet>
            </div>

            <div id="payment-buttons">
                <Link to={relleventPath}><button onClick={() => (setPageNumber(--pageNumber) + console.log(relleventPath - pageNumber))} className="payment-buttons-movemoent">Back</button></Link>
                <div>{pageNumber}{relleventPath}</div>
                {pageNumber < 5 ?
                    <Link to={relleventPath}><button onClick={() => (setPageNumber(++pageNumber) + console.log(relleventPath + pageNumber))} className="payment-buttons-movemoent">Next</button></Link>
                    :
                    <Link to={"/"}><button onClick={() => (setPageNumber(++pageNumber) + console.log(relleventPath + pageNumber))} className="payment-buttons-movemoent">Home</button></Link>
                }
            </div>
        </div>
    );
};
export default Payment;