import { useState } from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import './App.css'
import {SignUp} from "./pages/SignUp"
import {SignIn} from "./pages/SignIn"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/Sendmoney"

function App() {
  const [count, setCount] = useState(0)
  function isAuthenticated(){
    const token = localStorage.getItem("token");

    return token? true : false;
  }
  return (
     <BrowserRouter>
       <Routes>
        <Route path='/signup' element={ <SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/dashboard' element={isAuthenticated ?<Dashboard /> : <Navigate to="signup" />} />
        <Route path='/send' element={<SendMoney />} />
        <Route path='/' element={<Navigate to={isAuthenticated ? '/dashboard' : '/signup'} />} />
       </Routes>
     </BrowserRouter>
    
  )
}

export default App
