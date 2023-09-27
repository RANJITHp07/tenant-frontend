import React from 'react'

function Card() {
  return (
    <div className='box_shadow w-80 p-3 rounded-md'>
        <img src='https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2016/08/Renting-e1471429176447.jpg' alt='card-photo' className='w-full h-56'/>
        <div className='my-3'>
            <p className='text-sm'><span className='text-xl font-semibold text-indigo-900'>$5000/</span>month</p>
            <p className='mt-2'>Property name</p>
            <p>Kochi,Kerala,India</p>
        </div>
    </div>
  )
}

export default Card