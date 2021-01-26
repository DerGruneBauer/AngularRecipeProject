import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowseFeatureComponent } from './browse-feature/browse-feature.component';
import { AboutComponent } from './about/about.component';
// import { RecipePopupComponent } from './recipe-popup/recipe-popup.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    FavoritesPageComponent,
    RecipesListComponent,
    BrowseFeatureComponent,
    AboutComponent,
    // RecipePopupComponent,
    // HeaderComponent,
    // FooterComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
