import * as Styles from './style'
import { useHistory } from 'react-router-dom'
import CardContato from '../../components/CardContato'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getContatos } from '../../redux/Contato/actions'

const Home = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const { data } = useSelector(rootReducer => rootReducer.contatoReducer)


    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('user'))

        if (result) {
            dispatch(getContatos({
                idUsuario: result.id_usuario
            }))
        }
    }, [dispatch])

    const handleClick = () => {
        history.push("/NovoContato")
    }

    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.SectionInputSelect>
                    <Styles.Input type="text" placeholder="Pesquisar contato ..." />
                </Styles.SectionInputSelect>
                <Styles.SectionButtonHeader>
                    <Styles.Button onClick={handleClick}>
                        Novo Contato
                    </Styles.Button>
                </Styles.SectionButtonHeader>
            </Styles.Header>
            <Styles.Main>
                {
                    <CardContato data={data}/>
                }
            </Styles.Main>
        </Styles.Container>
    )
}

export default Home