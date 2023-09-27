import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import { openM } from '../redux/features/open-slice';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function NavbarPanel() {
  const open=useAppSelector((state)=>state.openReducer.open1)
  const dispatch=useDispatch()


  return (
    <div className='bg-white w-1/2 '>
      <div className='flex justify-end '><CloseIcon onClick={()=>dispatch(openM({key:"open1",value:false}))}/></div>
      <div className='my-7 mx-2'>
      
      <p className='text-lg font-semibold hover:bg-slate-300 hover:p-3 hover:rounded-lg my-2'> <HomeIcon/> Home</p>
      <hr/>
         <p className='text-lg font-semibold hover:bg-slate-300 hover:p-3 hover:rounded-lg my-2'> <LoginIcon/> Login</p>
         <hr/>
         <p className='text-lg font-semibold hover:bg-slate-300 hover:p-3 hover:rounded-lg my-2'><VpnKeyIcon/> Sign Up</p>
         <hr/>
      </div>
        
    </div>
  )
}

export default NavbarPanel