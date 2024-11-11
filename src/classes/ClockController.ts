import { Number } from './Number';
import { NUMBERS_CONFIG } from '../config';

const DATE_PARTS = [
  'Y',
  'Y',
  'Y',
  'Y',
  'M',
  'M',
  'D',
  'D',
  'H',
  'H',
  'm',
  'm',
  's',
  's',
];

// TODO: Move inteface to different file
interface ICurrentTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export class ClockController {
  private format: string[] = [];
  // TODO : Create type
  private numbers: Array<any> = [];
  private currentTime: ICurrentTime = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };

  constructor(format: string) {
    this.format = format.split('');
  }

  initialize() {
    for (const part of this.format) {
      if (this.isValidPart(part)) {
        this.numbers.push({
          represents: part,
          number: new Number(),
        });
      }
    }

    setInterval(() => {
      this.getCurrentTime();
      for (const [index, num] of this.numbers.entries()) {
        console.log(num);

        // TODO: This part needs to be refactored
        switch (num.represents) {
          case 'H':
            let valueH = 0;
            if (index !== 0 && this.numbers[index - 1].represents === 'H') {
              valueH = parseInt(this.currentTime.hour.toString()[1]);
            } else {
              valueH = parseInt(this.currentTime.hour.toString()[0]);
            }

            let segmentConfForValueH = NUMBERS_CONFIG.find(
              (c) => c.represents === valueH
            );
            num.number.lightSegments(segmentConfForValueH?.segments);
            break;
          case 'm':
            let valueM = 0;
            if (index !== 0 && this.numbers[index - 1].represents === 'm') {
              valueM = parseInt(this.currentTime.minute.toString()[1]);
            } else {
              valueM = parseInt(this.currentTime.minute.toString()[0]);
            }

            let segmentConfForValueM = NUMBERS_CONFIG.find(
              (c) => c.represents === valueM
            );
            num.number.lightSegments(segmentConfForValueM?.segments);

            break;
          case 's':
            break;
          default:
            break;
        }
      }
    }, 1000);
  }

  private isValidPart(part: string): boolean {
    if (DATE_PARTS.includes(part)) {
      return true;
    }

    return false;
  }

  private getCurrentTime() {
    const date = new Date();

    this.currentTime.year = date.getFullYear();
    this.currentTime.month = date.getMonth();
    this.currentTime.day = date.getDay();
    this.currentTime.hour = date.getHours();
    this.currentTime.minute = date.getMinutes();
    this.currentTime.second = date.getSeconds();
  }
}
