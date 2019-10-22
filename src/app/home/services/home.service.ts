import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageSlider, Channel, TopMenu } from 'src/app/shared/components';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(private http:HttpClient) { }
getBanners(){
  return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
}
getChannels(){
  return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
}
getTabs(){
  return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
}

}
