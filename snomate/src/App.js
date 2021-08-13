import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main/Main';
import CreateProject from './components/Projects/CreateProject';
import UpdateProject from './components/Projects/UpdateProject';
import Footer from './components/Footer';
import Login from './components/Auth/Login';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token){
    return <Login/>
  } 

  return (
    <div className="wrapper">
        <BrowserRouter>
          <Header/>
          <Switch>
          <Route path="/create" component={CreateProject}/>
          <Route path="/update" component={UpdateProject}/>
          <Route path="/" component={Main}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;