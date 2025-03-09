import * as moment from 'moment';
import {dateToString, stringToDate} from "./date-util";
import { Moment } from "moment";

export class YearMonthDay{
  year: number=0;
  month: number=0;
  day: number=0;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
/*

export function formatDuration(duration):string {
  let years = duration.years();
  let months= duration.months();
  let days= duration.days();
  /!*let result = '';
  if (years === 1) {
    result += 'one year ';
  } else if (years > 1) {
    result += years + ' years ';
  }
  if (months === 1) {
    result += 'one month ';
  } else if (months > 1) {
    result += months + ' months ';
  }
  if (days === 1) {
    result += 'one day ';
  } else if (days > 1) {
    result += days + ' days ';
  }*!/
  return result;
}*/


export function dayToYMD(day:number,numberOfLyDay:number): YearMonthDay {
  day = day - numberOfLyDay;
  if(day<30){
    return new YearMonthDay(0,0,day)
  }
  else if(day>=30 && day<365 ){
    const m2 = Math.floor(day / 30)
    const d2 = day % 30
    return new YearMonthDay(0,m2,d2)
  }
  else if( day>=365 ){
    const y3 = Math.floor(day / 365);
    const d3 = day % 365;
    if(d3>=30){
      const m31 = Math.floor(d3 / 30)
      const d31 = d3 % 30;
      return new YearMonthDay(y3,m31,d31)
    }else{
      return new YearMonthDay(y3,0,d3)
    }
  }else{
    return new YearMonthDay(0,0,0);
  }
}

export function ymdToDay(ymd :YearMonthDay): number {
  console.log(ymd)
  return (ymd.year * 365) + (ymd.month * 60) + ymd.day

  /*if(ymd.year && ymd.year > 0 && ymd.month && ymd.month > 0 && ymd.day && ymd.day > 0){
    return (ymd.year * 365) + (ymd.month * 60) + ymd.day
  }
  else if(ymd.month && ymd.month > 0 && ymd.day && ymd.day > 0){
    return (ymd.month * 60) + ymd.day
  }
  else if( ymd.day && ymd.day > 0){
    return ymd.day
  }
  else{
    return 0;
  }*/
}

// start day  ; end day => today
export function getYmdFromDate2(startDateStr:string, endDateStr:string = moment().format('DD/MM/YYYY') , format:string = 'DD/MM/YYYY'): YearMonthDay {
  const startDate = moment(startDateStr, format)
  const endDate = moment(endDateStr, format)
  const dayDiffWithLy = endDate.diff(startDate, 'days');
  const numberOfLyDay =numberOfLeapYearDay(startDateStr, endDateStr)
  return dayToYMD(dayDiffWithLy,numberOfLyDay);
}

export function getYmdFromDate(startDateStr:string, endDateStr:string = moment().format('DD/MM/YYYY') , format:string = 'DD/MM/YYYY'): YearMonthDay {
  const t= dateToString(stringToDate(startDateStr,'DD/MM/YYYY'),'YYYY-MM-DD')
  let years = moment.duration(moment().diff(t)).years();
  let months= moment.duration(moment().diff(t)).months();
  let days= moment.duration(moment().diff(t)).days();
  return new YearMonthDay(years,months,days)
}

export function dobToYearMonthDay(dob: string, pattern: string = 'DD/MM/YYYY'):YearMonthDay {
  let year, month, day;
  let dobMoment = moment(dob, pattern);
  let todayMoment = moment();
  year = todayMoment.diff(dobMoment, 'year');
  dobMoment = dobMoment.add(year, 'year');
  month = todayMoment.diff(dobMoment, 'month');
  dobMoment = dobMoment.add(month, 'month');
  day = todayMoment.diff(dobMoment, 'day');
  return new YearMonthDay(year, month, day);
}

//dateStr => today
export function getDateFromYmd2(ymd:YearMonthDay, dateStr:string = moment().format('DD/MM/YYYY'), format:string ='DD/MM/YYYY'): string {
  const day:number = ymdToDay(ymd);
  const prevDateStrWithLyDay:string= moment().subtract(day,'d').format(format);
  const lyDay= numberOfLeapYearDay(prevDateStrWithLyDay,dateStr,format);
  const dayWithLy = day + lyDay;
  const dateMt = moment(dateStr, format)
  const dobStrWithLy:string= dateMt.subtract(dayWithLy,'d').format(format);
  return dobStrWithLy;
}

//dateStr => today
export function getDateFromYmd(ymd:YearMonthDay, dateStr:string = moment().format('DD/MM/YYYY'), format:string ='DD/MM/YYYY'): string {
  let date:Moment = moment().subtract(ymd.year, 'years');
  date.subtract(ymd.month, 'months');
  date.subtract(ymd.day, 'days');
  // console.log(date);
  // console.log(dateToString(date));
  return dateToString(date,'DD/MM/YYYY');
}


export function numberOfLeapYearDay(startDateStr:string, endDateStr:string, format:string ='DD/MM/YYYY'):number {
  const startDate = moment(startDateStr, format)
  const endDate = moment(endDateStr, format); //today
  var leapYearDay = 0;

  for (var year = startDate.year(); year <= endDate.year(); year++) {
    var date = moment(year + '-02-29');
    if (date.isBetween(startDate,endDate) && date.isLeapYear()) {
      leapYearDay++;
    }
  }
  return leapYearDay;
}
