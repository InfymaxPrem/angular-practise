import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerBodyComponent } from './server-body.component';

describe('ServerBodyComponent', () => {
  let component: ServerBodyComponent;
  let fixture: ComponentFixture<ServerBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
