import {useState,ChangeEvent} from 'react'

function  Filter() {

   const [sliderValue, setSliderValue] = useState(50);
  return (
    <div className='flex p-4 items-center justify-between  box_shadow my-3 rounded-lg'>
         <div className="w-60 mr-5">
            <p className="text-slate-500">City</p>
            <select className="border-2 border-slate-500 p-2 w-11/12 mt-1 rounded-lg">
  <option disabled selected>Select the city</option>
  <option>Kerala</option>
  <option>Another City</option>
  <option>Yet Another City</option>
</select>
         </div>
         <div className="w-60 mr-5">
            <p>Available<span className="text-xs"> (Move in date)</span></p>
            <input className="border-2 border-slate-500 p-1 w-full mt-1 rounded-lg" type='date'/>
            
         </div>
         <div className=" w-60 mr-5">
            <p>Price <span className="text-xs">(In thousands)</span></p>
            
            <div className="flex text-xs mt-2">
            <span>0</span>
            <input type='range' className="border-2 border-slate-500 p-1 w-11/12 mx-2 rounded-lg text-blue-300" min="0" max="100" value={sliderValue} step="5" onChange={(e:ChangeEvent<HTMLInputElement>)=>setSliderValue(parseInt(e.target.value))} />
            <span>100</span>

            </div>
         </div>
         <div className="w-60 mr-5">
            <p>Property type</p>
            <select className="border-2 border-slate-500 p-2 w-11/12 mt-1 rounded-lg">
  <option disabled selected>Select Property type</option>
  <option>Kerala</option>
  <option>Another City</option>
  <option>Yet Another City</option>
</select>
            
         </div>
         <button className='bg-indigo-950 text-white p-2 rounded-lg'>Apply</button>
    </div>
  )
}

export default Filter