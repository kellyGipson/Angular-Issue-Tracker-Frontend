import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueStatusGroupComponent } from './issue-status-group.component';

describe('IssueStatusGroupComponent', () => {
  let component: IssueStatusGroupComponent;
  let fixture: ComponentFixture<IssueStatusGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueStatusGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueStatusGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
