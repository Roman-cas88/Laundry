import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reservTime } from '../../../store/slices/storageSlice'
import { dateContext } from '../MainView'



export const EmptySlot = (props) => {
    const { time } = props

        // need to change this hard code after function of login
        const storage = useSelector((state) => state.laundaryBooking)
        let id = storage.users[0].roomNumber
        // hard code
    
        const { stringifyDate } = useContext(dateContext)

    const dispatch = useDispatch()

    const bookTime = (e) => {
      e.target.style.backgroundColor = 'blue'
      
      const reservation = {
        roomNumber: id,
        date: stringifyDate,
        time: e.target.value
      } 
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
