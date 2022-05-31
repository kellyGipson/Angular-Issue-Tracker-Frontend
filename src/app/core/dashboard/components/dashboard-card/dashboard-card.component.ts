import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() cardTitle!: string;
  @Input() icon!: IconDefinition;
  @Output() navigateFunction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  navigateFunctionEmit() {
    this.navigateFunction.emit(this.cardTitle);
  }
}
