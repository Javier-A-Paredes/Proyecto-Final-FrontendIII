import { useReducer } from "react";
import { createContext } from "react";

export const ContextGlobal = createContext();

const reducerFunction = (state, {type}) =>{
  switch (type) {
    case false:
      console.log(state.prefersDark);
      return {...state, prefersDark: true}
    case true:
      console.log(state.prefersDark);
      return {...state, prefersDark: false}
    default:
      return {...state, prefersDark: false};
  }
}

export const ContextProvider = ({ children }) => {
  const initialState = {prefersDark: false, data: []}
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const store = {
    state,
    dispatch
  };

  return (
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
  );
};
