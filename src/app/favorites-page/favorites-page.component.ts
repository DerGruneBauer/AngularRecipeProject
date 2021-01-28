import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {

  constructor(
    private RecipeServiceService: RecipeServiceService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
   
  }

  //this keyword below "get" will allow us to call this function which will allow us to return all of the favorites stored in the array. 
  //now in our html we can simply say "let item of favorites" and it will automatically call this and retun the array/each item in it. 
  get favorites(){
    return this.favoritesService.getFavorites();
  }

}
