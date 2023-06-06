import { useDispatch } from "react-redux"
import { getContatos } from "../../redux/Contato/actions"

const Private = ({children}) => {
    const dispatch = useDispatch()

    const result = JSON.parse(localStorage.getItem('user'))

    if(result){
        dispatch(getContatos({
            idUsuario: result.id_usuario
        }))

        return children
    }

    return null
}

export default Private