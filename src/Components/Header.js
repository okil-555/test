import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../img/Logo.png';
import './Header.css';
import React, { useState } from 'react'
import {FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, 
  FaMailBulk, FaUser, FaUsers, FaUserCircle, FaUserPlus, FaEnvelope, FaBus, FaFacebook, FaWhatsapp, FaInstagram, FaViber, FaGoogle, FaReact, FaPhp, FaSquareFull, 
  FaStethoscope, FaCogs, FaUserSecret, FaSearch, FaUniversity, FaSchool, FaSitemap, FaUserTie, FaAngleRight, FaCalendar, FaCalendarCheck, FaCalendarDay, FaCalendarWeek, 
  FaFile, FaFileAlt, FaFileArchive, FaFileCode, FaFileCsv, FaFilePdf, FaFileImport, FaFileWord, FaFileContract, FaFileDownload, FaSistrix, FaSignInAlt, FaCog, FaHome, FaDatabase, FaPhotoVideo, FaAddressBook, FaTable} from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom';
import { oidkafedra } from '../Pages/oidkafedra';
import { omuzgoron } from '../Pages/omuzgoron';
import { NavLink } from 'react-bootstrap';
import Modal from './Modal';
import Modalkh from './Modalkh';
import Modalkad from './Modalkad';
 
function NavScrollExample() {

const[openModal, setOpenModal]=useState(false)
const[openModalkh, setOpenModalkh]=useState(false)
const[openModalkad, setOpenModalkad]=useState(false)





  const [fix, setFix]=useState(false);
  function setFixed(){
    if (window.scrollY>=40)
    {
      setFix(true)
    }
    else
    {
      setFix(false)
    }
    }
 window.addEventListener("scroll", setFixed)
 
 



   
  return (
    <div className={fix ? 'navbar_fixed' : 'navbar_all'}> 
    {openModal && <Modal closeModal={setOpenModal} />}
    {openModalkh && <Modalkh closeModalkh={setOpenModalkh} />}
    {openModalkad && <Modalkad closeModalkad={setOpenModalkad} />}
        <Navbar className="nb"   variant="dark" expand="lg">
         
           
            
     <div  className='menu'>
 
               <div className='dlogo'><img 
                    src={logo}
                    height='49'
                    width='150'
                    className=''
                    alt='logo'
                    />    
                 </div> 
                 
                 
      <ul className='menu_ul'>
        <li><span><NavLink   href="/">Асосӣ</NavLink></span></li>
        <li><span>Маълумот</span>
        <ul>
          <li><a href="http://tnu.tj"> <FaUniversity className="iconsmenu"/>Донишгоҳи мо</a></li>
          <li>  <NavLink   href="/oidkafedra"><FaSchool className="iconsmenu"/>Оид ба кафедра</NavLink> </li>
          <li><a href="/#ihtisos"><FaSitemap className="iconsmenu"/>Ихтисосҳо</a></li>
          <li>  <NavLink   href="/omuzgoron"><FaUserTie className="iconsmenu"/>Омӯзгорон</NavLink> </li>
          <li><a href="/#samt"><FaAngleRight className="iconsmenu"/>Самти илмӣ</a></li>
          <li><a href="#seminar"><FaCalendar className="iconsmenu"/>Семинарҳо</a></li>
          <li><a href="#jdi"><FaCalendarCheck className="iconsmenu"/>Ҷадвали дарси иловагӣ</a></li>
          <li><a href="#jn"><FaCalendarDay className="iconsmenu"/>Ҷадвали навбатдорӣ</a></li>
          <li><a href="#sk"><FaCalendarWeek className="iconsmenu"/>Соати кураторӣ</a></li>
        </ul>
        </li>

        <li><span>Маводҳо</span>
        <ul>
        <li><a > <FaFile className="iconsmenu"/>Барномаи таълимӣ</a> </li>
          <li><a><FaFileAlt className="iconsmenu"/>Силлабус</a></li>
          <li><a><FaFilePdf className="iconsmenu"/>Маводи таълимӣ</a></li>
          <li><a><FaFileCode className="iconsmenu"/>Маводи илмӣ</a></li>
          <li><a><FaFileImport className="iconsmenu"/>Тести фаннӣ</a></li>
          <li><a onClick={()=>{ setOpenModal(true)}}><FaFileDownload  className="iconsmenu"/>Мавзуи кори курсӣ</a></li>
          <li><a onClick={()=>{ setOpenModalkh(true)}}><FaFileContract className="iconsmenu"/>Мавзуи кори хатм</a></li>
          <li><a onClick={()=>{ setOpenModalkad(true)}}><FaFileWord className="iconsmenu"/>Саволномаи КАД</a></li>
          
 
           </ul></li>
      </ul>
      <div class="d1">
  <form>
  <input type="text" placeholder="Ҷустуҷӯ..."/>
  <button type="submit"   >  <FaSistrix className="iconssearch"/> </button>
 
  </form>
</div>

      </div>
                <div class="hamburger-menu">
    <input className='inhide' type="checkbox" id="menu_toggle" />
    <label for="menu_toggle" class="menu_btn"> <span></span>
    </label>
    <ul class="menu_box">
    
      <li><a class="menu_item" href=""> <FaSignInAlt className="iconsmenu"/>Воридшавӣ</a></li>
      
       
     
      <li> <a class="menu_item" href=""> <FaCog className="iconsmenu"/>Ҷуркунӣ</a> </li> 
      <li class="as"><a class="menu_item" href=""></a></li>
      <li><a class="menu_item" href="/"> <FaHome className="iconsmenu"/> Асосӣ</a></li>
      <li><input type="checkbox" id="submenu_toggle" />
        <a class="menu_item" href=""> <label for="submenu_toggle" class="submenu_btn"><FaDatabase className="iconsmenu"/>   Маълумот   </label></a>
        <ul class="submenu">
        <li><a href="http://tnu.tj"> <FaUniversity className="iconsmenu"/>Донишгоҳи мо</a></li>
          <li>  <NavLink   href="/oidkafedra"><FaSchool className="iconsmenu"/>Оид ба кафедра</NavLink> </li>
          <li><a href="/#ihtisos"><FaSitemap className="iconsmenu"/>Ихтисосҳо</a></li>
          <li>  <NavLink   href="/omuzgoron"><FaUserTie className="iconsmenu"/>Омӯзгорон</NavLink> </li>
          <li><a href="/#samt"><FaAngleRight className="iconsmenu"/>Самти илмӣ</a></li>
          <li><a href="#seminar"><FaCalendar className="iconsmenu"/>Семинарҳо</a></li>
          <li><a href="#jdi"><FaCalendarCheck className="iconsmenu"/>Ҷадвали дарси иловагӣ</a></li>
          <li><a href="#jn"><FaCalendarDay className="iconsmenu"/>Ҷадвали навбатдорӣ</a></li>
          <li><a href="#sk"><FaCalendarWeek className="iconsmenu"/>Соати кураторӣ</a></li>
           
        </ul>
      </li>
      <li><input type="checkbox" id="submenu_toggle1" />
        <a class="menu_item" href=""> <label for="submenu_toggle1" class="submenu_btn">   <FaFile className="iconsmenu"/>Маводхо</label></a>
        <ul class="submenu1">
        <li><a> <FaFile className="iconsmenu"/>Барномаи таълимӣ</a></li>
          <li><a><FaFileAlt className="iconsmenu"/>Силлабус</a></li>
          <li><a><FaFilePdf className="iconsmenu"/>Маводи таълимӣ</a></li>
          <li><a><FaFileCode className="iconsmenu"/>Маводи илмӣ</a></li>
          <li><a><FaFileImport className="iconsmenu"/>Тести фаннӣ</a></li>
          <li><a onClick={()=>{ setOpenModal(true)}}><FaFileDownload  className="iconsmenu"/>Мавзуи кори курсӣ</a></li>
          <li><a onClick={()=>{ setOpenModalkh(true)}}><FaFileContract className="iconsmenu"/>Мавзуи кори хатм</a></li>
          <li><a onClick={()=>{ setOpenModalkad(true)}}><FaFileWord className="iconsmenu"/>Саволномаи КАД</a></li>
           
        </ul>
      </li>
      
       
      <li> <a class="menu_item" href=""><FaPhotoVideo className="iconsmenu"/>Аксхо</a> </li>
      <li> <a class="menu_item" href="/#tamos"><FaPaperPlane className="iconsmenu"/> Тамос</a> </li>
    </ul>
  </div>
  
     
  
    </Navbar>

    <div id="seminar" class="emerge">
              <div class="vsplevsu_anemagen">
              <div class="emergena_konsuksua">
              <div class="kamages_designes">
              <h3 class="emergenua">Ҷадвали семинарҳо</h3>
              <a href="#overcas" title="overcas" class="overcas">×</a>
              </div>
              <div class="opisaniye_okoshke">
                  <table>
                    <tr>
                      <td>
                        №
                      </td>
                      <td>
                        Сана
                      </td>
                      <td>
                      Номи мавзӯи маърӯза
                      </td>
                      <td>
                        Маърӯзачӣ
                       </td>
                    </tr>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        26.09.2023
                      </td>
                      <td>
                      Рамзгузориҳои муосир
                      </td>
                      <td>
                        Ашӯров Х.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        2
                      </td>
                      <td>
                        15.10.2023
                      </td>
                      <td>
                      Хеш функсияҳои содатарин
                      </td>
                      <td>
                        Шарифзода З.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        3
                      </td>
                      <td>
                        11.11.2023
                      </td>
                      <td>
                      Рамзгузориҳои содатарин
                      </td>
                      <td>
                        Комилов О.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        4
                      </td>
                      <td>
                        20.12.2023
                      </td>
                      <td>
                      Ҳифз дар системаи омилии Windows
                      </td>
                      <td>
                        Рустамова Х.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        5
                      </td>
                      <td>
                        07.01.2024
                      </td>
                      <td>
                      Ҳифзи додаҳо дар смартфонҳо
                      </td>
                      <td>
                        Ҷумаева Н.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        6
                      </td>
                      <td>
                        10.02.2024
                      </td>
                      <td>
                      Ҳифзи додаҳо дар флешкортҳо
                      </td>
                      <td>
                        Мусоев С.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        7
                      </td>
                      <td>
                        15.03.2024
                      </td>
                      <td>
                      Ҳифзи додаҳои шабакаи интернет
                      </td>
                      <td>
                        Қурбонова Н.
                       </td>
                    </tr>
                    
                  </table>
              </div>
              </div>
              </div>
                            
        </div>

        <div id="jdi" class="emerge">
              <div class="vsplevsu_anemagen">
              <div class="emergena_konsuksua">
              <div class="kamages_designes">
              <h3 class="emergenua">Ҷадвали дарси иловагӣ барои донишҷӯ</h3>
              <a href="#overcas" title="overcas" class="overcas">×</a>
              </div>
              <div class="opisaniye_okoshke">
                  <table>
                    <tr>
                      <td>
                        №
                      </td>
                      <td>
                        Номи ҳафта
                      </td>
                      <td>
                      Вақт
                      </td>
                      <td>
                        Омӯзгор
                       </td>
                    </tr>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Душанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Ашӯров Х.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        2
                      </td>
                      <td>
                        Сешанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Шарифзода З.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        3
                      </td>
                      <td>
                        Чоршанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Комилов О.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        4
                      </td>
                      <td>
                        Панҷшанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Рустамова Х.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        5
                      </td>
                      <td>
                        Ҷумъа
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Ҷумаева Н.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        6
                      </td>
                      <td>
                        Шанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Мусоев С.
                       </td>
                    </tr>
                     
                    
                  </table> </div></div> </div></div>

                  <div id="jn" class="emerge">
              <div class="vsplevsu_anemagen">
              <div class="emergena_konsuksua">
              <div class="kamages_designes">
              <h3 class="emergenua">Ҷадвали навбатдорӣ дар кафедра</h3>
              <a href="#overcas" title="overcas" class="overcas">×</a>
              </div>
              <div class="opisaniye_okoshke">
                  <table>
                    <tr>
                      <td>
                        №
                      </td>
                      <td>
                        Номи ҳафта
                      </td>
                      <td>
                      Вақт
                      </td>
                      <td>
                        Омӯзгор
                       </td>
                    </tr>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Душанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Ашӯров Х.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        2
                      </td>
                      <td>
                        Сешанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Шарифзода З.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        3
                      </td>
                      <td>
                        Чоршанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Комилов О.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        4
                      </td>
                      <td>
                        Панҷшанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Рустамова Х.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        5
                      </td>
                      <td>
                        Ҷумъа
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Ҷумаева Н.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        6
                      </td>
                      <td>
                        Шанбе
                      </td>
                      <td>
                      12:00 - 13:00
                      </td>
                      <td>
                        Мусоев С.
                       </td>
                    </tr>
                     
                    
                  </table> </div></div> </div></div> 
        
                  <div id="sk" class="emerge">
              <div class="vsplevsu_anemagen">
              <div class="emergena_konsuksua">
              <div class="kamages_designes">
              <h3 class="emergenua">Соати кураторӣ</h3>
              <a href="#overcas" title="overcas" class="overcas">×</a>
              </div>
              <div class="opisaniye_okoshke">
                  <table>
                    <tr>
                      <td>
                        №
                      </td>
                      <td>
                        Вақту рӯз
                      </td>
                      <td>
                      Ихтисос ва курс
                      </td>
                      <td>
                        Омӯзгор
                       </td>
                    </tr>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        Душанбе 12:00 - 13:00
                      </td>
                      <td>
                      курси 1  98010101
                      </td>
                      <td>
                        Қурбонова Н.
                       </td>
                    </tr>
                    <tr>
                      <td>
                        2
                      </td>
                      <td>
                        Сешанбе 12:00 - 13:00
                      </td>
                      <td>
                      курси 2  98010101
                      </td>
                      <td>
                        Шарифзода З.  
                       </td>
                    </tr>
                    <tr>
                      <td>
                        3
                      </td>
                      <td>
                        Чоршанбе 12:00 - 13:00
                      </td>
                      <td>
                      курси 3  98010101
                      </td>
                      <td>
                        Ашуров Х.  
                       </td>
                    </tr>
                    <tr>
                      <td>
                        4
                      </td>
                      <td>
                        Панҷшанбе 12:00 - 13:00
                      </td>
                      <td>
                      курси 4  98010101
                      </td>
                      <td>
                        Рустамова Х. 
                       </td>
                    </tr>
                   
                  
                     
                    
                  </table> </div></div> </div></div>  

                 
    </div>






  );
}







export default NavScrollExample;

 

      
  
  
 

 