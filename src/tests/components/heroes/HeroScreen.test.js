import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroesScreen } from '../../../components/heroes/HeroesScreen';

describe('Pruebas en <HeroScreen />', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };
    
    
    test('Debe de mostrar el componente <Redirect /> si no hay argumentos en la URL', () => {
        const wrapper  = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroesScreen history={ historyMock } />
            </MemoryRouter>
        );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('Redirect').exists() ).toBe(true);
        
    });

    test('Debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        
        const wrapper  = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>

                {/* El argumento aqui debe ser como se especifico en DashboardRoutes */}
                <Route path="/hero/:heroeId" component={ HeroesScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe( true );
        
    });

    test('Debe de regresar a la pantalla principal con push', () => {
        
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper  = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>

                {/* Se renderiza el componente en esta parte para mandar el historyMock */}
                <Route path="/hero/:heroeId" component={ (props) => <HeroesScreen history={historyMock} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();   // Ejecuta el handleReturn del boton

        expect( historyMock.push ).toHaveBeenCalledWith('/');
        expect( historyMock.goBack ).toHaveBeenCalledTimes( 0 );

    });
    
    test('Debe de regresar a la pantalla anterior con goBack', () => {
        
        const wrapper  = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>

                {/* Se renderiza el componente en esta parte para mandar el historyMock */}
                <Route path="/hero/:heroeId" component={ (props) => <HeroesScreen history={historyMock} /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();   // Ejecuta el handleReturn del boton

        expect( historyMock.goBack ).toHaveBeenCalled();
        expect( historyMock.push ).toHaveBeenCalledTimes( 0 );
        
    });
    
    test('Debe de llamar el <Redirect /> si el hero no existe', () => {
        
        const wrapper  = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spidersafcdfbndsbfb']}>

                {/* Se renderiza el componente en esta parte para mandar el historyMock */}
                <Route path="/hero/:heroeId" component={ (props) => <HeroesScreen history={historyMock} /> } />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
        
        
    });
    
    
});
