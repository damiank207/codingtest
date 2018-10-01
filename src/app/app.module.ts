import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './layout/root/root.component';
import { SubrootComponent } from './layout/subroot/subroot.component';
import { PickOrgComponent } from './gitapi/pick-org/pick-org.component';
import { MissingComponent } from './layout/missing/missing.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { GetDataComponent } from './gitapi/get-data/get-data.component';
import { LoadingBarComponent } from './layout/loading-bar/loading-bar.component';
import { ReposComponent } from './gitapi/get-data/repos/repos.component';
import { RepositoryComponent } from './gitapi/get-data/repos/repository/repository.component';
import { CommitsComponent } from './gitapi/get-data/repos/repository/commits/commits.component';
import { ReleasesComponent } from './gitapi/get-data/repos/repository/releases/releases.component';
import { CommitComponent } from './gitapi/get-data/repos/repository/commits/commit/commit.component';
import { ReleaseComponent } from './gitapi/get-data/repos/repository/releases/release/release.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    SubrootComponent,
    PickOrgComponent,
    MissingComponent,
    GetDataComponent,
    LoadingBarComponent,
    ReposComponent,
    RepositoryComponent,
    CommitsComponent,
    ReleasesComponent,
    CommitComponent,
    ReleaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
