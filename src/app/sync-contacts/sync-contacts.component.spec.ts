import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncContactsComponent } from './sync-contacts.component';

describe('SyncContactsComponent', () => {
  let component: SyncContactsComponent;
  let fixture: ComponentFixture<SyncContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
