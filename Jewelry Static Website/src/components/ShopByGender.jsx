import React from 'react'

export default function ShopByGender() {
  return (
    <div>
      <h2 className='text-4xl font-bold text-center text-gray-900'>Shop By Gender</h2> 
        <div className=' 2xl:columns-3 xl:columns-2 md:columns-1 space-y-6 space-x-2 p-3 mt-6 ml-20 mr-20 '>

            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw811805ad/homepage/ShopByGender/sbg-women.jpg" alt="" className='rounded'/>
            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe6fec18e/homepage/ShopByGender/sbg-men.jpg" alt=""  className='rounded'/>
            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1e976d94/homepage/ShopByGender/sbg-kids.jpg" alt=""  className='rounded'/>
        </div>
    </div>
  )
}
