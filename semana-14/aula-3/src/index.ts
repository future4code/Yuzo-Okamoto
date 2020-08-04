import * as moment from 'moment';

moment.locale('pt-br');

type event = {
  name: string;
  description: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
};

const schedule: event[] = [
  {
    name: 'Work Meeting',
    description: 'Monthly online meeting on Zoom.',
    startDate: moment('01/08/2020 14:00', 'DD/MM/YYYY HH:mm'),
    endDate: moment('01/08/2020 15:00', 'DD/MM/YYYY HH:mm'),
  },
  {
    name: "Father's Day",
    description: 'Call father to congratulate him.',
    startDate: moment('09/08/2020 00:00', 'DD/MM/YYYY HH:mm'),
    endDate: moment('09/08/2020 23:59', 'DD/MM/YYYY HH:mm'),
  },
];

function printSchedule(schedule: event[]): void {
  schedule.forEach((event: event) => {
    const startingTime: string = event.startDate.format(
      'dddd, DD [de] MMMM [de] YYYY, HH:mm'
    );

    const endingTime: string = event.endDate.format(
      'dddd, DD [de] MMMM [de] YYYY, HH:mm'
    );

    const durationInMinutes: number = event.endDate.diff(
      event.startDate,
      'minutes'
    );

    const daysUntilEvent: number = event.endDate.diff(moment(), 'days');

    console.log(`Event: ${event.name}`);
    console.log(`Starts at: ${startingTime}`);
    console.log(`Ends at: ${endingTime}`);
    console.log(`Description: ${event.description}`);
    console.log(`Duration: ${durationInMinutes} minutes\n`);
    console.log(`Days until event: ${daysUntilEvent} days\n`);
  });
}

function createEvent(
  startDate: moment.Moment,
  endDate: moment.Moment,
  name: string,
  description: string
): void {
  const dateNow = moment();
  let hasError = false;

  if (
    !startDate ||
    !startDate.isValid ||
    startDate.diff(dateNow, 'seconds') <= 0
  ) {
    hasError = true;
    console.log(`Error: invalid starting date (${startDate})`);
  }

  if (!endDate || !endDate.isValid || endDate.diff(dateNow, 'seconds') <= 0) {
    hasError = true;
    console.log(`Error: invalid ending date (${endDate})`);
  }

  if (!name || typeof name !== 'string' || name.length < 0) {
    hasError = true;
    console.log(`Error: invalid name (${name})`);
  }

  if (
    !description ||
    typeof description !== 'string' ||
    description.length <= 0
  ) {
    hasError = true;
    console.log(`Error: invalid description (${description})`);
  }

  if (!hasError) {
    const newEvent: event = {
      name,
      description,
      startDate,
      endDate,
    };

    schedule.push(newEvent);
    printSchedule(schedule);
  }
}

const newStartDate =
  process.argv[2] && moment(process.argv[2], 'DD/MM/YYYY HH:mm');
const newEndDate =
  process.argv[3] && moment(process.argv[3], 'DD/MM/YYYY HH:mm');
const newName = process.argv[4];
const newDescription = process.argv[5];

createEvent(newStartDate, newEndDate, newName, newDescription);

// Para calcular o horário de Londres, basta checar o valor UTC e comparar (Londres UTC = 0000)
// Brasil = -0300 (3 horas a menos, portanto adicionar 3h com o método add(3, 'hours') do moment)
