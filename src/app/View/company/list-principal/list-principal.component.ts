import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Page } from 'src/app/Commons/page';
import { CompanyService } from 'src/app/Core/services/company.service';
import { User } from 'src/app/Core/models/user/user';
import { Company } from 'src/app/Core/models/company/company';


@Component({
  selector: 'app-list-principal',
  templateUrl: './list-principal.component.html',
  styleUrls: ['./list-principal.component.css']
})
export class ListPrincipalComponent implements OnInit {

  
  session:User =new User();
  response:any;
  lsCompany:Company[]=[];
  constructor(private companyService:CompanyService, private router: Router) { }

  ngOnInit(): void {
      
    if(localStorage.getItem("session")){

      this.session=JSON.parse(localStorage.getItem("session"));
      
      this.companyService.getCompanyId(this.session.userId).subscribe(
        (response)=>{
          this.response=response;
          this.lsCompany=this.response.content;
        }
      )

    }
  }
}
