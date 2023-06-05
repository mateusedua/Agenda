import { Switch,Route } from 'react-router-dom'

const routes = () => {

    return(
        <Switch>
            <Route path="/Login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route path="/NovoContato" component={Contato} />
            <Route path="/AlterarContato" component={Contato} />
        </Switch>
    )
}

export default routes