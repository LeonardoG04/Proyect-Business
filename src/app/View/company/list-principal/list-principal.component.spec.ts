import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrincipalComponent } from './list-principal.component';

describe('ListPrincipalComponent', () => {
  let component: ListPrincipalComponent;
  let fixture: ComponentFixture<ListPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
