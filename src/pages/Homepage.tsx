import {useEffect} from "react"
import Navbar from '../component/navbar'
import Filter from '../component/filter'
import NavbarPanel from '../component/navbarPanel'
import { useAppSelector,AppDispatch} from '../redux/store'
import Card from '../component/card'
import { useDispatch } from "react-redux"
import { getAllproperties } from "../redux/features/porperty-slice.ts/action"


function Homepage() {
    const open1=useAppSelector((state)=>state.openReducer.open1)
    const {loading,properties,err}=useAppSelector((state)=>state.propertyReducer)
    const dispatch=useDispatch<AppDispatch>()

    useEffect(()=>{
       dispatch(getAllproperties())
        
    },[dispatch])
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
            <Filter/>
        </div>
        <div className=' flex flex-wrap mx-9 my-12'>
          {
            properties.map((p)=>{
              return (<>
               <div className="w-full  md:w-1/2 lg:w-1/4 ">
    <Card property={p} />
  </div>
              </>)
            })
          }
        
  
        </div>
        </>
      }
    </div>
  )
}

export default Homepage