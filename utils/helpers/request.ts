import axios from "axios";

export const request = (baseURL: string) => {
  const apiClient = axios.create({
    baseURL
  });
  //return api response data
  const onRequestSuccess = response => response.data;

  return {
    get: (url: string, params: object) =>
      apiClient({
        method: "get",
        url,
        params
      }).then(onRequestSuccess)
  };
};
