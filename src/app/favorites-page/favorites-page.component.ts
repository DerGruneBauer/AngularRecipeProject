import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {

  constructor( private favoritesService: FavoritesService ) { }

  showFavPopUp: boolean = false;
  ngOnInit(): void {

  }
 
  get favorites() {
    return this.favoritesService.getFavorites();
  }

  // get popUp() {
  //   return this.favoritesService.addRecipeInfo;
  // }

  openPopUp(item: object) {
    this.favoritesService.addRecipeInfo(item);
  }

  removeFavorite(index: number) {
    return this.favoritesService.favorites.splice(index, 1);
  }

  closePopUp() {
    this.showFavPopUp = false;
  }
}
