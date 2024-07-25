import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceUnlockComponent } from './face-unlock.component';

describe('FaceUnlock.ModalComponent', () => {
  let component: FaceUnlockComponent;
  let fixture: ComponentFixture<FaceUnlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceUnlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceUnlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
