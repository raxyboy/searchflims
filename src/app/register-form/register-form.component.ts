import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  loggedIn!: boolean;

  constructor(private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
     this.registerForm = new FormGroup({
       email:new FormControl('',[Validators.required,Validators.email]),
       password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
    });
  }
  
  navigatePostLogin(){
    this.router.navigateByUrl("/login");
  }

  onRegister(){
    this.authenticationService.register({
      email: this.registerForm.value.email, 
      password: this.registerForm.value.password,
      firstname: this.registerForm.value.firstName, 
      lastname: this.registerForm.value.lastName
    }).subscribe((data: any) => {
      this.navigatePostLogin();
      this.loggedIn=true;
       });
    
  }

}
