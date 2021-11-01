import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Title from './Title';
import Footer from './Footer';
import Search from './Search';
import Result from './Result';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Title />
        <Search />
        <Switch>
          <Route exact path='/' />
          <Route exact path='/Result/' component={Result} />
        </Switch>
        <Route exact path='/Admin/' component={() => {
          window.location.href = 'http://203.255.24.99:3028/admin/';
          return null;
        }} />
        <Footer />
      </Container>
    </BrowserRouter>

  );
}

export default App;
