import * as Styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutUser } from '../../redux/user/userSlice'


const Header = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSair = () => {
        dispatch(logoutUser())
    }

    const handlePerfil = () => {
        history.push({
            pathname: "/Pefil"
        })
    }

    const handleHome = () => {
        history.push({
            pathname: "/"
        })
    }

    const { user } = useSelector(state => state.userReducer)

    return(
        <Styles.Container>
            <Styles.Button onClick={handleSair}>
                Sair
            </Styles.Button>
            <Styles.Button onClick={handlePerfil}>
                {user.nome}
            </Styles.Button>
            <Styles.Button onClick={handleHome}>
                Home
            </Styles.Button>
        </Styles.Container>
    )
}

export default Header