import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouchJoyasComponent } from './rouch-joyas.component';

describe('RouchJoyasComponent', () => {
  let component: RouchJoyasComponent;
  let fixture: ComponentFixture<RouchJoyasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouchJoyasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouchJoyasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
