import { SegmentDirection } from './enums/SegmentDirection.enum';
import { ISegmentConfig } from './interfaces/ISegmentConfig';

export const CLOCK_DIV_ID = 'clock';
export const SEGMENT_LAYOUT: ISegmentConfig[] = [
  {
    id: 0,
    direction: SegmentDirection.VERTICAL,
  },
  {
    id: 1,
    direction: SegmentDirection.HORIZONTAL,
  },
  {
    id: 2,
    direction: SegmentDirection.VERTICAL,
  },
  {
    id: 3,
    direction: SegmentDirection.HORIZONTAL,
  },
  {
    id: 4,
    direction: SegmentDirection.VERTICAL,
  },
  {
    id: 5,
    direction: SegmentDirection.HORIZONTAL,
  },
  {
    id: 6,
    direction: SegmentDirection.VERTICAL,
  },
];

export const NUMBERS_CONFIG = [
  {
    represents: 0,
    segments: [0, 1, 2, 4, 5, 6],
  },
  {
    represents: 1,
    segments: [2, 6],
  },
  {
    represents: 2,
    segments: [1, 2, 3, 4, 5],
  },
  {
    represents: 3,
    segments: [1, 2, 3, 5, 6],
  },
  {
    represents: 4,
    segments: [0, 2, 3, 6],
  },
  {
    represents: 5,
    segments: [0, 1, 3, 5, 6],
  },
  {
    represents: 6,
    segments: [0, 1, 3, 4, 5, 6],
  },
  {
    represents: 7,
    segments: [1, 2, 6],
  },
  {
    represents: 8,
    segments: [1, 2, 3, 4, 5, 6],
  },
  {
    represents: 9,
    segments: [1, 2, 3, 6],
  },
];
