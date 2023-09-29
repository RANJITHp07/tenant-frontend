import { useEffect, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openM } from '../redux/features/open-slice';import { logout } from '../redux/features/user-slice.ts/reducer';
;

function Navbar() {
  
  const [isLogged,setisLogged] = useState(false)

  const dispatch=useDispatch()
  const navigate=useNavigate()


  useEffect(()=>{
    const userId= localStorage.getItem('userId')
    if(userId){
      setisLogged(true)
    }
  },[])

  return (
    <div>
        <nav className='bg-indigo-950 w-full p-3 flex justify-between items-center'>
            <div className='flex items-center'>
            <p className='text-white font-bold md:text-4xl text-2xl lg:text-6xl mx-3'>LoGo</p>
            <p className='text-white mx-3 hidden md:block'>Home</p>
            </div>
            <div className='md:hidden'><ListIcon className='text-white text-xl' onClick={()=>dispatch(openM({key:"open1",value:true}))}/></div>
            {
              !isLogged ? <div className='hidden md:block'>
              <a href='/login' className='bg-indigo-300 px-4 py-1 rounded-lg mx-3 hover:text-lg hover:no-underline'>Login</a>
              <a href='/signup' className='bg-indigo-300 px-2 py-1 mx-3 rounded-lg hover:text-lg hover:no-underline'>Sign Up</a>
          </div>:<button  className='bg-indigo-300 px-4 py-1 rounded-lg mx-3 hover:text-lg hover:no-underline' onClick={()=>{
            dispatch(logout())
            navigate('/login')
          }}>Logout</button>
            }
            
              
        </nav>
    </div>
  )
}

export default Navbar