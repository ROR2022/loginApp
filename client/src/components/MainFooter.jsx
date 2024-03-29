import React from 'react'
import { Link } from 'react-router-dom'

const MainFooter = () => {
  return (
    <div>
        <footer className="bg-body-tertiary p-3 d-flex justify-content-around aling-items-center">
            <p className=''>MyLoginApp &copy; 2024</p>
            <Link to='/terms' className='btn btn-link'>Terms & Conditions</Link>
            
        </footer>
    </div>
  )
}

export default MainFooter