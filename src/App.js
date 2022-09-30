import './App.scss';
import Core from './Core';


function App() {

  const title = 'Forms!';
  
  return (
    <div className="App container my-3">
      <div>
        { title }
      </div>
      
      <div className="my-5">
        <Core></Core>
      </div>
    </div>
  );
}

export default App;
