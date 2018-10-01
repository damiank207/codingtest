import {Component, Input, OnInit} from '@angular/core';
import {OrganizationService} from '../../../../services/organization.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() repository: any;

  commitsLoading = true;
  commitsLoadingStarted = false;
  commitsLoadingError = false;

  releasesLoading = true;
  releasesLoadingStarted = false;
  releasesLoadingError = false;

  commitsResponse: Array<JSON>;
  releasesResponse: Array<JSON>;

  commitsOpened() {
    if (!this.commitsLoadingStarted) {
      this.commitsLoadingStarted = true;
      this.loadCommits();
    }
  }

  releasesOpened() {
    if (!this.releasesLoadingStarted) {
      this.releasesLoadingStarted = true;
      this.loadReleases();
    }
  }

  loadCommits() {
    this.organizationService.GetUrlResponse(this.repository.commits_url.replace(/{.+}$/gmi, '')).subscribe(
      res => {
        this.commitsResponse = res;
        this.commitsLoading = false;
      },
      err => {
        this.commitsResponse = err;
        this.commitsLoadingError = true;
        this.commitsLoading = false;
      }
    );
  }

  loadReleases() {
    this.organizationService.GetUrlResponse(this.repository.releases_url.replace(/{.+}/gmi, '')).subscribe(
      res => {
        this.releasesResponse = res;
        this.releasesLoading = false;
      },
      err => {
        this.releasesResponse = err;
        this.releasesLoadingError = true;
        this.releasesLoading = false;
      }
    );
  }

  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
  }

}
