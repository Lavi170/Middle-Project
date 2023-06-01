import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import './Payment.css'

function Payment({ value, setValue }) {
    let [pageNumber, setPageNumber] = useState(1);
    let [relleventPath, setRelleventPath] = useState("/Payment/PayChoice")

    useEffect(() => {
        if (pageNumber === 1) {
            setRelleventPath("/Payment/PayChoice")
        } else if (pageNumber === 2) {
            setRelleventPath("/Payment/PayOrder")
        } else if (pageNumber === 3) {
            setRelleventPath("/Payment/PayPaying")
        } else if (pageNumber === 4) {
            setRelleventPath("/Payment/PayReceipt")
        } else if (pageNumber === 5) {
            setRelleventPath("/HomePage")
            setPageNumber(1)
        }
    }, [pageNumber])
    return (
        <div id="payment-page">
            <div id="payment-process">
                <div className="process-ball" id="process-first-ball">Choose</div>
                <div className="process-bar" id="process-first-bar"></div>
                <div className="process-ball" id="process-second-ball">Order</div>
                <div className="process-bar" id="process-second-bar"></div>
                <div className="process-ball" id="process-third-ball">Payment</div>
                <div className="process-bar" id="process-third-bar"></div>
                <div className="process-ball" id="process-fourth-ball">Receipt</div>
            </div>

            <div id="payment-inner-page">
                <Outlet></Outlet>
            </div>

            <div id="payment-buttons">
                <button onClick={() => (setPageNumber(--pageNumber))} className="payment-buttons-movemoent">back</button>
                <Link to={relleventPath}><button onClick={() => (setPageNumber(--pageNumber) + console.log(relleventPath - pageNumber))} className="payment-buttons-movemoent">Back</button></Link>
                <Link to={relleventPath}><button onClick={() => (setPageNumber(++pageNumber) + console.log(relleventPath + pageNumber))} className="payment-buttons-movemoent">Next</button></Link>

            </div>
        </div>
    );
};
export default Payment;