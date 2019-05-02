import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter();
  
  username: string;
  password: string;

  showWrongLogin: boolean;

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    if (this.username === 'example@mail.com' && this.password === 'password') {
      this.loggedIn.emit();
    }
    else {
      console.log('Wrong Username/Password');
      this.showWrongLogin = true;
    }
  }

}
