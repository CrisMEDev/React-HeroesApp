import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { getHeroeById } from '../../selectors/getHeroById';

export const HeroesScreen = () => {

    const { heroeId } = useParams();
    const hero = getHeroeById( heroeId );

    if ( !hero ) return <Redirect to="/" />;

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <>
            <h1>Heroes Screen</h1>
        </>
    )
}
