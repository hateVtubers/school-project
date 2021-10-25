const useFilter = (api, filterApi) => {
  const filter = api.filter((d) => filterApi.includes(d.id));
  return [filter];
};

export default useFilter;
