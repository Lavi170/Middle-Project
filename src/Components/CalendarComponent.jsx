import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import games from "./Calendar.json"
// import { render } from '@fullcalendar/core/preact';
// import { Calendar,formatDate } from '@fullcalendar/core';
import { useState ,useEffect } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid'
 function CalendarComponent({value}) {
    const [events,setEvents]= useState()
    // [{title:`${value.results[0].homeGames[0].homeTeam}`, start:`${value.results[0].homeGames[0].date}`}]

    const handleDateSelect = (selectInfo) => {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar
  
      calendarApi.unselect() // clear date selection
  
      if (title) {
        calendarApi.addEvent({
          title,
          start: selectInfo.startStr,
    //       // end: selectInfo.endStr,
    //       // allDay: selectInfo.allDay
        })
      }
    }
  
  const  handleEventClick = (clickInfo) => {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    }
  
        return (
            <div>
              <button onClick={()=>console.log(games.matches)}>click here</button>
                <FullCalendar
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView='dayGridMonth'
                    // dateClick={handleDatelick}
                    editable={true}
                    selectable={true}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    // eventsSet={handleEvents}
                    events={events} // Pass the events array to the events prop
                />
            </div>
        )
       
        

}
export default CalendarComponent







// import React from 'react'
// import userData from "./Users.json"


// function Calender ({ value, setValue}) {
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
// console.log(userData);
//   function pushNew(){
//     const newObj={
//       "first_name":"dani",
//       "second_name":"prigo"
//     }
//     userData.registrated.push(newObj)
//     console.log(userData);
//   }
  


//   return (
//     <div>Calender
//       {/* <button onClick={pushNew}>click</button> */}
//     </div>
//   )
// }

// export default Calender