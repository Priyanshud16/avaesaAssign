import {Routes,Route} from 'react-router-dom'
import About from "../pages/About"
import LandingHome from './LandingHomePage/LandingHome'
import Course from '../pages/Course'
import Contact from '../pages/Contact'
function AllRoutes(){
return (
    <Routes>
  <Route path='/' element={<LandingHome/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path='/course' element={<Course/>} />
  <Route path='/contact' element={<Contact/>}/>
    </Routes>
)
}

export default AllRoutes