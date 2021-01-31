import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private httpClient: HttpClient) { }

  recipeInfo = [];

  ApiId: string = '1969a411';
  ApiKey: string = '720b7458df1ca9dafe9916c7b299aa0f';
  ApiUrl: string = `https://api.edamam.com/search?q=rice&app_id=${this.ApiId}&app_key=${this.ApiKey}`;


  public ApiCall() {
     return this.httpClient.get(this.ApiUrl);
  }

  getSearchResults(ingredient: string) {
   let searchUrl: string = `https://api.edamam.com/search?q=${ingredient}&app_id=${this.ApiId}&app_key=${this.ApiKey}`;
    return this.httpClient.get(searchUrl)
  }

  getDietSearchResults(diet: string) {
    let searchUrl: string = `https://api.edamam.com/search?q=${diet}&app_id=${this.ApiId}&app_key=${this.ApiKey}&diet=${diet}`
     return this.httpClient.get(searchUrl)
   }

   getHealthSearchResults(health: string) {
    let searchUrl: string = `https://api.edamam.com/search?q=${health}&app_id=${this.ApiId}&app_key=${this.ApiKey}&health=${health}`
     return this.httpClient.get(searchUrl)
   }

   addRecipeInfo(recipe: object){
    this.recipeInfo.push(recipe);
       if (this.recipeInfo.length > 1){
         this.recipeInfo.splice(0, 1);
         return this;
       } else {
         return this;
       }
   }

  getPopUpInfo(){
    return this.recipeInfo;
  }

}
