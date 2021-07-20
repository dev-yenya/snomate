import './App.css';
//import {Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import CreateProject from './components/Projects/CreateProject';

function App() {
  return (
    <div className="App">
        <Main />
        {/*<CreateProject />*/}
        <Footer/>
    </div>
  );
}

export default App;
