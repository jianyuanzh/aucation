import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrsidebarComponent } from './ctrsidebar.component';

describe('CtrsidebarComponent', () => {
  let component: CtrsidebarComponent;
  let fixture: ComponentFixture<CtrsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
