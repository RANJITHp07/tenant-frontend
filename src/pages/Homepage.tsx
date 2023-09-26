import Navbar from '../component/navbar'
import Filter from '../component/filter'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <div className="mx-9">
            <p className='text-indigo-950 text-2xl mt-3 font-bold'>Search Properties for rent</p>
            <Filter/>
        </div>
    </div>
  )
}

export default Homepage