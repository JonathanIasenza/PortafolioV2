import React from 'react'
import { BrowserRouter, Switch , Route} from 'react-router-dom'
import App from '../App'


const Router = () => {
    return(
        <div className="contenedor">
            <BrowserRouter>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;