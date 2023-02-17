import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit(): void{

  }
userModel = new User();

mensagem = ""

usuarioLogado = ""

OnSubmit(){
 console.log(this.userModel)

 this.loginService.login(this.userModel).subscribe((response)=>{
 console.log(response) 
 })
}
  }


