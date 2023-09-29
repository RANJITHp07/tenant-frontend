import {useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import Form from '../component/form'
import { message } from "antd"

function SigninPage() {

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
        <Form page={true}/>
    </div>
  )
}

export default SigninPage