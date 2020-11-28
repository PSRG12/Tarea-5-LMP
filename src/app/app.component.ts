import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AlbumService } from '../app/services/MyServicio'
import { Datos } from './datos/datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'T5-Angular';

  constructor(private cookie: CookieService,private albumservice: AlbumService){
    
 }

  ListaAlbum: Datos[] | undefined

  ngOnInit()
  {
    this.albumservice.ObtenerAlbum()
    .subscribe(
      data=>
      {
      this.ListaAlbum = data;
      }
    )
  }

  agregarAlbumEnCookie(x: any){
    this.cookie.set("Id",x.id)
    this.cookie.set("albumId",x.userId)
    this.cookie.set("albumTitle",x.title)
  }

  verAlbum()
  {
    alert("ID: "+this.cookie.get("Id"))
    alert("Album ID: "+this.cookie.get("albumId"))
    alert("Album Title: "+this.cookie.get("albumTitle"))
  }
}
