import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCucinaComponent } from './menu-cucina.component';

describe('MenuCucinaComponent', () => {
  let component: MenuCucinaComponent;
  let fixture: ComponentFixture<MenuCucinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuCucinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuCucinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
