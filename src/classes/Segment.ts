import { SegmentDirection } from '../enums/SegmentDirection.enum';
import { SegmentState } from '../enums/SegmentState.enum';
import { ISegmentConfig } from '../interfaces/ISegmentConfig';
import { Utils } from '../utils/Utils';

const SEGMENT_BASE_CLASS = 'segment';
const SEGMENT_OFF = 'segment-off';
const SEGMENT_ON = 'segment-on';

export class Segment {
  sequenceId: number;
  private uniqueId: string = '';
  private direction: SegmentDirection;
  private state: SegmentState = SegmentState.OFF;
  private element: HTMLElement | null = null;

  constructor(segmentConfig: ISegmentConfig) {
    this.sequenceId = segmentConfig.id;
    this.direction = segmentConfig.direction;
  }

  initialize(numberEl: HTMLElement): void {
    this.uniqueId = Utils.generateId();
    const classes = [
      SEGMENT_BASE_CLASS,
      SEGMENT_BASE_CLASS + '-' + this.direction,
      SEGMENT_BASE_CLASS + '-' + this.state,
      SEGMENT_BASE_CLASS + '-' + this.sequenceId,
    ];

    Utils.appendChildToElement(
      numberEl,
      'div',
      classes.join(' '),
      this.uniqueId
    );
    Utils.appendChildToElement(
      document.getElementById(this.uniqueId)!,
      'span',
      '',
      ''
    );

    this.element = document.getElementById(this.uniqueId);
  }

  on(): void {
    this.element?.classList.remove(SEGMENT_OFF);
    this.element?.classList.add(SEGMENT_ON);
  }

  off(): void {
    this.element?.classList.remove(SEGMENT_ON);
    this.element?.classList.add(SEGMENT_OFF);
  }
}
