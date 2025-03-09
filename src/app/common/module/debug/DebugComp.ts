import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'debug',
  templateUrl: './DebugComp.html',
  styleUrls: ['./DebugComp.scss']
})
export class DebugComp implements OnInit {

  debug = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params && params['debug']==='true'){
        this.debug = true;
      }
    });
  }

  ngOnInit(): void {

  }

}
