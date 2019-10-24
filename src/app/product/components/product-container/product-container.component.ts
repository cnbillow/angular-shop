import { DialogService } from './../../../dialog/services/dialog.service';
import { OrderService } from './../../services/order.service';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductVariant } from '../../domain';
import { ProductVariantDialogComponent } from '../product-variant-dialog';
@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  //数据源
  selectedIndex = 0;
   variants: ProductVariant[] = [
     {
       id:1,
       name:'i7s蓝牙耳机双耳单耳运动迷你无线耳机oppo华为vivo苹果小米通用',
       product: {
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
       price:2,
       listPrice:120,
       productVariantImages: [
         {
           imgUrl: 'http://t00img.yangkeduo.com/goods/images/2019-09-15/361db433-d7fa-4a21-adfd-54bdaf9c3716.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
           link: '',
           caption: ''
         },
         {
           imgUrl: 'http://t00img.yangkeduo.com/goods/images/2019-09-15/395505f2-3e2f-4735-87af-f62e998cc69b.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80',
           link: '',
           caption: ''
         },
       ],

     }
   ];
  subs: Subscription[] = [];
  //数据流
  //variants$: Observable<ProductVariant[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    // const productId = this.route.paramMap.pipe(
    //   filter(params=>params.has('productId')),
    //   map(params => params.get('productId'))
    // );
    // this.variants = productId.pipe(
    //   switchMap(productId=>
    //     this.orderService.getProductVariantsByProductId(productId)  
    //   )
    // )
  }

  handleDirectBuy(variants: ProductVariant[]) { }
  handleGroupBuy(variants: ProductVariant[]){
    alert('111111');
    const top = 40;
    const formSubmitted = new EventEmitter();
    this.subs.push(
      formSubmitted.subscribe(ev => {
        this.dialogService.saveData(ev);
        this.router.navigate(['/orders', 'confirm']);
      })
    );
    const selected = new EventEmitter<number>();
    this.subs.push(
      selected.subscribe(idx => {
        console.log(idx);
        this.selectedIndex = idx;
      })
    );
    this.dialogService.open(ProductVariantDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex
      },
      outputs: { formSubmitted, selected },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }

}
