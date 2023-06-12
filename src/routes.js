<<<<<<< HEAD
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Header from './components/Header';
import { useSelector,useDispatch } from 'react-redux';
import { getContatos } from './redux/Contato/actions';
import { userFound } from './redux/user/userSlice';

=======
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Header from './components/Header'
import { useSelector } from 'react-redux'
>>>>>>> origin/main
const Routes = () => {

    const dispatch = useDispatch()
    const { validUser,currentUser } = useSelector(rootReducer => rootReducer.userReducer)

<<<<<<< HEAD
    if(validUser){
        dispatch(getContatos({
            idUsuario: currentUser.id_usuario
        }))
    }

=======
>>>>>>> origin/main
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