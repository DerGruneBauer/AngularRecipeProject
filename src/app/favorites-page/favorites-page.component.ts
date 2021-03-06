import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {

  constructor(private favoritesService: FavoritesService) { }

  showFavPopUp: boolean = false;
  ngOnInit(): void { }

  //return favorites array
  get favorites() {
    return this.favoritesService.getFavorites();
  }

  //remove from favorites array
  removeFavorite(index: number) {
    return this.favoritesService.favorites.splice(index, 1);
  }

  // get popUp() {
  //   return this.favoritesService.addRecipeInfo;
  // }

  //add info to PopUp Window
  openPopUp(item: object) {
    this.favoritesService.addRecipeInfo(item);
  }

  //toggle if the PopUp Window is showing or not
  closePopUp() {
    this.showFavPopUp = false;
  }
}
