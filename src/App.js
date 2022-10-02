import './App.scss';
import Core from './Core';


function App() {

  const title = 'User registration';
  
  return (
    <div className="App container my-3">
      <div className="poppins font-weight-bold">
        { title }
      </div>
      
      <div className="mt-2">
        <Core></Core>
      </div>
    </div>
  );
}

export default App;
