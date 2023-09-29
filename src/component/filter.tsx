import {useState,useEffect, ChangeEvent} from 'react'
import Slider from '@mui/material/Slider';
import CloseIcon from '@mui/icons-material/Close';
import { popularCitiesInIndia } from '../services/data/cities';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';
import { filterproperties } from '../redux/features/porperty-slice.ts/action';
import { AppDispatch } from '../redux/store';
import { openM } from '../redux/features/open-slice';

function  Filter() {

   const [sliderValue, setSliderValue] = useState<number | number[]>(50);
   const [filter,setfilter]=useState<string[]>([])
   const [city,setcity]=useState('')
   const [date,setdate]=useState('');
   const [type,settype]=useState('')
   const dispatch=useDispatch<AppDispatch>()

   function valuetext(value: number) {
      return `${value * 100}°C`;
    }

    useEffect(()=>{
      setfilter(popularCitiesInIndia)
    },[])

  const handleFilter=(e:ChangeEvent<HTMLInputElement>)=>{
      try{
         if(e.target.value.length!=0 && filter.length>0){
           setopenDrop(true)
            setcity(e.target.value)
          const newFilter = popularCitiesInIndia.filter((value:string) => {
            return value.toLowerCase().includes(e.target.value.toLowerCase());
          });
          setfilter(newFilter)
         }
         else if(filter.length===0){
          setopenDrop(true)
            setfilter(popularCitiesInIndia)
            
         }else{
          setopenDrop(false)
          setcity('')
         }
        
       }catch(err){
         throw err
       }


    }

    const handlePropertyFilter=()=>{
      try{
           dispatch(filterproperties({city,date,type,price:sliderValue}))
      }catch(err){
        throw err
      }
    }
   
    
    const [openDrop,setopenDrop]=useState(false)
   
  return (
    <div className='lg:flex p-4 items-center bg-white md:bg-white justify-between  box_shadow lg:my-3 rounded-lg z-50'>
      <div className='lg:hidden  flex justify-between'>
      <p className='lg:hidden text-xl font-semibold'>Filter</p>
      <CloseIcon onClick={()=>dispatch(openM({key:"open2",value:false}))}/>
      </div>
      
         <div className="w-60 lg:mr-5 my-3 md:my-0">
            <p className="text-slate-500">City</p>
            <div className='flex items-center border-2 border-slate-600 rounded-md pl-2 py-1 mt-1 w-11/12'>
            <input
  type="text"
  placeholder="Search city to stay"
  onChange={(e:ChangeEvent<HTMLInputElement>)=>handleFilter(e)}
  value={city}
  className="border-none  w-10/12 mb-1 rounded-lg focus:outline-none"
/>
<ArrowDropDownIcon className='cursor-pointer' onClick={()=>setopenDrop(!openDrop)} />
            </div>
           
   { openDrop &&
    <div className='absolute bg-white h-72 w-56 overflow-y-auto p-3 rounded-lg box_shadow'>
     {filter.length >0 ?filter.map((p) => {
        return (
          <option key={p} onClick={()=>{
            setcity(p)
            setopenDrop(false)
          }
         } className='cursor-pointer hover:bg-slate-300 hover:p-2 '>{p}</option>
        );
      }):<p className='text-slate-300'>No such city available</p>
     }
   </div>
}

   

         </div>
         <div className="w-60 lg:mr-5 my-3 md:my-0">
            <p className="text-slate-500">Available<span className="text-xs"> (Move in date)</span></p>
            <input className="border-2 border-slate-500 p-1 w-full mt-1 rounded-lg" type='date' onChange={(e:ChangeEvent<HTMLInputElement>)=>setdate(e.target.value)}/>
            
         </div>
         <div className=" w-60 lg:mr-5 my-3 md:my-0 ">
            <p className="text-slate-500">Price <span className="text-xs">(In thousands)</span></p>
            
            <div className= { openDrop ? "lg:flex text-xs mt-2 hidden":"flex text-xs mt-2" }>
            <span>0</span>
            <Slider defaultValue={50} aria-label="Default" value={sliderValue}
      onChange={(event, newValue) => setSliderValue(newValue)} valueLabelDisplay="auto" />
            <span className='mx-3'>100</span>
              
            </div>
            
         </div>
         <div className="w-60 lg:mr-5 sm:my-3 md:my-0 lg:my-0">
            <p className="text-slate-500">Property type</p>
            <select className="border-2 border-slate-500 p-2 w-11/12 mt-1 rounded-lg" onChange={(e: ChangeEvent<HTMLSelectElement>)=>settype(e.target.value)}>
  <option disabled selected>Select Property type</option>
  <option>Apartment</option>
  <option>Vacation homes</option>
  <option>Single-family</option>
  <option>Condominiums</option>
  <option>Student Housing</option>
 
</select>
            
         </div>
         <button className='bg-indigo-950 my-3 lg:my-1 text-white p-2 rounded-lg' onClick={()=>handlePropertyFilter()}>Apply</button>
    </div>
  )
}

export default Filter