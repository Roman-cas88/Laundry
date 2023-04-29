import React, { useContext, useEffect, useState } from 'react'
import { timeArray } from '../DayTimeArrays'
// import { useSelector } from 'react-redux'
import { EmptySlot } from './EmptySlot'
import { BookedSlot } from './BookedSlot'
import { dateContext } from '../MainView'
import { useStorage } from '../../../store/slices/storageSlice'


export const Times = () => {
    // const storage = useSelector((state) => state.laundaryBooking);
    const storage = useStorage();
console.log("times: ", storage )
    const { stringifyDate } = useContext(dateContext)
    const date = stringifyDate

    let [bookedDate, setBookDate] = useState(storage.reserve.filter(el => el.date.indexOf(date) !== -1))

    useEffect(() => {
      setBookDate(storage.reserve.filter(el => el.date.indexOf(date) !== -1))
    },[storage.reserve, date])

  return (
    <>
       {timeArray.map((time) => {
        if (bookedDate !== undefined) {
          const bookedTime = bookedDate.find(el => el.time === time)
          if (bookedTime !== undefined) {
            return (<BookedSlot key={time} time={time} room={bookedTime.roomNumber}/>)
          }
          else {return (<EmptySlot  key={time} time={time}/>)}
        }
        else {return (<EmptySlot  key={time} time={time}/>)}         
      })
       }
    </>
  )
}
