import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Pruebas en <SearchScreen />', () => {
    
    test('Debe de correctamente con valores por defecto', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');
        
    });
    
    test('Debe de mostrar a batman y el input con el valor de queryString', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar un mensaje de error si no se muestra el hero', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmanasdfnmgnbfsdadvb']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        const q = 'batmanasdfnmgnbfsdadvb';

        expect( wrapper.find('.alert-danger').text().trim() ).toBe(`There is no a hero with ${q}`);
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe llamar el push del history', () => {
        
        const historyMock = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route
                    path="/search"
                    component={ (props) => <SearchScreen history={ historyMock } /> }
                />
            </MemoryRouter>
        );

        // Hacer cambio en la caja de texto
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchHero',
                value: 'batman'
            }
        });

        // Hacer submit del formulario
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( historyMock.push ).toHaveBeenCalledWith('?q=batman');
        
    });
    
    
});

