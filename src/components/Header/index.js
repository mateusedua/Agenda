import * as Styles from './style'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/user/userSlice'


const Header = () => {

    const dispatch = useDispatch()    

    const handleSair = () => {
        dispatch(logoutUser())
    }

    return(
        <Styles.Container>
            <Styles.Text>Olá</Styles.Text>
            <Styles.Button onClick={handleSair}>
                Sair
            </Styles.Button>
        </Styles.Container>
    )
}

export default Header