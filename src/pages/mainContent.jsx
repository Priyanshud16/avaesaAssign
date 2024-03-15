import { Link } from 'react-router-dom'
import './mainContent.css'

function MainContent(){
    
    return(
        <div id='container'>
        <div id="content">
            <h1>Mr Arjun</h1>
            <p>Introducing our exclusive 2-week online course designed <br /> specifically for aspiring journalists like you. Whether you're <br /> a budding writer, an aspiring investigative reporter, or simply <br /> curious about the world of journalism, this masterclass is <br /> tailor-made to provide you with practical insights and invaluable  <br /> skills.</p>
            <div id='container-button'>
                <Link to="/contact" className='Link'><button>Contact</button></Link>
               <Link to="/course" className='Link'><button>Course</button></Link>
            </div>
        </div>
        <div className="Mainlogo">
            <img src="https://th.bing.com/th?id=OIP.CISVSKqFmDFFdTsWTUvSrQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        </div>
        </div>
    )
}
export default MainContent