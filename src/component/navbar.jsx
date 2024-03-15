import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar(){

    return(
        <div id='navbar'>
           <div id='logo'><h1>Mr. Arun</h1></div>
           <div id='btn'>
            <Link to="/"><button className='button'>Home</button></Link>
           <Link to="/About"><button className='button'>About Us</button></Link>
          <Link to="/course"><button className='button'>Course</button></Link>  
           <Link to="/contact"><button id='contact' className='button'>Contact</button></Link> 
           </div>
        </div>
    )
}

export default Navbar