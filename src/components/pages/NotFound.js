import React from 'react'
import PageHeader from './utility/PageHeader'
import {HeaderThree} from './utility/HeaderData'
import { Link } from 'react-router-dom';
import { Button } from './utility/Button'
import '../style/NotFound.css'

function notFound() {
  return (
    <div className='NotFound-wrap'>
      <PageHeader {...HeaderThree}/>
      <div className='NotFound-desc'>
        <h1>Oops!</h1>
        <h2>Page doesn't exist</h2>
        <div className='NotFound-btn'>
          <Link to='/'>
            <Button 
              className='btn btn-a'
              buttonStyle='primary'
              buttonSize='btn--medium'
              buttonColor='green'
            >Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div> 
    )
}

export default notFound