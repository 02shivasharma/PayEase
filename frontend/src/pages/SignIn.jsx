import React from 'react'
import {Heading} from "../component/Heading"
import { SubHeading } from '../component/SubHeading'
import { Input } from '../component/Input'
import { Button } from '../component/Button'
import { BottomWarning } from '../component/BottomWarning'
export const SignIn = () => {
  return (
    <div className='flex h-screen justify-center bg-slate-300'>
     <div className='flex  flex-col justify-center '>
      <div className='bg-white w-80 rounded-lg p-2 text-center h-max '>
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter Your credentials to acess your account"} />
        <Input label={"Email"} placeholder={"shiva@gmail.com"}  />
        <Input label={"Password"} placeholder={""}  />
        <div className='pt-4 pl-2 pr-2'>
        <Button label={"Sign In"} />
        </div>
        <BottomWarning label="Don't have an account?" buttonText="Sign Up" to="/signup"/>
      </div>
      
     </div>

    </div>
  )
}
