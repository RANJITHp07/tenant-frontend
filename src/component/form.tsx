import { useRef ,ChangeEvent, useEffect} from 'react';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from '../redux/store';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { signUp } from '../redux/features/user-slice.ts/action';
import { useNavigate } from 'react-router-dom'

function Form({page}:{page:true}) {

    const username=useRef<HTMLInputElement>(null);
    const email=useRef<HTMLInputElement>(null);
    const password=useRef<HTMLInputElement>(null);
    const confirm_password=useRef<HTMLInputElement>(null);
    const {loading,data}=useAppSelector((state)=>state.userReducer)

    const dispatch=useDispatch<AppDispatch>()

    const handlesignUp=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if( password.current && password.current.value.length <8){
            message.info("Minimum length should be 8")
        }else{
            if(password.current && username.current && email.current && confirm_password.current && (password.current.value===confirm_password.current.value)){
                const user={
                    username:username.current.value,
                    email_id:email.current.value,
                    password:password.current.value
                }
                
                dispatch(signUp(user)).then(()=>{
                    message.info(data)
                })
                console.log(data)
                  
            }else{
                message.info("Fill all the fields")
            }
        }
    }

    const handleLogin=(e:React.FormEvent<HTMLFormElement>)=>{

    }

    

  return (
    <div className="md:flex md:my-20 md:mx-16 lg:mx-32">
        <div className="grid place-content-center md:hidden my-5">
        <img src={'/login.jpg'} width={300} height={300} alt="Signin Profile" />
      </div>
      <div className="grid place-content-center w-screen md:justify-start md:ml-5 lg:grid lg:place-content-center">
        <form onSubmit={page ? handlesignUp : handleLogin}>
        {page && (
          <div className="mb-2 md:mb-1 w-full">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username*
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="mt-1 block w-full p-3 md:p-2 lg:p-3 border-2 border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ref={username}
              required
            />
          </div>
        )}

        <div className="mb-2 md:mb-1">
          <label htmlFor="email" className="block text-medium font-medium text-gray-700">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 block w-full p-3 border-2 md:p-2 lg:p-3 border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ref={email}
            required
          />
        </div>
        <div className="mb-2 md:mb-1">
          <label htmlFor="password" className="block text-sm font-medium mt-2 text-gray-700">
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="mt-1 block w-full p-3 md:p-2 lg:p-3 border-2 border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            min={8}
            ref={ password }
            required
          />
        </div>
        {page && (
          <div className="mb-2">
            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
              Confirm Password*
            </label>
            <input
              id="confirm_password"
              type="password"
              placeholder="Confirm your password"
              className="mt-1 block w-full p-3 border-2 md:p-2 lg:p-3 border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ref={confirm_password}
              required
            />
          </div>
        )}
        
        {page ? (
          <button
            type="submit"
            className="w-full px-4 py-3 my-2 text-base md:p-2 lg:p-3   font-semibold text-white bg-indigo-950 rounded-md hover:bg-indigo-700"
          >
            {loading ? <CircularProgress /> : 'Submit'}
          </button>
        ) : (
          <button
            type="submit"
            className="w-full px-4 py-2 text-base md:p-2 lg:p-3  mt-3  font-semibold text-white bg-indigo-950 rounded-md hover:bg-indigo-700"
          >
            {loading ? <CircularProgress /> : 'Login'}
          </button>
        )}
         </form>
        {page ? (
          <>
            <p className="mt-3 md:text-sm">
              Do you have an account?
              <a href="/login" className="text-blue-500 md:text-center">
                {' '}
                Login
              </a>
            </p>
          </>
        ) : (
          <>
            <p className="mt-3 md:text-sm">
              Don't have an account?
              <a href="/signin" className="text-blue-500 md:text-center">
                {' '}
                Create
              </a>
            </p>
          </>
        )}
      </div>
      <div>
        <img src={'/login.jpg'} width={1000} height={1000} alt="Signin Profile" className="hidden md:block" />
      </div>
    </div>
  )
}

export default Form