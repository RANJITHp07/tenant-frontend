import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import ShowerIcon from '@mui/icons-material/Shower';
import MenuIcon from '@mui/icons-material/Menu';

function Card() {
  return (
    <div className='box_shadow w-80  rounded-md mx-3 my-5'>
        <img src='https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2016/08/Renting-e1471429176447.jpg' alt='card-photo' className='w-full h-72 hover:p-2 hover:rounded-lg rounded-lg'/>
        <div className='my-3 p-3'>
            <p className='text-sm'><span className='text-xl font-semibold text-indigo-900'>$5000/</span>month</p>
            <p className='mt-2 text-slate-600 '>Residential block</p>
            <p className='mb-3 text-slate-600 text-sm'>Kochi,Kerala,India</p>
            <hr className='border-2' />
            <div className='flex justify-between mt-1 items-center'>
                <p className='text-sm'><LocalHotelIcon/> 3 beds</p>
                <p className='text-sm'> <ShowerIcon/> 3 bathroom</p>
                <p className='text-sm'><MenuIcon/> 2100sqft</p>
            </div>
        </div>
    </div>
  )
}

export default Card