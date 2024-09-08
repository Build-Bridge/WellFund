import React from 'react'
import EachProduct from './EachProduct'

const ProductsDisplay = () => {
  return (
    <div className='min-h-dvh'>
      {
        Array.from({ length: 10 }).map((_, index) => (
          <EachProduct key={index} />
        ))
      }
        {/* <EachProduct/> */}
    </div>
  )
}

export default ProductsDisplay