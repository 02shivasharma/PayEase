import React from 'react'
import { AppBar } from '../component/AppBar'
import { Balance } from '../component/Balance'
import { Users } from '../component/Users'
export const Dashboard = () => {
  return (
    <div>
    <AppBar  />
    <div className='m-8'>
     <Balance value={"10000"} />
     <Users />
    </div>
     </div>
  )
}
