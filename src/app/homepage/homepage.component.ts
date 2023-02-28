import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import autobusi from "../timetable"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  autobusiZaDisplay: any = []
  filter: any
  next30: any = false
  constructor() { }

  ngOnInit(): void {
    this.autobusiZaDisplay = autobusi.letnjiRedVoznje
    this.setFilter(this.dan(new Date().getDay()))
  }

  selekt(e: any) {
    this.setFilter(e.target.value)
  }
  setFilter(filter: string): void {
    for (let i in this.autobusiZaDisplay) {

      this.autobusiZaDisplay[i].focusDan = this.autobusiZaDisplay[i][filter]
    }
  }
  next30Mins(): void {
    this.next30 = true
    this.setFilter(this.dan(new Date().getDay()))

    let datum = `${new Date().getMonth() + 1}.${new Date().getDate()}.${new Date().getFullYear()}`
    let current = moment(new Date())
    for (let i in this.autobusiZaDisplay) {
      let temp = this.autobusiZaDisplay[i].focusDan.reduce((a: string[], b: string) => {
        let filter = moment.duration(current.diff(moment(`${datum} ${b}`))).asMinutes()
        if (filter < 0 && filter > -30) a.push(b)
        return a
      }, [])
      this.autobusiZaDisplay[i].focusDan = temp
    }
  }
  back() {
    this.setFilter(this.dan(new Date().getDay()))
    this.next30 = false

  }
  dan(nr: number) {
    if (nr === 0) return "nedelja"
    if (nr === 6) return "subota"
    else return "radniDan"
  }
}
