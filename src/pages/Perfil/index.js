import { useEffect, useState } from "react"
import { useGetDataUserQuery } from "../../redux/apiSlice"
import { useSelector } from "react-redux"
import { Container, Form, Header, Main, Input, Button, IconVision, DivSenha } from './style'
import { Link } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useForm } from 'react-hook-form'

const Perfil = () => {

    const { user } = useSelector(state => state.userReducer)
    const { data: dataUser, isLoading } = useGetDataUserQuery(user.id_usuario)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [openSenha, setOpenSenha] = useState(false)
    const [openConfirmar, setOpenConfirmar] = useState(false)

    console.log(dataUser)

    const submit = (data) => {
        console.log(data)
    }

    const checkKeyDown = (event) => {
        if (event.key === "Enter") {
        }   
    }

    useEffect(() => {
        reset({
            nome: dataUser?.nome,
            senha: dataUser?.senha
        })
    }, [dataUser])

    if (isLoading) {
        return <h1>carregando...</h1>
    }



    return (
        <Container>
            <Form>
                <Header>
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
                </Header>
                <Main>
                    <Input placeholder="Nome"
                        {...register('nome', { required: true })}
                    />
                    <DivSenha>
                        <Input placeholder="Senha"
                            type={openSenha ? 'text' : 'password'}
                            {...register('senha', { required: true })}
                        />
                        <IconVision onClick={() => setOpenSenha(!openSenha)} />
                    </DivSenha>
                    <DivSenha>
                        <Input placeholder="Confirmar senha"
                            type={openConfirmar ? 'text' : 'password'}
                            {...register('confirmarSenha', { required: true })}
                        />
                        <IconVision onClick={() => setOpenConfirmar(!openConfirmar)} />
                    </DivSenha>
                    <Button onClick={() => handleSubmit(submit)()} onKeyDown={e => checkKeyDown(e)}>
                        Alterar
                    </Button>
                </Main>
            </Form>
        </Container>
    )
}

export default Perfil