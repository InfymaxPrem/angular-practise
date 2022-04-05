import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerLoopComponent } from './server-loop.component';

describe('ServerLoopComponent', () => {
  let component: ServerLoopComponent;
  let fixture: ComponentFixture<ServerLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
