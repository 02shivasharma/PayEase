import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {SignUp} from "./pages/SignUp"
import {SignIn} from "./pages/SignIn"
import {Dashboard} from "./pages/Dashboard"
import {Sendmoney} from "./pages/Sendmoney"
function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
       <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/send' element={<Sendmoney />} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
