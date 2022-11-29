import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'Rahul-SearchFlims'; 
    isLoggedIn: boolean = false;

    constructor(private authService: AuthenticationService, private router: Router){}

    ngOnInit(): void {
      this.router.events.subscribe((value) => {
        this.isLoggedIn = this.authService.loggedIn;
      });
    }

    logout():void{
      this.authService.logout();
    }
}
