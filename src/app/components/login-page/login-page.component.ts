import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_CONFIGURATION } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // onSubmitLogin(e) {
  //   this.username = e.target[0].value
  //   this.password = e.target[1].value
  //   console.log(this.username , this.password)
  //   this.router.navigate(['/main'])
  // }
}
