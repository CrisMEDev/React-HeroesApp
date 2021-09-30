import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';


describe('Pruebas en <LoginScreen />', () => {
    
    const history = {
        replace: jest.fn()
    }
    
    const contextValue = {
        user: {
            logged: true,
            name: 'Cristian'
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ history } />
        </AuthContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe de realizar el dispatch y la navegación', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            payload: {
                name: 'Cristian',
                email: 'cr15moresp@gmail.com'
            },
            type: types.login
        });

        // Llamada con / porque el localStorage esta vacío
        expect( history.replace ).toHaveBeenCalledWith('/');
        
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');



    });
    

});

