import {Component, Input, OnInit} from '@angular/core';
import {OrganizationService} from '../../../services/organization.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  @Input() reposUrl: string;

  response: Array<JSON>;
  isError = false;
  loading = true;

  loadingFinished(response: any, failed: boolean = false) {
    console.log(response);
    this.response = response;
    if (failed) {
      this.isError = true;
    }
    this.loading = false;
  }

  getUrlData() {
    this.organizationService.GetUrlResponse(this.reposUrl).subscribe(
      res => {
        this.loadingFinished(res);
      },
      err => {
        this.loadingFinished(err, true);
      }
    );
  }

  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
    this.getUrlData();
  }

}
