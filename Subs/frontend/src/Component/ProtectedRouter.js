import React, { useEffect, useState } from 'react'
import Artical from '../Screen/Artical'
import { Login } from '../Screen/Login'

export default function ProtectedRouter() {
    const [pos,setpos]=useState(1)
    
    const arr=[{step:1,book:"india"},{step:2,book:"pakistan"},{step:3,book:'america'}]
    
   
  return (
    
    <div className="h">
     
   <div className='title'>
    {
      arr.map((x)=>(
        
        <div key={x.step}className={x.step===pos?"active":"non"}  onClick={()=>setpos(x.step)}>
          <div>{x.book}</div>
          </div>

      ))
    }

   </div>

   <div>
    {
        pos===1?(
            <Artical></Artical>
        ):pos===2?(<Login/>):(<div>third</div>)

    }

   </div>
    
    </div>
    
      
  )
}
