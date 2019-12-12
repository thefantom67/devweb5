import { NgxsModule,Action,Selector,State, StateContext } from '@ngxs/store';
import { PanierStateModel } from './panier-state-model';
import { AddHotel } from '../actions/article-action';
import { DelHotel } from '../actions/article-delaction';
import { SelHotel } from '../actions/article-select';

@State<PanierStateModel>({
    name: 'panier',
    defaults: {
        panier: [],
        selected: null
    }
})

export class PanierState {

  @Selector()
    static getPanier(state: PanierStateModel) {
        return state.panier;
    }

@Action(AddHotel)
    add({getState, patchState }: StateContext<PanierStateModel>, { payload }: AddHotel) {
        const state = getState();
        patchState({
            panier: [...state.panier, payload]
        });
    }

    @Action(SelHotel)
    sel({getState, patchState }: StateContext<PanierStateModel>, { payload }: SelHotel) {
        const state = getState();
        patchState({
            selected: payload
        });
    }

    @Action(DelHotel)
    del ({getState, patchState }: StateContext<PanierStateModel>, { payload }: DelHotel) {
        const state = getState();
        
        patchState({
            panier: [...(state.panier.slice(0,-1))]
        });
    }   
}
