import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public texto!:string;

  OnInit() {
    this.texto! = "O Melhor da Tecnologia <br> Você Envontra Aqui!"
  }


}
