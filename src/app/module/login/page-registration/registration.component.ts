import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PageRegisterService } from 'src/app/service/page-register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup
  customerId:any;
  constructor(private _service: PageRegisterService,private _router: Router) { }

  ngOnInit(): void {
    console.log(this._router.url);
    console.log( window.location.href);
    this.registrationForm = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(null, [Validators.required]),
      mobileNo: new FormControl(),
      password: new FormControl()
    });
  }

  register() {
    console.log("Form status", this.registrationForm.valid, this.registrationForm.status)
    console.log("Form Value", this.registrationForm.value);
    localStorage.setItem("customerId",this.customerId);
    this._service.register(this.registrationForm.value)
      .then((data: any) => {
      })
      this._router.navigate(['']);
}
}
