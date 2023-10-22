import React from 'react'
import { Container } from 'react-bootstrap'

const Newsletter = () => {
  return (
    <div className='news-wrapper py-5'>
        <Container>
            <div className="news-text d-flex justify-content-between align-items-center text-light">
                <h1 >Subscribe To Newsletter</h1>
                <form action="" className='d-flex'>
                    <input type="email" placeholder='Enter Your Email' className='form-control rounded-0'/>
                    <button type='submit' className='global-button-one'>Send</button>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Newsletter