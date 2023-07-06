import { useEffect,useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import * as Styles from './style'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import formatPhone from '../../utils/formatPhone'
import { useSelector, useDispatch } from 'react-redux'
import { useAlterarContatoMutation, useCadastrarContatoMutation } from '../../redux/apiSlice'
import { useGetCategoriaQuery } from '../../redux/apiSlice'
import Swal from 'sweetalert2'

const Contato = ({location}) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { data: categoria } = useGetCategoriaQuery()
    const history = useHistory()

    const [cadastrarContato, { isSuccess: isSuccesscadastrarContato }] = useCadastrarContatoMutation()
    const [alterarContato, { isSuccess: isSuccessalterarContato }] = useAlterarContatoMutation()

    const handleCadastrar = async (data) => {

        await cadastrarContato({
            data: data,
            idUser: location.state.idUser            
        })
    }

    const handleAlterar = async (data) => {

        await alterarContato({
            data: data,
            idContato: location.state.data.id_contatos
        })

    }

    if (isSuccesscadastrarContato) {
        Swal.fire({
            text: "Contato Adicionado",
            icon: "success",
            confirmButtonText: "Ok"
        }).then(() => {
            history.push('/')
        })
    }

    if (isSuccessalterarContato) {
        Swal.fire({
            text: "Contato Alterado",
            icon: "success",
            confirmButtonText: "Ok"
        }).then(() => {
            history.push('/')
        })
    }

    useEffect(()=>{

        if(history.location.pathname === '/AlterarContato'){

            const result = location.state.data

            reset({
                nome: result.contato.nome,
                email: result.contato.email,
                url_linkedin: result.contato.url_linkedin,
                url_github: result.contato.url_github,
                telefone: formatPhone(result.contato.telefone),
                categoria: result.contato.categorium.id_categoria
            })
        }
    }, [])

    return(
        <Styles.Container>
            <Styles.Form>
                <div style={{
                    display: 'flex',
                }}>
                    <Link to="/" style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        cursor: "pointer",
                        textDecoration: 'none',
                        color: '#5CA4EA'
                    }}>
                        <MdOutlineKeyboardBackspace style={{
                            width: 20,
                            height: 20
                        }} />
                        <Styles.Text weigth={"bold"} size={"18px"}>Voltar</Styles.Text>
                    </Link>
                </div>
                {
                    history.location.pathname === '/NovoContato' ?
                    <Styles.Text size={"25px"} weigth={"bold"}>Novo Contato</Styles.Text>
                    :
                        <Styles.Text size={"25px"} weigth={"bold"}>Alterar contato, {location.state.data.contato.nome}</Styles.Text>
                }
                <Styles.Input
                    type='text' S
                    placeholder='Nome'
                    validateErrors={errors?.nome ? true : false}
                    {...register("nome", {
                        required: true
                    })}
                />
                {
                    errors?.nome ?
                        <Styles.Text color={"red"}>Nome necessario</Styles.Text>
                        :
                        null
                }
                <Styles.Input
                    type='text'
                    validateErrors={errors?.email?.type === "validate" ? true : false}
                    placeholder='E-mail (opcional)'
                    {...register("email", {
                        validate: (value) => {
                            if (value === "") {
                                return true
                            }
                            return isEmail(value)
                        }
                    })}
                />
                {
                    errors?.email?.type === "validate" ?
                        <Styles.Text color={"red"}>E-mail invalido</Styles.Text>
                        :
                        null
                }
                <Styles.Input
                    type='text'
                    placeholder='Url Linkedin (opcional)'
                    {...register("url_linkedin")}
                />
                <Styles.Input
                    type='text'
                    placeholder='Url GitHub (opcional)'
                    {...register("url_github")}
                />
                <Styles.Text size={'20px'}>Telefone</Styles.Text>
                <Styles.Input
                    type='text'
                    placeholder='Particular (opcional)'
                    {...register("telefone")}
                    onChange={(event)=>{
                        const { value } = event.target
                        event.target.value = formatPhone(value)
                    }}
                />
                <Styles.Select
                    {...register("categoria", { validate: (value) => value !== "none" })}
                    defaultValue="none"
                    validateSelect={errors?.categoria?.type === "validate" ? true : false}
                >
                    <option value="none" selected disabled hidden>
                        Categoria
                    </option>
                    {
                        categoria?.map((item, index) => {
                            return (
                                <option key={index} value={item.id_categoria}>{item.nome}</option>
                            )
                        })
                    }
                </Styles.Select>
                {
                    errors?.categoria?.type === "validate" ?
                    <Styles.Text color={"red"}>Categoria necessaria</Styles.Text>
                    :
                        null
                }

                {
                    history.location.pathname === "/NovoContato" ?
                        <Styles.Button onClick={() => handleSubmit(handleCadastrar)()}>
                            Cadastrar
                        </Styles.Button>
                    :
                        <Styles.Button onClick={() => handleSubmit(handleAlterar)()}>
                        Alterar Contato
                    </Styles.Button>
                }
            </Styles.Form>
        </Styles.Container>
    )
}

export default Contato