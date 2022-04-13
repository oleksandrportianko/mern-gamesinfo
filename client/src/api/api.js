import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

export const ApiService = {
   fetchGamesPosts() {
      return instance.get('posts/').then((response) => response.data);
   },
   addNewGamesPost() {
      return instance.post('posts/', {}).then((response) => response.data);
   }
}
