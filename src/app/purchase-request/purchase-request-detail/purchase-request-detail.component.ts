import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  title:string="Purchase Request Detail";

  constructor(private systemsrv: SystemService, private router: Router) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

  }

}