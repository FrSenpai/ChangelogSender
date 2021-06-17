import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private notif: ToastrService) { }

  displayAlert(type, text):void {
    if (type === 'success') this.notif.success(text)
    else this.notif.error(text)
  }

}
