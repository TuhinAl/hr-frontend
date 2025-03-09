import * as moment from 'moment';
import {regExMatch} from "./regex-util";
import {toInteger} from "./type-convert-util";

export function todayFormat(pattern: string = 'YYYY-MM-DD'): string {
  return moment().format(pattern);
}

export function dateToString(date: moment.Moment, pattern: string = 'YYYY-MM-DD'): string {
  if (moment(date).format(pattern) === 'Invalid date') {
    throw new Error('dateToString Invalid date error');
  }
  return moment(date).format(pattern);
}

export function stringToDate(dateStr: string, pattern: string = 'YYYY-MM-DD'): moment.Moment {
  if (dateStr && dateStr !== '') {
    return moment(dateStr, pattern);
  }
  throw new Error('stringToDate error');
}

export function convertDateFormatString(dateStr: string, inputPattern: string = 'DD/MM/YYYY', outputPattern: string = 'YYYY-MM-DD'): string {
  return dateToString(stringToDate(dateStr, inputPattern), outputPattern);
}

export function convertTimeFormatString(dateStr: string, inputPattern: string = 'hh:mm A', outputPattern: string = 'HH:mm:ss'): string {
  return dateToString(stringToDate(dateStr, inputPattern), outputPattern);
}

export function formatDateString(dateStr: string, pattern: string = 'YYYY-MM-DD'): string {
  if (dateStr) {
    return '';
  }
  return moment(dateStr).format(pattern);
}

/**
 * get number of year from past date to today
 * @param date example
 * @param pattern example
 * @return example
 */
export function getYearFromToday(date: moment.Moment, pattern: string = 'YYYY-MM-DD') {
  return moment().diff(dateToString(date, pattern), 'years');
}

export function getDateAfterAddingYear(numberOfYear: number): Date {
  return moment().subtract(numberOfYear, 'years').toDate();
}

export function isFutureDate(dateString: string, format: string = 'YYYY-MM-DD'): Boolean {
  const dateMoment: moment.Moment = moment(dateString, format);
  return moment(new Date()).isBefore(dateMoment);
}

export function isValidDate(dateString: string, format: string = 'YYYY-MM-DD'): Boolean {
  var date: moment.Moment = moment(dateString, format);
  /*console.log(date.year());
  console.log(date.month());
  console.log(date.date());*/
  return date.isValid();
}

// DD/MM/YYYY h:mm:ss:a
export function dateTimeToString(dateTimeMoment: moment.Moment, pattern: string = 'YYYY-MM-DD HH:mm:ss'): string {
  if (moment(dateTimeMoment).format(pattern) === 'Invalid date') {
    throw new Error('dateToString Invalid date error');
  }
  return moment(dateTimeMoment).format(pattern);
}

export function stringToDateTime(dateTimeString: string, pattern: string = 'YYYY-MM-DD HH:mm:ss'): moment.Moment {
  if (dateTimeString && dateTimeString !== '') {
    return moment(dateTimeString, pattern);
  }
  throw new Error('stringToDate error');
}


export function isDateInBetween(startDate: moment.Moment, endDate: moment.Moment, betweenDate: moment.Moment): boolean {
  if (betweenDate.isSame(startDate) || betweenDate.isSame(endDate)) {
    return true;
  }
  return betweenDate.isBetween(startDate, endDate);
}

export function isValidCurrentFiscalYear(fiscalYear: string, yearType = 'julyToJune'): boolean {
  if (isValidFiscalYear(fiscalYear)) {
    const startDate: moment.Moment = stringToDate(fiscalYear[0].concat(fiscalYear[1]).concat(fiscalYear[2]).concat(fiscalYear[3]) + '-07-01');
    const endDate: moment.Moment = stringToDate(fiscalYear[5].concat(fiscalYear[6]).concat(fiscalYear[7]).concat(fiscalYear[8]) + '-06-30');
    const today: moment.Moment = moment();

    console.log(dateToString(startDate))
    console.log(dateToString(endDate))
    console.log(dateToString(today))

    return isDateInBetween(startDate, endDate, today);
  } else {
    return false;
  }
}

export function isValidFiscalYear(fiscalYear: string): boolean {
  if (fiscalYear != undefined && fiscalYear != null && fiscalYear.length === 9
    && fiscalYear[0] === '2'
    && fiscalYear[1] === '0'
    && regExMatch(fiscalYear[2], new RegExp("[0-9]", "g"))
    && regExMatch(fiscalYear[3], new RegExp("[0-9]", "g"))
    && fiscalYear[4] === '-'
    && fiscalYear[5] === '2'
    && fiscalYear[6] === '0'
    && regExMatch(fiscalYear[7], new RegExp("[0-9]", "g"))
    && regExMatch(fiscalYear[8], new RegExp("[0-9]", "g"))
    && toInteger(fiscalYear[2].concat(fiscalYear[3])) === toInteger(fiscalYear[7].concat(fiscalYear[8])) - 1
  ) {
    return true;
  }
  return false;
}

export function dateFromToday(day: number, format = 'YYYY-MM-DD'): string {
  const fromDate: string = moment().subtract(day, 'd').format(format);
  return fromDate;
}

export function dateToYearMonthDayConversion(dob: string, pattern: string = 'DD/MM/YYYY') {
  let dobMoment, newDateMoment, year, month, day;
  dobMoment = moment(dob, pattern);
  newDateMoment = moment();
  year = newDateMoment.diff(dobMoment, 'year');
  dobMoment = dobMoment.add(year, 'year');
  month = newDateMoment.diff(dobMoment, 'month');
  dobMoment = dobMoment.add(month, 'month');
  day = newDateMoment.diff(dobMoment, 'day');
  let year2 = year != 0 ? year + 'Y ' : '';
  let month2 = month != 0 ? month + "M " : '';
  let day2 = day != 0 ? day + "D" : '';
  return year2 + month2 + day2;
}

export function ageInYearMonthDay(dob: string, ageTillDate: string, pattern: string = 'DD/MM/YYYY') {
  let dobMoment, year, month, day;
  dobMoment = moment(dob, pattern);
  let ageAtMoment = moment(ageTillDate, pattern);
  year = ageAtMoment.diff(dobMoment, 'year');
  dobMoment = dobMoment.add(year, 'year');
  month = ageAtMoment.diff(dobMoment, 'month');
  dobMoment = dobMoment.add(month, 'month');
  day = ageAtMoment.diff(dobMoment, 'day');
  let year2 = year != 0 ? year + 'Y ' : '';
  let month2 = month != 0 ? month + "M " : '';
  let day2 = day != 0 ? day + "D" : '';
  return year2 + month2 + day2;
}


export function dateTimeToMilliSecond(dateTime: moment.Moment): number {
  return 0;
}

export function formatDate(dateStr: string): string {
  return dateToString(stringToDate(dateStr, 'DD/MM/YYYY'));
}

export function formatDateOrTodayDate(dateStr: string): string {
  if (!dateStr) {
    return todayFormat('YYYY-MM-DD');
  }
  return dateToString(stringToDate(dateStr, 'DD/MM/YYYY'));
}

// console.log(dateToWeekDay("2023-11-22"))
export function dateToWeekDay(dateStr: string): string {
  const weekDay = moment(dateStr).isoWeekday();
  if (weekDay === 6) {
    return "Saturday";
  } else if (weekDay === 7) {
    return "Sunday";
  } else if (weekDay === 1) {
    return "Monday";
  } else if (weekDay === 2) {
    return "Tuesday";
  } else if (weekDay === 3) {
    return "Wednesday";
  } else if (weekDay === 4) {
    return "Thursday";
  } else if (weekDay === 5) {
    return "Friday";
  } else {
    return "Unknown";
  }
}




