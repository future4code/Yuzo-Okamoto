import bcrypt from "bcryptjs";

class HashManager {
  public async hash(password: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST) || 12;
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(password, salt);
  }

  public async compare(password: string, hash: string): Promise<boolean> { // prettier-ignore
    return bcrypt.compare(password, hash); // prettier-ignore
  } // prettier-ignore
}

export default HashManager;
