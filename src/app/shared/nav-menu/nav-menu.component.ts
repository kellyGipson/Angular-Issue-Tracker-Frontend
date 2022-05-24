import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui/ui.service';

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  currentlyActiveNavItem: string = "Home";

  constructor(private router: Router, private uiService: UiService) {
  }

  ngOnInit(): void {
  }


}
