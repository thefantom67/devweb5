import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { ProduitsComponent } from './produits/produits.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [CatalogueComponent,
    ProduitsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
