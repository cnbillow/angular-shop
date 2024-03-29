import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizon-grid',
  templateUrl: './horizon-grid.component.html',
  styleUrls: ['./horizon-grid.component.css']
})
export class HorizonGridComponent implements OnInit {
 private _username = "";
 @Output() usernameChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 @Input()
  public get username():string{
    return this._username;
  }
  public set username(value : string) {
    this._username = value;
    this.usernameChange.emit(value);
  }
  
}
