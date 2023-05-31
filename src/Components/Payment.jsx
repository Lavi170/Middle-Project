import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Payment() {
    let [pageNumber, setPageNumber] = useState(1);
    let [relleventPath, setRelleventPath] = useState("choice")

    useEffect(() => {
        if (pageNumber == 1) {
            setRelleventPath("PayChoice")
        } else if (pageNumber == 2) {
            setRelleventPath("PayOrder")
        } else if (pageNumber == 3) {
            setRelleventPath("PayPaying")
        } else if (pageNumber == 4) {
            setRelleventPath("PayReceipt")
        } else if (pageNumber == 5) {
            setRelleventPath("HomePage")
            setPageNumber(1)
        }
    },[setPageNumber])
    return (
        <div id="payment-page">
            <div id="payment-process">
                <div className="process-ball" id="process-first-ball"></div>
                <div className="process-bar" id="process-first-bar"></div>
                <div className="process-ball" id="process-second-ball"></div>
                <div className="process-bar" id="process-second-bar"></div>
                <div className="process-ball" id="process-third-ball"></div>
                <div className="process-bar" id="process-third-bar"></div>
                <div className="process-ball" id="process-fourth-ball"></div>
                <div className="process-bar" id="process-fourth-bar"></div>
            </div>
            <Link to={relleventPath}></Link>
            <div id="payment-inner-page">
                <Outlet></Outlet>
            </div>

            <div id="payment-buttons">
                <button onClick={() => setPageNumber(pageNumber++)} className="payment-buttons-movemoent">back</button>
                <button onClick={() => setPageNumber(pageNumber--)} className="payment-buttons-movemoent">next</button>
            </div>
        </div>
    );
};
export default Payment;