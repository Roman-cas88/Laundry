import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'
import { useDispatch, useSelector } from 'react-redux'


export const MainView = () => {
  const storage = useSelector((state) => state.laundaryBooking)
  const dispatch = useDispatch();
  
  const [stateIndex, setStateIndex] = useState(1)
  
  const date = storage[stateIndex].day
  
  const [rightArrow, setRightArrow] = useState(false)
  const [leftArrow, setLeftArrow] = useState(false)
  
  useEffect(() => {
    if (stateIndex === storage.length - 1) {
      setRightArrow(true)
    }
    else {setRightArrow(false)}
    if (stateIndex === 0) {
      setLeftArrow(true)
    }
    else{setLeftArrow(false)}
  },[stateIndex, storage.length])
  
  const tomorrowFunction = () => {
    setStateIndex(stateIndex + 1)
  }
  const yesterdayFunction = () => {
    setStateIndex(stateIndex - 1)
  }


  const day = date.getDate()
  const month = `${date.getMonth() + 1}`.padStart(2, "0")
  const year = date.getFullYear()
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const dayOfWeek = week[date.getDay()]
  
  const reservTime = storage[stateIndex].time;
  
  const handleClick = (e) => {
    e.target.style.backgroundColor = 'green'
  }


  return (
    <Container className='mainView'>
        <div  className='date'>
          <button disabled={leftArrow} onClick={yesterdayFunction} className='butLeft'>{'<'}</button>
          <div>
            {day}.{month}.{year} <br/>
            {dayOfWeek}
          </div>
          <button disabled={rightArrow} onClick={tomorrowFunction} className='butRight'>{'>'}</button>
        </div>
            {reservTime.map(({time, id}) => {
             if (id.length > 0) {
              return (
              <button key={time} value={time} onClick={handleClick} className='time'>
                 Reserved by {id} on {time}:00
              </button>
            )}
              else {
                return (
              <button key={time} value={time} onClick={handleClick} className='time'>
                  {time}:00
              </button>
            )} 
            })}
    </Container>
  )
}
