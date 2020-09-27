import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Core/services/user.service';
import { login } from 'src/app/Core/models/user/login';
import { User } from 'src/app/Core/models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lstLogin:User= new User();
  loginForm:FormGroup;
  usuario:login=new login();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {  
    this.initLoginForm(); 
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      user: ['',Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320)
      ])
      ],

      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])]
    });
  }

  isControlHasError(controlName: string, validationType: string): boolean{  
    
    const control = this.loginForm.controls[controlName];
    
    if(!control){
      return false;
    }
    const result = control.hasError(validationType)&&(control.dirty || control.touched);
    return result;
  }

  submit(){    
    this.userService.getLogue(this.usuario).subscribe(
      (data)=>{        
        this.lstLogin=data;
        if(data!=null){

          let usuarioResponse=JSON.stringify(this.lstLogin);
          localStorage.setItem("session",usuarioResponse);


          this.router.navigate(['/dashboard']);
        }
      }
    )
  }

}
