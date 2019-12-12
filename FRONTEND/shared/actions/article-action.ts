import { Hotel } from '../../src/app/models/hotel'

export class AddHotel {
    static readonly type = '[Hotel] Add';

    constructor(public payload: Hotel) {}
    
}
