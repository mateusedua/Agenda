import Routes from '../../routes';
import GlobalStyle from '../../assets/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default'
import { Container } from './styles'

const App = () => {
   
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
    );
}

export default App;
