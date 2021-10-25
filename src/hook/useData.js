import { useContext } from "react";
import { DataContext } from "../context/dataContext";

const useData = () => {
  const { data: { home, whatIsHololive, hololiveAlternative, hololiveCollab } } = useContext(DataContext);
  return {
    home,
    whatIsHololive,
    hololiveAlternative,
    hololiveCollab
  };
};

export default useData