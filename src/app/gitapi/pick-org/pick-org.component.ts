import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pick-org',
  templateUrl: './pick-org.component.html',
  styleUrls: ['./pick-org.component.css']
})
export class PickOrgComponent implements OnInit {

  organizationName = 'comapi';

  orgFormSubmit() {
    console.log(`you picked: ${this.organizationName}`);
    this.router.navigate([this.organizationName]);
  }

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {

  }

}
