import { Router } from '@angular/router';
import { DashBoardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private service: DashBoardService, private router: Router) { }

  logout() {
    this.service.logout().subscribe( () =>{
        this.router.navigate(['login']);
    },
    error => {
      console.log(error);
    });

  }

}
