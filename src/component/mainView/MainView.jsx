import React from 'react'
import { Container } from 'react-bootstrap'
import './mainView.css'

export const MainView = () => {
    const reservTime = ['6.00', '7.00', '8.00', '9.00', '10.00', '11.00', '12.00',
     '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00',
    '20.00', '21.00', '22.00']
  return (
    <Container className='mainView'>
        <div style={{height:'6%', display:'flex', justifyContent:'center', alignItems:'center'}} className='text-center bg-primary text-white border border-dark'>Date</div>
            {reservTime.map((time) => (
                <div key={time} style={{height:'5%', textAlign:'center'}} className='border-2 text-center bg-secondary text-white border border-dark'>{time}</div>
            ))}
    </Container>
  )
}
