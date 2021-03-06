import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { heroImgs } from '../../helpers/heroImages';

import { getHeroeById } from '../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg'; // Sirve para recursos estáticos

export const HeroesScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroeById( heroeId ), [ heroeId ]);
    // const hero = getHeroeById( heroeId );

    if ( !hero ) return <Redirect to="/" />;

    const handleReturn = () => {

        if ( history.length <= 2 ) history.push('/');
        else history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                
                <img 
                    className="img-thumbnail animate__animated animate__rollIn"
                    alt={ superhero }
                    
                    // src={`../assets/heroes/${ heroeId }.jpg`}   {/* Desde public/assets */}
                    // src={batman}    // Recurso estático import
                    src={ heroImgs(`./${ heroeId }.jpg`).default }
                />
            </div>

            <div className="col-8">

                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"> <b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"> <b>First appearance: </b>{ first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
        </div>
    )
}
