import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faHouseChimneyUser, faTicket, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  icon!: IconDefinition;
  @Input() name!: string;
  @Output() onClickFn = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.decideIcon();
  }

  decideIcon() {
    switch(this.name) {
      case "Home": this.icon = faHouseChimneyUser; break;
      case "Issues": this.icon = faTicket; break;
      case "Group": this.icon = faLayerGroup; break;
      case "Profile": this.icon = faUser; break;
    }
  }

  onClick() {
    this.onClickFn.emit();
  }
}
