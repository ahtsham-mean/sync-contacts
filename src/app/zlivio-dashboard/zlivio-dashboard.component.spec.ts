import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlivioDashboardComponent } from './zlivio-dashboard.component';

describe('ZlivioDashboardComponent', () => {
  let component: ZlivioDashboardComponent;
  let fixture: ComponentFixture<ZlivioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZlivioDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlivioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
