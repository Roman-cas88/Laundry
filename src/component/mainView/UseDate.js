import { useState, useEffect } from 'react'

export const useDate = (dateArray) => {
    const [stateIndex, setStateIndex] = useState(1)
    
    const currentDate = dateArray[stateIndex].day

    const [date, setDate] = useState(currentDate)
    
    const tomorrowFunction = () => {
    setStateIndex(stateIndex + 1)
    }
    const yesterdayFunction = () => {
    setStateIndex(stateIndex - 1)
    }  

      const [rightArrow, setRightArrow] = useState(false)
      const [leftArrow, setLeftArrow] = useState(false)

  useEffect(() => {
      if (stateIndex === dateArray.length - 1) {
          setRightArrow(true)
          setDate(currentDate)
      }
      else {setRightArrow(false)}
      if (stateIndex === 0) {
          setLeftArrow(true)
          setDate(currentDate)
      }
      else{
        setLeftArrow(false)
        setDate(currentDate)
    }
  },[stateIndex, dateArray, currentDate])
  
  return {date, tomorrowFunction, yesterdayFunction, rightArrow, leftArrow}
}
