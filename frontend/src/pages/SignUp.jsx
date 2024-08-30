import React from 'react'
import {Heading} from "../component/Heading"
import { SubHeading } from '../component/SubHeading'
import { Input } from '../component/Input'
import { Button } from '../component/Button'
import { BottomWarning } from '../component/BottomWarning'
export const SignUp = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-white w-80 text-center p-2 h-max px-4 rounded-lg'>
                <Heading label={"Sign Up"} />
                <SubHeading label = {"Enter your information to create an account"} />
                <Input label={"First Name"} placeholder="John"/>
                <Input label={"Last Name"} placeholder="Doe"/>
                <Input label={"Email"} placeholder="shiva@gmail.com"/>
                <Input label={"Password"} placeholder="123456"/>
                <div className='pt-4'>
                 <Button label={"Sign up"} />
                 </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signIn"} />
            </div>
        </div>
    </div>
  )
}
