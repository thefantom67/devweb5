import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable  } from 'rxjs';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  nbHotel : number;

  constructor(private store: Store) {
    this.store.select(state => state.panier.panier).subscribe (u => this.nbHotel = u.length);
   }

  ngOnInit() {
  }

}
