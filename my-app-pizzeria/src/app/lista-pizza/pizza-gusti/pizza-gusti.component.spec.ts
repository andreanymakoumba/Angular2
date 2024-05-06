import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGustiComponent } from './pizza-gusti.component';

describe('PizzaGustiComponent', () => {
  let component: PizzaGustiComponent;
  let fixture: ComponentFixture<PizzaGustiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaGustiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaGustiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
