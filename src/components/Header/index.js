import * as Styles from './style'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/user/userSlice'


const Header = () => {

    const dispatch = useDispatch()    

    const handleSair = () => {
        dispatch(logoutUser())
    }

    const user = JSON.parse(localStorage.getItem('user'))

    return(
        <Styles.Container>
            <Styles.Text>Olá, {user?.nome}</Styles.Text>
            <Styles.Button onClick={handleSair}>
                Sair
            </Styles.Button>
        </Styles.Container>
    )
}

export default Header