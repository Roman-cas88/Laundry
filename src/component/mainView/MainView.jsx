import React, { createContext, useEffect, useState }  from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'
import { dateArray } from './DayTimeArrays'
import { GetDate } from './GetDate'
import { useDate } from './UseDate'
import { Times } from './Times/Times'


export const dateContext = createContext()
export const MainView = () => {
  
  const { date, tomorrowFunction, yesterdayFunction, rightArrow, leftArrow } = useDate(dateArray)
  const [stringifyDate, setStringifyDate] = useState(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);

  useEffect(() => {
    setStringifyDate(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
  }, [date])
      
  const getDateProps = {
    date, rightArrow, leftArrow, tomorrowFunction, yesterdayFunction
  }

  const providerValues = {date, stringifyDate}

  return (
    <Container className='mainView'>
      <dateContext.Provider value={providerValues}>
        <GetDate { ...getDateProps }/>
        <Times/>
      </dateContext.Provider>
    </Container>
  )
}
