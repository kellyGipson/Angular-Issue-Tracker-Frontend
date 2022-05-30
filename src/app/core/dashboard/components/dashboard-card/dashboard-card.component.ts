import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() cardTitle!: string;
  @Output() navigateFunction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  navigateFunctionEmit(title: string) {
    this.navigateFunction.emit(this.cardTitle);
  }
}
