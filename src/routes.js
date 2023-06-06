import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Private from './components/Private'

const Routes = () => {

    return (
        <Switch>
            <Route path="/Login" component={Login} />
            <Private>
                <Route exact path="/" component={Home} />
                <Route path="/NovoContato" component={Contato} />
                <Route path="/AlterarContato" component={Contato} />
            </Private>
        </Switch>
    )
}

export default Routes