import * as Styles from './style'
import { useLocation } from 'react-router-dom'
import Header from '../Header';
import Routes from '../../routes';

const App = () => {
  
  const location = useLocation()
 
  return (
    <Styles.Container>
      <Styles.Main>
          {
            location.pathname !== '/Login'
            && <Header />
          }
          <Routes />
      </Styles.Main>
    </Styles.Container>
    );
}

export default App;
