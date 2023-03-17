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
loginModel = new User();

mensagem = ""

usuarioLogado = ""

OnSubmit(){
 console.log(this.loginModel)

 let erroEncontrado = 0;

 const listaPalavras: string[] = ["select", "from", "drop", "having", "or","group", "insert", "exec", "\"" , "\'", "--", "#", "*", ";"]

listaPalavras.forEach(palavra => {
  console.log("palavra atual: ", palavra)

  if(this.loginModel.email?.toLowerCase().includes(palavra)){
  console.log("palavra encontrada: ",palavra)
  this.mensagem = "Dados Inválidos: "+ palavra;
  erroEncontrado = 1}
})

if(erroEncontrado == 0){

 this.loginService.login(this.loginModel).subscribe((response)=>{
 console.log("Sucesso!") 
 this.router.navigateByUrl("")
 },(respostaErro)=>{
 this.mensagem = respostaErro.console.error
 }
 )
}
}}