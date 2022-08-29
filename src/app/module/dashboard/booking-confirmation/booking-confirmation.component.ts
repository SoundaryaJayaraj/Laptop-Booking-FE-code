import { Component, OnInit } from '@angular/core';
import moment = require('moment');

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss']
})
export class BookingConfirmationComponent implements OnInit {
  customClass = 'customClass';
  customClass2 = 'customClass2';
  customClass3 = 'customClass3';
  centerDataObj: any;
  customerInfoObj: any;
  openingTime:any;
  closingTime:any;
  appDate:any;
  appTime:any;
  date:any;
  productInfoObj:any;
  constructor() { }

  ngOnInit(): void {
    let centerData: any = localStorage.getItem("serviceCenter");
    this.centerDataObj = JSON.parse(centerData);
    this.date =new Date();
    let currentDate=moment(this.date).format('YYYY-MM-DD');
    this.openingTime= moment(currentDate+ " "+this.centerDataObj.openingTime).format('LT');
    this.closingTime= moment(currentDate+ " "+this.centerDataObj.closingTime).format('LT');
    let customerInfo = localStorage.getItem("customerInfo")|| "";
    this.customerInfoObj = JSON.parse(customerInfo);

    let productInfo = localStorage.getItem("Form Value")|| "";
    this.productInfoObj = JSON.parse(productInfo);
    this.appTime= moment(this.productInfoObj.appointmentDate + " "+this.productInfoObj.appointmentTime).format('LT');
    this.appDate=moment(this.productInfoObj.appointmentDate).format('d-MMM-y')

  }

}
