import React from 'react'
import { useContext } from 'react'
import {ContextGlobal} from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal)

  return (
    <nav>
      {console.log(state) }
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={()=> dispatch({type: state.theme})}>Change theme</button>
    </nav>
  )
}

export default Navbar