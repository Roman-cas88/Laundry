import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'
import { initialState } from '../../store/slices/initialState'


export const MainView = () => {
  const [stateIndex, setStateIndex] = useState(1)
 
  const date = initialState[stateIndex].day

  const [rightArrow, setRightArrow] = useState(false)
  const [leftArrow, setLeftArrow] = useState(false)

  useEffect(() => {
    if (stateIndex === initialState.length - 1) {
      setRightArrow(true)
    }
    else {setRightArrow(false)}
    if (stateIndex === 0) {
      setLeftArrow(true)
    }
    else{setLeftArrow(false)}
  },[stateIndex])

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
  const reservTime = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22]


  const handleClick = (e) => {
    e.target.style.backgroundColor = 'green'
    console.log();
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
            {reservTime.map((time) => (
                <div key={time} onClick={handleClick} className='time'>{time}:00</div>
            ))}
    </Container>
  )
}
