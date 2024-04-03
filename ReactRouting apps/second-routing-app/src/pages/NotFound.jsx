import React from 'react'
import error from "../img/404.jpg"

const NotFound = () => {
  return (
    <div className='errorWrapper'>
      <img src={error} alt="error" />
    </div>
  )
}

export default NotFound