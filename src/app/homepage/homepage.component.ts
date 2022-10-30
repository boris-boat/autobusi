import { Component, OnInit } from '@angular/core';
import autobusi from "../timetable"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(autobusi);
  }
  test: string = "testiramo input"
  printaj(item: any) {
    console.log(item);

  }
}
