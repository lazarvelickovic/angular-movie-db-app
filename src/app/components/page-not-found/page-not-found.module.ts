import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
