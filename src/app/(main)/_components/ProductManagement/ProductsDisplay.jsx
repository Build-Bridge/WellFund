import React from 'react'
import EachProduct from './EachProduct'
import ProductModal from './ProductModal'

const ProductsDisplay = () => {
  return (
    <div className='min-h-dvh'>
      {
        Array.from({ length: 10 }).map((_, index) => (
          <EachProduct key={index} />
        ))
      }
        <ProductModal/>
    </div>
  )
}

export default ProductsDisplay