import * as Styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { logoutUser } from '../../redux/user/userSlice'
import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const Header = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)

    const handleSair = () => {
        dispatch(logoutUser())
    }

    const { user } = useSelector(state => state.userReducer)

    return(
        <Styles.Container>
            <Styles.Nav>

                <Styles.LinkHeader size={'25px'} to="/">Home</Styles.LinkHeader>
                <div>

                    <Styles.DropDown onClick={(e) => setIsOpen(!isOpen)}>
                        {user.nome}
                        <AiFillCaretDown width={20} height={20} />
                    </Styles.DropDown>
                    {
                        isOpen &&
                        <Styles.ItemDown>
                            <Styles.LinkHeader to="/Perfil" onClick={(e) => setIsOpen(!isOpen)}>Perfil</Styles.LinkHeader>
                            <Styles.Sair onClick={handleSair}>Sair</Styles.Sair>
                        </Styles.ItemDown>
                    }
                </div>
            </Styles.Nav>
        </Styles.Container>
    )
}

export default Header