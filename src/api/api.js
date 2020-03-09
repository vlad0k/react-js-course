import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": '237bf9fb-01bd-491d-938f-2f415c619154',
  }
});

export const usersAPI = {
  getUsers(page, pageSize) {
    return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`).then( response => response.data)
  },
  unfollow(id) {
   return instance.delete(`follow/${id}`).then(response => response.data)
 },
 getProfile(id) {
   return instance.get(`profile/${id}`).then(response => response.data)
 }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response.data)
  }
}
