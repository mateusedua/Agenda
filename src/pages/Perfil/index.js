import { useEffect, useState } from "react"
import { useGetDataUserQuery } from "../../redux/apiSlice"
import { useSelector } from "react-redux"
import { Container, Form, Header, Main, Input, Button, IconVision, DivSenha } from './style'
import { Link } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useForm } from 'react-hook-form'

const Perfil = () => {

    const { user } = useSelector(state => state.userReducer)
    const { data: data, isLoading } = useGetDataUserQuery(user.id_usuario)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [openSenha, setOpenSenha] = useState(false)
    const [openConfirmar, setOpenConfirmar] = useState(false)

    const submit = (data) => {

    }

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
                    <p>Olá, {data.nome}</p>
                    <p>Email: {data.email}</p>
                </Header>
                <Main>
                    <Input placeholder="Nome" />
                    <DivSenha>
                        <Input placeholder="Senha"
                            type={openSenha ? 'text' : 'password'}
                        />
                        <IconVision onClick={() => setOpenSenha(!openSenha)} />
                    </DivSenha>
                    <DivSenha>
                        <Input placeholder="Confirmar senha"
                            type={openConfirmar ? 'text' : 'password'}
                        />
                        <IconVision onClick={() => setOpenConfirmar(!openConfirmar)} />
                    </DivSenha>
                    <Button onClick={() => handleSubmit(submit)()}>
                        Alterar
                    </Button>
                </Main>
            </Form>
        </Container>
    )
}

export default Perfil