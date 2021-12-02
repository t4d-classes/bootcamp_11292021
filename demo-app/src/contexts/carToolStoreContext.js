import { createContext, useContext } from "react";

import { useCarToolStore } from "../hooks/useCarToolStore";

const carToolStoreContext = createContext();


export const CarToolStoreProvider = ({ cars, children }) => {

  return <carToolStoreContext.Provider
    value={useCarToolStore([ ...cars ])}>
    {children}
  </carToolStoreContext.Provider>;

};


export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};