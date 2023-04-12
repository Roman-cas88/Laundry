import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'

export const MainView = () => {
  const currentDate = new Date()
  const [date, setDate] = useState(currentDate)
  const tomorrowFunction = () => {
    let tomorrow =  new Date()
    tomorrow.setDate(date.getDate() + 1)
    setDate(tomorrow)
  }
  const yesterdayFunction = () => {
    let yesterday =  new Date()
    yesterday.setDate(date.getDate() - 1)
    setDate(yesterday)
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
          <button onClick={yesterdayFunction} className='butLeft'>{'<'}</button>
          <div>
            {day}.{month}.{year} <br/>
            {dayOfWeek}
          </div>
          <button onClick={tomorrowFunction} className='butRight'>{'>'}</button>
        </div>
            {reservTime.map((time) => (
                <div key={time} onClick={handleClick} className='time'>{time}:00</div>
            ))}
    </Container>
  )
}
