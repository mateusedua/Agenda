import * as Styles from './style'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import { loginUser } from '../../redux/user/actions'
import { userFound } from '../../redux/user/userSlice'
import { getContatos } from '../../redux/Contato/actions'

const Login = () => {

    const { register,handleSubmit,formState:{errors} } = useForm()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleEntrar =  (data) => {
        dispatch(loginUser(data))
    }

    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('user'))

        if(result){
            dispatch(userFound(result))
            dispatch(getContatos({
                idUsuario: result.id_usuario
            }))

            history.push('/')
        }
    },[])

    return (
        <Styles.Container>
            <Styles.Form>
                <Styles.Input
                    type='text'
                    placeholder='E-mail'
                    validateErrors={errors?.email ? true : false}
                    {...register('email', {
                        required: true,
                        validate: (value) => isEmail(value)
                    })}
                />
                {
                    errors?.email?.type === 'validate' ?
                        <Styles.Text color={'red'}>E-mail invalido</Styles.Text>
                        :
                        null
                }
                {
                    errors?.email?.type === 'required' ?
                        <Styles.Text color={'red'}>E-mail necessario</Styles.Text>
                        :
                        null
                }
                <Styles.Input
                    type='password'
                    placeholder='Senha'
                    validateErrors={errors?.password ? true : false}
                    {...register('password', {
                        required: true
                    })}
                />
                {
                    errors?.password ?
                        <Styles.Text color={'red'}>Senha necessaria</Styles.Text>
                        :
                        null
                }
                <Styles.Button onClick={() => handleSubmit(handleEntrar)()}>
                    Entrar
                </Styles.Button>
            </Styles.Form>
        </Styles.Container>
    )
}

export default Login