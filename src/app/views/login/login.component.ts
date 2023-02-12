import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

     constructor() { }

     ngOnInit(): void{

     }
  userModel = new User()

  OnSubmit(){
    console.log(this.userModel)
  }
}
