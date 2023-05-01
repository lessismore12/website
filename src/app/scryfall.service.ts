import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  httpClient = inject(HttpClient)

  constructor() { }

  getData() {
    let url = 'https://api.scryfall.com/cards/named?fuzzy=jeleva'
    return this.httpClient.get(url)
  }

  getCardImage(imageUrl: string) {
    return this.httpClient.get(imageUrl)
  }
}
