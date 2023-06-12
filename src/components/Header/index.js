import * as Styles from './style'
import { useDispatch,useSelector } from 'react-redux'
import { logoutUser } from '../../redux/user/userSlice'

const Header = () => {

    const dispatch = useDispatch()    

    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

    const handleSair = () => {
        dispatch(logoutUser())
    }

    return(
        <Styles.Container>
            <Styles.Text>Olá, {currentUser.nome}</Styles.Text>
            <Styles.Button onClick={handleSair}>
                Sair
            </Styles.Button>
        </Styles.Container>
    )
}

export default Header