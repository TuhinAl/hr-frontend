export class TimeIn12Hour {

  hour: string | null = null;
  minute: string | null = null
  second: string | null = null;
  apm: string | null = null;

  constructor(hour: string | null, minute: string | null, second: string | null, apm: string | null) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.apm = apm;
  }
}
