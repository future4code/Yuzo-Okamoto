import * as moment from 'moment';

const validateBirthDate = (birthDate: string): void => {
  const birthday = moment(birthDate, 'DD/MM/YYYY', true);
  const today = moment();

  if (!birthday.isValid()) {
    throw new Error(`Data de nascimento inválida: ${birthDate}
SOLUÇÃO: DD/MM/AAAA`);
  }

  if (!today.subtract(18, 'years').isAfter(birthday)) {
    throw new Error(`Idade mínima de 18 anos para clientes.`);
  }

  if (today.isAfter(birthday.add(150, 'years'))) {
    throw new Error(`Idade máxima de 150 anos para clientes.`);
  }
};

export default validateBirthDate;
