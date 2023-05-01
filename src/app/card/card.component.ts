import { Component, OnInit, inject } from '@angular/core';
import { ScryfallService } from '../scryfall.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: any
  cardImage: any = []
  scryfallService = inject(ScryfallService)
  

  ngOnInit() {
    this.getCardData()

  }

  async getCardData() {
    await this.scryfallService.getData().subscribe(data => {
      console.log(data);
      this.card = data;
    })
  }

  async getCardImage() {
    await this.scryfallService.getCardImage(this.card.image_uris.normal).subscribe(data => {
      console.log(data);
      this.cardImage = data
    })
  }
}
