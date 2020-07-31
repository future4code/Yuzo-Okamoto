import * as fs from 'fs';

import * as TYPES from '../types/types';

const getClients = (): TYPES.database => {
  let data: TYPES.database;

  (async () => {
    try {
      const rawData = fs.readFileSync('./data/bankDB.json').toString();
      data = { ...JSON.parse(rawData) };
    } catch (error) {
      console.log(error.message);
    }
  })();

  return data;
};

export { getClients };
