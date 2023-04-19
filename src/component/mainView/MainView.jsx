import React from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'
// import { useDispatch, useSelector } from 'react-redux'
import { timeArray } from './DayTimeArrays'
import { GetDate } from './GetDate'


export const MainView = () => {
  // const storage = useSelector((state) => state.laundaryBooking)
  // const dispatch = useDispatch();
  

  const handleClick = (e) => {
    e.target.style.backgroundColor = 'green'
    
    // let id = 1040
    // dispatch(reservTime(id))
    console.log(e.target.id);
  }


  return (
    <Container className='mainView'>
      <GetDate />
            {timeArray.map((time) => (
              <button key={time} value={time} onClick={handleClick} className='time'>               
                {time} 
              </button>
             ))}
    </Container>
  )
}
