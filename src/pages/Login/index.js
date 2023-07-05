import * as Styles from './style'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import { useSelector } from 'react-redux'
import { useLoginUserMutation } from '../../redux/user/apiSlice'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { userNotFound } = useSelector(rootReducer => rootReducer.userReducer)
    const [loginUser, { data: result }] = useLoginUserMutation()

    const handleEntrar = async (data) => {
        await loginUser(data)
    }

    if (result) {
        localStorage.setItem('user', result)
    }

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
                    validateErrors={errors?.senha ? true : false}
                    {...register('senha', {
                        required: true
                    })}
                />
                {
                    errors?.senha ?
                        <Styles.Text color={'red'}>Senha necessaria</Styles.Text>
                        :
                        null
                }
                {
                    userNotFound ?
                        <Styles.Text color={'red'}>Usuário não encontrado</Styles.Text>
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