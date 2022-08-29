import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageRegisterService {

  constructor(private _http: HttpClient) { }

  register(req: any) {
    let url = "http://localhost:8080/api/v1/customer"
 return this._http.post(url,req)
 .toPromise()
 .then(data =>data)
 .catch(error => error)
  }
}
