import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Profil from './Profile/Profil'
function App() {
  // const FullName='Elyes';
  function handleName(name){
     alert(name);
  }
  return (
    <div>
    <Profil FullName="Elyes" biograhy="developer FullStack" Profission ="Web Developer" data={handleName}/>
    
    </div>
  );
}

export default App;
