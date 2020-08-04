const validateFullName = (fullName: string): void => {
  const fullNameArray = fullName.split(' ');

  if (fullNameArray.length < 2) {
    throw new Error(`Nome completo inválido: ${fullName}
SOLUÇÃO: "Nome Sobrenome"`);
  }

  const firstName = fullNameArray[0];
  const lastName = fullNameArray.slice(1).join(' ');

  if (firstName.length < 3 || lastName.length < 3) {
    throw new Error(`Sobrenome inválido: ${lastName}
SOLUÇÃO: nome e sobrenome devem ter no mínimo duas letras`);
  }
};

export default validateFullName;
