import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageDashboardService {

  constructor(private _http: HttpClient) { }

  serviceCenterList() { 
    return this._http.get('http://localhost:8080/api/v1/service_centres?pageNo=1&pageSize=20')
    .toPromise()
    .then(data => data)
    .catch(err => err)
  }

}
