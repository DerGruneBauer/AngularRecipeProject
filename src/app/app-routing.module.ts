import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

const routes: Routes = [
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'recipeList', component: RecipesListComponent },
  { path: 'search', component: SearchCriteriaComponent },
  { path: '', component: SearchCriteriaComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
