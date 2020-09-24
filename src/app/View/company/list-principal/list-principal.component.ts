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

  lstcompany:Page=new Page();
  lstcompanyUser:Company=new Company();
  session:User =new User();
  constructor(private service:CompanyService, private router: Router) { }

  ngOnInit(): void {
      
    if(localStorage.getItem("session")){

      this.session=JSON.parse(localStorage.getItem("session"));
      this.service.getCompany(this.session.userId,0,5)
      .subscribe(data=>{
        this.lstcompany=data;
       
        this.service.getCompanyId(this.lstcompanyUser.companyId).subscribe((company)=>{
            this.lstcompanyUser=company;
          })
         console.log(this.lstcompany)
      })

    }
  }
}
