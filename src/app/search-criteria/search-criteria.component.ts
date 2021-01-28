import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  
  constructor(private RecipeServiceService: RecipeServiceService,
              private favoriteService: FavoritesService) { }

  initialSearchItems: any;
  searchItems = [];
  showBrowseForm: boolean = false;

  ngOnInit(): void {
    
  }

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
  this.RecipeServiceService.getHealthSearchResults(query).subscribe((data) => {
    this.initialSearchItems = data;
    this.searchItems = this.initialSearchItems.hits;
});
}

//For Delia. Start with importing favorites service page at top of page. Services also need to be added to the constructor area above if you 
//plan to use them to grab and pass information between components. 
//I first started by creating the function below and passing in the corresponding recipe in the html page. Console log to make sure it is 
//correct when clicked on. Now we can pass that parameter/variable into our function which will send it over to the service page/method.
addToFavorites(recipe: object){
  console.log(recipe);
  this.favoriteService.addFavorite(recipe);
}

}
