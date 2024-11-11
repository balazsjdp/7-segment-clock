import { CLOCK_DIV_ID, SEGMENT_LAYOUT } from '../config';
import { Utils } from '../utils/Utils';
import { Segment } from './Segment';

const NUMBER_BASE_CLASS = 'number';

export class Number {
  private segments: Segment[] = [];
  private id: string = '';

  constructor() {
    for (const segConfig of SEGMENT_LAYOUT) {
      this.segments.push(new Segment(segConfig));
    }

    this.id = this.createId();
    this.initialize();
  }

  public initialize(): void {
    Utils.appendChildToElement(
      document.getElementById(CLOCK_DIV_ID)!,
      'div',
      NUMBER_BASE_CLASS,
      this.id
    );

    this.addSegments();
  }

  public lightSegments(segmentIds: number[]): void {
    console.log(segmentIds);
    for (const segment of this.segments) {
      if (segmentIds.includes(segment.sequenceId)) {
        segment.on();
      } else {
        segment.off();
      }
    }
  }

  private createId(): string {
    return Utils.generateId();
  }

  private addSegments(): void {
    const numberElement: HTMLElement = document.getElementById(this.id)!;

    for (const segment of this.segments) {
      segment.initialize(numberElement);
    }
  }
}
