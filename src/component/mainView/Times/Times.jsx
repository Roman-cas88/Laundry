import React, { useEffect, useState } from 'react'
import { timeArray } from '../DayTimeArrays'
import { useSelector } from 'react-redux'
import { EmptySlot } from './EmptySlot'
import { BookedSlot } from './BookedSlot'


export const Times = ({ date }) => {
    const storage = useSelector((state) => state.laundaryBooking)

    // let bookedDateStorage = storage.reserve.filter(el => el.date.indexOf(date) !== -1)

    let [bookedDate, setBookDate] = useState(storage.reserve.filter(el => el.date.indexOf(date) !== -1))

    useEffect(() => {
      setBookDate(storage.reserve.filter(el => el.date.indexOf(date) !== -1))
      console.log(date);
    },[storage.reserve, date])

    console.log(bookedDate);

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
