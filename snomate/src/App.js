import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main/Main';
import CreateProject from './components/Projects/CreateProject';
import UpdateProject from './components/Projects/UpdateProject';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import Projectlook from './components/UserMenu/Projects';
import styled from "styled-components";
import Sidebar from "./components/UserMenu/Sidebar";
import ReadProject from './components/Projects/readProject';

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token){
    return <Login/>
  } 

  return (
    <div className="wrapper">
        <BrowserRouter>
          <Header/>
            <Center>
            <Sidebar/>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/create" component={CreateProject}/>
              <Route path="/update" component={UpdateProject}/>
              <Route path="/likedproject" component={Projectlook} />
              <Route path="/read/:no" component={ReadProject}/>
            </Switch>
            </Center>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;