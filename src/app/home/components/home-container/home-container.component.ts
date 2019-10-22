import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import {TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router:Router,
    private service:HomeService

  ) { }
  title = 'angular商城';
  topMenus: TopMenu[] = [
    {
      id:1,
      title: '热门',
      link: 'hot'
    },
    {
      id: 2,
      title: '男装',
      link: 'men'
    },
    {
      id: 3,
      title: '手机',
      link: 'mobile'
    },
    {
      id: 4,
      title: '食品',
      link: 'food'
    },
    {
      id: 5,
      title: '运动',
      link: 'active'
    },
    {
      id: 6,
      title: '水果',
      link: 'active'
    },
    {
      id: 7,
      title: '包包',
      link: 'active'
    },
    {
      id: 8,
      title: '女装',
      link: 'active'
    },
    {
      id: 9,
      title: '手表',
      link: 'active'
    },
    {
      id: 10,
      title: '家电',
      link: 'active'
    },
    {
      id: 11,
      title: '电脑',
      link: 'active'
    },
    {
      id: 12,
      title: '化妆',
      link: 'active'
    }
  ];

  ngOnInit():void {
    //获取导航栏
    this.service.getTabs().subscribe(tabs=>{
      this.topMenus = tabs;
      console.log('1',this.topMenus);
    });
   
  }
  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home',topMenu.link]);
  }

}
