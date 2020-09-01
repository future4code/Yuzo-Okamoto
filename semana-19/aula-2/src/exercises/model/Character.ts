export default class Character {
  private isDead: boolean = false;
  private currentHP: number;

  constructor(
    private name: string,
    private maxHP: number,
    private def: number,
    private atk: number
  ) {
    this.currentHP = maxHP;
  }

  getName() {
    return this.name;
  }
  getMaxHP() {
    return this.maxHP;
  }
  getCurrentHP() {
    return this.currentHP;
  }
  getDef() {
    return this.def;
  }
  getAtk() {
    return this.atk;
  }
  getIsDead() {
    return this.isDead;
  }

  setName(newName: string) {
    this.name = newName;
  }
  setMaxHP(newMaxHP: number) {
    this.maxHP = newMaxHP;
  }
  setCurrentHP(newCurrentHP: number) {
    this.currentHP = newCurrentHP;
  }
  setDef(newDef: number) {
    this.def = newDef;
  }
  setAtk(newAtk: number) {
    this.atk = newAtk;
  }
  setIsDead(status: boolean) {
    this.isDead = status;
  }

  subtractFromCurrentHP(damage: number) {
    this.currentHP -= damage;
  }

  toggleIsDead() {
    this.isDead = !this.isDead;
  }
}
