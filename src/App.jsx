

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './Registration'
import Home from './Home'
import Login from './Login'
import DashBoard from './DashBoard'




function App() {

   
  
  return (
    <>
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
        
     </Routes>
    </>
  )
}

export default App


