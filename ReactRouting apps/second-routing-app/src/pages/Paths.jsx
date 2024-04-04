import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Paths = () => {
  return (
    <div className='pathWrapper'>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, architecto.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iure delectus molestiae odio quos fuga hic adipisci cupiditate ipsum alias repellendus quo commodi culpa porro.</p>
        <div className='pathsBtnGroup'>
            {/* <Link to="">Frontend</Link> used so frontend loads when paths page loads*/}
            <Link to="frontend">Frontend</Link>
            <Link to="backend">Backend</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Paths