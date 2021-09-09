import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Product } from '../pages/Product';
import { Profile } from '../pages/Profile'

export const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/profile' component={Profile} />
                <Route path='/product' component={Product} />
            </Switch>
        </BrowserRouter>
    )
}
