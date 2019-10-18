import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';


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
    imageSliders:ImageSlider[] = [
      {
        imgUrl:'https://t00img.yangkeduo.com/goods/images/2019-10-17/2e03fdab-5f3d-43f1-abd4-5262f1387b56.jpg?imageMogr2/quality/70',
        link:'',
        caption:''
      },
      {
        imgUrl:'https://t16img.yangkeduo.com/pdd_oms/2019-10-14/acba8aef568b455fa517c770cbf38d1f.png?imageMogr2/quality/70',
        link:'',
        caption:''
      },
      {
        imgUrl:'https://t00img.yangkeduo.com/goods/images/2019-10-16/4773711b-dbab-4fea-99ed-44b5e100e35e.png?imageMogr2/quality/70',
        link:'',
        caption:''
      },
      {
        imgUrl:'https://t00img.yangkeduo.com/goods/2019-10-17/9c1a790185fedcfd908155093829d6c0.jpeg?imageMogr2/quality/70',
        link:'',
        caption:''
      }
    ];
    handleTabSelected(topMenu:TopMenu){
      console.log(topMenu);
    }
}
