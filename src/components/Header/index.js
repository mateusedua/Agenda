import * as Styles from './style'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { userFound } from '../../redux/user/userSlice'
import { logoutUser } from '../../redux/user/userSlice'

const Header = () => {

    const dispatch = useDispatch()    

    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

    const handleSair = () => {
        dispatch(logoutUser())
    }

    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('user'))

        if(result){
            dispatch(userFound(result))
        }
    },[])


    return(
        <Styles.Container>
            <Styles.Text>Olá, {currentUser?.nome}</Styles.Text>
            <Styles.Button onClick={handleSair}>
                Sair
            </Styles.Button>
        </Styles.Container>
    )
}

export default Header