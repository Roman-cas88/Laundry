import React from 'react'


export const GetDate = (props) => {

    const { date, rightArrow, leftArrow, tomorrowFunction, yesterdayFunction } = props

    const day = date.getDate()
    const month = `${date.getMonth() + 1}`.padStart(2, "0")
    const year = date.getFullYear()
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayOfWeek = week[date.getDay()]

    return (
    <div  className='date'>
        <button disabled={leftArrow} onClick={yesterdayFunction} className='butLeft'>{'<'}</button>
            <div>
                {day}.{month}.{year} <br/>
                {dayOfWeek}
            </div>
        <button disabled={rightArrow} onClick={tomorrowFunction} className='butRight'>{'>'}</button>
  </div>
  )
}
