export function verifyAge(casino: Casino, users: User[]): Result {
  const result: Result = {
    americans: {
      allowed: [],
      unallowed: []
    },
    brazilians: {
      allowed: [],
      unallowed: []
    }
  }

  if (casino.location === LOCATION.USA) {
    for (let user of users) {
      if (user.age >= 21) {
        if (user.nationality === NATIONALITY.AMERICAN) {
          result.americans.allowed.push(user.name);
        } else {
          result.brazilians.allowed.push(user.name);
        }
      } else {
        if (user.nationality === NATIONALITY.AMERICAN) {
          result.americans.unallowed.push(user.name);
        } else {
          result.brazilians.unallowed.push(user.name);
        }
      }
    }
  } else {
    for (let user of users) {
      if (user.age >= 18) {
        if (user.nationality === NATIONALITY.AMERICAN) {
          result.americans.allowed.push(user.name);
        } else {
          result.brazilians.allowed.push(user.name);
        }
      } else {
        if (user.nationality === NATIONALITY.AMERICAN) {
          result.americans.unallowed.push(user.name);
        } else {
          result.brazilians.unallowed.push(user.name);
        }
      }
    }
  }

  return result;
}

export enum NATIONALITY {
  AMERICAN = "AMERICAN",
  BRAZILIAN = "BRAZILIAN"
}

export enum LOCATION {
  USA = "USA",
  BR = "BR"
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface User {
  name: string;
  age: number;
  nationality: NATIONALITY;
}

export interface Result {
  americans: ResultItem;
  brazilians: ResultItem;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}