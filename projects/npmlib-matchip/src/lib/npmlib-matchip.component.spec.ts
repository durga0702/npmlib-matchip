import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmlibMatchipComponent } from './npmlib-matchip.component';

describe('NpmlibMatchipComponent', () => {
  let component: NpmlibMatchipComponent;
  let fixture: ComponentFixture<NpmlibMatchipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpmlibMatchipComponent]
    });
    fixture = TestBed.createComponent(NpmlibMatchipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
