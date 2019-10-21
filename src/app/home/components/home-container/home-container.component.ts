import { Component, OnInit } from '@angular/core';
import {TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router:Router) { }
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
      link: ''
    },
    {
      id: 4,
      title: '食品',
      link: ''
    },
    {
      id: 5,
      title: '运动',
      link: ''
    },
    {
      id: 6,
      title: '水果',
      link: ''
    },
    {
      id: 7,
      title: '包包',
      link: ''
    },
    {
      id: 8,
      title: '女装',
      link: ''
    },
    {
      id: 9,
      title: '手表',
      link: ''
    },
    {
      id: 10,
      title: '家电',
      link: ''
    },
    {
      id: 11,
      title: '电脑',
      link: ''
    },
    {
      id: 12,
      title: '化妆',
      link: ''
    }
  ];

  ngOnInit() {
  }
  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home',topMenu.link]);
  }

}
