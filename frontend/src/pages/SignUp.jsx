import React from 'react'
import { useState } from 'react'
import {Heading} from "../component/Heading"
import { SubHeading } from '../component/SubHeading'
import { Input } from '../component/Input'
import { Button } from '../component/Button'
import { BottomWarning } from '../component/BottomWarning'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 function onClickHandler(){
   axios.post("http://localhost3000/api/v1/user/signup",{
                      firstName,
                      lastName,
                      username,
                      password
   })
 }
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white w-80 text-center p-2 h-max px-4 rounded-lg'>
                <Heading label={"Sign Up"} />
                <SubHeading label = {"Enter your information to create an account"} />
                <Input label={"First Name"} placeholder="John" onChange={(e)=> setFirstName(e.target.value)}/>
                <Input label={"Last Name"} placeholder="Doe" onChange={(e)=> setLastName(e.target.value)}/>
                <Input label={"Email"} placeholder="shiva@gmail.com" onChange={(e)=> setUserName(e.target.value)}/>
                <Input label={"Password"} placeholder="123456" onChange={(e)=> setPassword(e.target.value)}/>
                <div className='pt-4'>
                 <Button onClick= {async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password,
              
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
            }
            }
             label={"Sign up"} />
                 </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signIn"} />
            </div>
        </div>
    </div>
  )
}
