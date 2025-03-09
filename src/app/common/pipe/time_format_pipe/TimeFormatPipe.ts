import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform{
  transform(time: string): string {
    const timeParts = time.split(':');
    let hours = Number(timeParts[0]);
    let minutes = Number(timeParts[1]);
    let seconds = Number(timeParts[2]);

    let amPm = 'AM';

    if (hours >= 12) {
      amPm = 'PM';
      hours -= 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    return `${this.padZero(hours)}:${this.padZero(minutes)} ${amPm}`;
  }

  private padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
