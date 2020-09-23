import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Core/_base/models/user/user';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { login } from 'src/app/Core/_base/models/user/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    urlUser:String=environment.endpoint+"/service-user";
    private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient, private router: Router) { }

  private isNoAutorizado(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }

  getLogue(x:login){
    return this.http.post<User>(`http://localhost:8090/business/service-user/user/login`,x,{headers:this.httpHeaders});
  }

  /*navigate(x:login){
    return this.http.post<User>(this.urlUser+'/menu',x,{headers:this.httpHeaders})
  }*/

  create(usuari:any){
      return this.http.post<User>(this.urlUser+'/user/create',usuari,{headers:this.httpHeaders})
  }

  getUser(): Observable<User>{
    return this.http.get<User>(this.urlUser + '/user?');
  }
}