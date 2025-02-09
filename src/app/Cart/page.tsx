import React from 'react'
import Billing from '../components/billing'
import Pay from '../components/pay'
import Checkout1 from '../components/checkout1'
import Filter from '../components/filter'
import GetTouch from '../components/gettouch'





export default function Cart() {
  return (
    <>
    
        <Billing />
        <Pay />
      
        <GetTouch />
        <Checkout1 />
        <Filter  />
        
        </>
  )
}
