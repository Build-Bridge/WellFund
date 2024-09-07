import React from 'react'

const EachProduct = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5 p-2'>
        <div className='grid grid-cols-3 gap-5 items-center justify-between w-full h-fit'>
            <div className='flex items-end gap-1 h-fit'>
                <img src={'/prd1.svg'} alt="" />
                <div className='p t-5'>
                    <h1 className='text-white text-[14px] leading-[20px] font-bold'>Aspirin</h1>
                    <small>M8N7R6J2</small>
                </div>
            </div>
            <div>
                <h1>category</h1>
                <div>
                <small>Health Product</small>
                <small>Drugs</small>
                </div>
            </div>
            <div>
                <div>
                    <h1>SKU</h1>
                    <small>FAE-7004</small>
                </div>
                <div>
                    <h1>Price</h1>
                    <small>$10.00</small>
                </div>
            </div>
        </div>
        <div className='flex justify-between p-3 rounded-lg m-2 bg-[#242A32]'>
            <div className='flex items-start gap-1'>
                <img src={'/location.svg'} alt="" />
                <p className='text-[#242A32] leading-[14.4px] text-white text-[12px]'>Starlabs Pharmacy LTD</p>
            </div>
            <div  className='flex items-start gap-1'>
                <img src={'/package.svg'} alt="" />
                <p className='text-[#242A32] leading-[14.4px] text-white text-[12px]'>12 Product in stock</p>
            </div>
            <div className="flex items-center gap-1">
                  <img src={"/active.svg"} alt="" />
                  <small className="text-[#059C48] text-[14px] leading-[20px] capitalize">
                    active
                  </small>
                </div>
        </div>
    </div>
  )
}

export default EachProduct