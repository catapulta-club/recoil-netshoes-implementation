import axios from 'axios';

export const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/catapulta-club/recoil-netshoes-implementation',
});
