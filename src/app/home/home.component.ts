import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  name = "Hejsa";
  constructor(private homeService : HomeService ) {

  }

  ngOnInit() {
      this.name = this.homeService.getStokerData();
  }

}
