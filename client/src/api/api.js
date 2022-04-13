import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const ApiService = {
   fetchGamesPosts() {
      return instance.get('games').then((response) => response.data);
   },
   addNewGamesPost(name, title) {
      return instance.post('games', {name, title}).then((response) => response.data);
   }
}
