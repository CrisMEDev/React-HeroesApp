import React, { useMemo } from 'react'

import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row gy-8 animate__animated animate__fadeIn" >
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
