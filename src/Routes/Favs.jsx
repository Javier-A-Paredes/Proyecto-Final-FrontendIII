import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state}  = useContext(ContextGlobal)
  const [favoritos, setFavoritos] = useState(localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [])
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.data.length ? state.data.map(dentista => ( <Card {...dentista} key={dentista.id} /> )) : null}
      </div>
    </>
  );
};

export default Favs;
