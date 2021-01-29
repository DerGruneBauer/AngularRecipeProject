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

  getSearchItems() {
    return this.searchItems;
  }

  openPopUp(item: object) {
    this.RecipeServiceService.addRecipeInfo(item);
    console.log(item);
  }

  closePopUp() {
    this.showPopUp = false;
  }

  //For Delia. Start with importing favorites service page at top of page. Services also need to be added to the constructor area above if you
  //plan to use them to grab and pass information between components.
  //I first started by creating the function below and passing in the corresponding recipe in the html page. Console log to make sure it is
  //correct when clicked on. Now we can pass that parameter/variable into our function which will send it over to the service page/method.
  // addToFavorites(recipe: object) {
  //   console.log(recipe);
  //   this.favoriteService.addFavorite(recipe);
  // }

  // heartColor(i) {
  //   const color = this.favoriteService.favorites.includes(this.searchItems[i]) ? 'red' : 'gray';
  //   console.log(color);
  //   console.log(this.favoriteService.favorites);
  //   console.log(this.searchItems[i]);
  //   return color;
  // }

  addOrRemoveFavorite(recipe: object, index: number) {
    if (this.favoriteService.favorites.includes(recipe)) {
      this.favoriteService.removeFavorite(index);
    } else {
      this.favoriteService.addFavorite(recipe);
    }
  }

  // get favorites() {
  //   return this.favoriteService.favorites;
  // }
}
