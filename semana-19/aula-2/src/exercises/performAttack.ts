import Character from "./model/Character";
import validateCharacter from "./validateCharacter";

export function performAttack(
  attacker: Character,
  defender: Character
): Character | string {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    return `Invalid Character`;
  }

  const attackerAtk = attacker.getAtk();
  const defenderDef = defender.getDef();
  const defenderHP = defender.getCurrentHP();

  const damage = attackerAtk - defenderDef;

  if (damage > 0) {
    if (damage >= defenderHP) {
      defender.setCurrentHP(0);
      defender.setIsDead(true);
    } else {
      defender.subtractFromCurrentHP(damage);
    }
  }

  return defender;
}

export function performAttackInversed(
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
): Character | string {
  if (!validator(attacker) || !validator(defender)) {
    return `Invalid Character`;
  }

  const attackerAtk = attacker.getAtk();
  const defenderDef = defender.getDef();
  const defenderHP = defender.getCurrentHP();

  const damage = attackerAtk - defenderDef;

  if (damage > 0) {
    if (damage >= defenderHP) {
      defender.setCurrentHP(0);
      defender.setIsDead(true);
    } else {
      defender.subtractFromCurrentHP(damage);
    }
  }

  return defender;
}
