import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {TimeIn12Hour} from './TimeIn12Hour';


@Injectable()
export class CustomTimePickerCompService {

  apmList = ["AM", "PM"]; //"AM/PM",
  hourList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]; //"Hour",
  minuteList = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
    "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
    "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
    "50", "51", "52", "53", "54", "55", "56", "57", "58", "59",
  ];  // "Min",

  get2Padding(str: string): string {
    if (str == '0' || str == '1' || str == '2' || str == '3' || str == '4' || str == '5' || str == '6'
      || str == '7' || str == '8' || str == '9') {
      return '0' + str;
    }
    return str;
  }


  getValidatorErrorMessage(validatorName: string, validatorValue?: any): { errorName: string, errorMessage: string } {
    const config = {
      required: 'This time is required',
      onlyAm: 'Only AM is allowed',
      onlyPm: 'Only PM is allowed',
    };
    return {errorName: validatorName, errorMessage: config[validatorName]};
  }

  hasRequiredField(abstractControl: AbstractControl): boolean {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator['required']) {
        return true;
      }
    }
    return false;
  }

  /*private setError() {
    this.errorWithMessage = [];
    if (this.control?.errors) {
      for (const [key, value] of Object.entries(this.control?.errors)) {
        this.errorWithMessage.push(this.getValidatorErrorMessage(key, value));
      }
    }
  }*/

  convertTo12h(time24h: string | null): TimeIn12Hour {
    if (time24h === null) {
      return new TimeIn12Hour(null, null, null, null);
    }

    const timeValidFormat = time24h.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/);
    let apm = '';
    let hour12h = '';
    if (timeValidFormat) {
      const hour24h: number = +time24h.split(":")[0];
      const minute = time24h.split(":")[1];
      const second = time24h.split(":")[2];
      if (hour24h == 0) {
        hour12h = "12"
        apm = "AM"
      } else if (hour24h == 12) {
        hour12h = "12"
        apm = "PM"
      } else if (hour24h < 12) {
        hour12h = this.get2Padding(hour24h.toString())
        apm = "AM"
      } else if (hour24h > 12) {
        const t = hour24h - 12
        hour12h = this.get2Padding(t.toString())
        apm = "PM"
      } else {
        console.error("Unknown hour")
        throw new Error("Unknown hour");
      }
      // console.log(hour12h)
      // console.log(minute)
      // console.log(second)
      // console.log(apm)
      return new TimeIn12Hour(hour12h, minute, second, apm);
    } else {
      console.error("Not valid 24 Hour Time format, expected time format like 15:35:50")
      throw new Error("Not valid 24 Hour Time format, expected time format like 15:35:50");
    }
  }

  convertTo24h(timeIn12Hour: TimeIn12Hour): string | null {
    if (!timeIn12Hour.hour || !timeIn12Hour.minute || !timeIn12Hour.apm ) {
      return null;
    }
    if (timeIn12Hour.hour && !timeIn12Hour.hour.match(/^(0[1-9]|1[0-2])$/)) {
      throw new Error("Hour format not valid, expected 01 to 12");
    }
    if (timeIn12Hour.minute && !timeIn12Hour.minute.match(/^([0-5]\d)$/)) {
      throw new Error("Minute format not valid, expected 00 to 59");
    }
    let hourIn24h = '';
    if (timeIn12Hour.hour === "12" && timeIn12Hour.apm === "AM") {
      hourIn24h = "00";
    } else if (timeIn12Hour.hour === "12" && timeIn12Hour.apm === "PM") {
      hourIn24h = "12";
    } else if (timeIn12Hour.hour && timeIn12Hour.apm === 'AM') {
      hourIn24h = timeIn12Hour.hour;
    } else if (timeIn12Hour.hour && timeIn12Hour.apm === 'PM') {
      hourIn24h = String(parseInt(timeIn12Hour.hour, 10) + 12).padStart(2, '0');
    }
    if( timeIn12Hour.second === null){
      timeIn12Hour.second = '00';
    }

    // console.log(hourIn24h)
    // console.log(timeIn12Hour.minute)
    // console.log(timeIn12Hour.second)
    return hourIn24h + ":" + timeIn12Hour.minute + ":" + timeIn12Hour.second;
  }

}
