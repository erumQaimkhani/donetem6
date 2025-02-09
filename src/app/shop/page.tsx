import React from 'react'
import Shopheader from '../components/shopheader'
import Filter from '../components/filter'
import Product from '../components/product'
import Footer from '../components/footer' 

import Pay from '../components/pay'
export default function Shop() {
  return (
    <div>
        <Shopheader />
        <Filter />
        <Product />
        <Pay />
        <Footer />
    </div>
  )
}
