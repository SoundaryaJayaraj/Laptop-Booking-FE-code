import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonHeaderServiceService {

  constructor(private _http: HttpClient) { }

  Export(cusId:any){
    return this._http.get('http://localhost:8080/api/v1/Export/list/AppointmentsByCus/'+cusId,{responseType:'blob'})
    .toPromise()
    .then(data => data)
    .catch(err => err)
}
}
