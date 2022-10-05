import './App.scss';
import Core from './Core';


function App() {

  const title = 'User registration';
  
  return (
    <div className="App container my-3">
      <div className={ `poppins font-weight-bold d-flex justify-content-start main-title align-items-center` }>
        <img src={ require('./assets/favicon.png') } className="logo-img" alt="logo"/>
        { title }
      </div>
      
      <div className="mt-2">
        <Core></Core>
      </div>
    </div>
  );
}

export default App;
