import {Component, OnInit} from '@angular/core';
import {OrganizationService} from '../../services/organization.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  route = '';

  isError = false;
  loading = true;
  response: JSON;

  private loadingFinished(response: JSON, failed: boolean = false) {
    console.log(response);
    this.response = response;
    if (failed) {
      this.isError = true;
    }
    this.loading = false;
  }

  private getOrganizationData = () => {
    this.organizationService.ReadOrganizationData(this.route).subscribe(
      res => {
        this.loadingFinished(res);
      },
      err => {
        this.loadingFinished(err, true);
      },
    );
  };

  constructor(
    private organizationService: OrganizationService,
    private activeRoute: ActivatedRoute) {
    this.route = this.activeRoute.snapshot.params.org;
  }

  ngOnInit() {
    this.getOrganizationData();
  }

}
