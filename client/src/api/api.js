import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const ApiService = {
   fetchGamesPosts() {
      return instance.get('api/posts').then((response) => response.data);
   },
   addNewGamesPost(name, title) {
      return instance.post('api/add_post', {name, title}).then((response) => response.data);
   },
   loginUser(email, password) {
      return instance.post('api/login', {email, password}).then((response) => response.data);
   },
   registerUser(nickname, email, password) {
      return instance.post('api/registration', {nickname, email, password}).then((response) => response.data);
   },
   getUserData() {
      return instance.get('api/user_data').then((response) => response.data);
   }
}
