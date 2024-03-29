import React from 'react'
import MainFooter from '../components/MainFooter'
import MainNavbar from '../components/MainNavbar'

const Error404 = () => {
  return (
    <div>
      <MainNavbar />
        <h1 className='d-flex justify-content-center alert alert-danger'>Error 404: Page not found</h1>
      <MainFooter />
    </div>
  )
}

export default Error404