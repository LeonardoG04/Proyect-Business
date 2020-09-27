import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Page } from 'src/app/Commons/page';
import { Company } from '../models/company/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  url=environment.endpoint+"service-user/";
  urlCompany=environment.endpoint+"service-company/";
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json','Content-Length':'<calculated when request is sent>','Host':'<calculated when request is sent>','User-Agent':'PostmanRuntime/7.26.5','Accept':'*/*','Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive'})

  getCompany(userId,numberPage,elementPage){
    return this.http.get<Page>(environment.apis.company.GET,{
      params:{
        userId: userId,
        numberPage: numberPage,
        elementPage: elementPage
      }
    });
  }

  getCompanyId(userId){
    return this.http.get("http://localhost:8085/business/services-company/demo/getBussiness?idUsuario="+userId);
  }
  
}
