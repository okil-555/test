import React from 'react';
import './Modal.css';
function Modal({ closeModal }){
    return(
       <div className='modalBackground'> 
       <div className='modalContainer'> 
       <div className='titleCloseBtn'>
         <button  onClick={() => closeModal(false)}>x</button>
       </div>
      
       <div className='title'>   
       <h1>Continue</h1>
        </div>
       <div className='body'>   
       <p>Кори курсӣ</p>
        </div>
       <div className='footer'>  
      
       footer

         </div>
       
       </div> 
       </div>
        

     
    )
}

export default Modal;