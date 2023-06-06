import * as Styles from './style'
import { useHistory } from 'react-router-dom'
import CardContato from '../../components/CardContato'
import { useSelector } from 'react-redux'

const Home = () => {

    const history = useHistory()

    const { data } = useSelector(rootReducer => rootReducer.contatoReducer)

    console.log(data)

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