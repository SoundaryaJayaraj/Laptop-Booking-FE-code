import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceService } from 'src/app/service/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  outputs:['event']
})
export class HeaderComponent implements OnInit {
  listOfServiceCenters: any = [];
  listOfAppointments: any = [];

  constructor(private _router: Router, private _service: HeaderServiceService) { }
@Output() event = new EventEmitter<any>()
@Output() event2 = new EventEmitter<any>()
  ngOnInit() {
    
  }

  
  onClickSearch(){
    let req:any=document.getElementById('searchInput');
    this._service.onClickSearch(req.value).then(
      (data:any) =>{
        console.log(data)
        this.listOfServiceCenters=data
       this.event.emit(this.listOfServiceCenters);

      }
    )
  }

}
