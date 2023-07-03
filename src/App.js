import './app.css'
import {ContextWrapper} from './context/ContextWrapper'
import styled from 'styled-components'
import Header from "./components/Header";
import GistList from './components/GistList';
import GlobalStyles from "./GlobalStyle";

const App = () => {
  return (
    <ContextWrapper>
        <Wrapper className="App" data-testid="app">
            <Header />
            <GlobalStyles />
            <GistList/>
        </Wrapper>
    </ContextWrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
