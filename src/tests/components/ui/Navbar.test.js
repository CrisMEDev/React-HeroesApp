import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {
    
    const historyMock = {
        push: jest.fn(),
        location: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    };

    const contextValue = {
        user: {
            logged: true,
            name: 'Cristian'
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                {/* Se usa el router de react para simular el uso del history */}
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach( () => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Cristian');
        
    });
    
    test('Debe de llamar el logout y usar history', () => {
        
        wrapper.find('button').prop('onClick')();
        
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');

    });
    

});


