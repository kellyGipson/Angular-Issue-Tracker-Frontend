import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() subject!: string;
  @Input() name!: string;
  @Input() icon!: IconDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
