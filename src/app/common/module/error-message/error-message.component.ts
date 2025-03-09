import {Component, Input, OnInit} from '@angular/core';
import {ErrorMessageService} from './error-message.service';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() message: string = 'aa';
  @Input() id: string;
  @Input() showTime: number;
  @Input() isShowable: boolean;

  constructor(private errorMessageService: ErrorMessageService) {
  }

  ngOnInit(): void {
    this.errorMessageService.flagSubj.subscribe((res: boolean) => {
      console.log(res);
    }, err => {
    });
  }


}
