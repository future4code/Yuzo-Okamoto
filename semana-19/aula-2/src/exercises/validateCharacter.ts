import Character from "./model/Character";
import { validateEmptyProperties } from "./validateEmptyProperties";

export default function validateCharacter(character: Character): boolean {
  const name = character.getName();
  const maxHP = character.getMaxHP();
  const def = character.getDef();
  const atk = character.getAtk();

  const allStats = [name, maxHP, def, atk];

  const validation = validateEmptyProperties(allStats);
  if (!validation.isValid) return false;

  const numberStats = [maxHP, def, atk];
  for (let stat of numberStats) {
    if (typeof stat !== "number" || stat <= 0) return false;
  }

  return true;
}
