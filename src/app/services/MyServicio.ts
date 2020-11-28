import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class AlbumService{

    constructor(private httpclient: HttpClient){}

    ObtenerAlbum(): Observable<any>{
        return this.httpclient.get("https://jsonplaceholder.typicode.com/albums")

    }
}