import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFetchIssue } from 'src/app/interfaces/ISSUE';

@Component({
  selector: 'app-issue-status-group',
  templateUrl: './issue-status-group.component.html',
  styleUrls: ['./issue-status-group.component.css']
})
export class IssueStatusGroupComponent implements OnInit {
  @Input() issues!: IFetchIssue[];
  @Input() name!: string;
  @Output() onClickIssue = new EventEmitter<IFetchIssue>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickIssueEmit(issue: IFetchIssue) {
    this.onClickIssue.emit(issue);
  }
}

// this.onSubmitTask.emit(task);
// @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter();
