import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';

// Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

const COMPONENTS = [
  PagesComponent,
  HomeComponent,
  CatalogComponent,
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
  ]
})

export class PagesModule { }
