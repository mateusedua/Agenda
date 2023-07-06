import * as Styles from './style'
import { MdDeleteOutline } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import formatPhone from '../../utils/formatPhone'
import { useDispatch } from 'react-redux'
import { deleteContato } from '../../redux/Contato/actions'

const CardContato = ({ data }) => {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleAlterar = (data) => {
        history.push({
            pathname: '/AlterarContato',
            state: { data: data }
        })
    }

    const handleDelete = (data) => {

        dispatch(deleteContato({
            idcontato: data.id_contatos
        }))
    }

    return (
        data.map((data, index) => {
            return (
                <Styles.MainCard key={index}>
                    <Styles.Section>
                        <Styles.SectionInformationHeader>
                            <Styles.DivCategory>
                                <Styles.P size={'28px'} color={'#222222'} weight={'bold'}>
                                    {data.contato.nome}
                                </Styles.P>
                                <Styles.P size={'20px'} bg={'#E0E3FF'} color={'#5061FC'} weight={'bold'} pd={'10px'} br={'5px'}>
                                    {data.contato.categorium.nome}
                                </Styles.P>
                            </Styles.DivCategory>
                            <Styles.DivCategory>
                                <Styles.P color={'#BCBCBC'} size={'24px'}>
                                    {data.contato.email}
                                </Styles.P>
                            </Styles.DivCategory>
                            <Styles.DivCategory>
                                {
                                    data.contato.telefone ?
                                        <>
                                <Styles.P color={'#5061FC'} size={'24px'}>
                                    Telefone :
                                </Styles.P>
                                <Styles.P color={'#BCBCBC'} size={'24px'}>
                                                {formatPhone(data.contato.telefone)}
                                </Styles.P>
                                        </>
                                        :
                                        null
                                }
                            </Styles.DivCategory>
                            <Styles.DivCategory>
                                {
                                    data.contato.url_linkedin ?
                                        <Styles.Redirect href={data.contato.url_linkedin}>
                                            <AiFillLinkedin style={{
                                                width: 30,
                                                height: 30
                                            }} />
                                        </Styles.Redirect>
                                        :
                                        null
                                }
                                {
                                    data.contato.url_github ?
                                        <Styles.Redirect href={data.contato.url_github}>
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