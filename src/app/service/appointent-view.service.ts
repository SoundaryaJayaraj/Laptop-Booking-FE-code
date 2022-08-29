import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointentViewService {

  constructor(private _http: HttpClient ) {}

  AppointmentList(cusId:any):Promise<any>{
    return this._http.get('http://localhost:8080/api/v1/appointments/'+cusId)
    .toPromise()
    .then(data => data)
    .catch(err => err)
  }
}
