import React from 'react'
import "./PayChoice.css"
import "./PaymentProcess.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import data from "./data.json"

function PayChoice({ value, setValue }) {
    let [stadiumStand, setStadiumStand] = useState("")
    let [ticketDeal, setTicketDeal] = useState("")
    let [ticketType, setTIcketType] = useState("")
    let [numberOfTickets, setNumberOfTickets] = useState(0)
    let [approved, setApproved] = useState(false)
    let [wantedGame, setWantedGame] = useState(JSON.parse(localStorage.getItem("chosenGame")))
    let [itemOfGame, setItemOfGame] = useState(data.results)
    let [priceToPay, setPriceToPay] = useState(0)

    useEffect(() => {
        setItemOfGame(data.results.filter(item => item.team === wantedGame.homeTeam))
    }, [wantedGame])

    let orderObj = {
        "stand": stadiumStand,
        "deal": ticketDeal,
        "type": ticketType,
        "amount": numberOfTickets,
        "price": priceToPay,
    }

    useEffect(() => {
        if (ticketDeal === "single") {
            if (ticketType === "gold") {
                setPriceToPay(itemOfGame[0].ticketPrice1 * numberOfTickets)
            } else if (ticketType === "silver") {
                setPriceToPay(itemOfGame[0].ticketPrice2 * numberOfTickets)
            } else if (ticketType === "bronze") {
                setPriceToPay(itemOfGame[0].ticketPrice3 * numberOfTickets)
            }
        } else if (ticketDeal === "subscription") {
            console.log("it subscription");
            if (ticketType === "gold") {
                console.log("it gold");
                setPriceToPay(itemOfGame[0].subscriptionPrice1)
            } else if (ticketType === "silver") {
                setPriceToPay(itemOfGame[0].subscriptionPrice2)
            } else if (ticketType === "bronze") {
                setPriceToPay(itemOfGame[0].subscriptionPrice3)
            }
        }
    }, [ticketDeal, ticketType, numberOfTickets])

    function sendingForApproval() {
        setApproved(true)
        sessionStorage.setItem('user', JSON.stringify(orderObj))
    }


    return (
        <div id='pay-choice-page'>
            <div id="payment-process">
                <div className="half-process-ball" id="process-first-ball">Choose</div>
                <div className="grey-process-bar" id="process-first-bar"></div>
                <div className="grey-process-ball" id="process-second-ball">Order</div>
                <div className="grey-process-bar" id="process-second-bar"></div>
                <div className="grey-process-ball" id="process-third-ball">Payment</div>
                <div className="grey-process-bar" id="process-third-bar"></div>
                <div className="grey-process-ball" id="process-fourth-ball">Receipt</div>
            </div>
            <div id='pay-choice-place-holder'>

            </div>
            <div id='pay-choice-grid'>
                <div id='pay-choice-grid-game-info'>
                    <h3 className='game-info'>{wantedGame.homeTeam} VS.  {wantedGame.awayTeam}</h3>
                    <h4 className='game-info'>Date: {wantedGame.date}</h4>
                    <h4 className='game-info'>Stadium: {itemOfGame[0].stadium}</h4>
                </div>
                <div id='pay-choice-grid-choose'>
                    <div id='pay-h1'>
                        <h1 >Choose tickets</h1>
                    </div>
                    <br />
                    <div> Choose stadium stand -
                        <select id="selector-1" className='pay-selectors' onChange={() => setStadiumStand(event.target.value)}>
                            <option value="select-stand">select</option>
                            <option value="north">North</option>
                            <option value="east">East</option>
                            <option value="south">South</option>
                            <option value="west">West</option>
                        </select>
                    </div>

                    <div> Choose ticket deal
                        <select id="selector-2" className='pay-selectors' onChange={() => setTicketDeal(event.target.value)}>
                            <option value="select-deal">select</option>
                            <option value="single">One time</option>
                            <option value="subscription">Subscription</option>
                        </select>
                    </div>

                    <div> Choose ticket type
                        <select id="selector-3" className='pay-selectors' onChange={() => setTIcketType(event.target.value)}>
                            <option value="select-type">select</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="bronze">Bronze</option>
                        </select>

                    </div>

                    <div >
                        {(ticketDeal == "single" || ticketDeal == "select-deal") ?
                            (<div id='pay-choice-tickets-pick'> Choose number of tickets
                                <input onChange={() => (setNumberOfTickets(event.target.value))} type="number" min="0" max="15" onKeyPress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" />
                            </div>) : (null)}
                    </div>

                    <div id='pay-choice-sent-order'>
                        <button className='button-15' onClick={() => sendingForApproval()}>Place order</button>
                    </div>
                </div >
                <div id='pay-choice-grid-stadium'>
                    <img src="http://www.tothe92.co.uk/groundguide/images/stadiumlayout/wembleystadia.jpg" alt="" />
                </div>
                <div id='pay-choice-grid-prices'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Prices</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Deal</th>
                                <th>type</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>single ticket</td>
                                <td>bronze</td>
                                <td>{itemOfGame[0].ticketPrice3}</td>
                            </tr>
                            <tr>
                                <td>single ticket</td>
                                <td>silver</td>
                                <td>{itemOfGame[0].ticketPrice2}</td>
                            </tr>
                            <tr>
                                <td>single ticket</td>
                                <td>gold</td>
                                <td>{itemOfGame[0].ticketPrice1}</td>
                            </tr>
                            <tr>
                                <td>subscription</td>
                                <td>bronze</td>
                                <td>{itemOfGame[0].subscriptionPrice3}</td>
                            </tr>
                            <tr>
                                <td>subscription</td>
                                <td>silver</td>
                                <td>{itemOfGame[0].subscriptionPrice2}</td>
                            </tr>
                            <tr>
                                <td>subscription</td>
                                <td>gold</td>
                                <td>{itemOfGame[0].subscriptionPrice1}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='pay-buttons'>
                <button>Back</button>
                {approved === true ?
                    <Link to={"/PayOrder"}><button>Next</button></Link>
                    :
                    <button onClick={() => alert("Please send order for approval")}>Next</button>
                }
            </div>
        </div>
    )
}

export default PayChoice;