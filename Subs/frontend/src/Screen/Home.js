import React from 'react'
import ProtectedRouter from '../Component/ProtectedRouter'


export const Home = () => {
  return (
    <div>
      <h2>home </h2>


      <ProtectedRouter/>
    </div>
  )
}
