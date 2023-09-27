import Navbar from '../component/navbar'
import Filter from '../component/filter'
import NavbarPanel from '../component/navbarPanel'
import { useAppSelector } from '../redux/store'

function Homepage() {
    const open1=useAppSelector((state)=>state.openReducer.open1)
  return (
    <div>
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
    </div>
  )
}

export default Homepage