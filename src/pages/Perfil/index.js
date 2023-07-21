import { useEffect, useState } from "react"
import { useGetDataUserQuery } from "../../redux/apiSlice"
import { useAlterarUserMutation } from "../../redux/apiSlice"
import { useSelector } from "react-redux"
import { Container, Form, Header, Main, Input, Button, IconVision, DivSenha, IconLixeira } from './style'
import { Link, useHistory } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import Swal from "sweetalert2"

const Perfil = () => {

    const history = useHistory()
    const { user } = useSelector(state => state.userReducer)
    const { data: dataUser, isLoading } = useGetDataUserQuery(user.id_usuario)
    const [alterarUser, { isSuccess: isSuccessAlterarUser, isLoading: isLoadingAlterarUser, reset: resetAlterar }] = useAlterarUserMutation()
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm()
    const [openSenha, setOpenSenha] = useState(false)
    const [openConfirmar, setOpenConfirmar] = useState(false)

    const handleAlterarUser = async (data) => {
        await alterarUser({
            data: data,
            userId: user.id_usuario
        })
    }

    const handleDeleteUser = () => {

    }



    const senhaWatch = watch('senha')



    useEffect(() => {
        reset({
            nome: dataUser?.nome,
            senha: dataUser?.senha
        })
    }, [dataUser])

    if (isSuccessAlterarUser) {
        resetAlterar()

        Swal.fire({
            icon: "success",
            text: "Usuário alterado",
            confirmButtonText: 'Ok'
        }).then(() => {
            history.push('/')
        })

    }


    if (isLoading) {
        return <h1>carregando...</h1>
    }

    if (isLoadingAlterarUser) {
        return <div>Carregando...</div>
    }


    return (
        <Container>
            <Form>
                <Header>
                    <div>
                    <Link to="/" style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        cursor: "pointer",
                        textDecoration: 'none',
                        color: '#5CA4EA'
                    }}>
                        <MdOutlineKeyboardBackspace
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                        <span>Voltar</span>
                    </Link>
                    <p>Olá, {dataUser.nome}</p>
                    <p>Email: {dataUser.email}</p>
                    </div>
                    <IconLixeira onClick={handleDeleteUser} />
                </Header>
                <Main>
                    <Input placeholder="Nome"
                        {...register('nome', { required: true })}
                    />
                    {
                        errors?.nome ?
                            <span>Nome necessário</span>
                            :
                            null
                    }
                    <DivSenha>
                        <Input placeholder="Senha"
                            type={openSenha ? 'text' : 'password'}
                            {...register('senha', { required: true })}
                        />
                        <IconVision onClick={() => setOpenSenha(!openSenha)} />
                    </DivSenha>
                    {
                        errors?.senha ?
                            <span>Senha necessária</span>
                            :
                            null
                    }
                    <DivSenha>
                        <Input placeholder="Confirmar senha"
                            type={openConfirmar ? 'text' : 'password'}
                            {...register('confirmarSenha',
                                {
                                    required: true,
                                    validate: (value) => value === senhaWatch
                                })}
                        />
                        <IconVision onClick={() => setOpenConfirmar(!openConfirmar)} />
                    </DivSenha>
                    {
                        errors?.confirmarSenha?.type === 'required' ?
                            <span>Senha necessária</span>
                            :
                            null
                    }
                    {
                        errors?.confirmarSenha?.type === 'validate' ?
                            <span>Senha não é confere</span>
                            :
                            null
                    }
                    <Button onClick={() => handleSubmit(handleAlterarUser)()}>
                        Alterar
                    </Button>
                </Main>
            </Form>
        </Container>
    )
}

export default Perfil