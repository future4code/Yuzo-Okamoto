import * as bcrypt from 'bcryptjs';

export class HashManager {
  public async hash(text: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST) || 10;
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(text, salt);
    return result;
  }

  public async compare(
    text: string | undefined,
    hash: string | undefined
  ): Promise<boolean> {
    if (!text || !hash) {
      return false;
    }

    return bcrypt.compare(text, hash);
  }
}
