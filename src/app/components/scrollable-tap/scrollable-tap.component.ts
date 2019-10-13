import { Component, OnInit } from '@angular/core';
interface TopMenu{
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
  menus:TopMenu[] = [
    {
      title:'热门',
      link:''
    },
    {
      title:'男装',
      link:''
    },
    {
      title:'手机',
      link:''
    },
    {
      title:'食品',
      link:''
    },
    {
      title:'运动',
      link:''
    },
    {
      title:'水果',
      link:''
    },
    {
      title:'包包',
      link:''
    },
    {
      title:'女装',
      link:''
    },
    {
      title:'手表',
      link:''
    },
    {
      title:'家电',
      link:''
    },
    {
      title:'电脑',
      link:''
    },
    {
      title:'化妆',
      link:''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
