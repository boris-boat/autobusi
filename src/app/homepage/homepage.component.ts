import { Component, OnInit } from '@angular/core';
import { AutobusComponent } from '../autobus/autobus.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test: string = "testiramo input"
  printaj(item: any) {
    console.log(item);
  }
}
