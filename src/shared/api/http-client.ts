import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://draliatest.azurewebsites.net/api/',
});
