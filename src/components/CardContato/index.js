import * as Styles from './style'
import { MdDeleteOutline } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'


const CardContato = ({ data }) => {

    const history = useHistory()

    const handleAlterar = (data) => {
        history.push({
            pathname: '/AlterarContato',
            state: { data: data }
        })
    }

    const handleDelete = (data) => {
        console.log(data)
    }

    return (
        data.map((data) => {
            return (
                <Styles.MainCard>
                    <Styles.Section>
                        <Styles.SectionInformationHeader>
                            <Styles.DivCategory>
                                <Styles.P size={'28px'} color={'#222222'} weight={'bold'}>
                                    {data.nome}
                                </Styles.P>
                                <Styles.P size={'20px'} bg={'#E0E3FF'} color={'#5061FC'} weight={'bold'} pd={'10px'} br={'5px'}>
                                    {data.categoria}
                                </Styles.P>
                            </Styles.DivCategory>
                            <Styles.DivCategory>
                                <Styles.P color={'#BCBCBC'} size={'24px'}>
                                    {data.email}
                                </Styles.P>
                            </Styles.DivCategory>
                            <Styles.DivCategory>
                                <Styles.P color={'#5061FC'} size={'24px'}>
                                    Telefone :
                                </Styles.P>
                                <Styles.P color={'#BCBCBC'} size={'24px'}>
                                    {data.telefone}
                                </Styles.P>
                            </Styles.DivCategory>
                            <Styles.DivCategory>
                                {
                                    data.url_linkedin ?
                                        <Styles.Redirect href={data.url_linkedin}>
                                            <AiFillLinkedin style={{
                                                width: 30,
                                                height: 30
                                            }} />
                                        </Styles.Redirect>
                                        :
                                        null
                                }
                                {
                                    data.url_github ?
                                        <Styles.Redirect href={data.url_github}>
                                            <AiFillGithub style={{
                                                width: 30,
                                                height: 30
                                            }} />
                                        </Styles.Redirect>
                                        :
                                        null
                                }
                            </Styles.DivCategory>
                        </Styles.SectionInformationHeader>
                    </Styles.Section>
                    <Styles.Section justify={'end'} items={'center'}>
                        <div>
                            <Styles.Button onClick={() => handleAlterar(data)}>
                                <TiEdit style={{
                                    color: '#5061FC',
                                    width: 40,
                                    height: 40
                                }} />
                            </Styles.Button>
                        </div>
                        <div>
                            <Styles.Button onClick={() => handleDelete(data)}>
                                <MdDeleteOutline style={{
                                    color: 'red',
                                    width: 40,
                                    height: 40
                                }} />
                            </Styles.Button>
                        </div>
                    </Styles.Section>
                </Styles.MainCard>
            )
        })

    )
}

export default CardContato