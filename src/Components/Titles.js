import Nav from 'react-bootstrap/Nav';
import './Titles.css';
import settings from './../img/settings.png';
import adduser from './../img/adduser.png';
import login from './../img/login.png';
import {FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, 
  FaMailBulk, FaUser, FaUserCircle, FaUserPlus, FaEnvelope, FaBus, FaFacebook, FaWhatsapp, FaInstagram, FaViber, FaGoogle, FaReact, FaPhp, FaSquareFull, FaStethoscope, FaCogs, FaUserSecret} from 'react-icons/fa';
 


function NavTitle() {
  return (
        <Nav className='ntitle'>
 
   
    <div class="cook">
      <p>Салом,  .<a href="exit.php"> Баромадан</a> </p>
    </div>
    
 <div class="setings">
    <a href="update.php">   
    <FaUserSecret className="icons"/>
         </a>
   
   
                  
                   

   <a href="update.php">  
   <FaCogs className="icons"/>

                    </a>
   </div>
        </Nav>
  );
}

export default NavTitle;