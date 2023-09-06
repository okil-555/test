import React from 'react';
import './Modal.css';
function Modalkad({ closeModalkad }){
    return(
       <div className='modalBackground'> 
       <div className='modalContainer'> 
       <div className='titleCloseBtn'>
         <button  onClick={() => closeModalkad(false)}>x</button>
       </div>
      
       <div className='title'>   
       <h1>Continue</h1>
        </div>
       <div className='body'>   
       <p>КАД</p>
        </div>
       <div className='footer'>  
      
       footer

         </div>
       
       </div> 
       </div>
        

     
    )
}

export default Modalkad;