import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';
import { environment } from '../../environments/environment';

@Injectable()
export class SwipeService {

  constructor(private http:HttpClient) { }
  public getHotels () : Observable<Hotel[]> {
      return this.http.get<Hotel[]>(environment.backendHotel);
  }
}
