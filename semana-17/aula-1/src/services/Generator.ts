import { v4 } from 'uuid';

export default class Generator {
  uuid(): string {
    return v4();
  }
}
