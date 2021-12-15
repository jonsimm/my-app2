import {Item} from './Item'

export enum DayOfWeek {
  Sunday = 1 << 1,
  Monday = 1 << 2,
  Tueday = 1 << 3,
  Wednesday = 1 << 4,
  Thursday = 1 << 5,
  Friday = 1 << 6,
  Saturday = 1 << 7,
}

// NOTES
// Split this up. The service do the expansion and will give us everything we need to render.
// This means that timeOfDay isn't used for rendering. 
// Instead timeOfDay will be used when creating a new event to capture user input/intent.
// Same for dayOfWeek.
export interface Event extends Item {
  startDateTime: string;
  endDateTime: string;
  timeOfDay: number;
  dayOfWeek: DayOfWeek;
  description: string;
  student: string;
}