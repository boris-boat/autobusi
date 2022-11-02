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
    let datum = `${new Date().getMonth()+1}.${new Date().getDate()}.${new Date().getFullYear()}`
    let current = moment(new Date())  
    console.log(current,moment(`${datum} 13:00`))
    console.log(moment.duration(current.diff(moment(`${datum} 13:30`))).asMinutes())    
    for (let i in this.autobusiZaDisplay) {
      let temp = this.autobusiZaDisplay[i].focusDan.filter((vreme:string) => {
        let filter = moment.duration(current.diff(moment(`${datum} ${vreme}`))).asMinutes()
       if (filter < 0 && filter > -30) return vreme
      else return null
      })
        this.autobusiZaDisplay[i].focusDan = temp
        }
  }

}
