import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  @Input() commits: Array<JSON>;

  constructor() {
  }

  ngOnInit() {
  }

}
