import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {

  @Input() release: any;

  constructor() { }

  ngOnInit() {
  }

}
