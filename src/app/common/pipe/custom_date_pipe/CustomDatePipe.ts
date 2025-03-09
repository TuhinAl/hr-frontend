import { Pipe, PipeTransform } from "@angular/core";
import { convertDateFormatString } from "../../util-old/date-util";


@Pipe({
  name: 'datesomch'
})

export class CustomDatePipe implements PipeTransform{

  transform(date: string) : string {
    if (!date) return "";
    return convertDateFormatString(date, 'YYYY-MM-DD', 'DD/MM/YYYY');
  }

}
