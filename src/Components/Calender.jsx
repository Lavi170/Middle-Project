import React from 'react'
import userData from "./Users.json"


function Calender () {
  // const numberArray = [];
  // let firstNam = 1;
  // let secondNam = 1;
  // for (let i = 0; i < 169; i++) {
  //     const pair = [firstNam, secondNam];
  //     if (firstNam!=secondNam) {
  //         numberArray.push(pair)
  //     }
  //     secondNam++
  //     if (secondNam > 13) {
  //         secondNam = 1
  //         firstNam++
  //     }
  // }
//   // console.log(numberArray);
console.log(userData);
  function pushNew(){
    const newObj={
      "first_name":"dani",
      "second_name":"prigo"
    }
    userData.registrated.push(newObj)
    console.log(userData);
  }
  


  return (
    <div>Calender
      {/* <button onClick={pushNew}>click</button> */}
    </div>
  )
}

export default Calender