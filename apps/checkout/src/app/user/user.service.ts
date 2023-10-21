import { Injectable } from '@nestjs/common';
import axios, { Method } from 'axios';

@Injectable()
export class UserService {
  baseURL = 'http://users-ms:3000/api';

  async request(method: Method, url: string, data: {}, cookie = '') {
    try {
      let headers = {};
      cookie && (headers = { Cookie: `jwt=${cookie}` });

      const response = await axios.request({
        method,
        url,
        baseURL: this.baseURL,
        data,
        headers,
      });
      return response.data;
    } catch (e) {
      return e?.response?.data;
    }
  }

  async post(url: string, data: any, cookie = '') {
    return this.request('post', url, data, cookie);
  }

  async put(url: string, data: any, cookie = '') {
    return this.request('put', url, data, cookie);
  }

  async get(url: string, cookie = '') {
    return this.request('get', url, {}, cookie);
  }
}
