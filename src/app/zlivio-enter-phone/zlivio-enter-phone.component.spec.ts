import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlivioEnterPhoneComponent } from './zlivio-enter-phone.component';

describe('ZlivioEnterPhoneComponent', () => {
  let component: ZlivioEnterPhoneComponent;
  let fixture: ComponentFixture<ZlivioEnterPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZlivioEnterPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlivioEnterPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
