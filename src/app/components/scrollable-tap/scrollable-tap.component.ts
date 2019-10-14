import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export  interface TopMenu{
  title:string;
  link:string;
}
@Component({
  selector: 'app-scrollable-tap',
  templateUrl: './scrollable-tap.component.html',
  styleUrls: ['./scrollable-tap.component.css']
})
export class ScrollableTapComponent implements OnInit {
  selectedIndex = -1;
  @Input() menus:TopMenu[] =[];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Output() tabSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  handleSelection(index:number){
    this.selectedIndex = index
    //将事件发送出去
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}
