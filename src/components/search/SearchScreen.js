import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const initialForm = { searchHero: q };
    const [ formValuesState, handleInputChange, reset ] = useForm( initialForm );

    const { searchHero } = formValuesState;

    // Use memo usado para que no se renderice con cada caracter tecleado
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);
    // const heroesFiltered = getHeroesByName( searchHero );

    const handleSearch = (event) => {
        event.preventDefault();

        if ( searchHero.trim().length <= 3 ) return;

        history.push(`?q=${ searchHero }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchHero"
                            value={searchHero}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn m-1 w-100 btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        ( q === '' )
                        &&  <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0 )
                        &&  <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }


                    {
                        heroesFiltered.map( (hero) => (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
