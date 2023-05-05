import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  httpClient = inject(HttpClient)

  constructor() { }

  getData(name: string) {
    let url = 'https://api.scryfall.com/cards/named?fuzzy=' + name
    return this.httpClient.get(url)
  }

  getCardImage(imageUrl: string) {
    return this.httpClient.get(imageUrl)
  }
}
