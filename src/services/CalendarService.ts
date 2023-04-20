import axios from 'axios';
import { IUser } from '../models/IUser';

export default class CalendarService {
  //   static async login(email, password) {
  //     return $api.post('/login', { email, password });
  //   }
  static async fetchEvent() {
    const authUsername = localStorage.getItem('username');
    const { data } = await axios.get('./user.json');
    const event = data.find((user: IUser) => user.username === authUsername);
    if (event) {
      console.log(event);
    }
    return event;
  }
  //   static async registration(name, email, password) {
  //     return $api.post('/register', { name, email, password });
  //   }
  //   static async logout() {
  //     return $api.post('/logout');
  //   }
}
