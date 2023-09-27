import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import { openM } from '../redux/features/open-slice';

function NavbarPanel() {
  const open=useAppSelector((state)=>state.openReducer.open1)
  const dispatch=useDispatch()


  return (
    <div>
      <div><CloseIcon onClick={()=>dispatch(openM({key:"open1",value:false}))}/></div>
        <p>Home</p>
         <p>Login</p>
         <p>Sign Up</p>
    </div>
  )
}

export default NavbarPanel