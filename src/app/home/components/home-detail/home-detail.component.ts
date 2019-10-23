import { HomeService } from './../../services/home.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';
import { switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy{
  constructor(
    private route:ActivatedRoute,
    private service:HomeService
    ) { }
  selectedTabLink;
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
    {
      id: 11,
      title: '现金签到',
      icon: 'http://t00img.yangkeduo.com/goods/2019-10-22/0d7d55e67eb554606f681b79299f091c.gif',
      link: ''
    },
    // {
    //   id: 12,
    //   title: '金猪赚大钱',
    //   icon: 'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png?imageMogr2/format/webp/quality/50',
    //   link: ''
    // },
    // {
    //   id: 13,
    //   title: '电器城',
    //   icon: 'http://t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/format/webp/quality/50',
    //   link: ''
    // },
  ];
  ad: Ad[] =[
    {
      imageUrl: 'http://t00img.yangkeduo.com/goods/2019-10-22/5fbee985f49da659acc0b123af98822e.gif?imageView2/2/w/1300/q/70/format/webp',
      link: '',
    }
  ];

  products:Product[] = [
    {
      id: 1,
      imageUrl: 'http://t00img.yangkeduo.com/goods/images/2019-03-05/83a76ade-e532-4378-9c6d-a0dc56ab21ad.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
      title: '【34.4元抢5000件，抢完恢复59.9元】加绒加厚卫衣女士韩版潮长袖宽松2019秋冬季新款大码中长款连帽衫',
      tags:['1111','2222'] ,
      price: 6,
      priceDesc: '已拼1.1万件',
      buyerAvatars: [
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/83a76ade-e532-4378-9c6d-a0dc56ab21ad.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
          'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80'  
      ]
    },
    {
      id: 2,
      imageUrl: 'http://t00img.yangkeduo.com/goods/images/2019-08-30/16cd7ad3-7f39-4ce0-b3e9-935d1d3765e9.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
      title: '90%棉格子衬衫女长袖2019秋韩版宽松大码上衣收腰显瘦中长款衬衣',
      tags: ['33','44'],
      price: 6,
      priceDesc: '已拼1.1万件',
      buyerAvatars: [
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/83a76ade-e532-4378-9c6d-a0dc56ab21ad.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80'  
      ]
    },
    {
      id: 3,
      imageUrl: 'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
      title: '【57.93元限时抢，抢完恢复75.9元】加厚】好质量仿水貂绒毛衣女开衫外套短款韩版宽松显瘦连帽毛外套',
      tags: [],
      price: 6,
      priceDesc: '已拼1.1万件',
      buyerAvatars: [
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/83a76ade-e532-4378-9c6d-a0dc56ab21ad.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80'  
      ]
    },
    {
      id: 4,
      imageUrl: 'http://t00img.yangkeduo.com/goods/images/2019-03-05/83a76ade-e532-4378-9c6d-a0dc56ab21ad.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
      title: '【34.4元抢5000件，抢完恢复59.9元】加绒加厚卫衣女士韩版潮长袖宽松2019秋冬季新款大码中长款连帽衫',
      tags: [],
      price: 6,
      priceDesc: '已拼1.1万件',
      buyerAvatars: [
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80'  
      ]
    }

  ];
  
  sub: Subscription;
  //数据流形式
  // selectedTabLink$: Observable<string>;
  // imageSliders$: Observable<ImageSlider[]>;
  // channels$: Observable<Channel[]>;
  // ad$: Observable<Ad>;
  //products$: Observable<Product[]>;

  
  

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log('参数',params);
      this.selectedTabLink = params.get('tabLink');
    });

    this.sub = this.route.queryParamMap.subscribe(params=>{
      console.log('查询参数',params)
    });

    this.service.getBanners().subscribe(banners=>{
      this.imageSliders = banners;
    });

    this.service.getChannels().subscribe(channels=>{
      this.channels = channels;
    });
    // this.ad$ = this.selectedTabLink$.pipe(
    //   switchMap(tab => this.service.getAdByTab(tab)),
    //   filter(ads => ads.length > 0),
    //   map(ads => ads[0])
    // );
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

}
