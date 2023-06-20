import './App.css';
import CoctailContainer from './components/CoctailContainer';
import { Route , Routes,Link } from 'react-router-dom';
import About from './components/About';
import ItemDetails from './components/ItemDtails';

function App() {
  return (
    <div className="App">
      <div className="">
                <button><Link to={'/'}>Home</Link></button>
                <button><Link to={'/about'}>About</Link></button>
       </div>
    
      <Routes>
        <Route path='/' Component={CoctailContainer} exact={true}/>
        <Route path="/:id" Component={ItemDetails} />
        <Route path='/About' Component={About} exact={true}/>
      </Routes>


      
     
    </div>
  );
}

export default App;
