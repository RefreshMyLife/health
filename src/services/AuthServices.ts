import axios from 'axios';
import $api from '../http/http';
import { IUser } from './../models/IUser';

export default class AuthService {
  //   static async login(email, password) {
  //     return $api.post('/login', { email, password });
  //   }
  static async login(username: string, password: string) {
    const { data } = await axios.get('./user.json');
    localStorage.setItem('username', username);
    console.log();
    const mockUser = data.find((user: IUser) => user.username === username);
    console.log(mockUser);
    if (mockUser) {
      console.log(mockUser);

      console.log('asdasd');
    }
    return mockUser;
  }
  static async loginTest() {
    return $api.get('/user');
  }
  //   static async registration(name, email, password) {
  //     return $api.post('/register', { name, email, password });
  //   }
  //   static async logout() {
  //     return $api.post('/logout');
  //   }
}
