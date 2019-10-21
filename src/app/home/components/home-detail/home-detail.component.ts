import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://t00img.yangkeduo.com/goods/images/2019-10-17/2e03fdab-5f3d-43f1-abd4-5262f1387b56.jpg?imageMogr2/quality/70',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://t16img.yangkeduo.com/pdd_oms/2019-10-14/acba8aef568b455fa517c770cbf38d1f.png?imageMogr2/quality/70',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://t00img.yangkeduo.com/goods/images/2019-10-16/4773711b-dbab-4fea-99ed-44b5e100e35e.png?imageMogr2/quality/70',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://t00img.yangkeduo.com/goods/2019-10-17/9c1a790185fedcfd908155093829d6c0.jpeg?imageMogr2/quality/70',
      link: '',
      caption: ''
    }
  ];

  channels: Channel[] = [
    {
      id: 1,
      title: '限时秒杀',
      icon: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50',
      link: ''
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

}
