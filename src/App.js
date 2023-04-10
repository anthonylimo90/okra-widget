import Okra from 'okra-js';
import logo from './logo.svg';
import './App.css';

function App() {
  const widgetOkra = () => {
    Okra.buildWithOptions({
      name: 'TestingTutortial',
      env: 'production-sandbox',
      key: '0191f18f-647e-5cf9-b63b-6be4ce8e1da9',
      token: '5da6358130a943486f33dced', 
      source: 'link',
      color:  '#009E74',
      limit: '24',
      callback_url: '',
      redirect_url: '',
      currency: 'NGN',
      logo: 'https://dash.okra.ng/static/media/OkraFullLogo.4bc5f093.png',
      onSuccess: function(data){
          console.log('success', data)
      },
      onClose: function(){
          console.log('closed')
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Limo's App</p>
        <button onClick={() => widgetOkra()}>Connect with Okra</button>
      </header>
    </div>
  );
}

export default App;
