import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute />', () => {
    
    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        // El redirect es interpretado como un string vacio en el renderizado
        expect( wrapper.find('span').exists() ).toBe( true );

        // En este punto localStorage ahora es una funcion jest
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel' ); 
        
    });

    test('Debe de bloquear el componente si no está autenticado', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ false }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        // El redirect es interpretado como un string vacio en el renderizado
        expect( wrapper.find('span').exists() ).toBe( false );

        // En este punto localStorage ahora es una funcion jest
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel' );
        
    });
    
    
    
});
