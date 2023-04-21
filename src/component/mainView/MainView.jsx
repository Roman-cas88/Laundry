import React, { createContext }  from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'
import { dateArray } from './DayTimeArrays'
import { GetDate } from './GetDate'
import { useDate } from './UseDate'
import { Times } from './Times/Times'


export const MainView = () => {
  const dateContext = createContext()
  const { date, tomorrowFunction, yesterdayFunction, rightArrow, leftArrow } = useDate(dateArray)
    
  const stringifyDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  
  const getDateProps = {
    date, rightArrow, leftArrow, tomorrowFunction, yesterdayFunction
  }

  return (
    <Container className='mainView'>
      <GetDate { ...getDateProps }/>
      <Times date={stringifyDate}/>
    </Container>
  )
}
