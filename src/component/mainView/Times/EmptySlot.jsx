import React from 'react'

import { useDate } from "../UseDate";
import { dateArray } from '../DayTimeArrays'
import { useDispatch, useSelector } from 'react-redux'
import { reservTime } from '../../../store/slices/storageSlice'


export const EmptySlot = (props) => {
    const { time } = props

        // need to change this hard code after function of login
        const storage = useSelector((state) => state.laundaryBooking)
        let id = storage.users[0].roomNumber
        // hard code
    

    const { date } = useDate(dateArray)
    const stringifyDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

    const dispatch = useDispatch()

    const bookTime = (e) => {
      e.target.style.backgroundColor = 'blue'
      
      const reservation = {
        roomNumber: id,
        date: stringifyDate,
        time: e.target.value
      } 
      console.log(stringifyDate + ' EEGGG');
      dispatch(reservTime(reservation))
    }


  return (
    <>
        <button value={time} onClick={bookTime} className='emptySlot'>               
            {time} 
        </button>
    </>
  )
}
