import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUsersLine } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UiService } from 'src/app/services/ui/ui.service';

import { emptyUser, IUser } from 'src/app/interfaces/USER';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  envelope = faEnvelope;
  group = faUsersLine;
  userData: IUser = emptyUser;
  editProfile: boolean = false;

  // variables for edit form
  firstName: string = "";
  lastName: string = "";
  userJobTitle: string = "";

  constructor(
    private authService: AuthService,
    private uiService: UiService,
  ) { }

  ngOnInit(): void {
    this.uiService.checkLoggedIn();
    this.authService.getUserData()
      .subscribe(user => this.userData = {
        ...user,
        firstName: this.authService.capitalizeName(user.firstName),
        lastName: this.authService.capitalizeName(user.lastName)
      });
    setTimeout(() => {
      console.log(this.userData);
    }, 40);
  }

  hideEditProfile() {
    this.editProfile = false;
  }

  showEditProfile() {
    this.editProfile = true;
  }

  onEditSubmit() {
    if(this.firstName === "") this.firstName = this.userData.firstName;
    if(this.lastName === "") this.lastName = this.userData.lastName;
    if(this.userJobTitle === "") this.userJobTitle = this.userData.userJobTitle;
    const newUserData = {
      ...this.userData,
      firstName: this.firstName,
      lastName: this.lastName,
      userJobTitle: this.userJobTitle,
    }
    console.log(newUserData);
    this.authService.editUser(newUserData).subscribe(userData => this.userData = userData)
    this.editProfile = false;
  }

  signOut() {
    this.uiService.signOut();
  }
}
