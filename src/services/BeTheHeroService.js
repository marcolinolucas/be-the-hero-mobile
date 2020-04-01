import axios from 'axios';

import { errorHandler } from '../lib/handleAxiosResponse';

const BeTheHeroApi = axios.create({ baseURL: 'http://192.168.1.17:3333/' });

function listIncidents(page) {
  return BeTheHeroApi.get(`incidents?page=${page}`)
    .then((res) => ({
      data: res.data,
      header: res.headers['x-total-count'],
    }))
    .catch(errorHandler);
}

export default {
  listIncidents,
};
