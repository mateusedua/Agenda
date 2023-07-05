import * as Styles from './style'
import { useDispatch } from 'react-redux'
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

    return(
        <Styles.Container>
            <Styles.Text>Olá</Styles.Text>
            <Styles.Button onClick={handleSair}>
                Sair
            </Styles.Button>
            <Styles.Button onClick={handlePerfil}>
                Perfil
            </Styles.Button>
            <Styles.Button onClick={handleHome}>
                Home
            </Styles.Button>
        </Styles.Container>
    )
}

export default Header