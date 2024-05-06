import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmsComponent } from './lista-films.component';

describe('ListaFilmsComponent', () => {
  let component: ListaFilmsComponent;
  let fixture: ComponentFixture<ListaFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
