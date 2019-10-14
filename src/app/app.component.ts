import { Component } from '@angular/core';
import { TopMenu } from './components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular商城';
  topMenus:TopMenu[] = [
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
    
    handleTabSelected(topMenu:TopMenu){
      console.log(topMenu);
    }
}
