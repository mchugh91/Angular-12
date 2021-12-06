import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler){
        
        console.log('Request is on the way');
        const modReq = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        })
        return next.handle(req).pipe(
            tap(event =>{
                if(event.type === HttpEventType.Response){
                    console.log('Response has arrived');
                    console.log(event.body);
                }
            }));
    }
}