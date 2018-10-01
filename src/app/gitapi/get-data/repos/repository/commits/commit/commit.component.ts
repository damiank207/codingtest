import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {

  @Input() commit: any;

  constructor() { }

  ngOnInit() {
  }

}
