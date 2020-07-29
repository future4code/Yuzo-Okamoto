import * as fs from 'fs';
import * as moment from 'moment';

moment.locale('pt-br');

type event = {
  name: string;
  description: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
};

type data = {
  events: event[];
};

const fileData: string = fs.readFileSync('./data/data.json').toString();

const schedule: data = JSON.parse(fileData);

function printSchedule(schedule: data): void {
  schedule.events.forEach((event: event) => {
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

    let newData: data | string = { ...schedule };
    newData.events.push(newEvent);

    newData = JSON.stringify(newData, null, 2);
    fs.writeFileSync('./data/data.json', newData);

    console.log('New event saved.');
  }
}

const newStartDate =
  process.argv[2] && moment(process.argv[2], 'DD/MM/YYYY HH:mm');
const newEndDate =
  process.argv[2] && moment(process.argv[3], 'DD/MM/YYYY HH:mm');
const newName = process.argv[4];
const newDescription = process.argv[5];

createEvent(newStartDate, newEndDate, newName, newDescription);
