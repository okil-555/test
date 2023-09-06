import React from "react";
import './asosi.css';
import Slider from './../Components/Slider';
import Card from 'react-bootstrap/Card';
import mudir from './../img/mudir.png';
import NI from './../img/NI.png';
import AH from './../img/AH.png';
import OK from './../img/OK.png';
import SHZ from './../img/SHZ.png';
import PS from './../img/PS.png';
import KN from './../img/KN.png';
import MS from './../img/MS.png';
import GN from './../img/GN.png';
import KKn from './../img/KKn.png';
import sdmt from './../img/sdmt.jpg';
import soin from './../img/soin.jpg';
import skoida from './../img/skoida.jpg';
import snizom from './../img/snizom.jpg';
import smuk from './../img/smuk.png';
import sbook from './../img/sbook.jpg';
 
import mass from './../img/mass.png';
import mm from './../img/mm.jpg';
import python from './../img/python.png';
import pirov from './../img/pirov.jpg';
import st from './../img/st.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import slider3 from './../img/slider3.jpg';

import {FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaMailBulk,
       FaEnvelope, FaBus, FaFacebook, FaWhatsapp, FaInstagram, FaViber,
        FaGoogle, FaReact, FaPhp, FaSquareFull, FaFacebookF, FaMusic,
         FaEdit, FaGavel, FaAlignLeft, FaCrown, FaBook, FaBookReader, 
         FaChalkboardTeacher, FaCalendarAlt, FaCalendarCheck, FaCalendarPlus,
          FaUserTie, FaBed, FaRegBell, FaBullhorn, FaChessKing, FaUsers, FaAtom} from 'react-icons/fa';
          
export const asosi=()=>(
      <div className="section_one">
                 
     
<div className="grid_container">
    <div className="item_1">
    <div className="left">
    <h1>Оид ба кафеда</h1>
           
            <p>Кафедраи технологияҳои иттилоотӣ ва иртиботӣ соли 2004 ташкил шудааст. Мудири аввалини кафедраи
              навбунёд н.и.ф.-м., дотсент Ашуров А.А. буданд. Омӯзгорони кафедра ба ихтисосҳои
              донишгоҳӣ дар доираи талаботи нақшаҳои амалкунандаи таълимӣ аз фанҳои
              забонҳои барномасозӣ,
              технологияи иттилоотӣ, системаҳои иттилоотӣ ва ҷустуҷӯӣ, луғатсозии компютерӣ, web-дизайн, асосҳои технологияҳои муосири компютерӣ ва амнияти компютерӣ дарс медиҳанд.
              Онҳо барои ихтисосҳои “Амнияти компютерӣ”, ”Хитоӣ Информатика”
              ва «Забоншиносӣ ва технологияи нави иттилоотӣ» курсҳои тахассусӣ ва амалӣ мегузаранд. </p>
               
            <a href="/oidkafedra" className="aleft">М у ф а с с а л</a>
    </div>
    <div className="right"> < Slider />  </div>
      
   
    </div>
    <div className="item_2">
    <div className="section_2">
<div className="s1">
<div className="ico2">
<FaBullhorn className="ChalkboardTeacher6"/></div>
<div className="title2">Эълон</div>
<div className="line2"> </div>
<div className="text2">Дар як моҳ 1 маротиба дар кафедра 
семинари илмӣ доир мегардад. Дар он омӯзгорон фаъолона 
иштирок мекунанд.</div>
</div>
<div className="s2">
<div className="ico2">
<FaRegBell className="ChalkboardTeacher6"/></div>
<div className="title2">Хабар</div>
<div className="line2"> </div>
<div className="text2">Дар як моҳ 1 маротиба дар кафедра 
семинари илмӣ доир мегардад. Дар он омӯзгорон фаъолона 
иштирок мекунанд.</div>
</div>
<div className="s3">
<div className="ico2">
<FaChessKing className="ChalkboardTeacher6"/></div>
<div className="title2">Олимпиада</div>
<div className="line2"> </div>
<div className="text2">Дар як моҳ 1 маротиба дар кафедра 
семинари илмӣ доир мегардад. Дар он омӯзгорон фаъолона 
иштирок мекунанд.</div>
</div>
<div className="s4">
<div className="ico2">
<FaUsers className="ChalkboardTeacher6"/></div>
<div className="title2">Конференсия</div>
<div className="line2"> </div>
<div className="text2">Дар як моҳ 1 маротиба дар кафедра 
семинари илмӣ доир мегардад. Дар он омӯзгорон фаъолона 
иштирок мекунанд.</div>
</div>


<div className="s5">
<div className="ico2">
<FaAtom className="ChalkboardTeacher6"/></div>
<div className="title2">Илм ва иноватсия</div>
<div className="line2"> </div>
<div className="text2">Дастовардҳои илмиву иноватсионии омӯзгорони кафедра бо шогирдон.</div>
</div>


<div className="s6">

<div className="text2">...........</div>
</div>

</div>
    </div>
     
        
    <div className="item_3">
        <div className="oid_kafedra">
        <div class="sfi">
        <img 
            src={mudir}
           className="mudir_img"
            />
          <ul>
            <li> <span>Мудири кафедра: </span> н.и.и., дотс. Рустамова Хуршедабону Рахимовна </li>
            <li> <span>Муассисаи асосӣ: </span> Донишгоҳи миллии Тоҷикистон </li>
            <li> <span> Кафедра дар </span>факултети механикаю математика </li>
          </ul>
          </div>
          <div id ="samt" className="samt">Самти фаъолияти илмии кафедра</div>

          <p className="p_kafedra"> Кафедраи технологияҳои иттилоотӣ ва иртиботӣ дар татбиқи барномаҳои таълимии бакалаврӣ ва магистрӣ иштирок менамояд. </p>
          <div className="matn">
          <p>   <b>Самт:</b> Технологияи иттилоотӣ, амнияти иттиллоотӣ ва компютерӣ </p>
          <p>   <b id="ihtisos" >Ихтисоси асосӣ:</b> Амнияти компютерӣ - 98010101 </p>
          <p>   <b>Ихтисосҳои муштарак:</b> Забоншиносии компютерӣ - 21050103, Хитоӣ-Информатика - 02030702 </p>
          <p>   Фаъолияти асосии кафедра ин тайёр кардани мутахассисон дар соҳаи коркард 
ва истифодаи воситаҳо ва системаҳои ҳифзи иттилооти компютерӣ.
Донишҷӯёни ин ихтисос забонҳои барномасозӣ, асосоҳои амнияти компютерӣ, усулҳои рамзгузорӣ,
ташкил ва ҳифзи шабакаҳои компютерӣ, воситаҳои техникии ҳифзи иттилоот, алгоритми кодгузорӣ
ва таъмини ҳифзи ҳуқуқи ва барномавии иттилоотро меомӯзанд. 
Хатмкунандагон метавонанд усулҳои муосири ҳифзро 
истифода намояд, ҷараёни ташкили таъминоти барномавиро идора кунанд ва 
ҳифзи системаи компютериро аз вирсуҳо таҳлил намоянд.
Мутахассисони хуби ин соҳа метавонанд, ки дар соҳаҳои гуногун аз қабили 
органҳои ҳокимияти давлативу маҳаллӣ,
корхонаҳои саноатӣ, 
муассисаҳои илмӣ, бонкҳо ва дигар ширкатҳо кору фаъолият намоянд.
             Донишҷӯён аз фанҳои
            тахассусии
            кафедра корҳои курсӣ ва рисолаҳои дипломӣ менависанд ва дар маҳфилҳои кафедра ширкат
            меварзанд. Дар кафедра 14 нафар омӯзгорон фаъолият дошта, аз онҳо як нафар доктори
            илм,
            профессор ва чор нафарашон номзади илм мебошанд. Устодони кафедра бо самти ҳифзи
            иттилоот пажӯҳишҳои илмӣ мебаранд. Онҳо дар кори семинарҳои илмию методӣ,
            конференсияҳои
            илмии байналхалқӣ, минтақавӣ, ҷумҳуриявӣ ва донишгоҳӣ мунтазам бо маърӯзаю
            гузоришҳои
            илмӣ баромад мекунанд. Дар кафедра семинари илмӣ-методии устодону шогирдон ва
            маҳфилҳои
            илмӣ-таълимии донишҷӯён амал мекунанд, ки дар онҳо устодони соҳибтаҷриба,
            мутахассисони
            ҷавон, аспирантон ва донишҷӯён фаоъолона иштирок меварзанд. Шогирдони пешқадами
            кафедра
            ҳар сол дар олимпиадаҳои фаннии ҷумҳуриявӣ ва озмунҳои илмии донишҷӯён иштирок
            намуда,
            ғолиби ин озмунҳо мегарданд.</p>            
             <p> <b>Семинар дар кафедра</b> Семинарҳои кафедра кори худро идома дода истодааст. Ҳар моҳе ду маротиба рӯзи
             сешанбе соати 13:00 семинари кафедра баргузор мегардад<a href="#emergeeka_oknol">(ҷадвали семинар)</a>.</p>
             </div>
        </div>

        
        
        
        
        
        
        
        
        
        
        
        </div>
      



        <div className="item_4">
          <div className="omuzgoron">
          <h3>ҲАЙАТИ КАФЕДРА</h3>
          <div className="omsl_grid">
            <div className="g1">
                  
            <img 
            src={NI}
           className="gimg"
            />

                  
                  <div className="gname">Нуров Исҳоқбой</div>
                  <div className="gname">Ҷумаевич </div>
<div className="gstatus">профессор</div>
<div className="gabout">доктори илмҳои физикаю  </div>
<div className="gabout">математика, соб.корӣ 17 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
 


            </div>
            <div className="g2">
           
 <img 
            src={KKn}
           className="gimg"
            />

                  
                  <div className="gname">Қурбонов Кенҷа</div>
                  <div className="gname">Юлчиевич </div>
<div className="gstatus">дотсент</div>
<div className="gabout">номзади илмҳои иқтисодӣ,  </div>
<div className="gabout">собиқаи корӣ 17 сол</div>


<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g3">
            <img 
            src={mudir}
           className="gimg"
            />

                 
                  <div className="gname">Рустамова Хуршедабону</div>
                  <div className="gname">Раҳимовна </div>
<div className="gstatus">дотсент</div>
<div className="gabout">номзади илмҳои иқтисодӣ, </div>
<div className="gabout">собиқаи корӣ 17 сол</div>         

<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g4">
            
 <img 
            src={AH}
           className="gimg"
            />

               
                  <div className="gname">Ашӯров Хуршед</div>
                  <div className="gname">Мирумарович </div>
<div className="gstatus">дотсент</div>
<div className="gabout">номзади илмҳои иқтисодӣ,  </div>
<div className="gabout">собиқаи корӣ 17 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>

            </div>
            <div className="g5">
           
 <img 
            src={OK}
           className="gimg"
            />

                
                  <div className="gname">Комилов Оқил</div>
                  <div className="gname">Одилович </div>
<div className="gstatus">дотсент</div>
<div className="gabout">номзади илмҳои физикаю  </div>
<div className="gabout">математика, соб.корӣ 17 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g6">
          
 <img 
            src={SHZ}
           className="gimg"
            />

                  
                  <div className="gname">Шарифзода Зебонисои</div>
                  <div className="gname">Иброҳим </div>
<div className="gstatus">муаллими калон</div>
<div className="gabout">номзади илмҳои физикаю  </div>
<div className="gabout">математика, соб.корӣ 6 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g7">
       
 <img 
            src={PS}
           className="gimg"
            />

                 
                  <div className="gname">Пиров Саидалӣ</div>
                  <div className="gname">Мирзоалиевич </div>
<div className="gstatus">муаллими калон</div>
<div className="gabout">аспиранти кафедра,  </div>
<div className="gabout">собиқаи корӣ 17 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g8">
          
 <img 
            src={GN}
           className="gimg"
            />

                
                  <div className="gname">Ҷумаева Нигина</div>
                  <div className="gname">Эраҷовна</div>
<div className="gstatus">муаллими калон</div>
<div className="gabout">аспиранти кафедра,  </div>
<div className="gabout">собиқаи корӣ 17 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g9">
         
 <img 
            src={KN}
           className="gimg"
            />

                  
                  <div className="gname">Қурбонова Наҷотбегим</div>
                  <div className="gname">Маризоева</div>
<div className="gstatus">ассистент</div>
<div className="gabout">аспиранти кафедра,  </div>
<div className="gabout">собиқаи корӣ 10 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g10">
             
 <img 
            src={MS}
           className="gimg"
            />

                  
                  <div className="gname">Мусоев Суҳайлӣ</div>
                  <div className="gname">Сайвалиевич</div>
<div className="gstatus">ассистент</div>
<div className="gabout">аспиранти кафедра,  </div>
<div className="gabout">собиқаи корӣ 5 сол</div>
<div className="gabout"><FaFacebookF className="gfacebook"/><FaWhatsapp className="gwhatsapp"/>
<FaInstagram className="ginstagram"/><FaViber className="gviber"/></div>
            </div>
            <div className="g0"><a href="/omuzgoron" className="gmufassal">М у ф а с с а л</a></div>
           
            


                </div>
                
          </div>
                
        </div>
        
<div className="item_5">
       
<div className="barnoma">
 <div className="b1">
       
            
            <img 
            className="img_sdmt"
            src={sdmt}
            alt="суруди ДМТ"
                        />
           



      <div className="title">Суруди ДМТ</div>
      
      
      </div> 
 <div className="b2">
 <img 
            className="img_sdmt"
            src={soin}
            alt="Оиннома"
                        />
      <div className="title">Оинномаи донишгоҳ</div>
     </div> 
 <div className="b3">
 <img 
            className="img_sdmt"
            src={skoida}
            alt="Қоидаҳо"
                        />
      <div className="title">Қоидаҳои тартиботи дохилӣ</div>
       
      </div> 
 <div className="b4">
 <img 
            className="img_sdmt"
            src={snizom}
            alt="Низомнома"
                        />
      <div className="title">Низомномаи кафедра</div>
       
      </div> 
 <div className="b5">
 <img 
            className="img_sdmt"
            src={smuk}
            alt="Муқаддасот"
                        />
      <div className="title">Муқаддасоти миллӣ</div>
       
      </div> 
 <div className="b6">
 <img 
            className="img_sdmt"
            src={sbook}
            alt="Китобҳо"
                        />
      <div className="title">Китобҳои президент</div>
     
      </div> 
 <div className="b7">
      <div className="bleft">
  
      <div className="titleb7">Васоити таълимӣ</div>
      <div className="textb7">2014 - 2023</div>
      </div>
<div className="vs_container">
<Carousel className="carus" data-bs-theme="dark">
      <Carousel.Item >
     <div className="vs_container">
      <div className="vs_item">
      <img 
            className="img_b"
            src={mass}
            alt="mass"
            
            />
      </div>  
      
      <div className="vs_item">
      <img 
            className="img_b"
            src={mm}
            alt="mm"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={python}
            alt="python"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={pirov}
            alt="pirov"
            
            />
      </div>   
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
     </div>
      </Carousel.Item>
      <Carousel.Item>
     <div className="vs_container">
   
      <div className="vs_item">
      <img 
            className="img_b"
            src={mass}
            alt="mass"
            
            />
      </div>  
      
      <div className="vs_item">
      <img 
            className="img_b"
            src={mm}
            alt="mm"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={python}
            alt="python"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={pirov}
            alt="pirov"
            
            />
      </div>   
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
     </div>
      </Carousel.Item>
      <Carousel.Item>
     <div className="vs_container">
      <div className="vs_item">
      <img 
            className="img_b"
            src={mass}
            alt="mass"
            
            />
      </div>  
      
      <div className="vs_item">
      <img 
            className="img_b"
            src={mm}
            alt="mm"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={python}
            alt="python"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={pirov}
            alt="pirov"
            
            />
      </div>   
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
     </div>
      </Carousel.Item>
      <Carousel.Item>
     <div className="vs_container">
      <div className="vs_item">
      <img 
            className="img_b"
            src={mass}
            alt="mass"
            
            />
      </div>  
      
      <div className="vs_item">
      <img 
            className="img_b"
            src={mm}
            alt="mm"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={python}
            alt="python"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={pirov}
            alt="pirov"
            
            />
      </div>   
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
     </div>
      </Carousel.Item>
      <Carousel.Item>
     <div className="vs_container">
      <div className="vs_item">
      <img 
            className="img_b"
            src={mass}
            alt="mass"
            
            />
      </div>  
      
      <div className="vs_item">
      <img 
            className="img_b"
            src={mm}
            alt="mm"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={python}
            alt="python"
            
            />
      </div>
      <div className="vs_item">
      <img 
            className="img_b"
            src={pirov}
            alt="pirov"
            
            />
      </div>   
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
      <div className="vs_item">
      <img 
            className="img_b"
            src={st}
            alt="st"
            
            />
      </div>  
     </div>
      </Carousel.Item>
    </Carousel>



</div>
      </div> 
 
      
</div>
</div>
<div className="item_6">
<div className="section_6">
<div className="s1">
<div className="ico6">
<FaChalkboardTeacher className="ChalkboardTeacher6"/></div>
<div className="title6"><a href="#seminar">Семинарҳои кафедра</a></div>
<div className="text6">Дар як моҳ 1 маротиба дар кафедра 
семинари илмӣ доир мегардад. Дар он омӯзгорон фаъолона 
иштирок мекунанд.</div>
</div>
<div className="s2">
<div className="ico6">
<FaCalendarAlt className="ChalkboardTeacher6"/></div>
<div className="title6"><a href="#jn">Ҷадвали навбатдорӣ</a></div>
<div className="text6">Ҳафтае як маротиба барои ҳар як омӯзгор дар кафедра рӯзи навбатдорӣ дар соати муайян таъин гаштааст. </div>
</div>
<div className="s3">
<div className="ico6">
<FaCalendarPlus className="ChalkboardTeacher6"/></div>
<div className="title6"><a href="#jdi">Ҷадвали дарси иловагӣ</a></div>
<div className="text6">Ҳар ҳафта дар вақти муайянгашта омӯзгорон бо донишҷӯён магғулияти иловагӣ ройгон мегузаронанд.</div>
</div>
<div className="s4">
<div className="ico6">
<FaUserTie className="ChalkboardTeacher6"/></div>
<div className="title6"><a href="#sk">Соати кураторӣ</a></div>
<div className="text6">Дар ҳар як курси ихтисоси 98010101-амнияти компютерӣ омӯзгорон ҳамчун сарпараст таъин гаштаанд.</div>
</div>

</div>
</div>
<div className="item_7">
      <div className="h_item7">Маводҳои таълим</div>
<div className="section_7">
<div className="s1">
      <div className="line7"></div>
      <div className="title7">Барномаҳои таълимӣ</div>
      <div className="text7">Барномаҳои таълимии кафедра 
      аз тарафи омӯзгорони кафедра таҳия шуда...</div>
</div>
<div className="s2">
<div className="line7"></div>
      <div className="title7">Силлабусҳо</div>
      <div className="text7">Силлабусҳои фаннӣ 
      аз тарафи омӯзгорони кафедра таҳия шуда...</div>
</div>
<div className="s3">
<div className="line7"></div>
      <div className="title7">Тестҳои санҷишӣ</div>
      <div className="text7">Тестҳои фаннӣ 
      аз тарафи омӯзгорони кафедра таҳия шуда...</div>
</div>
<div className="s4">
<div className="line7"></div>
      <div className="title7">Мавзуҳои корҳои курсӣ ва хатмкунӣ</div>
      <div className="text7">Мавзуҳои корҳои курсӣ ва хатмкунӣ
      аз тарафи омӯзгорони кафедра таҳия шуда...</div>
</div>
<div className="s5">
<div className="line7"></div>
      <div className="title7">Саволномаҳои имтиҳонӣ</div>
      <div className="text7">Саволномаҳои имтиҳонӣ
      аз тарафи омӯзгорони кафедра таҳия шуда...</div>
</div>

</div>
</div>
</div>
</div>
)

 