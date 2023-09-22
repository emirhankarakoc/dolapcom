import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './layout/Navbar';
import Dashboard from './layout/Dashboard';
import Navbar2 from './layout/Navbar2';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App bg-main">
    <Navbar/>

    <Container className='main' fluid>
      <Dashboard/>

    </Container>
    <Container fluid>
      <Footer/>
    </Container>
  </div>


  );
}

export default App;
