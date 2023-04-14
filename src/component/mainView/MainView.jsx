import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'


export const MainView = () => {
  const currentDate = new Date()
  const [date, setDate] = useState(currentDate)
  const [leftArrowStyle, setLeftArrowStyle] = useState({color:'white', disabled:false})
  const [rightArrowStyle, setRightArrowStyle] = useState({color:'white', disabled:false})

  let lastDay = new Date()
  lastDay.setDate(currentDate.getDate() + 5)

  let historyLastDay = new Date()
  historyLastDay.setDate(currentDate.getDate() - 1)

  useEffect(()=>{
    if (date > lastDay) {
      setRightArrowStyle({
        style: {color:'grey'},
        disabled: true
      })
    }
    else(setRightArrowStyle({color:'white', disabled:false}))
    if (date < historyLastDay) {
      setLeftArrowStyle({
        style: {color:'grey'},
        disabled: true
      })
    }
    else {setLeftArrowStyle({color:'white', disabled:false})}

  },[date])

const tomorrowFunction = (e) => {
    let tomorrow =  new Date()
    tomorrow.setDate(date.getDate() + 1)
    setDate(tomorrow)
  }
  const yesterdayFunction = (e) => {
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
          <button style={leftArrowStyle.style} disabled={leftArrowStyle.disabled} onClick={yesterdayFunction} className='butLeft'>{'<'}</button>
          <div>
            {day}.{month}.{year} <br/>
            {dayOfWeek}
          </div>
          <button style={rightArrowStyle.style} disabled={rightArrowStyle.disabled} onClick={tomorrowFunction} className='butRight'>{'>'}</button>
        </div>
            {reservTime.map((time) => (
                <div key={time} onClick={handleClick} className='time'>{time}:00</div>
            ))}
    </Container>
  )
}
