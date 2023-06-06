import { Switch,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Contato from './pages/Contato'

const Routes = () => {

    return(
        <Switch>
            <Route path="/Login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route path="/NovoContato" component={Contato} />
            <Route path="/AlterarContato" component={Contato} />
        </Switch>
    )
}

export default Routes