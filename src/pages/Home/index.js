import * as Styles from './style'
import { useHistory } from 'react-router-dom'
import CardContato from '../../components/CardContato'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useGetContatosQuery } from '../../redux/apiSlice'

const Home = () => {
    const history = useHistory()

    const [pesquisar, setPesquisar] = useState('')
    const { user } = useSelector(state => state.userReducer)
    const { data: result, isLoading } = useGetContatosQuery(user.id_usuario)

    const handleClick = () => {
        history.push({
            pathname: "/NovoContato",
            state: { idUser: user.id_usuario }
        })
    }

    if (isLoading) {
        return <div>Carregando...</div>
    }

    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.SectionInputSelect>
                    <Styles.Input type="text" placeholder="Pesquisar contato ..." value={pesquisar} onChange={event => setPesquisar(event.target.value)} />
                </Styles.SectionInputSelect>
                <Styles.SectionButtonHeader>
                    <Styles.Button onClick={handleClick}>
                        Novo Contato
                    </Styles.Button>
                </Styles.SectionButtonHeader>
            </Styles.Header>
            <Styles.Main>
                {
                    <CardContato data={result.filter(item => (item.contato.nome.toLowerCase().indexOf(pesquisar.toLocaleLowerCase()) > -1))} />
                }
            </Styles.Main>
        </Styles.Container>
    )
}

export default Home