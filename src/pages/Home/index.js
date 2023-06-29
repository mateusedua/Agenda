import * as Styles from './style'
import { useHistory } from 'react-router-dom'
import CardContato from '../../components/CardContato'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getContatos } from '../../redux/Contato/actions'
import request from '../../utils/request'

const Home = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const { data } = useSelector(rootReducer => rootReducer.contatoReducer)

    const [pesquisar, setPesquisar] = useState('')
    const result = JSON.parse(localStorage.getItem('user'))
    const [idUser, setIdUser] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const response = await request('http://localhost:5555/api/userFound', 'POST', {
                data: result.replace('?', '')
            })

            setIdUser(response.data.id_usuario)

            dispatch(getContatos({
                idUsuario: response.data.id_usuario
            }))

        }
        getData()
    }, [dispatch])


    const handleClick = () => {
        history.push({
            pathname: "/NovoContato",
            state: { idUser: idUser }
        })
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
                    <CardContato data={data.filter(item => (item.contato.nome.toLowerCase().indexOf(pesquisar.toLocaleLowerCase()) > -1))} />
                }
            </Styles.Main>
        </Styles.Container>
    )
}

export default Home