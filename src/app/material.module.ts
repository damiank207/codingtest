import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatProgressBarModule,} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
  ]
})
export class MaterialModule {
}
