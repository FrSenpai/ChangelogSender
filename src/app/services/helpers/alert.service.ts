import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  displayAlert(type, text): Promise<any> {
    return Swal.fire({
      icon: type,
      title: text
    });
  }

}
