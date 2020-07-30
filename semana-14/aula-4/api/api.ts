import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labenews',
});
