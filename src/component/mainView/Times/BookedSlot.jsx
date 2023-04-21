import React from 'react'
import { useSelector } from 'react-redux'


export const BookedSlot = (props) => {
    const storage = useSelector((state) => state.laundaryBooking)

    const { time, room } = props
    
    let userName = storage.users.find(el => el.roomNumber === room).name

    return (
    <>
        <div key={time} className='bookedSlot'>
          Booked by {userName} from room: {room} on {time}
        </div>
    </>
  )
}
