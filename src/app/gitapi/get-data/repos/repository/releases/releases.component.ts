import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  @Input() releases: Array<JSON>;

  constructor() { }

  ngOnInit() {
  }

}
