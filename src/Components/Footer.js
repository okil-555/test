import React from "react";
import './Footer.css';

 

import {FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaMailBulk, FaEnvelope, FaBus, FaFacebook, FaWhatsapp, FaInstagram, FaViber, FaGoogle, FaReact, FaPhp, FaSquareFull} from 'react-icons/fa';
 

const Footer=()=>{

 


    return (
        <div className="footer">
    
            <div className="footer_top">
              <div className="left" id="tamos">
                <h1>ТАМОС</h1> <FaPaperPlane className="fapaper"/>
                 

                 <table>
              <tr>
                <td className="td_img">
                <FaMapMarkerAlt className="faicon"/>
                 </td>
                <td className="textfooter"> Ҷумҳурии Тоҷикистон, 734042, Душанбе</td>
              </tr>
              <tr>
                <td></td>
                <td className="textfooter">  Буни Ҳисорак, Шаҳраки донишҷӯён
                  (бинои №17) </td>
              </tr>
              <tr>
              <td className="td_img">   <FaRegClock className="faicon"/> </td>
                <td className="textfooter">8:00 - 17:00</td>
              </tr>
              <tr>
              <td className="td_img">  <FaPhoneAlt className="faicon"/> </td>
                   <td className="textfooter">  +992 </td>
              </tr>
              <tr>
              <td className="td_img"> <FaEnvelope className="faicon"/> </td>
                <td className="textfooter"><a class="amail" href="#OM">ktii@yandex.ru</a> </td>
              </tr>
              <tr>
              <td className="td_img"> <FaBus className="faicon"/> </td>
                <td className="textfooter">М.№-8,10,17,54,А.№-8,10 </td>
              </tr>
            </table>
            </div>
            <div className="right">
            <div className="sotset">
              <ul>
                <li className="facebook"><FaFacebook className="facebook"/></li>
                <li className="whatsapp"><FaWhatsapp className="whatsapp"/></li>
                <li className="instagram"><FaInstagram className="instagram"/></li>
                <li className="viber"><FaViber className="viber"/></li>
                <li className="google"><FaGoogle className="google"/></li>
               
              </ul>
            </div>
            </div>

            </div>
            <div className="footer_line">
            
            </div>
       
        

        </div>
   )
}

export default Footer;