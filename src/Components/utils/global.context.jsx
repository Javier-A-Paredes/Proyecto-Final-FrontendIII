import { useReducer } from "react";
import { createContext } from "react";

export const ContextGlobal = createContext();

const reducerFunction = (state, {type}) =>{
  switch (type) {
    case "dark":
      return {...state, theme: ""}
    case "":
      return {...state, theme: "dark"}
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const initialState = {theme: "", data: []}
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
