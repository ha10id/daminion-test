import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private http:Http) { }
  getDataFromJSON(){
    let apiUrl = './assets/data/payload.json'
    return this.http.get(apiUrl)
      .map( (response: Response) => {
        const data = response.json()
        return data
      })
  }
}

