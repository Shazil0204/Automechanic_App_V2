import { HttpHeaders, HttpInterceptorFn, HttpResponse } from '@angular/common/http';

// Auth interceptor, sets authorization header.
// Bearer token is added for every request.

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if(next instanceof HttpResponse){
    console.log("response");
  }

  try {
    const Token = localStorage.getItem('token');
    if (!Token) {
      return next(req);
    }
    const req1 = req.clone({
      setHeaders: {
        Authorization: `Bearer ${Token}`,
        
      },
    });
    return next(req1);
  } catch {
    return next(req)
  }
};
