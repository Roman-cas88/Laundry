import React from 'react'
import { useSelector } from 'react-redux'


export const BookedSlot = (props) => {
    const storage = useSelector((state) => state.laundaryBooking)
    const { time, room } = props
    let userName = storage.users.find(el => el.roomNumber === room).name

    // hard code before login
    const id = '1404'
    // hard code

    const changeBookTime = (e) => {
      console.log(e.target.value);
    }
    return (
    <>{room === id && 
        <button key={time} value={time} onClick={changeBookTime} className='changeableSlot'>
          Booked by {userName} from room: {room} on {time}
        </button>
    }
    {room !== id &&
        <div key={time} className='bookedSlot'>
          Booked by {userName} from room: {room} on {time}
        </div>
    }
    </>
  )
}
