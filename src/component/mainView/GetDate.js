import { dateArray } from "./DayTimeArrays";
import React, { useEffect, useState } from 'react'


export const GetDate = () => {

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
