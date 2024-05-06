import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConttattiComponent } from './conttatti.component';

describe('ConttattiComponent', () => {
  let component: ConttattiComponent;
  let fixture: ComponentFixture<ConttattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConttattiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConttattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
