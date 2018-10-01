import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {
  }

  baseHref = 'https://api.github.com/orgs/';

  ReadOrganizationData(organizationName: string): Observable<JSON> {
    const url = this.baseHref + organizationName;
    return this.http.get(url) as Observable<JSON>;
  }

  GetUrlResponse(url): Observable<any> {
    return this.http.get(url);
  }
}
