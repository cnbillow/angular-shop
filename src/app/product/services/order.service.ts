import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductVariant } from '../domain';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

constructor(private http:HttpClient) { }
  getProductVariantsByProductId(productId:string){
    return this.http.get<ProductVariant[]>(
      `${environment.baseUrl}/productVariants`,
      {
        params:{
          _expand:'product',
          _embed:'productVariantImages',
          productId
        }
      }
    )
  }
}
