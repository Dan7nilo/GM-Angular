import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/model/noticias';
import { NoticiasService } from 'src/app/service/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private noticiaService: NoticiasService) { }

listaNoticias = [] as Noticias[]

  ngOnInit(): void {
    this.carregarNoticias()
  }
  carregarNoticias(){
    this.noticiaService.getNoticias().subscribe( (notciasRecebidas: Noticias[])=>{
      this;this.listaNoticias = notciasRecebidas
    console.log(this.listaNoticias);
    })
  }


}
