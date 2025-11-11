import React from 'react'

export default function Newcollections() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-gray-900 ">New Collections</h2>
      <p className="mt-2 text-center text-gray-600">Explore our latest jewelry collections.</p>

    <div className="columns-1 md:columns-3 gap-100 p-8 mt-8 ml-50">
        <div className="collection-item mb-8 w-160">
            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc5b6b963/homepage/tanishq-collections/festive-edit-desktop.jpg" alt="" className='rounded mb-4 w-130' />
            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg" alt="" className='rounded mb-4 w-130 h-154' />
        </div>
    </div>
    </div>
  )
}
