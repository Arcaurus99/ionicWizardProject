import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    //const authService = this.injector.get(AuthService);
    this.user = this.authService.getUser();
    // console.log(this.user)

    const displayName = this.user.displayName;
    const email = this.user.email;
    const photoURL = this.user.photoURL;
    const emailVerified = this.user.emailVerified;

    console.log(displayName, email, photoURL, emailVerified);

  }

  logOut() {
    if (this.user) {
      this.authService.logout();
      this.router.navigate(['/sesion']);
    } else {
      console.log("can't logout")
    }
  }

}
