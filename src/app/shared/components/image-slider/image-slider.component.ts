import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider{
  imgUrl:string;
  link:string;
  caption:string
};
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  constructor(private rd2:Renderer2) { }
  @Input() sliders:ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider',{static:false}) imgSlider:ElementRef;
  

  ngOnInit() {
   
  }
  ngAfterViewInit():void{
    //判断小于0时轮播
    if (this.intervalBySeconds <= 0) {
      return;
    }
      this.intervalId = setInterval(()=>{
       // let i = 0;
        this.rd2.setProperty(
          this.imgSlider.nativeElement,
          'scrollLeft',
          (this.getIndex(++this.selectedIndex) *this.imgSlider.nativeElement.scrollWidth) /
           this.sliders.length
          );
      },this.intervalBySeconds *1000);
  }
  ngOnDestory():void{
    clearInterval(this.intervalId);
  }

  //处理数组越界
  getIndex(idx:number):number{
    return idx >= 0
    ? idx % this.sliders.length
    : this.sliders.length - (Math.abs(idx))%this.sliders.length;
  }

  handleScroll(ev){
    const ratio =  
    (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

}
