import { api } from "../Apis/api";
import { runInAction } from "mobx";

/**
 *
 * @param {string} path
 * @param {string} params
 */
export async function getFunction(path, params = "") {
  const res = await api.get(`${path}/${params}`);
  return res.data;
}

/**
 *
 * @param {string} path
 * @param {object} params
 * @param {object} data
 */
export async function postFunction(path, params, data) {
  const res = await api.post(`${path}/${params}`, data);
  return res.data;
}

/**
 *
 * @param {string} path
 * @param {string} params
 */
export async function deleteFunction(path, params) {
  const res = await api.delete(`${path}/${params}`);
  return res.data;
}

export async function mobxFunction(func, data, change) {
  try {
    const res = await func(data);
    runInAction(() => {
      change = res;
    });
  } catch (error) {
    // console.log(error);
  }
}
