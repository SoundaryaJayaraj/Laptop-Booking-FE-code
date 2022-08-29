import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageDashboardService } from 'src/app/service/page-dashboard.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import moment = require('moment');


@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit{
  listOfServiceCenters: any = [];
  listOfAppointments: any = [];
  isSubmitBtnEnable = true;
  isUpdateBtnEnable = false;
  isAppointmentList = false;
  isServiceCenter = true;
  appointmentBookingForm!: FormGroup;
  date:any;
  openingTime: any;
  closingTime: any;
  constructor(private _service: PageDashboardService, private _router: Router) { }

  ngOnInit() {
    this.getServiceCenterList();
  }



  getServiceCenterList() {
    this._service.serviceCenterList().then((data: any) => { console.log(data); this.listOfServiceCenters = data.centres })
  }

  get12hrsFormatOpeningTime(item: any){
    this.date =new Date();
    let currentDate=moment(this.date).format('YYYY-MM-DD');
    this.openingTime= moment(currentDate+ " "+item.openingTime).format('LT');
  return this.openingTime;
  }

  get12hrsFormatClosingTime(item:any){
    this.date =new Date();
    let currentDate=moment(this.date).format('YYYY-MM-DD');
    this.closingTime= moment(currentDate+ " "+item.closingTime).format('LT');
  return this.closingTime;
  }

  BookNow(serviceCenterData: any) {
    console.log("Selected row", serviceCenterData)
    let result = JSON.stringify(serviceCenterData)
    localStorage.setItem("serviceCenter", result);
    this._router.navigate(['dashboard/booking']);
  }
  serviceCenterData(arg0: string, serviceCenterData: any) {
    throw new Error('Method not implemented.');
  }

  recieveList($event: any) {
    console.log("Result in child", $event)
    this.listOfServiceCenters = $event
    this.isAppointmentList = false;
    this.isServiceCenter = true;
  }

  appointmentList(event2?: any) {
    this.isAppointmentList =true;
    this.isServiceCenter=false;
    console.log("Result in child", event2);
    // this.var1 = event2;
     this.listOfAppointments=event2;
  }


  // UpdateAppointment(item: any) {
  //   this.isSubmitBtnEnable = false;
  //   this.isUpdateBtnEnable = true;
  //   this.appointmentBookingForm.setValue({
  //     lapCategory: item.lapCategory,
  //     modelType: item.modelType,
  //     defectInfo: item.defectInfo,
  //     appointmentDate: item.appointmentDate,
  //     appointmentTime: item.appointmentTime,
  //   });
  //   localStorage.setItem("selectedAppId", JSON.stringify(item.appointmentId));
  // }
}
