import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autobus',
  templateUrl: './autobus.component.html',
  styleUrls: ['./autobus.component.scss']
})
export class AutobusComponent implements OnInit {
  constructor() { }
  @Input() test: string = ""
  @Output() output = new EventEmitter<string>();
  ngOnInit(): void {
    this.output.emit("hello from child")
  }

}
