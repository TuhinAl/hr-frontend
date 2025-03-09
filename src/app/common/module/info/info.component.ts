import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() messageNo = '0';
  message = '';
  isShowing = false;

  @ViewChild('notify_container') notify_container:ElementRef;
  @ViewChild('tooltip_container') tooltip_container:ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit() {
    console.log(this.renderer2);
    console.log('height---' + this.notify_container.nativeElement.offsetHeight);
    console.log('width---' + this.notify_container.nativeElement.offsetWidth);
  }

  ngOnInit(): void {
    this.getMessage(this.messageNo);
  }

  getMessage(messageNo: string): string{
    console.log(messageNo);
    this.message= 'helo'
    return 'helo';
  }

  showToolTip() {
    this.isShowing = !this.isShowing;
    //this.renderer2.addClass(this.notify_container.nativeElement, 'example');
    this.renderer2.setStyle(this.notify_container.nativeElement, 'transform','scale(1)');

  }

  hideToolTip() {
    this.isShowing = !this.isShowing;
    this.renderer2.setStyle(this.notify_container.nativeElement, 'transform','scale(0)');
  }
}
