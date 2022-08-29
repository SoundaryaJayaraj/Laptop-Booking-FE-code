import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PageLoginService } from 'src/app/service/page-login.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  customerInfo:any;
  loginForm!: FormGroup;
  counts = [1,2,3,4,5]
  constructor(private _service: PageLoginService,private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }

  postData() {
    console.log("Form status", this.loginForm.valid, this.loginForm.status)
    console.log("Form Value", this.loginForm.value);
    this._service.postData(this.loginForm.value)
      .then((data: any) => {
        console.log(data)
        let cusDetails = JSON.stringify(data.customerInfo)
        localStorage.setItem("customerInfo",cusDetails);
       sessionStorage.setItem("accessToken",data.accessToken);
       this._router.navigate(['dashboard'])

      })
  }


}
