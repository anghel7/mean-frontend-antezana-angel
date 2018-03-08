import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'sky-user-form-create',
  templateUrl: './user-form-create.component.html',
  styleUrls: ['./user-form-create.component.css']
})
export class UserFormCreateComponent implements OnInit {

  userToCreate: User = {
    name: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  };

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  createNewUser(): void {
    console.log('User to create: ', this.userToCreate);
    this.userservice.createUser(this.userToCreate)
      .subscribe(
        (response)=>{
          alert(response.message);
        }, (error)=>{
          alert(error.message);
        }
      );
  }

}
