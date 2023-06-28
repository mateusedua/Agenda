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
    const [resultado, setResultado] = useState(data)
    const [idUser, setIdUser] = useState(null)


    const handlePesquisar = (value) => {
        setPesquisar(value)
        const result = Array.from(data).filter((valor) => {
            return valor.nome.toLowerCase().includes(value.toLowerCase())
        })

        setResultado(result)
    }

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
        console.log(idUser)
        history.push({
            pathname: "/NovoContato",
            state: { idUser: idUser }
        })
    }

    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.SectionInputSelect>
                    <Styles.Input type="text" placeholder="Pesquisar contato ..." value={pesquisar} onChange={event => handlePesquisar(event.target.value)} />
                </Styles.SectionInputSelect>
                <Styles.SectionButtonHeader>
                    <Styles.Button onClick={handleClick}>
                        Novo Contato
                    </Styles.Button>
                </Styles.SectionButtonHeader>
            </Styles.Header>
            <Styles.Main>
                {
                    <CardContato data={data} />
                }
            </Styles.Main>
        </Styles.Container>
    )
}

export default Home