import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode } from 'react-icons/fa'

const MainFooter = () => {
  return (
    <div>
        <footer className="bg-body-tertiary p-3 d-flex justify-content-around aling-items-center">
            <p className=''>MyLoginApp &copy; 2024</p>
            <a href="https://github.com/ROR2022/loginApp">
              <span className='btn btn-light'>
                <FaCode/>
              </span>
            </a>
            <Link to='/terms' className='btn btn-link'>Terms & Conditions</Link>
            
        </footer>
    </div>
  )
}

export default MainFooter