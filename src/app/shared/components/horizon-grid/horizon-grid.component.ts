import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { Emoji } from '../../decorator';
export interface Channel{
  id:number,
  icon:string,
  title:string,
  link:''
}
@Component({
  selector: 'app-horizon-grid',
  templateUrl: './horizon-grid.component.html',
  styleUrls: ['./horizon-grid.component.css']
})
export class HorizonGridComponent implements OnInit {
@Input() cols = 6;
@Input() displayCols = 5;
sliderMargin = '0';
startDate = new Date(2019,10,22);
futureDate = new Date(2019,10,23);
//定义数组
  channels:Channel[] = [
    {
      id:1,
      title:'限时秒杀',
      icon:'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50',
      link:''
    },
    {
      id: 2,
      title: '断码清仓',
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 3,
      title: '新衣馆',
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-08-25/6c9660932b94227f1a937d191aeacdf5.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 4,
      title: '多多果园',
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 5,
      title: '9块9特卖',
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 6,
      title: '充值中心',
      icon: 'http://t05img.yangkeduo.com/images/2018-05-16/801ae189938526cdaf40935d07034c5e.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 7,
      title: '百亿补贴',
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-06-13/d3fd3a5b187bca651f8e65ae8a25c296.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 8,
      title: '现金签到',
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-07-10/04ec5c84906afb5b28b852b167a14ddf.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 9,
      title: '金猪赚大钱',
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png?imageMogr2/format/webp/quality/50',
      link: ''
    },
    {
      id: 10,
      title: '电器城',
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/format/webp/quality/50',
      link: ''
    },




  ];
  
  constructor() { }

  ngOnInit() {
  }

  public get scrollable() : boolean {
    return this.cols > this.displayCols;
  }

  
  public get templateRows() : string {
    return `minmax(auto, max-content)`;
  }

  
  public get templateColumns() : string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols *
      0.4}rem) / ${this.displayCols}))`;
  }

  public handleScroll(ev){
    this.sliderMargin = `0 ${(100 * ev.target.scrollLeft) /
      ev.target.scrollWidth}%`;
  }
  
  
  
 
  
}
