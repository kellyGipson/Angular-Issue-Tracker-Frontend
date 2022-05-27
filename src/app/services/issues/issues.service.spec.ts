import { TestBed } from '@angular/core/testing';

import { IssueService } from './issues.service';

describe('IssuesService', () => {
  let service: IssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
