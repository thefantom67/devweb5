import { Hotel } from '../../src/app/models/hotel'

export class SelHotel {
    static readonly type = '[Hotel] Sel';

    constructor(public payload: Hotel) {}
    
}