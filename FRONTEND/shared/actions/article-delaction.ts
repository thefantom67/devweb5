import { Hotel } from '../../src/app/models/hotel'

export class DelHotel {
    static readonly type = '[Hotel] Del';

    constructor(public payload: Hotel) {}
    
}

