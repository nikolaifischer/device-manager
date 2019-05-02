import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean;
  title = 'Proglove Device Manager';

  onLogin() {
    this.loggedIn = true;
  }
  onLogout() {
    this.loggedIn = false;
  }
}
