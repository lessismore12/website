import { Component, OnInit, inject } from '@angular/core';
import { ScryfallService } from '../services/scryfall.service';
import { ErhrecServiceService } from '../services/erhrec-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: any
  cardImage: any = []
  allCommanders:any = []
  scryfallService = inject(ScryfallService)
  edhrecService = inject(ErhrecServiceService)
  userInput: string = ""
  

  ngOnInit() {
    this.getCardData()
    this.getCommanderList()
  }

  async getCardData() {
    await this.scryfallService.getData("the ur dragon").subscribe(data => {
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

  async getCommanderList() {
    await this.edhrecService.getAllCommanders().subscribe(data => {
      this.allCommanders = data
    })
  }
}
