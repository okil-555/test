import React from 'react';
import './Modal.css';
function Modalkh({ closeModalkh }){
    return(
       <div className='modalBackground'> 
       <div className='modalContainer'> 
       <div className='titleCloseBtn'>
         <button  onClick={() => closeModalkh(false)}>x</button>
       </div>
      
       <div className='title'>   
       <h1>Continue</h1>
        </div>
       <div className='body'>   
       <p>Кори хатмкунӣ</p>
        </div>
       <div className='footer'>  
      
       footer

         </div>
       
       </div> 
       </div>
        

     
    )
}

export default Modalkh;