import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentBookingService {

  constructor(private _http: HttpClient) { }

  register(custId:any, appointmentCreationReq:any){
    console.log("In service check",appointmentCreationReq)
    let url = "http://localhost:8080/api/v1/appointment/"+custId
        return this._http.post(url,appointmentCreationReq)
    .toPromise()
    .then(data =>data)
    .catch(error => error)
  }

  AppointmentList(cusId:any):Promise<any>{
    return this._http.get('http://localhost:8080/api/v1/appointments/'+cusId)
    .toPromise()
    .then(data => data)
    .catch(err => err)
  }

  onClickUpdate(selectedAppointmentId:any, rescheduleFormValue:any){
    let url = 'http://localhost:8080/api/v1/update_appointment/'+selectedAppointmentId
    return this._http.put(url,rescheduleFormValue)
    .toPromise()
    .then(data => data)
    .catch(err => err)
  }

}
