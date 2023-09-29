import { message } from 'antd'
import Form from '../component/form'
import {useEffect} from "react"
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate=useNavigate()
 useEffect(()=>{
   const token=localStorage.getItem('userId')
   if(token){
     navigate("/")
     message.info("Already loggedIn")
   }
 },[])
 
  return (
    <div>
        <Form page ={false}/>
    </div>
  )
}

export default LoginPage