import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'shared/auth.service';
import { DoneLoadingService } from 'shared/doneLoading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(private authService: AuthService, private router: Router, private doneLoading : DoneLoadingService) { }

  ngOnInit() {
    this.doneLoading.done();
   }

  register(name: string, password: string): void {
    this.authService.register(name, password).subscribe(() => {
      this.authService.sendEmail().subscribe(() => { this.message = 'Email was sent.'; }, error => { this.message = error.message; });
      this.router.navigate(['/home']);
    },
      (error) => {
        this.message = 'Email was sent.';
      });
  }


  login(name: string, password: string): void {
    this.message = null;
    this.authService.login(name, password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
  logout() {
    this.message = "Logged Out!";
    this.authService.logout();
  }
}
