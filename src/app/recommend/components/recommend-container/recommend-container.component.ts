import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product, Ad } from 'src/app/shared/domain';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HomeService } from 'src/app/home';
@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {
  ad: Ad[] = [
    {
      imageUrl: 'http://t00img.yangkeduo.com/goods/2019-10-22/5fbee985f49da659acc0b123af98822e.gif?imageView2/2/w/1300/q/70/format/webp',
      link: '',
    }
  ];

  products: Product[] = [
    {
      id: 1,
      imageUrl: 'http://t00img.yangkeduo.com/goods/images/2019-03-05/83a76ade-e532-4378-9c6d-a0dc56ab21ad.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
      title: '【34.4元抢5000件，抢完恢复59.9元】加绒加厚卫衣女士韩版潮长袖宽松2019秋冬季新款大码中长款连帽衫',
      tags: ['1111', '2222'],
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
      tags: ['33', '44'],
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
    },
    {
      id: 5,
      imageUrl: 'http://t00img.yangkeduo.com/goods/images/2019-03-05/83a76ade-e532-4378-9c6d-a0dc56ab21ad.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
      title: '【34.4元抢5000件，抢完恢复59.9元】加绒加厚卫衣女士韩版潮长袖宽松2019秋冬季新款大码中长款连帽衫',
      tags: [],
      price: 6,
      priceDesc: '已拼1.1万件',
      buyerAvatars: [
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
        'http://t00img.yangkeduo.com/goods/images/2019-03-05/27aacbc6-84ef-4baa-8de8-daf7b2dac0c6.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80'
      ]
    },
    {
      id: 6,
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

//数据流
  // ad$: Observable<Ad>;

  // products$: Observable<Product[]>;
  constructor(private service: HomeService) { }

  ngOnInit() {
    // this.ad$ = this.service.getAdByTab('men').pipe(
    //   filter(ads => ads.length > 0),
    //   map(ads => ads[0])
    // );
    // this.products$ = this.service.getProductsByTab('men');
  }

}
