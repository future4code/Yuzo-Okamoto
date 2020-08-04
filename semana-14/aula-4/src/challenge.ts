import * as fs from 'fs';
import * as util from 'util';
import { rejects } from 'assert';
import { resolve } from 'path';

// MODO NORMAL PADRÃO NODE
// fs.readFile('./api/api.ts', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Arquivo lido com sucesso: ', data.toString());
//   }
// });

// MODO NORMAL PADRÃO NODE COM PROMISIFY
// const readFilePromise = util.promisify(fs.readFile);

// readFilePromise('./api/api.ts')
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// MODO MANUAL PADRÃO NODE
// const readFilePromise = (path: string) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) return reject(err);
//       resolve(data);
//     });
//   });
// };

// readFilePromise('./api/api.ts')
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const callBot = async (command: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    console.log('Analyzing request...');

    setTimeout(() => {
      switch (command) {
        case 'hello':
          console.log(`Request (${command}) succesful.`);
          resolve('Hello!');
          break;
        default:
          console.log(`Request (${command}) failed.`);
          reject('Command not found.');
      }
    }, 3000);
  });
};

// callBot('hello')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const engageBot = async (command: string) => {
  try {
    const response = await callBot(command);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

engageBot('hello');
engageBot('this will get an error');
