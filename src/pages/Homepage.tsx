import {useEffect} from "react"
import Navbar from '../component/navbar'
import Filter from '../component/filter'
import NavbarPanel from '../component/navbarPanel'
import { useAppSelector,AppDispatch} from '../redux/store'
import Card from '../component/card'
import { useDispatch } from "react-redux"
import { filterproperties, getAllproperties } from "../redux/features/porperty-slice.ts/action"
import { openM } from "../redux/features/open-slice"


function Homepage() {
    const open1=useAppSelector((state)=>state.openReducer.open1)
    const open2=useAppSelector((state)=>state.openReducer.open2)
    const {loading,properties,err}=useAppSelector((state)=>state.propertyReducer)
    const dispatch=useDispatch<AppDispatch>()

    useEffect(()=>{
       dispatch(getAllproperties()) 
       
    },[])
    
  

  return (
    <div>
      {
        !loading && <>
        <Navbar/>
        {
          open1 &&
          <div
          className="fixed top-0 left-0 right-0 bottom-0 flex  bg-black bg-opacity-50 z-50"
        >
          <NavbarPanel/>
          </div>
        }
        
        <div className="mx-9">
            <p className='text-indigo-950 text-2xl mt-3 font-bold'>Search Properties for rent</p>
            <div className="mx-9 hidden lg:block">
            <Filter/>
            </div>
            <button className="my-3 bg-indigo-950 text-white p-2 rounded-md lg:hidden" onClick={()=>dispatch(openM({key:"open2",value:true}))}>Filter</button>
            
        </div>
        {
          open2 &&  <div
          className="fixed top-0 left-0 right-0 bottom-0 flex  bg-black bg-opacity-50 z-50 lg:hidden"
        >
          <Filter/>
          </div>
        }
        
        <div className=' flex flex-wrap mx-9 my-12'>
          {
            properties.length >0 ? properties.map((p)=>{
              return (<>
               <div className="w-full  md:w-1/2 lg:w-1/4 ">
    <Card property={p} />
  </div>
              </>)
            }) : <p className="text-2xl font-semibold text-slate-500 mx-auto my-12 ">There  is no houses available for this price</p>
          }
        
  
        </div>
        </>
      }
    </div>
  )
}

export default Homepage