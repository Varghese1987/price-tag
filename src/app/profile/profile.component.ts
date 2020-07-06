import { Component, OnInit, Input } from '@angular/core';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input ('data') data;
  faCheck = faCheck;
  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

}
