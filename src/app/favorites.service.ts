import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  //declare favorites array
  public favorites: any[] = [];
  public favoritePopUp = [];

  constructor() { }

  //return array of favorites
  getFavorites(): any[] {
    return this.favorites;
  }

  //add a recipe to the favorites array
  addFavorite(recipe: object) {
    this.favorites.push(recipe);
    return this;
  }

  //remove a recipe from the favorites array
  removeFavorite(recipe: object) {
    let index: number = this.favorites.findIndex(
      (element) => element === recipe
    );
    console.log(index);
    this.favorites.splice(index, 1);
    return this.favorites;
  }

  //add a recipe to the PopUp Window
  addRecipeInfo(recipe: object) {
    this.favoritePopUp.push(recipe);
    if (this.favoritePopUp.length > 1) {
      this.favoritePopUp.splice(0, 1);
      return this;
    } else {
      return this;
    }
  }

  //Show PopUp or Not
  getFavoritePop() {
    return this.favoritePopUp;
  }

}
