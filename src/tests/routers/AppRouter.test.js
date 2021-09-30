import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Pruebas en <AppRouter />', () => {
    
    const contextValue = {
        user: {
            logged: false
        },
        dispatch: jest.fn()
    }

    test('Debe de mostrar el login si no está autenticado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar el componente marvel si está autenticado', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'Cristian'
            },
            dispatch: jest.fn()
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);
        
    });
    
    
    
});

