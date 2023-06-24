import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Header from './components/Header';
import { useSelector } from 'react-redux';

const Routes = () => {

    const { validUser } = useSelector(rootReducer => rootReducer.userReducer)

    console.log(validUser)

    if (!validUser) {
        window.location.href = "http://localhost:3000"
    }

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

        </>
    )
}

export default Routes