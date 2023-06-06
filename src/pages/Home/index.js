import * as Styles from './style'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const history = useHistory()

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

            </Styles.Main>
        </Styles.Container>
    )
}

export default Home