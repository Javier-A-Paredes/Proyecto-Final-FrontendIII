import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {  
  const {state}  = useContext(ContextGlobal)

  return (
    <main >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}                
        {state.data.length ? state.data.map(dentista => ( <Card {...dentista} key={dentista.id} /> )) : null}
      </div>
    </main>
  )
}

export default Home