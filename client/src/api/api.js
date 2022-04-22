import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

export const ApiService = {
   fetchGamesPosts() {
      return instance.get('api/posts').then((response) => response.data);
   },
   addNewGamesPost(title, description) {
      return instance.post('api/add_post', {title, description}, {withCredentials: true}).then((response) => response.data);
   },
   loginUser(email, password) {
      return instance.post('api/login', {email, password}, {withCredentials: true}).then((response) => response.data);
   },
   registerUser(nickname, email, password) {
      return instance.post('api/registration', {nickname, email, password}).then((response) => response.data);
   },
   fetchUserData() {
      return instance.get('api/user_data').then((response) => response.data);
   }
}
