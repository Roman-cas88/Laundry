import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'
import { useDispatch, useSelector } from 'react-redux'
import { reservTime } from '../../store/slices/storageSlice'
import { timeArray, dateArray } from './DayTimeArrays'
import { GetDate } from './GetDate'


export const MainView = () => {
  const storage = useSelector((state) => state.laundaryBooking)
  const dispatch = useDispatch();
  
  const [stateIndex, setStateIndex] = useState(1)
    
  const date = dateArray[stateIndex].day

  const [rightArrow, setRightArrow] = useState(false)
  const [leftArrow, setLeftArrow] = useState(false)

  useEffect(() => {
      if (stateIndex === dateArray.length - 1) {
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
  const month = date.getMonth()+1
  const year = date.getFullYear()
  
  const stringifyDate = `${day}/${month}/${year}`;
  let id = 1040
  
  const handleClick = (e) => {
    e.target.style.backgroundColor = 'green'

    const reservation = {
      id: id,
      date: stringifyDate,
      time: e.target.value
    } 
    dispatch(reservTime(reservation))
    console.log(storage.reserve);
  }

  const childProps = {
    date, rightArrow, leftArrow, tomorrowFunction, yesterdayFunction
  }

  return (
    <Container className='mainView'>
      <GetDate { ...childProps }/>

      {timeArray.map((time) => (
        <button key={time} value={time} onClick={handleClick} className='time'>               
          {time} 
        </button>
        ))}
        
    </Container>
  )
}
