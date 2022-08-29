import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHeaderServiceService } from 'src/app/service/common-header-service.service';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {
  listOfServiceCenters: any = [];
  listOfAppointments: any = [];
  isDropdown =true;

  constructor(private _router: Router, private _service: CommonHeaderServiceService) { }
@Output() event = new EventEmitter<any>()
@Output() event2 = new EventEmitter<any>()
  ngOnInit() { 
    if(sessionStorage.getItem('accessToken') == null){
     this.isDropdown =false;
    }
  }

  clearData(){
    localStorage.clear();
    sessionStorage.clear();
    this._router.navigate([''])
  }

  Export(){
    let customerInfo = JSON.parse(localStorage.getItem("customerInfo") || "");
    let custId = customerInfo.customerId;
    this._service.Export(custId)
      .then((data: any) => {
        const a = document.createElement('a');
        document.body.appendChild(a);
        let apiRes = data
        const blob: any = new Blob([apiRes], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        console.log(url);
        a.download = 'appointment_list.xlsx';
        a.click();
      })
  }
  
  viewMore(){
    this._router.navigate(['dashboard/appointments']);
  }
}