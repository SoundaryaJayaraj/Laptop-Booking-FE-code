import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageLoginService {

  constructor(private _http: HttpClient) { }

  postData(req: any) {
    let url = "http://localhost:8080/api/v1/authenticate"
 return this._http.post(url,req)
 .toPromise()
 .then(data =>data)
 .catch(error => error)
  }

}
