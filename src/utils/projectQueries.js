import { axiosWithConfig as axios } from "./axiosWithConfig";

export const fetch = (id = null) => {
  if (id) {
    // GET specified project
    return axios().get(`/api/projects/${id}`);
  } else {
    // GET all
    return axios().get("/api/projects");
  }
};

export const fetchActions = (id) => {
  return axios().get(`/api/projects/${id}/actions`);
};

export const post = (newProj) => {
  return axios().post("/api/projects", newProj);
};

export const update = (id, changes) => {
  return axios().put(`/api/projects/${id}`, changes);
};

export const remove = (id) => {
  return axios().delete(`/api/projects/${id}`);
};
