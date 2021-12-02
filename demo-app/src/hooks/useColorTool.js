
import { useColorToolStore } from "./useColorToolStore";
import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

export const useColorTool = (noContext = false) => {

  const storeA = useColorToolStore([]);
  const storeB = useColorToolStoreContext();

  return noContext ? storeA : storeB;
};
