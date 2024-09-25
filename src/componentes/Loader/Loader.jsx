import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

import "./Loader.css"

export const Loader = () => {
  return (

    <div className='loader-cont' >
        <Spinner animation="grow" variant="info" />
    </div>

   
  )
}
