import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Hotel } from '../../models/hotel';
import { SwipeService } from '../../services/swipe.service';
import {PanierState} from '../../../../shared/stats/panier-state';
import { DelHotel } from '../../../../shared/actions/article-delaction';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  Hotels: Observable<Hotel[]>; 
  
  constructor(private store: Store, private SwipeService : SwipeService,) {
    this.Hotels = this.store.select(state => state.panier.panier);
   }
  onDelClick (hotel : Hotel) {
    this.DelHotel(hotel);
  }
  DelHotel(hotel : Hotel) { this.store.dispatch(new DelHotel(hotel)); }
  
  ngOnInit() {
  }

}
