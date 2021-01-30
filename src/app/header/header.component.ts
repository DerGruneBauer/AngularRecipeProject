import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  // private searchCriteria: SearchCriteriaComponent

  ngOnInit(): void {
  }

  // get listItems(){
  //   return this.searchCriteria.getSearchItems();
  // }
}
  

