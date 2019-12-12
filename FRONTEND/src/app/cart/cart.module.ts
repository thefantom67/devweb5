import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [CartComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
})
export class CartModule { }
