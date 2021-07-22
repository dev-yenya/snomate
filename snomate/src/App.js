import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main/Main';
import CreateProject from './components/Projects/CreateProject';
import UpdateProject from './components/Projects/UpdateProject';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
        <Header/>
        <Route exact path = "/" component={Main} />
        <Route path="/create" component={CreateProject}/>
        <Route path="/update" component={UpdateProject}/>
        <Footer/>
    </div>
  );
}

export default App;
