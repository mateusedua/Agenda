import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Header from './components/Header';
import Footer from './components/Footer';
import Perfil from './pages/Perfil';
import Login from './pages/Login'
import { useSelector } from 'react-redux';
const Routes = () => {

    const { validUser } = useSelector(state => state.userReducer)

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
                            <Route path="/Perfil" component={Perfil} />
                        </Switch>
                        <Footer />
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