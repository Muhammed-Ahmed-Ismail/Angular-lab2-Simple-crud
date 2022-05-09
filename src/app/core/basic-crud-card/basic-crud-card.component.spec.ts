import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCrudCardComponent } from './basic-crud-card.component';

describe('BasicCrudCardComponent', () => {
  let component: BasicCrudCardComponent;
  let fixture: ComponentFixture<BasicCrudCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCrudCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCrudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
