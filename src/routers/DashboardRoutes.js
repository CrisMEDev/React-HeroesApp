import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />

                    {/* Componente que recibe un argumento 'heroeId' por la url */}
                    <Route exact path="/hero/:heroeId" component={ HeroesScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
            
        </>
    )
}
