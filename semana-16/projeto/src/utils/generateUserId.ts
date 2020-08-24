import { timeStamp } from 'console';

function generateUserId(): Number {
  const userId =
    Date.now().toString().substr(10, 13) +
    Math.random().toString().substr(3, 6);

  return Number(userId);
}

export default generateUserId;
