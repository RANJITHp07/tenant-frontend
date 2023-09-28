import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import ShowerIcon from '@mui/icons-material/Shower';
import MenuIcon from '@mui/icons-material/Menu';

interface IProperty {
  userId?: string;
  property_name: string;
  property_address: string;
  property_type: "Apartment" | "Vacation homes" | "Single-family" | "Condominiums" | "Student Housing";
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  price: number;
  description: string;
  images: string[];
}



function Card({property}:{property:IProperty}) {
  console.log(property.images[0])
  return (
    <div className='box_shadow w-80  rounded-md mx-3 my-5'>
        <img crossOrigin="anonymous" src={"http://localhost:8000/images/" + property.images[0]}  alt='card-photo' className='w-full h-72 hover:p-2 hover:rounded-lg rounded-lg'/>
        <div className='my-3 p-3'>
            <p className='text-sm'><span className='text-xl font-semibold text-indigo-900'>${property.price}/</span>month</p>
            <p className='mt-2 text-slate-600 '>{property.property_name}</p>
            <p className='mb-3 text-slate-600 text-sm mt-2'>{property.property_address}</p>
            <hr className='border-2' />
            <div className='flex justify-between mt-1 items-center'>
                <p className='text-sm'><LocalHotelIcon/> {property.bedrooms} beds</p>
                <p className='text-sm'> <ShowerIcon/> {property.bathrooms} bathroom</p>
                <p className='text-sm'><MenuIcon/> {property.squareFeet}sqft</p>
            </div>
        </div>
    </div>
  )
}

export default Card