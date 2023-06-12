import * as Styles from './style'
<<<<<<< HEAD
import { useDispatch,useSelector } from 'react-redux'
=======
>>>>>>> origin/main
import { logoutUser } from '../../redux/user/userSlice'
import { useDispatch } from 'react-redux'

const Header = () => {

<<<<<<< HEAD
    const dispatch = useDispatch()    

    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
=======
    const dispatch = useDispatch()
>>>>>>> origin/main

    const handleSair = () => {
        dispatch(logoutUser())
    }

    const user = JSON.parse(localStorage.getItem('user'))

    return(
        <Styles.Container>
<<<<<<< HEAD
            <Styles.Text>Olá, {currentUser.nome}</Styles.Text>
=======
            <Styles.Text>Olá, {user?.nome}</Styles.Text>
>>>>>>> origin/main
            <Styles.Button onClick={handleSair}>
                Sair
            </Styles.Button>
        </Styles.Container>
    )
}

export default Header