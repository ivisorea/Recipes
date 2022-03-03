import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1 style={{textAlign: 'center', margin:'5rem', fontSize: '5rem'}}>404</h1>
      <h5 style={{textAlign: 'center', margin:'5rem'}}>Oops. Looks like you took a wrong turn.</h5>
      <div style={{textAlign: 'center'}}>
      <Link to ='/'>
        <Button style={{margin:'0 auto'}}>Go Back</Button>
      </Link>
      </div>
    </>
    
  )
}
