import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

let GLOBAL_ID = 0;

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  id = GLOBAL_ID++;

  @ViewChild('inp', {static: true}) inputElement: ElementRef;
  _name: string;

  @Input()
  set name(value: string) {
    this._name = value;
    console.log("input setter", this.inputElement, this.id);
    this.inputElement.nativeElement.value = value;
  }
  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit() {
    console.log("on init fired", this.inputElement, this.id);
  }

  ngDoCheck() {
    console.log("do check");
  }

  ngOnChanges() {
    console.log("on changes");
  }

}
