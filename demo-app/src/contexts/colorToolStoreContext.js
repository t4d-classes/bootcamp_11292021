import { createContext, useContext } from "react";

import { useColorToolStore } from "../hooks/useColorToolStore";

const colorToolStoreContext = createContext();


export const ColorToolStoreProvider = ({ colors, children }) => {

  return <colorToolStoreContext.Provider
    value={useColorToolStore([ ...colors ])}>
    {children}
  </colorToolStoreContext.Provider>;

};


export const useColorToolStoreContext = () => {
  return useContext(colorToolStoreContext);
};