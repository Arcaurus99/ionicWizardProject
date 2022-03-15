import { Component, OnInit } from '@angular/core'; 

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    //const authService = this.injector.get(AuthService);
    const user = this.authService.getUser();
  }

}
