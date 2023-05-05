import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErhrecServiceService {

  httpClient = inject(HttpClient)


  getAllCommanders() {
    let url = 'https://json.edhrec.com/static/typeahead/commanders'
    return this.httpClient.get(url)
  }
}
