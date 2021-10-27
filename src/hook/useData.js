import useSWR from "swr";

const useData = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/a", fetcher);

  return {
    data,
    error
  };
};

export default useData