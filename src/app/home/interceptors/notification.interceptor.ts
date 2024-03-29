import { Injectable } from '@angular/core';
import { 
    HttpInterceptor, 
    HttpEvent, HttpHandler, 
    HttpRequest, 
    HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req).pipe(
            tap((event:HttpEvent<any>)=>{
                if(event instanceof HttpResponse &&
                    event.status >= 200 &&
                    event.status < 300
                    ){
                        console.log('success!!!');
                    }
            })
        );
    }
}