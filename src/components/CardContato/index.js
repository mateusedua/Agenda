import * as Styles from './style'
import { MdDeleteOutline } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import formatPhone from '../../utils/formatPhone'
import { useDeleteContatoMutation } from '../../redux/apiSlice'
import Swal from 'sweetalert2'

const CardContato = ({ data }) => {

    const history = useHistory()
    const [deleteContato, { isSuccess }] = useDeleteContatoMutation()

    const handleAlterar = (data) => {
        history.push({
            pathname: '/AlterarContato',
            state: { data: data }
        })
    }

    const handleDelete = async (data) => {

        await deleteContato({
            idcontato: data.id_contatos
        })

    }

    if (isSuccess) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            padding: '3.5rem',

            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Contato deletado'
        })
    }

    return (
        data.map((data, index) => {
            return (
                <Styles.MainCard key={index}>
                    <Styles.Section>
                        <Styles.SectionInformationHeader>
                            <Styles.DivCategory>
                                <Styles.P size={'2.5rem'} color={'#222222'} weight={'bold'} quebra={true}>
                                    {data.contato.nome}
                                </Styles.P>
                                <Styles.P size={'2rem'} bg={'#E0E3FF'} color={'#5061FC'} weight={'bold'} pd={'10px'} br={'5px'} quebra={false}>
                                    {data.contato.categorium.nome}
                                </Styles.P>
                            </Styles.DivCategory>
                            <Styles.DivCategory>
                                <Styles.P color={'#BCBCBC'} size={'2rem'}>
                                    {data.contato.email}
                                </Styles.P>
                            </Styles.DivCategory>
                                {
                                    data.contato.telefone ?
                                        <>
                                        <Styles.DivCategory>
                                            <Styles.P color={'#5061FC'} size={'2rem'}>
                                    Telefone :
                                </Styles.P>
                                            <Styles.P color={'#BCBCBC'} size={'2rem'}>
                                                {formatPhone(data.contato.telefone)}
                                </Styles.P>
                                        </Styles.DivCategory>
                                        </>
                                        :
                                        null
                            }
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
                    <Styles.SectionFooterCard>
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
                    </Styles.SectionFooterCard>
                </Styles.MainCard>
            )
        })

    )
}

export default CardContato