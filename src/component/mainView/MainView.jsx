import React from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'

export const MainView = () => {
  const date = new Date()
  const day = date.getDate()
  const month = `${date.getMonth() + 1}`.padStart(2, "0")
  const year = date.getFullYear()
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const dayOfWeek = week[date.getDay()]
  const reservTime = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22]

  return (
    <Container className='mainView'>
        <div  className='date'>
          <button className='butLeft'>{'<'}</button>
          <div>
            {day}.{month}.{year} <br/>
            {dayOfWeek}
          </div>
          <button className='butRight'>{'>'}</button>
        </div>
            {reservTime.map((time) => (
                <div key={time} className='time'>{time}:00</div>
            ))}
    </Container>
  )
}
