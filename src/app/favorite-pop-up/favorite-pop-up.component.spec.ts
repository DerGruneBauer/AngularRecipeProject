import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePopUpComponent } from './favorite-pop-up.component';

describe('FavoritePopUpComponent', () => {
  let component: FavoritePopUpComponent;
  let fixture: ComponentFixture<FavoritePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
