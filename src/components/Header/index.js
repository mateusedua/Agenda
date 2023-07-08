import { Container, Nav, LinkHeader, DropDown, ItemDown, Sair } from './style'
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
        <Container>
            <Nav>

                <LinkHeader size={({ theme }) => theme.size_desktop} to="/">Home</LinkHeader>
                <div>

                    <DropDown onClick={(e) => setIsOpen(!isOpen)}>
                        {user.nome}
                        <AiFillCaretDown width={20} height={20} />
                    </DropDown>
                    {
                        isOpen &&
                        <ItemDown>
                            <LinkHeader to="/Perfil" onClick={(e) => setIsOpen(!isOpen)}>Perfil</LinkHeader>
                            <Sair onClick={handleSair}>Sair</Sair>
                        </ItemDown>
                    }
                </div>
            </Nav>
        </Container>
    )
}

export default Header