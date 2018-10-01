import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './layout/root/root.component';
import {SubrootComponent} from './layout/subroot/subroot.component';
import {MissingComponent} from './layout/missing/missing.component';
import {PickOrgComponent} from './gitapi/pick-org/pick-org.component';
import {GetDataComponent} from './gitapi/get-data/get-data.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      {
        path: '', component: SubrootComponent, children: [
          {path: '', component: PickOrgComponent},
          {path: ':org', component: GetDataComponent}
        ]
      },
      {path: '**', component: MissingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
