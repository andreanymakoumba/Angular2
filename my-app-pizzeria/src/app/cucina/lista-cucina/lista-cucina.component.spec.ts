import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCucinaComponent } from './lista-cucina.component';

describe('ListaCucinaComponent', () => {
  let component: ListaCucinaComponent;
  let fixture: ComponentFixture<ListaCucinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCucinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCucinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
