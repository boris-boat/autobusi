import { Component, OnInit } from '@angular/core';
import { clippingParents } from '@popperjs/core';
import * as moment from 'moment';
import autobusi from "../timetable"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  autobusiZaDisplay: any = []
  filter: string = ""
  constructor() { }

  ngOnInit(): void {
    this.autobusiZaDisplay = autobusi
  }
  setFilter(filter: string):void {
    for (let i in this.autobusiZaDisplay) {
      this.autobusiZaDisplay[i].focusDan = this.autobusiZaDisplay[i][filter]
    }
  }
  next30Mins():void{
    this.setFilter(this.dan(1))
    let datum = `${new Date().getMonth()+1}.${new Date().getDate()}.${new Date().getFullYear()}`
    let current = moment(new Date())  
    for (let i in this.autobusiZaDisplay) {
      let temp = this.autobusiZaDisplay[i].focusDan.reduce((a:string[],b:string) => {
      let filter = moment.duration(current.diff(moment(`${datum} ${b}`))).asMinutes()
        if (filter < 0 && filter > -30) a.push(b)
        return a
      },[])
      this.autobusiZaDisplay[i].focusDan = temp
    }
  }
  dan(nr:number){
    if(nr === 0) return "nedelja"
    if(nr === 6) return "subota"
    else return "radniDan" 
  }
}
