import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autobus',
  templateUrl: './autobus.component.html',
  styleUrls: ['./autobus.component.scss']
})
export class AutobusComponent implements OnInit {
  private outputText: string = "za sada nista"
  constructor() { }
  @Input() test: string = ""
  @Output() output = new EventEmitter<string>();
  ngOnInit(): void {
    this.output.emit(this.outputText)
  }
}
