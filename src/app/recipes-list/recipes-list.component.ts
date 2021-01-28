import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { FavoritesPageComponent } from '../favorites-page/favorites-page.component';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  initialRecipeList;
  recipeList;

  constructor(private RecipeServiceService: RecipeServiceService) { }

  initialSearchItems: any;
  searchItems = [];

  ngOnInit(): void {

    this.RecipeServiceService.ApiCall()
      .subscribe((data) => {
      this.initialRecipeList = data;
      this.recipeList = this.initialRecipeList.hits;
      console.log(this.recipeList);
    })

  }

}
