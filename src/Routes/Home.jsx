import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [ fetchData, setFetchData ] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')    
    .then(res =>{
      setFetchData(res.data)      
    })    
  }, [])
  

  return (
    <main >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}                
        {fetchData.length ? fetchData.map(dentista => ( <Card {...dentista} key={dentista.id} /> )) : null}
      </div>
    </main>
  )
}

export default Home