import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { FavoritesPageComponent } from '../favorites-page/favorites-page.component';

@Component({
  selector: 'app-favorite-pop-up',
  templateUrl: './favorite-pop-up.component.html',
  styleUrls: ['./favorite-pop-up.component.css']
})
export class FavoritePopUpComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<void>();
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  get favoritePopUp() {
    return this.favoritesService.getFavoritePop();
  }

  closePopUp = () => {
    this.closeEvent.emit();
  };

}
