import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import moment = require('moment');
import { AppointmentBookingService } from 'src/app/service/appointment-booking.service';


@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.scss']
})
export class AppointmentBookingComponent implements OnInit {
  customerInfo:any;
  centerDataObj: any;
  openingTime:any;
  closingTime:any;
  date:any;
  listOfAppointments: any = [];

  appointmentBookingForm!: FormGroup;
  isSubmitBtnEnable = true;
  isUpdateBtnEnable = false;
  isAlertNotification=false;
  constructor(private _service: AppointmentBookingService,private _router: Router) { }

  ngOnInit() {
    this.getAppointmentList();
    this.appointmentBookingForm = new FormGroup({
      lapCategory: new FormControl(),
      modelType: new FormControl(),
      defectInfo: new FormControl(),
      appointmentDate: new FormControl(),
      appointmentTime: new FormControl(),
    });
    console.log(localStorage.getItem("customerId"))
    let req = localStorage.getItem("customerId")

    let centerData: any = localStorage.getItem("serviceCenter");
    this.centerDataObj = JSON.parse(centerData);
    console.log(this.centerDataObj);
    console.log(this.centerDataObj.centerName);

    this.date =new Date();
    let currentDate=moment(this.date).format('YYYY-MM-DD');
    this.openingTime= moment(currentDate+ " "+this.centerDataObj.openingTime).format('LT');
    this.closingTime= moment(currentDate+ " "+this.centerDataObj.closingTime).format('LT');
  }

  getAppointmentList() {
    let cusId = localStorage.getItem("customerId")
    console.log(cusId)
    this._service.AppointmentList(cusId)
      .then((data: any) => {
        console.log(data);
        this.listOfAppointments = data
      })
  }

  register() {
    let formValue: any =this.appointmentBookingForm.value;
    formValue.appointmentTime=this.appointmentBookingForm.value.appointmentTime+':00'
    localStorage.setItem("Form Value", JSON.stringify(formValue));
    console.log("Form Value", formValue);
    let customerInfo = JSON.parse(localStorage.getItem("customerInfo") || "");
    let custId = customerInfo.customerId;
    let appointmentCreationReqLocal = Object.assign({}, { serviceCenterId: this.centerDataObj.serviceCenterId }, this.appointmentBookingForm.value)
    console.log("Appointment creation Req", appointmentCreationReqLocal)
    this._service.register(custId, appointmentCreationReqLocal)
      .then((data: any) => {
       // this.getAppointmentList();
       this.isAlertNotification=true;
       console.log("Registered")
       this._router.navigate(['dashboard/confirmation'])
      })
  }

  UpdateAppointment(item: any) {
    this.isSubmitBtnEnable = false;
    this.isUpdateBtnEnable = true;
    this.appointmentBookingForm.setValue({
      lapCategory: item.lapCategory,
      modelType: item.modelType,
      defectInfo: item.defectInfo,
      appointmentDate: item.appointmentDate,
      appointmentTime: item.appointmentTime,
    });
    localStorage.setItem("selectedAppId", JSON.stringify(item.appointmentId));
  }

  onClickUpdate() {
    let rescheduleFormValue = this.appointmentBookingForm.value;
    let selectedAppointmentId = localStorage.getItem("selectedAppId")
    console.log("Resche form value", rescheduleFormValue.selectedAppointmentId);
    //let appointmentUpdateReqLocal = Object.assign({},{serviceCenterId:this.centerDataObj.serviceCenterId},rescheduleFormValue.value )
    this._service.onClickUpdate(selectedAppointmentId, rescheduleFormValue)
      .then((data: any) => {
        this.getAppointmentList();
      })
  }
  
}