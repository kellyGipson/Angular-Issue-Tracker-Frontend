import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  faPlusSquare = faPlusSquare;

  constructor() {
  }

  ngOnInit(): void {
  }
}
