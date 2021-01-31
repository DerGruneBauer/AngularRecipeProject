import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  constructor(
    private RecipeServiceService: RecipeServiceService,
    public favoriteService: FavoritesService
  ) { }

  initialSearchItems: any;
  searchItems = [];
  showBrowseForm: boolean = false;
  showPopUp: boolean = false;

  ngOnInit(): void { }

  searchRecipes() {
    let query = document.querySelector('input').value;
    this.RecipeServiceService.getSearchResults(query).subscribe((data) => {
      this.initialSearchItems = data;
      console.log(data)
      this.searchItems = this.initialSearchItems.hits;
    });
  }

  dietSearchRecipes(query: string) {
    this.RecipeServiceService.getDietSearchResults(query).subscribe((data) => {
      this.initialSearchItems = data;
      this.searchItems = this.initialSearchItems.hits;
    });
  }

  healthSearchRecipes(query: string) {
    this.RecipeServiceService.getHealthSearchResults(query).subscribe(
      (data) => {
        this.initialSearchItems = data;
        this.searchItems = this.initialSearchItems.hits;
      }
    );
  }
  
  getSearchItems(){
    return this.searchItems;
  }

  openPopUp(item: object){
   this.RecipeServiceService.addRecipeInfo(item);
   console.log(item);
  }

  closePopUp(){
    this.showPopUp = false;
  }


  // heartColor(i) {
  //   const color = this.favoriteService.favorites.includes(this.searchItems[i]) ? 'red' : 'gray';
  //   console.log(color);
  //   console.log(this.favoriteService.favorites);
  //   console.log(this.searchItems[i]);
  //   return color;
  // }

  addOrRemoveFavorite(recipe: object) {
    if (this.favoriteService.favorites.includes(recipe)) {
      this.favoriteService.removeFavorite(recipe);
    } else {
      this.favoriteService.addFavorite(recipe);
    }
  }

}
