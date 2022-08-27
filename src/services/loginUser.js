import http from "./httpService";

export const loginUser = (data) => {
  return http.get("/user/login", data);
};
