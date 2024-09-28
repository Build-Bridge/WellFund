import React from 'react'
import EachProduct from './EachProduct'
import ProductModal from './ProductModal'
import { ProductCard } from '../product-card'

const ProductsDisplay = () => {
  return (
    <div className='min-h-dvh flex flex-col gap-2'>
      {
        Array.from({ length: 10 }).map((_, index) => (
            <ProductCard key={index} />
        ))
      }
        {/* <ProductModal/> */}
    </div>
  )
}

export default ProductsDisplay