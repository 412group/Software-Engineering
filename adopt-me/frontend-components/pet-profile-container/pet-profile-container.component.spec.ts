import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfileContainerComponent } from './pet-profile-container.component';

describe('PetProfileContainerComponent', () => {
  let component: PetProfileContainerComponent;
  let fixture: ComponentFixture<PetProfileContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetProfileContainerComponent]
    });
    fixture = TestBed.createComponent(PetProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
