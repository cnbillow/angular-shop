import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
@Injectable()
export class ParamInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const modifiedReq = req.clone({
            setParams:{token:environment.token}
        });
        return next.handle(modifiedReq);
    }
}