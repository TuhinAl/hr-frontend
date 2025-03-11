import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable()
export class MainLayoutCompService {
  constructor(private notify: ToastrService) {
  }

  
}
