import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import moment = require('moment');
import { AppointentViewService } from 'src/app/service/appointent-view.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

declare var require: any;

// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.scss']
})
export class AppointmentViewComponent implements OnInit {

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  listOfAppointments: any = [];
  customerInfoObj: any;
  AppointmentInfoObj: any;
  appDate: any;
  isMessage=false;
  isAppointments = false;
  date: any;
  appointmentTime: any;
  appointmentDate: any;
  selectedName:any;
  constructor(private _service: AppointentViewService) { }

  ngOnInit(): void {
    this.getAppointmentList();
  }

  getAppointmentList() {
    let customerInfo = JSON.parse(localStorage.getItem("customerInfo") || "");
    let cusId = customerInfo.customerId;
    console.log("customerId", cusId)
    this._service.AppointmentList(cusId)
      .then((data: any) => {
        console.log(data);
        this.listOfAppointments = data;
      })
  }

  get12hrsFormat(item: any) {
    this.date = new Date();
    let currentDate = moment(this.date).format('YYYY-MM-DD');
    this.appointmentTime = moment(currentDate + " " + item.appointmentTime).format('LT');
    return this.appointmentTime;
  }

  getDateFormat(item: any) {
    this.appointmentDate = moment(item.appointmentDate).format('d-MMM-y');
    return this.appointmentDate;
  }

  viewMore(item: any) {
    this.isAppointments = true;
    localStorage.setItem("selectedAppointment", JSON.stringify(item));
    let customerInfo = localStorage.getItem("customerInfo") || "";
    this.customerInfoObj = JSON.parse(customerInfo);

    let AppointmentInfo = localStorage.getItem("selectedAppointment") || "";
    this.AppointmentInfoObj = JSON.parse(AppointmentInfo);
    // this.appDate = new Date( JSON.stringify(this.AppointmentInfoObj.appointmentTime)); 
    console.log(this.AppointmentInfoObj.appointmentTime);
    this.appDate = moment(this.AppointmentInfoObj.appointmentDate + " " + this.AppointmentInfoObj.appointmentTime).format('LT');
  }

  public convetToPDF() {
    // const pdfTable:any = this.pdfTable.nativeElement;
    // var html = htmlToPdfmake(pdfTable.innerHTML);
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download();
    var element: any = document.getElementById('pdfTable');
    var opt: any = {
      margin: 1,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
    this.isMessage=true;
  }

}
