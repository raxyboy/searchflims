import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '../models/authentication/login-request';
import { RegistrationRequest } from '../models/authentication/registration-request';
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  
  title='Search Film';
  email:string='';
  password:string='';

  constructor(private route: ActivatedRoute, private service: AuthenticationService, private router:Router){
  }

  login():void{
    this.service.login(this.loginRequest)
    .subscribe(response => {
      this.service.token = response.token
      this.router.navigateByUrl("/search")
    })
  }
  
  get loginRequest(): LoginRequest {
    return new LoginRequest(this.email, this.password)
  }
}
