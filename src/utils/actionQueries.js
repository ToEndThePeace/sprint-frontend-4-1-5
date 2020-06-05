import { axiosWithConfig as axios } from "./axiosWithConfig";

export const fetch = (id = null) => {
  if (id) {
    return axios().get(`/api/actions/${id}`);
  } else {
    return axios().get("/api/actions");
  }
};

export const post = (newAction) => {
  return axios().post("/api/actions", newAction);
};

export const update = (id, changes) => {
  return axios().put(`/api/actions/${id}`, changes);
};

export const remove = (id) => {
  return axios().delete(`/api/actions/${id}`);
};
