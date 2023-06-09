import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Header from './components/Header'
import { useSelector,useDispatch } from 'react-redux'

const Routes = () => {

    const { validUser } = useSelector(rootReducer => rootReducer.userReducer)


    return (
        <>
            {
                validUser &&
                (
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/NovoContato" component={Contato} />
                            <Route path="/AlterarContato" component={Contato} />
                        </Switch>
                    </BrowserRouter>
                )
            }
            {
                !validUser &&
                <Login />
            }
        </>
    )
}

export default Routes