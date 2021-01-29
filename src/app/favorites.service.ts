import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  //declare favorites array
  public favorites: any[] = [];

  constructor() { }

  //return array of favorites
  getFavorites(): any[] {
    return this.favorites;
  }

  //This will take the recipe/object variable we sent over from the search criteria page and use it in this method
  //It will push that recipe into the array we declared above on this favorties service page. (favorites: any[] = [])
  addFavorite(recipe: object) {
    this.favorites.push(recipe);
    console.log(this.favorites);
    return this;
  }

  contains(recipe: object): boolean {
    return this.favorites.includes(recipe);
  }

  removeFavorite(index: number) {
    this.favorites.splice(index, 1);
    return this.favorites;
  }
}
