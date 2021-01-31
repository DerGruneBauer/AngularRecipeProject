import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-recipe-popup',
  templateUrl: './recipe-popup.component.html',
  styleUrls: ['./recipe-popup.component.css'],
})
export class RecipePopupComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<void>();
  constructor(private RecipeServiceService: RecipeServiceService ) {}

  ngOnInit(): void {}

  closePopUp = () => {
    this.closeEvent.emit();
  };

  get popUpInfo() {
    return this.RecipeServiceService.getPopUpInfo();
  }

}