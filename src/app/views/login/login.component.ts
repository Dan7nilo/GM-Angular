import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit(): void{

  }
userModel = new User();

mensagem = ""

usuarioLogado = ""

OnSubmit(){
 console.log(this.userModel)

 this.loginService.login(this.userModel).subscribe((response)=>{
 //console.log("Sucesso!") 
 this.router.navigateByUrl("")
 },(respostaErro)=>{
 this.mensagem = respostaErro.console.error
 }
 )
}
}