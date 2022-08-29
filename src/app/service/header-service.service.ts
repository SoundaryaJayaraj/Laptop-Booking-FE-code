import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor(private _http: HttpClient) { }

  onClickSearch(req:any) { 
    console.log("In req",req)
    return this._http.get('http://localhost:8080/api/v1/location/'+req)
    .toPromise()
    .then(data => data)
    .catch(err => err)
  }

}
