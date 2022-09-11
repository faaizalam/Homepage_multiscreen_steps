import React, { useEffect, useState } from 'react'
import { data } from '../Component/Data'

export default function Artical() {
  const [con,setcon]=useState([])
 useEffect(()=>{

   setcon(data)
   console.log("run")

 },[])


  return (
    <div>
       {
        con.map((x)=>(
          <div key={x.name}>
            <div>{x.name}</div>
            </div>
        ))
       }
    </div>
  )
}
