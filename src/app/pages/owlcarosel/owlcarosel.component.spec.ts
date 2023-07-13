import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlcaroselComponent } from './owlcarosel.component';

describe('OwlcaroselComponent', () => {
  let component: OwlcaroselComponent;
  let fixture: ComponentFixture<OwlcaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwlcaroselComponent]
    });
    fixture = TestBed.createComponent(OwlcaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
