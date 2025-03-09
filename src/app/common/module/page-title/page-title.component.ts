import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input()
  breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
  }>;

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void { }
}
