import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAccessComponent } from './contact-access.component';

describe('ContactAccessComponent', () => {
  let component: ContactAccessComponent;
  let fixture: ComponentFixture<ContactAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
