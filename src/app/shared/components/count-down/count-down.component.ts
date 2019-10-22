import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startDate = new Date();
  @Input() futureDate : Date;
  //定义私有常量
  private _MS_PER_SECOND = 1000;
  countDown$ :Observable<string>;
  constructor() { }
  ngOnInit() {
  }

  private diffInSec = (start:Date,future:Date):number=>{
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  }
 
}
