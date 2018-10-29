import React from 'react';
// import NotFound from './components/NotFound';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Calculator from './components/Calculator';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Calculator}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        {/*<Route component={NotFound}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App

