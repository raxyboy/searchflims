import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '../models/authentication/login-request';
import { RegistrationRequest } from '../models/authentication/registration-request';
import { UserResponse } from '../models/authentication/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private baseUrl = 'api/user'
  private _logIn: boolean;

  token: string | null = null

get loggedIn(): boolean {
  return this.token != null
}

  constructor(private router: Router, private httpClient: HttpClient) { 
    this._logIn = false;
  }

  get logIn(): boolean {
    return this.token != null
  }

  login(loginRequest: LoginRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(this.baseUrl + '/login', loginRequest)
  }
  
  logout(): void {
    this._logIn=false;
    this.token=null;
    this.router.navigateByUrl('/login');
  }

  register(loginRequest: RegistrationRequest): Observable<UserResponse> {
    const registrationRequest = new RegistrationRequest(
      loginRequest.email,
      loginRequest.password,
      loginRequest.firstname,
      loginRequest.lastname
    )
    return this.httpClient.post<UserResponse>(this.baseUrl + '/register', registrationRequest)
  }
}
