import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

import { user } from "../fixtures/demoAuth";

describe('Pruebas en authReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        
        const state = authReducer( {logged: false}, {} );

        expect( state ).toEqual( { logged: false } );

    });
    
    test('Debe de autenticar y colocar el name del usuario', () => {

        const action = { type: types.login, payload: user };

        const state = authReducer( user, action );

        expect( state ).toEqual( { ...action.payload, logged: true } );

    });

    test('Debe de borrar el name del usuario y logged en false', () => {
        
        const action = { type: types.logout, payload: user }

        const state = authReducer( user, action );

        expect( state ).toEqual( { logged: false } );

    });
    
});
