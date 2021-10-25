import { createContext } from "react";
import useSWR from "swr";

export const DataContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

export const DataContextProvider = ({ children }) => {
  const { data, error } = useSWR("/api/a", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
