import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faHouseChimneyUser, faTicket, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  icon!: IconDefinition;
  @Input() name!: string;
  @Output() onClickFn = new EventEmitter();

  constructor(private router: Router) {
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

  navigateTo(name: string) {
    switch(name) {
      case "Home": {
        if(!this.router.url.includes(name)) this.router.navigate(['/']); break;
      }
      case "Issues": {
        if(!this.router.url.includes(name)) this.router.navigate([`issue-tracker/${name.toLowerCase()}`]); break;
      }
      case "Group": {
        if(!this.router.url.includes(name)) this.router.navigate([`issue-tracker/${name.toLowerCase()}`]); break;
      }
      case "Profile": {
        if(!this.router.url.includes(name)) this.router.navigate([`issue-tracker/${name.toLowerCase()}`]); break;
      }
    }
  }
}
